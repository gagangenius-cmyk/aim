"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { LeadForm } from "./lead-form";
import { cn } from "@/lib/utils";

type Option = { label: string; points: number };
type Question = { id: string; title: string; options: Option[] };

// ILLUSTRATIVE scoring only. This is NOT any government's official points system.
const questions: Question[] = [
  { id: "goal", title: "What is your main goal?", options: [
    { label: "Study abroad", points: 0 }, { label: "Work abroad", points: 0 },
    { label: "Permanent residence", points: 0 }, { label: "Visit / travel", points: 0 } ] },
  { id: "age", title: "Your age group", options: [
    { label: "18 to 24", points: 20 }, { label: "25 to 32", points: 25 },
    { label: "33 to 39", points: 15 }, { label: "40+", points: 5 } ] },
  { id: "edu", title: "Highest education", options: [
    { label: "Master's or above", points: 25 }, { label: "Bachelor's", points: 20 },
    { label: "Diploma", points: 12 }, { label: "12th pass", points: 6 } ] },
  { id: "exp", title: "Years of work experience", options: [
    { label: "5+ years", points: 25 }, { label: "3 to 4 years", points: 18 },
    { label: "1 to 2 years", points: 10 }, { label: "None", points: 0 } ] },
  { id: "eng", title: "English test (IELTS / PTE)", options: [
    { label: "Already scored well", points: 25 }, { label: "Booked / preparing", points: 15 },
    { label: "Not started", points: 5 } ] },
];

function verdict(score: number) {
  if (score >= 80) return { label: "Strong profile", text: "You have several routes worth exploring." };
  if (score >= 55) return { label: "Good potential", text: "A few improvements could widen your options." };
  return { label: "Needs planning", text: "A tailored plan can help you build towards eligibility." };
}

export function EligibilityQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Option>>({});
  const done = step >= questions.length;
  const score = Object.values(answers).reduce((a, o) => a + o.points, 0);
  const v = verdict(score);
  const q = questions[step];

  const pick = (o: Option) => {
    setAnswers((a) => ({ ...a, [q.id]: o }));
    setStep((s) => s + 1);
  };
  const summary = Object.entries(answers).map(([k, o]) => `${k}:${o.label}`).join("; ").slice(0, 190);

  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-6 shadow-xl md:p-10">
      {!done && (
        <div className="mb-6 h-2 overflow-hidden rounded-full bg-border" role="progressbar" aria-valuenow={step} aria-valuemax={questions.length}>
          <motion.div className="h-full bg-gradient-to-r from-brand to-brand-2" animate={{ width: `${(step / questions.length) * 100}%` }} />
        </div>
      )}
      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div key={q.id} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
            <p className="text-xs text-muted">Question {step + 1} of {questions.length}</p>
            <h2 className="mt-1 font-display text-2xl font-semibold">{q.title}</h2>
            <div className="mt-6 grid gap-3">
              {q.options.map((o) => (
                <button
                  key={o.label}
                  onClick={() => pick(o)}
                  className={cn("rounded-xl border border-border px-5 py-4 text-left font-medium transition hover:border-brand hover:bg-brand/5 hover:pl-7")}
                >
                  {o.label}
                </button>
              ))}
            </div>
            {step > 0 && (
              <button onClick={() => setStep((s) => s - 1)} className="mt-5 inline-flex items-center gap-1 text-sm text-muted hover:text-foreground">
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
            )}
          </motion.div>
        ) : (
          <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm text-muted">Your indicative score</p>
            <p className="text-gradient font-display text-6xl font-semibold">{score}<span className="text-2xl">/120</span></p>
            <h2 className="mt-2 text-xl font-semibold">{v.label}</h2>
            <p className="text-sm text-muted">{v.text}</p>
            <p className="mt-3 rounded-lg bg-accent/10 p-3 text-xs text-muted">
              This is an illustrative guide only, not an official points calculation and not a guarantee. A consultant will review your real profile.
            </p>
            <div className="mt-6"><LeadForm source={`quiz score:${score} ${summary}`} compact /></div>
            <button onClick={() => { setStep(0); setAnswers({}); }} className="mt-4 inline-flex items-center gap-1 text-sm text-muted hover:text-foreground">
              <RotateCcw className="h-4 w-4" /> Retake
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
