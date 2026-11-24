import type { LucideIcon } from "lucide-react";
import { GraduationCap, Briefcase, Home, Plane, Building2, Users } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  steps: string[];
  documents: string[];
};

export const services: Service[] = [
  {
    slug: "study-visa",
    title: "Study Visa",
    icon: GraduationCap,
    short: "University shortlisting, SOP review, funds planning and visa filing.",
    steps: ["Profile review", "Course & university shortlist", "Applications & offer letters", "Funds & documents", "Visa filing", "Pre-departure briefing"],
    documents: ["Passport", "Academic transcripts", "English test score", "SOP & CV", "Proof of funds"],
  },
  {
    slug: "work-visa",
    title: "Work Visa",
    icon: Briefcase,
    short: "Employer-sponsored and skilled worker routes with clear timelines.",
    steps: ["Eligibility check", "Job-search guidance", "Sponsorship documentation", "Visa filing", "Landing support"],
    documents: ["Passport", "Experience letters", "Education credentials", "Job offer", "Police clearance"],
  },
  {
    slug: "permanent-residence",
    title: "Permanent Residence",
    icon: Home,
    short: "Points-based PR applications built around your strongest profile.",
    steps: ["Points assessment", "Credential assessment", "Language test plan", "Profile submission", "PR application"],
    documents: ["Passport", "Credential assessment", "Language results", "Work reference letters", "Police & medical"],
  },
  {
    slug: "visit-visa",
    title: "Visit Visa",
    icon: Plane,
    short: "Tourist and family visit applications, prepared accurately.",
    steps: ["Document checklist", "Itinerary planning", "Application filing", "Biometrics support"],
    documents: ["Passport", "Bank statements", "Travel itinerary", "Employment proof", "Invitation letter (if any)"],
  },
  {
    slug: "business-visa",
    title: "Business & Investor",
    icon: Building2,
    short: "Business visit, start-up and investor immigration routes.",
    steps: ["Route suitability", "Business plan review", "Funds verification", "Application filing"],
    documents: ["Passport", "Business plan", "Financial statements", "Company registration"],
  },
  {
    slug: "family-dependant",
    title: "Family & Dependant",
    icon: Users,
    short: "Spouse, children and parents: keep your family together.",
    steps: ["Relationship evidence review", "Sponsor eligibility", "Application filing", "Interview preparation"],
    documents: ["Passports", "Marriage / birth certificates", "Sponsor documents", "Proof of relationship"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
