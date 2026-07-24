"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/app/core/motion/tokens";

/** Survives template remounts, so the very first page load skips the wipe. */
let hasNavigated = false;

/**
 * Route transition.
 *
 * Mounted from `app/template.tsx`, which Next remounts on every navigation.
 * Two things happen at once: a brand panel wipes up off the screen, and the
 * incoming page settles in from a slight offset with the blur clearing. The
 * wipe is suppressed on first paint (nothing to transition *from*) and under
 * reduced-motion.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  const [showWipe] = useState(() => hasNavigated);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    hasNavigated = true;
    // Send focus to the top of the new page so keyboard and screen reader
    // users are not left where the previous document ended.
    contentRef.current?.focus({ preventScroll: true });
  }, []);

  if (reduced) return <>{children}</>;

  return (
    <>
      {showWipe && (
        <motion.div
          aria-hidden
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.62, ease: EASE.inOutQuart, delay: 0.04 }}
          style={{ transformOrigin: "top" }}
          className="pointer-events-none fixed inset-0 z-[70] bg-brand-900"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(0,187,169,0.35),transparent_60%)]" />
        </motion.div>
      )}

      <motion.div
        ref={contentRef}
        tabIndex={-1}
        initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: EASE.outExpo, delay: showWipe ? 0.22 : 0 }}
        className="outline-none"
      >
        {children}
      </motion.div>
    </>
  );
}
