import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { EligibilityQuiz } from "@/components/forms/eligibility-quiz";

export const metadata: Metadata = {
  title: "Free Eligibility Check",
  description: "Answer 5 quick questions for an indicative view of your immigration options.",
};

export default function EligibilityPage() {
  return (
    <>
      <PageHero eyebrow="Free tool" title="Check your eligibility" text="Five quick questions. No login needed." />
      <section className="px-5 pb-10"><EligibilityQuiz /></section>
    </>
  );
}
