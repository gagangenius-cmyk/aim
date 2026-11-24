"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ShieldCheck, Globe2, Stamp } from "lucide-react";

const words = ["Your", "journey", "abroad,"];

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-24 md:pt-44">
      <div className="grid-bg absolute inset-0 -z-10 opacity-60" aria-hidden />
      <div className="absolute -left-24 top-10 -z-10 h-80 w-80 animate-blob rounded-full bg-brand/30 blur-3xl" aria-hidden />
      <div className="absolute -right-24 top-40 -z-10 h-96 w-96 animate-blob rounded-full bg-brand-2/30 blur-3xl [animation-delay:-6s]" aria-hidden />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium"
          >
            <ShieldCheck className="h-4 w-4 text-brand" /> Transparent. Ethical. No false promises.
          </motion.span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            {words.map((w, i) => (
              <motion.span
                key={w}
                className="mr-3 inline-block"
                initial={reduce ? false : { opacity: 0, y: 40, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              className="text-gradient inline-block"
              initial={reduce ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
            >
              planned properly.
            </motion.span>
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-lg text-muted"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Study, work, settle or visit. Get an honest assessment of your options for Canada, Australia, the UK, Germany, UAE and more, and a clear plan to get there.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap gap-4"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
          >
            <Link
              href="/eligibility"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-7 py-3.5 font-semibold text-white shadow-xl shadow-brand/30 transition hover:scale-105"
            >
              Check my eligibility
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="glass inline-flex items-center rounded-full px-7 py-3.5 font-semibold transition hover:scale-105">
              Talk to an expert
            </Link>
          </motion.div>
        </div>

        {/* Floating passport / globe visual (pure CSS + SVG) */}
        <div className="relative mx-auto h-[380px] w-full max-w-md" aria-hidden>
          <div className="absolute inset-0 grid place-items-center">
            <div className="glass grid h-72 w-72 place-items-center rounded-full">
              <Globe2 className="h-40 w-40 text-brand" strokeWidth={0.8} />
            </div>
          </div>
          <div className="absolute left-0 top-6 animate-float glass rounded-2xl p-5 shadow-xl">
            <Stamp className="h-8 w-8 text-accent" />
            <p className="mt-2 text-sm font-semibold">Visa stamped</p>
            <p className="text-xs text-muted">Documents verified</p>
          </div>
          <div className="absolute bottom-6 right-0 animate-float glass rounded-2xl p-5 shadow-xl [animation-delay:-3s]">
            <p className="text-3xl font-bold text-gradient">6+</p>
            <p className="text-xs text-muted">Destination countries</p>
          </div>
        </div>
      </div>
    </section>
  );
}
