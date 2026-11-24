import { Hero } from "@/components/sections/hero";
import { Stats, Services, Countries, Process, Testimonials, Faq, CtaBand } from "@/components/sections/sections";
import { LeadForm } from "@/components/forms/lead-form";
import { Reveal } from "@/components/motion/reveal";
import { faqs } from "@/lib/data/content";

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Hero />
      <Stats />
      <Services />
      <Countries />
      <Process />
      <Testimonials />
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-2">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Free assessment</p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">Tell us where you are. We will map where you can go.</h2>
          <p className="mt-4 text-muted">Share a few details and a consultant will call you back with realistic options, timelines and costs.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <LeadForm source="home" compact />
        </Reveal>
      </section>
      <Faq limit={4} />
      <CtaBand />
    </>
  );
}
