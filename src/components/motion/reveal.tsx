"use client";

import { motion, useInView, useMotionValue, animate, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const value = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration: 1.8, ease: "easeOut" });
    const unsub = value.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v).toLocaleString("en-IN") + suffix;
    });
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to, suffix, value]);

  return <span ref={ref}>0{suffix}</span>;
}
