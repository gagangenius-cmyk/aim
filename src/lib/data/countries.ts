// PLACEHOLDER CONTENT: verify all facts against official government sources before publishing.
export type Country = {
  slug: string;
  name: string;
  flag: string;
  blurb: string;
  highlights: string[];
  pathways: { title: string; description: string }[];
};

export const countries: Country[] = [
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    blurb: "Points-based Express Entry, provincial nominee programs and a welcoming study route.",
    highlights: ["Express Entry (CRS)", "Provincial Nominee Programs", "Post-graduation work permit", "Family sponsorship"],
    pathways: [
      { title: "Permanent Residence", description: "Express Entry and PNP routes for skilled professionals." },
      { title: "Study Permit", description: "Designated learning institutions and post-study work options." },
      { title: "Work Permit", description: "Employer-specific and open work permits." },
      { title: "Visitor Visa", description: "Tourism, family visits and business trips." },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    blurb: "Skilled migration, employer sponsorship and world-ranked universities.",
    highlights: ["Skilled Independent (189)", "State nomination (190)", "Student visa (500)", "Employer sponsored"],
    pathways: [
      { title: "Skilled Migration", description: "Points-tested visas for in-demand occupations." },
      { title: "Student Visa", description: "Study and work rights while you learn." },
      { title: "Work Visa", description: "Employer-sponsored and temporary skill shortage routes." },
      { title: "Visitor Visa", description: "Short stays for travel and family." },
    ],
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    blurb: "Skilled Worker, Graduate and Global Talent routes.",
    highlights: ["Skilled Worker visa", "Graduate route", "Global Talent", "Student visa"],
    pathways: [
      { title: "Skilled Worker", description: "Sponsored roles with licensed employers." },
      { title: "Student Visa", description: "Top universities and a post-study work route." },
      { title: "Family & Dependants", description: "Bring your partner and children." },
      { title: "Visitor Visa", description: "Standard visitor and business visits." },
    ],
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    blurb: "Opportunity Card, Blue Card and low-cost public university education.",
    highlights: ["Opportunity Card", "EU Blue Card", "Ausbildung (vocational)", "Public universities"],
    pathways: [
      { title: "Opportunity Card", description: "Points-based job-search visa." },
      { title: "EU Blue Card", description: "For qualified professionals with a job offer." },
      { title: "Study in Germany", description: "Public universities with low tuition." },
      { title: "Ausbildung", description: "Paid vocational training programs." },
    ],
  },
  {
    slug: "uae",
    name: "UAE",
    flag: "🇦🇪",
    blurb: "Golden Visa, freelance and employment visas in a tax-friendly hub.",
    highlights: ["Golden Visa", "Employment visa", "Freelance visa", "Family residence"],
    pathways: [
      { title: "Golden Visa", description: "Long-term residence for investors and talent." },
      { title: "Work Visa", description: "Employer-sponsored residence." },
      { title: "Freelance Visa", description: "For independent professionals." },
      { title: "Tourist Visa", description: "Short-term visits." },
    ],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    blurb: "Skilled Migrant Category, work visas and a high quality of life.",
    highlights: ["Skilled Migrant Category", "Accredited Employer Work Visa", "Student visa", "Partner visa"],
    pathways: [
      { title: "Skilled Migrant", description: "Residence for skilled workers." },
      { title: "Work Visa", description: "Accredited employer routes." },
      { title: "Student Visa", description: "Study with part-time work rights." },
      { title: "Visitor Visa", description: "Travel and family visits." },
    ],
  },
];

export const getCountry = (slug: string) => countries.find((c) => c.slug === slug);
