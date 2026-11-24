import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { LeadForm } from "@/components/forms/lead-form";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = { title: "Contact", description: "Book a free consultation with our immigration experts." };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let us talk about your plan" text="Fill the form, call, or message us on WhatsApp. We reply fast." />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {[
            { icon: Phone, label: "Call", value: siteConfig.phone, href: siteConfig.phoneHref },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat now", href: whatsappLink() },
            { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
            { icon: MapPin, label: "Office", value: siteConfig.address },
          ].map((i) => {
            const body = (
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-brand">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand"><i.icon className="h-5 w-5" /></span>
                <div><p className="text-xs text-muted">{i.label}</p><p className="font-medium">{i.value}</p></div>
              </div>
            );
            return i.href ? <a key={i.label} href={i.href} target={i.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{body}</a> : <div key={i.label}>{body}</div>;
          })}
        </div>
        <LeadForm source="contact" />
      </section>
    </>
  );
}
