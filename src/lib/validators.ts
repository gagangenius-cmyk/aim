import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^(\+?91[\s-]?)?[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().trim().email("Enter a valid email").max(120).optional().or(z.literal("")),
  country: z.string().trim().max(60).optional(),
  service: z.string().trim().max(60).optional(),
  message: z.string().trim().max(1000).optional(),
  // honeypot: must stay empty
  website: z.string().max(0).optional(),
  // extra context, e.g. eligibility quiz summary
  source: z.string().max(200).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
