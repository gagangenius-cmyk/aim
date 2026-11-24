import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { countries } from "@/lib/data/countries";
import { services } from "@/lib/data/services";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <p className="text-xl font-bold">
            {siteConfig.shortName} <span className="text-gradient">Immigration</span>
          </p>
          <p className="mt-3 text-sm text-muted">{siteConfig.tagline}</p>
          <ul className="mt-5 space-y-2 text-sm text-muted">
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0" /> <a href={siteConfig.phoneHref}>{siteConfig.phone}</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0" /> {siteConfig.email}</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0" /> {siteConfig.address}</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Countries</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {countries.map((c) => (
              <li key={c.slug}><Link className="hover:text-foreground" href={`/countries/${c.slug}`}>{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Services</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {services.map((s) => (
              <li key={s.slug}><Link className="hover:text-foreground" href={`/services/${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li><Link href="/about" className="hover:text-foreground">About</Link></li>
            <li><Link href="/eligibility" className="hover:text-foreground">Eligibility check</Link></li>
            <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><Link href="/legal/privacy" className="hover:text-foreground">Privacy policy</Link></li>
            <li><Link href="/legal/terms" className="hover:text-foreground">Terms</Link></li>
            <li><Link href="/legal/refund" className="hover:text-foreground">Refund policy</Link></li>
            <li><Link href="/legal/anti-fraud" className="hover:text-foreground">Anti-fraud policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted">
        <p className="mx-auto max-w-3xl">{siteConfig.disclaimer}</p>
        <p className="mt-2">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
