import type { Metadata } from "next";
import { Eye, HeartHandshake, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand, Stats } from "@/components/sections/sections";

export const metadata: Metadata = { title: "About us", description: "Who we are and how we work." };

const values = [
  { icon: ShieldCheck, title: "Ethical", text: "We never promise guaranteed visas or fake job offers." },
  { icon: Eye, title: "Transparent", text: "Fees, timelines and risks explained in writing." },
  { icon: HeartHandshake, title: "Personal", text: "One consultant who knows your file end to end." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Immigration advice you can trust" text="Replace this copy with your real story, licences and registration details." />
      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-10 md:grid-cols-3">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <v.icon className="h-8 w-8 text-brand" />
              <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted">{v.text}</p>
            </div>
          </Reveal>
        ))}
      </section>
      <Stats />
      <CtaBand />
    </>
  );
}
