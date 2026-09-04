"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/app/core/lib/cn";
import { Tilt } from "@/app/shared/motion/Magnetic";

type CardTone = "plain" | "elevated" | "gradient" | "glass" | "dark" | "inset";

const TONES: Record<CardTone, string> = {
  plain: "bg-surface border border-hairline",
  elevated: "bg-surface border border-hairline shadow-md",
  gradient: "border-gradient bg-surface shadow-sm",
  glass: "surface-glass text-white",
  dark: "bg-brand-900 border border-white/8 text-ink-200",
  inset: "bg-surface-muted border border-hairline",
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
  tone?: CardTone;
  /** Lift + shadow on hover. */
  interactive?: boolean;
  /** Cursor-following glow. Requires `interactive` to read correctly. */
  spotlight?: boolean;
  /** Subtle 3D tilt. Reserve for hero-adjacent cards — too much at grid scale. */
  tilt?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const PADDING = {
  none: "",
  sm: "p-5",
  md: "p-6 sm:p-7",
  lg: "p-8 sm:p-10",
};

/** Base card surface. Every card in the site is built on this. */
export function Card({
  children,
  className,
  tone = "plain",
  interactive = false,
  spotlight = false,
  tilt = false,
  padding = "md",
}: CardProps) {
  const body = (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-xl",
        TONES[tone],
        PADDING[padding],
        interactive && "hover-lift",
        spotlight && "spotlight",
        className,
      )}
    >
      {children}
    </div>
  );

  return tilt ? <Tilt>{body}</Tilt> : body;
}

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  className?: string;
  tone?: CardTone;
  /** Shown top-right — e.g. "01", "AWS", a duration. */
  meta?: string;
}

/**
 * The workhorse card: icon, title, copy, optional link. Used by services,
 * features, capabilities, and process grids so those never diverge.
 */
export function FeatureCard({
  icon,
  title,
  description,
  href,
  className,
  tone = "plain",
  meta,
}: FeatureCardProps) {
  const dark = tone === "dark" || tone === "glass";

  const content = (
    <Card
      tone={tone}
      interactive
      spotlight={!dark}
      padding="md"
      className={cn("flex h-full flex-col gap-4", className)}
    >
      <div className="flex items-start justify-between gap-4">
        {icon && (
          <span
            aria-hidden
            className={cn(
              "inline-flex size-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
              dark
                ? "bg-white/8 text-brand-200 group-hover:bg-white/12"
                : "bg-brand-50 text-brand-500 group-hover:bg-brand-100",
            )}
          >
            {icon}
          </span>
        )}
        {meta && (
          <span
            className={cn(
              "font-mono text-xs tracking-wider",
              dark ? "text-ink-400" : "text-ink-300",
            )}
          >
            {meta}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <h3 className={cn("text-base font-semibold", dark && "text-white")}>{title}</h3>
        <p className={cn("text-sm leading-relaxed", dark ? "text-ink-400" : "text-ink-600")}>
          {description}
        </p>
      </div>

      {href && (
        <span
          className={cn(
            "inline-flex items-center gap-1.5 text-sm font-semibold",
            dark ? "text-brand-200" : "text-brand-500",
          )}
        >
          Learn more
          <ArrowUpRight
            aria-hidden
            className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      )}
    </Card>
  );

  if (!href) return <div className="group h-full">{content}</div>;

  return (
    <Link href={href} className="group block h-full rounded-xl">
      {content}
    </Link>
  );
}

/** Pill label. Used for tech stacks, compliance tags, and filters. */
export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "brand" | "light" | "outline";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium",
        tone === "neutral" && "bg-ink-100 text-ink-700",
        tone === "brand" && "bg-brand-50 text-brand-600",
        tone === "light" && "bg-white/10 text-ink-200",
        tone === "outline" && "border border-hairline-strong text-ink-600",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Loading placeholder that matches the card silhouette. */
export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("surface-card space-y-4 p-6", className)}>
      <div className="skeleton size-11 rounded-xl" />
      <div className="skeleton h-4 w-2/3 rounded" />
      <div className="space-y-2">
        <div className="skeleton h-3 w-full rounded" />
        <div className="skeleton h-3 w-5/6 rounded" />
      </div>
    </div>
  );
}
