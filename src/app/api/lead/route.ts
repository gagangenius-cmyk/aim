import { NextResponse } from "next/server";
import { Resend } from "resend";
import { leadSchema } from "@/lib/validators";
import { siteConfig } from "@/lib/site-config";

// Simple in-memory rate limit (per server instance). Use Redis/Upstash for multi-instance production.
const hits = new Map<string, { count: number; reset: number }>();
const WINDOW = 10 * 60 * 1000;
const MAX = 5;

function limited(ip: string) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || rec.reset < now) {
    hits.set(ip, { count: 1, reset: now + WINDOW });
    return false;
  }
  rec.count += 1;
  return rec.count > MAX;
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    // Honeypot filled or invalid input
    return NextResponse.json({ ok: false, error: "Please check the form and try again." }, { status: 400 });
  }

  const d = parsed.data;
  const html = `
    <h2>New enquiry</h2>
    <p><b>Name:</b> ${esc(d.name)}</p>
    <p><b>Phone:</b> ${esc(d.phone)}</p>
    <p><b>Email:</b> ${esc(d.email || "-")}</p>
    <p><b>Country:</b> ${esc(d.country || "-")}</p>
    <p><b>Service:</b> ${esc(d.service || "-")}</p>
    <p><b>Source:</b> ${esc(d.source || "website")}</p>
    <p><b>Message:</b> ${esc(d.message || "-")}</p>`;

  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_TO_EMAIL;

  if (key && to) {
    try {
      const resend = new Resend(key);
      const { error } = await resend.emails.send({
        from: process.env.LEADS_FROM_EMAIL ?? `${siteConfig.name} <onboarding@resend.dev>`,
        to,
        subject: `New lead: ${d.name}`,
        html,
      });
      if (error) throw error;
    } catch (e) {
      console.error("[lead] email failed", e);
      return NextResponse.json({ ok: false, error: "Could not send your request. Please call or WhatsApp us." }, { status: 502 });
    }
  } else {
    // Dev fallback: no email configured
    console.log("[lead] (no RESEND_API_KEY / LEADS_TO_EMAIL set) received:", d);
  }

  return NextResponse.json({ ok: true });
}
