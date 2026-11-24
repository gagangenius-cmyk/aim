import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Faq, CtaBand } from "@/components/sections/sections";

export const metadata: Metadata = { title: "FAQ", description: "Answers to common visa and immigration questions." };

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" />
      <Faq />
      <CtaBand />
    </>
  );
}
