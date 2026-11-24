"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Plane } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/countries/canada", label: "Countries" },
  { href: "/services/study-visa", label: "Services" },
  { href: "/eligibility", label: "Eligibility" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass py-2 shadow-sm" : "py-4",
      )}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:rounded focus:bg-brand focus:px-3 focus:py-1 focus:text-white">
        Skip to content
      </a>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5" aria-label="Main">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-white">
            <Plane className="h-5 w-5" aria-hidden />
          </span>
          {siteConfig.shortName}
          <span className="text-gradient">Immigration</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:bg-card hover:text-foreground">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-brand to-brand-2 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:scale-105 sm:inline-block"
          >
            Free consultation
          </Link>
          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-border lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mx-4 mt-2 rounded-2xl p-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-medium hover:bg-card">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-gradient-to-r from-brand to-brand-2 px-5 py-3 text-center font-semibold text-white">
                Free consultation
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
