import type { Transition, Variants } from "motion/react";

/* Easing curves mirror the CSS custom properties in globals.css so a CSS
   transition and a Framer Motion tween never disagree. */
export const EASE = {
  outExpo: [0.16, 1, 0.3, 1],
  outQuint: [0.22, 1, 0.36, 1],
  inOutQuart: [0.76, 0, 0.24, 1],
} as const;

export const DURATION = {
  fast: 0.28,
  base: 0.55,
  slow: 0.8,
  page: 0.6,
} as const;

export const springSoft: Transition = { type: "spring", stiffness: 220, damping: 30, mass: 0.9 };
export const springSnappy: Transition = { type: "spring", stiffness: 420, damping: 34, mass: 0.6 };

/** Viewport config shared by every scroll-triggered reveal: fire once, slightly
    before the element is fully on screen. */
export const VIEWPORT = { once: true, amount: 0.25, margin: "0px 0px -12% 0px" } as const;

type RevealDirection = "up" | "down" | "left" | "right" | "none";

const OFFSET: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
};

export function revealVariants(
  direction: RevealDirection = "up",
  options: { blur?: boolean; scale?: number; distance?: number } = {},
): Variants {
  const { blur = false, scale = 1, distance } = options;
  const base = OFFSET[direction];
  const offset = distance
    ? { x: Math.sign(base.x) * distance, y: Math.sign(base.y) * distance }
    : base;

  return {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      scale,
      ...(blur ? { filter: "blur(10px)" } : {}),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      ...(blur ? { filter: "blur(0px)" } : {}),
      transition: { duration: DURATION.base, ease: EASE.outExpo },
    },
  };
}

/** Parent variant that cascades children. Children must use `revealVariants`. */
export function staggerVariants(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

/** Clip-path wipe used for images and section dividers. */
export const maskReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: { duration: DURATION.slow, ease: EASE.outExpo },
  },
};
