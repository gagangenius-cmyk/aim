// PLACEHOLDER posts: replace with accurate, dated, sourced articles.
export type Post = { slug: string; title: string; date: string; excerpt: string; body: string[] };

export const posts: Post[] = [
  {
    slug: "how-to-spot-immigration-fraud",
    title: "How to spot immigration fraud before you pay",
    date: "2026-01-10",
    excerpt: "Red flags every applicant should know.",
    body: [
      "Be wary of anyone who guarantees a visa. No consultant can control a government decision.",
      "Ask for a written agreement, a clear fee schedule and an official receipt for every payment.",
      "Verify any job offer directly with the employer, and never pay for a job offer.",
    ],
  },
  {
    slug: "study-abroad-checklist",
    title: "Study abroad checklist: 12 months to departure",
    date: "2026-02-05",
    excerpt: "A simple timeline from shortlisting to landing.",
    body: [
      "Start 10 to 12 months early: shortlist courses, book your English test and gather transcripts.",
      "Apply to universities, then prepare funds and financial documents.",
      "File the visa, arrange accommodation and attend a pre-departure briefing.",
    ],
  },
  {
    slug: "choosing-a-pr-country",
    title: "Choosing a PR country: what actually matters",
    date: "2026-03-18",
    excerpt: "Age, skills, language and budget compared.",
    body: [
      "Points-based systems reward age, education, experience and language scores differently.",
      "Compare processing times, cost of living and your long-term career, not only visa difficulty.",
      "Always confirm current rules on the official government website before deciding.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
