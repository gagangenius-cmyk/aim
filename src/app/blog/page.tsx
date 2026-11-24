import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { posts } from "@/lib/data/posts";

export const metadata: Metadata = { title: "Blog", description: "Guides and updates on study, work and PR visas." };

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Guides & updates" />
      <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-10 md:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.07}>
            <Link href={`/blog/${p.slug}`} className="block h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-brand">
              <time className="text-xs text-muted">{p.date}</time>
              <h2 className="mt-2 text-lg font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
