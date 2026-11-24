import Link from "next/link";
import { ArrowUpRight, ChevronDown, Quote } from "lucide-react";
import { Reveal, Counter } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";
import { countries } from "@/lib/data/countries";
import { services } from "@/lib/data/services";
import { faqs, testimonials, process } from "@/lib/data/content";

export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-muted">{text}</p>}
    </Reveal>
  );
}

export function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10">
      <div className="glass grid grid-cols-2 gap-6 rounded-3xl p-8 md:grid-cols-4">
        {siteConfig.stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-gradient font-display text-4xl font-semibold md:text-5xl">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading eyebrow="What we do" title="One partner for every visa route" text="From first assessment to landing, with clear steps and honest timelines." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.06}>
            <Link
              href={`/services/${s.slug}`}
              className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-2xl hover:shadow-brand/10"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.short}</p>
              <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-muted transition group-hover:text-brand" />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Countries() {
  return (
    <section className="bg-card/50 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Destinations" title="Where do you want to go?" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.06}>
              <Link
                href={`/countries/${c.slug}`}
                className="group block h-full rounded-2xl border border-border bg-background p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-2 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-5xl transition group-hover:scale-110">{c.flag}</span>
                  <ArrowUpRight className="h-5 w-5 text-muted transition group-hover:text-brand" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{c.name}</h3>
                <p className="mt-2 text-sm text-muted">{c.blurb}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20">
      <SectionHeading eyebrow="How it works" title="Five clear steps" />
      <ol className="relative space-y-8 border-l-2 border-border pl-8">
        {process.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <li className="relative">
              <span className="absolute -left-[3.05rem] grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-muted">{p.text}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export function Testimonials() {
  const items = [...testimonials, ...testimonials];
  return (
    <section className="overflow-hidden py-20">
      <SectionHeading eyebrow="Stories" title="What clients say" text="Sample testimonials. Replace with real, consented reviews before launch." />
      <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
        {items.map((t, i) => (
          <figure key={i} className="glass w-80 shrink-0 rounded-2xl p-6" aria-hidden={i >= testimonials.length}>
            <Quote className="h-6 w-6 text-brand" />
            <blockquote className="mt-3 text-sm">{t.quote}</blockquote>
            <figcaption className="mt-4 text-xs text-muted">
              <b className="text-foreground">{t.name}</b> · {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function Faq({ limit }: { limit?: number }) {
  const list = limit ? faqs.slice(0, limit) : faqs;
  return (
    <section className="mx-auto max-w-3xl px-5 py-20">
      <SectionHeading eyebrow="FAQ" title="Straight answers" />
      <div className="space-y-3">
        {list.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-border bg-card p-5 open:border-brand">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              {f.q}
              <ChevronDown className="h-5 w-5 transition group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-2 p-10 text-center text-white md:p-16">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">Ready to start your journey?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">Get a free, no-obligation profile assessment from an experienced consultant.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-semibold text-brand transition hover:scale-105">
            Book free consultation
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
