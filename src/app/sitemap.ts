import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { countries } from "@/lib/data/countries";
import { services } from "@/lib/data/services";
import { posts } from "@/lib/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const fixed = ["", "/about", "/contact", "/eligibility", "/faq", "/blog"];
  return [
    ...fixed.map((p) => ({ url: `${base}${p}`, lastModified: new Date() })),
    ...countries.map((c) => ({ url: `${base}/countries/${c.slug}`, lastModified: new Date() })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified: new Date() })),
    ...posts.map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: new Date(p.date) })),
  ];
}
