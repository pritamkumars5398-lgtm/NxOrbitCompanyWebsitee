"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { cn } from "@/app/core/lib/cn";

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  /** Pixels of travel across the full scroll pass. Negative moves against scroll. */
  distance?: number;
  axis?: "y" | "x";
}

/**
 * Translates its children as the element passes through the viewport.
 * Spring-smoothed so it never feels tied 1:1 to the scrollbar, and disabled
 * outright when the user prefers reduced motion.
 */
export function Parallax({ children, className, distance = 60, axis = "y" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const raw = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const smooth = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.6 });

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div style={reduced ? undefined : { [axis]: smooth }}>{children}</motion.div>
    </div>
  );
}

/**
 * Scales and un-blurs an element as it enters — used for hero imagery and
 * large visual slabs that should feel like they "settle" into place.
 */
export function ScrollScale({
  children,
  className,
  from = 0.86,
}: {
  children: React.ReactNode;
  className?: string;
  from?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [from, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [48, 24]);
  const smoothScale = useSpring(scale, { stiffness: 140, damping: 32 });

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={reduced ? undefined : { scale: smoothScale, borderRadius: radius }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </div>
  );
}
