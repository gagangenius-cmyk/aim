import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/data/posts";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/sections";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  return p ? { title: p.title, description: p.excerpt } : {};
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  return (
    <>
      <PageHero eyebrow={p.date} title={p.title} />
      <article className="mx-auto max-w-2xl space-y-5 px-5 pb-10 text-lg leading-relaxed">
        {p.body.map((para, i) => <p key={i}>{para}</p>)}
      </article>
      <CtaBand />
    </>
  );
}
