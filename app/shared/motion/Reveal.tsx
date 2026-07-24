"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { revealVariants, staggerVariants, VIEWPORT } from "@/app/core/motion/tokens";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView"> {
  /** Direction the element travels in from. */
  from?: Direction;
  /** Seconds to wait before this element animates. */
  delay?: number;
  /** Adds a blur-in, for hero-level elements only. */
  blur?: boolean;
  /** Start scale — use 0.96 for cards that should feel like they settle. */
  scale?: number;
  distance?: number;
  as?: "div" | "section" | "article" | "li" | "span" | "header";
}

/**
 * Scroll-triggered reveal. Fires once, uses the shared easing vocabulary.
 * For groups, wrap in `<Stagger>` and use `<StaggerItem>` instead so the
 * children cascade off one observer rather than one observer each.
 */
export function Reveal({
  from = "up",
  delay = 0,
  blur = false,
  scale = 1,
  distance,
  as = "div",
  children,
  ...props
}: RevealProps) {
  // Props are declared as div props; the cast keeps the polymorphic `as` from
  // widening every handler to a union of every element type.
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={revealVariants(from, { blur, scale, distance })}
      transition={{ delay }}
      {...props}
    >
      {children}
    </Component>
  );
}

interface StaggerProps extends Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView"> {
  /** Gap in seconds between each child's start. */
  stagger?: number;
  delay?: number;
  as?: "div" | "ul" | "section" | "dl";
}

/** Parent that cascades its `<StaggerItem>` children. */
export function Stagger({
  stagger = 0.08,
  delay = 0,
  as = "div",
  children,
  ...props
}: StaggerProps) {
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={staggerVariants(stagger, delay)}
      {...props}
    >
      {children}
    </Component>
  );
}

interface StaggerItemProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  from?: Direction;
  blur?: boolean;
  scale?: number;
  distance?: number;
  as?: "div" | "li" | "article" | "span" | "dd";
}

export function StaggerItem({
  from = "up",
  blur = false,
  scale = 1,
  distance,
  as = "div",
  children,
  ...props
}: StaggerItemProps) {
  const Component = motion[as] as typeof motion.div;

  return (
    <Component variants={revealVariants(from, { blur, scale, distance })} {...props}>
      {children}
    </Component>
  );
}
