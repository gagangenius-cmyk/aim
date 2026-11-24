// PLACEHOLDER CONTENT: replace every value here with real business details before launch.
export const siteConfig = {
  name: "Aim Immigration",
  shortName: "Aim",
  tagline: "Your path abroad, planned properly.",
  description:
    "Honest, expert guidance for study, work, PR and visit visas to Canada, Australia, the UK, Germany, UAE and more.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phone: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  whatsapp: "910000000000",
  email: "hello@example.com",
  address: "Your office address, City, India",
  socials: { instagram: "#", facebook: "#", linkedin: "#", youtube: "#" },
  // Illustrative only. Replace with verified figures or remove.
  stats: [
    { label: "Profiles assessed", value: 1200, suffix: "+" },
    { label: "Countries covered", value: 8, suffix: "" },
    { label: "Years of experience", value: 10, suffix: "+" },
    { label: "Client satisfaction", value: 96, suffix: "%" },
  ],
  disclaimer:
    "Aim Immigration provides guidance and application support. We do not guarantee visa approval; decisions rest solely with the immigration authorities of each country.",
} as const;

export const whatsappLink = (text = "Hi, I would like a free consultation.") =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
