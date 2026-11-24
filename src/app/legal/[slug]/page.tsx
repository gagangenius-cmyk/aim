import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { siteConfig } from "@/lib/site-config";

// PLACEHOLDER legal text. Have a qualified lawyer review and replace before launch.
const pages: Record<string, { title: string; sections: { h: string; p: string }[] }> = {
  privacy: {
    title: "Privacy Policy",
    sections: [
      { h: "What we collect", p: "Name, phone, email and details you submit through our forms, used only to respond to your enquiry." },
      { h: "How we use it", p: "To contact you about your enquiry and provide requested services. We do not sell personal data." },
      { h: "Your rights", p: `Contact ${siteConfig.email} to access, correct or delete your data.` },
    ],
  },
  terms: {
    title: "Terms of Service",
    sections: [
      { h: "No guarantee", p: siteConfig.disclaimer },
      { h: "Information", p: "Content on this site is general information, not legal advice. Rules change; verify with official sources." },
    ],
  },
  refund: {
    title: "Refund Policy",
    sections: [{ h: "Fees", p: "Placeholder: describe which fees are refundable, when, and how to request a refund." }],
  },
  "anti-fraud": {
    title: "Anti-Fraud Policy",
    sections: [
      { h: "Our promise", p: "We never guarantee visas, sell job offers or ask for payment outside a written agreement." },
      { h: "Report concerns", p: `If anyone claims to represent us and asks for unusual payments, email ${siteConfig.email}.` },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: pages[slug]?.title ?? "Legal" };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  return (
    <>
      <PageHero eyebrow="Legal" title={page.title} />
      <article className="mx-auto max-w-2xl space-y-6 px-5 pb-10">
        {page.sections.map((s) => (
          <section key={s.h}><h2 className="text-xl font-semibold">{s.h}</h2><p className="mt-2 text-muted">{s.p}</p></section>
        ))}
      </article>
    </>
  );
}
