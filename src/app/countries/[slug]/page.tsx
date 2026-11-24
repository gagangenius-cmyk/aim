import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { countries, getCountry } from "@/lib/data/countries";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { LeadForm } from "@/components/forms/lead-form";
import { CtaBand } from "@/components/sections/sections";

export function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCountry(slug);
  if (!c) return {};
  return { title: `${c.name} Immigration & Visa Services`, description: c.blurb };
}

export default async function CountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCountry(slug);
  if (!c) notFound();

  return (
    <>
      <PageHero eyebrow={`${c.flag} ${c.name}`} title={`Immigrate, study or work in ${c.name}`} text={c.blurb} />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold">Popular pathways</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {c.pathways.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-border bg-card p-5 transition hover:border-brand">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted">{p.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">Programs we help with</h2>
            <ul className="mt-4 space-y-2">
              {c.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-5 w-5 text-brand" /> {h}</li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted">Rules and fees change often. Always confirm against the official government website; we do so for every client file.</p>
          </div>
        </div>
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <LeadForm source={`country:${c.slug}`} compact />
        </aside>
      </section>
      <CtaBand />
    </>
  );
}
