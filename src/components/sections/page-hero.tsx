import { Reveal } from "@/components/motion/reveal";

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-14 md:pt-44">
      <div className="grid-bg absolute inset-0 -z-10 opacity-50" aria-hidden />
      <div className="mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">{eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-6xl">{title}</h1>
          {text && <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">{text}</p>}
        </Reveal>
      </div>
    </section>
  );
}
