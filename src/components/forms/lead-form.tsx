"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { leadSchema, type LeadInput } from "@/lib/validators";
import { countries } from "@/lib/data/countries";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

const field =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30";

export function LeadForm({ source = "website", compact = false }: { source?: string; compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadInput>({ resolver: zodResolver(leadSchema), defaultValues: { source } });

  async function onSubmit(values: LeadInput) {
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Something went wrong");
      setStatus("done");
      reset();
    } catch (e) {
      setErrMsg(e instanceof Error ? e.message : "Something went wrong");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="grid place-items-center gap-3 rounded-2xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-500" />
        <h3 className="text-xl font-semibold">Thank you!</h3>
        <p className="text-sm text-muted">We have received your details and will call you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-xl shadow-brand/5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">Full name</label>
          <input id="name" autoComplete="name" className={field} {...register("name")} aria-invalid={!!errors.name} />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium">Mobile number</label>
          <input id="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="98765 43210" className={field} {...register("phone")} aria-invalid={!!errors.phone} />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">Email (optional)</label>
        <input id="email" type="email" autoComplete="email" className={field} {...register("email")} />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="country" className="mb-1 block text-sm font-medium">Destination</label>
          <select id="country" className={field} {...register("country")}>
            <option value="">Select country</option>
            {countries.map((c) => <option key={c.slug} value={c.name}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="service" className="mb-1 block text-sm font-medium">Service</label>
          <select id="service" className={field} {...register("service")}>
            <option value="">Select service</option>
            {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
          </select>
        </div>
      </div>
      {!compact && (
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium">Tell us about your plan</label>
          <textarea id="message" rows={4} className={field} {...register("message")} />
        </div>
      )}
      {/* honeypot */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Website<input tabIndex={-1} autoComplete="off" {...register("website")} /></label>
      </div>
      <input type="hidden" {...register("source")} />

      {status === "error" && <p role="alert" className="text-sm text-red-500">{errMsg}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className={cn(
          "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-2 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition hover:scale-[1.01] disabled:opacity-60",
        )}
      >
        {status === "sending" ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        {status === "sending" ? "Sending..." : "Get free consultation"}
      </button>
      <p className="text-center text-xs text-muted">By submitting you agree to be contacted about your enquiry.</p>
    </form>
  );
}
