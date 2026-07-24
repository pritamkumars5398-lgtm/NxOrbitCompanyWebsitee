"use client";

import { motion } from "motion/react";
import { createElement } from "react";
import { cn } from "@/app/core/lib/cn";
import { DURATION, EASE, VIEWPORT } from "@/app/core/motion/tokens";

interface TextRevealProps {
  text: string;
  className?: string;
  /** Rendered element. Headings should pass the right level for the outline. */
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  delay?: number;
  /** Words after this index render in the brand gradient. */
  gradientFrom?: number;
  stagger?: number;
}

/**
 * Word-by-word mask reveal. Each word sits in an `overflow-hidden` span and
 * slides up from below the baseline, so the text appears to be uncovered
 * rather than faded in. The whole string stays in one accessible text node
 * for screen readers via `aria-label`.
 */
export function TextReveal({
  text,
  className,
  as = "h2",
  delay = 0,
  gradientFrom,
  stagger = 0.055,
}: TextRevealProps) {
  const words = text.split(" ");

  return createElement(
    as,
    { className: cn("inline-block", className), "aria-label": text },
    <motion.span
      aria-hidden
      className="inline"
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={cn(
              "inline-block",
              gradientFrom !== undefined && i >= gradientFrom && "text-gradient",
            )}
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: DURATION.slow, ease: EASE.outExpo },
              },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </motion.span>,
  );
}

/**
 * Line-level variant for body copy — cheaper than per-word for long text and
 * reads calmer under a heading that already animates per word.
 */
export function LinesReveal({
  lines,
  className,
  delay = 0,
}: {
  lines: string[];
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.09, delayChildren: delay } },
      }}
      className={className}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: DURATION.base, ease: EASE.outExpo },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
