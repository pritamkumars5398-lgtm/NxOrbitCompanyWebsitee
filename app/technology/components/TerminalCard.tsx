"use client";

import { motion } from "motion/react";
import { EASE } from "@/app/core/motion/tokens";

/**
 * Decorative terminal panel for technology hero sections.
 *
 * The lines are typed in on a stagger rather than shown at once — it gives the
 * dark hero a single point of motion without needing an illustration. Purely
 * presentational, so it is hidden from assistive tech.
 */
export function TerminalCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, y: 26, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: EASE.outExpo, delay: 0.2 }}
      className="surface-glass overflow-hidden rounded-2xl"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="ml-3 font-mono text-xs text-ink-400">{title}</span>
      </div>

      <div className="flex flex-col gap-2.5 p-5 font-mono text-xs leading-relaxed sm:p-6 sm:text-[0.8125rem]">
        {lines.map((line, index) => (
          <motion.div
            key={line}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: EASE.outExpo, delay: 0.5 + index * 0.13 }}
            className="flex gap-3"
          >
            <span className="shrink-0 text-brand-300/70 select-none">
              {line.startsWith("#") ? "  " : "$"}
            </span>
            <span className={line.startsWith("#") ? "text-ink-500" : "text-ink-200"}>
              {line.replace(/^#\s?/, "")}
            </span>
          </motion.div>
        ))}

        <motion.span
          animate={{ opacity: [1, 0.15, 1] }}
          transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
          className="mt-1 inline-block h-4 w-2 bg-brand-300"
        />
      </div>
    </motion.div>
  );
}
