"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Reading-progress hairline pinned under the header. Purely decorative, so it
 * is hidden from assistive tech rather than exposed as a progressbar the user
 * cannot act on.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-[linear-gradient(90deg,var(--color-brand-500),var(--color-brand-300),var(--color-brand-200))]"
    />
  );
}
