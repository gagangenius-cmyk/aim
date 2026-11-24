import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FileText } from "lucide-react";
import { services, getService } from "@/lib/data/services";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { LeadForm } from "@/components/forms/lead-form";
import { CtaBand } from "@/components/sections/sections";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return { title: s.title, description: s.short };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  return (
    <>
      <PageHero eyebrow="Service" title={s.title} text={s.short} />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold">Our process</h2>
            <ol className="mt-5 space-y-3">
              {s.steps.map((step, i) => (
                <Reveal key={step} delay={i * 0.05}>
                  <li className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-sm font-bold text-white">{i + 1}</span>
                    {step}
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">Typical documents</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {s.documents.map((d) => (
                <li key={d} className="flex items-center gap-2 text-sm"><FileText className="h-4 w-4 text-brand" /> {d}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">The exact list depends on your country and profile.</p>
          </div>
        </div>
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <LeadForm source={`service:${s.slug}`} compact />
        </aside>
      </section>
      <CtaBand />
    </>
  );
}
