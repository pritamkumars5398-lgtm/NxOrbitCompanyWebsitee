"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

/**
 * A soft brand-tinted glow that trails the pointer across the page.
 *
 * Mounted once at the app shell. Only activates on fine pointers, so touch
 * devices never pay for it, and it is skipped under reduced-motion. The glow
 * uses `screen` blending so it lightens sections without tinting text.
 */
export function CursorGlow() {
  const reduced = useReducedMotion();

  // Starts off-screen so nothing is visible until the pointer actually moves.
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const springX = useSpring(x, { stiffness: 90, damping: 22, mass: 0.7 });
  const springY = useSpring(y, { stiffness: 90, damping: 22, mass: 0.7 });

  useEffect(() => {
    if (reduced) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced, x, y]);

  // Visibility is handled in CSS rather than state: `lg:block` keeps it off
  // phones and tablets, and with no listener attached it simply never moves.
  return (
    <motion.div
      aria-hidden
      style={{ left: springX, top: springY }}
      className="pointer-events-none fixed z-0 hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen lg:block"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(0,187,169,0.16),transparent_62%)] blur-2xl" />
    </motion.div>
  );
}
