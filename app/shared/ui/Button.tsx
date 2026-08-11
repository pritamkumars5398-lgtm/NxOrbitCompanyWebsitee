"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { cn } from "@/app/core/lib/cn";
import { Magnetic } from "@/app/shared/motion/Magnetic";

type Variant = "primary" | "accent" | "outline" | "ghost" | "light" | "outline-light" | "orange";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-brand-800 text-white shadow-sm hover:bg-brand-700 hover:shadow-[0_10px_30px_-10px_rgb(10_46_77/0.55)]",
  accent:
    "bg-brand-300 text-brand-950 shadow-sm hover:bg-brand-200 hover:shadow-[0_10px_30px_-10px_rgb(0_187_169/0.7)]",
  outline:
    "border border-hairline-strong bg-white text-brand-800 hover:border-brand-300 hover:text-brand-500 hover:shadow-sm",
  ghost: "text-brand-500 hover:bg-brand-50 hover:text-brand-600",
  light:
    "bg-white text-brand-800 shadow-sm hover:bg-brand-50 hover:shadow-[0_10px_30px_-10px_rgb(255_255_255/0.4)]",
  "outline-light":
    "border border-white/25 text-white hover:border-brand-200/70 hover:bg-white/5",
  orange:
    "bg-orange-500 text-white shadow-sm hover:bg-orange-400 hover:shadow-[0_10px_30px_-10px_rgb(249_115_22/0.55)]",
};

const SIZES: Record<Size, string> = {
  sm: "h-9 gap-1.5 px-4 text-[0.8125rem] rounded-lg",
  md: "h-11 gap-2 px-5 text-sm rounded-xl",
  lg: "h-13 gap-2.5 px-7 text-[0.9375rem] rounded-xl",
};

interface BaseProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Appends a right-pointing arrow that nudges forward on hover. */
  withArrow?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
  /** Drift toward the cursor on hover. Off for full-width and in-form buttons. */
  magnetic?: boolean;
}

interface ButtonAsButton extends BaseProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  href?: undefined;
}

interface ButtonAsLink extends BaseProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const BASE =
  "group/btn relative inline-flex select-none items-center justify-center overflow-hidden font-semibold leading-none transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-55";

/**
 * The single button in the system. Handles link vs. button rendering, a
 * click ripple, a loading state that preserves the button's width, and an
 * optional magnetic hover.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow = false,
  icon,
  loading = false,
  magnetic = false,
  ...rest
}: ButtonProps) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number; size: number }[]>([]);
  const nextId = useRef(0);

  const spawnRipple = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const id = nextId.current++;

    setRipples((current) => [
      ...current,
      { id, x: event.clientX - rect.left - size / 2, y: event.clientY - rect.top - size / 2, size },
    ]);
    // Matches the 0.65s `ripple` keyframe in globals.css.
    window.setTimeout(() => setRipples((current) => current.filter((r) => r.id !== id)), 700);
  }, []);

  const classes = cn(BASE, VARIANTS[variant], SIZES[size], className);

  const inner = (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple-dot"
          style={{ left: ripple.x, top: ripple.y, width: ripple.size, height: ripple.size }}
        />
      ))}
      {loading ? (
        <LoaderCircle aria-hidden className="size-4 animate-spin" />
      ) : (
        icon && <span aria-hidden className="shrink-0">{icon}</span>
      )}
      <span className={cn(loading && "opacity-70")}>{children}</span>
      {withArrow && !loading && (
        <ArrowRight
          aria-hidden
          className="size-4 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-1"
        />
      )}
    </>
  );

  const wrap = (node: React.ReactNode) =>
    magnetic ? <Magnetic strength={0.22}>{node}</Magnetic> : node;

  if (rest.href !== undefined) {
    const { href, onClick, ...anchorProps } = rest as ButtonAsLink;
    const external = /^(https?:|mailto:|tel:)/.test(href);

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      spawnRipple(event);
      if (href === "/contact" && typeof window !== "undefined" && window.location.pathname !== "/contact") {
        event.preventDefault();
        window.dispatchEvent(new CustomEvent("open-consultation-modal"));
      } else {
        onClick?.(event);
      }
    };

    if (external) {
      return wrap(
        <a href={href} className={classes} onClick={handleClick} {...anchorProps}>
          {inner}
        </a>,
      );
    }

    return wrap(
      <Link href={href} className={classes} onClick={handleClick} {...anchorProps}>
        {inner}
      </Link>,
    );
  }

  const { onClick, type = "button", disabled, ...buttonProps } = rest as ButtonAsButton;

  return wrap(
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      onClick={(event) => {
        spawnRipple(event);
        onClick?.(event);
      }}
      {...buttonProps}
    >
      {inner}
    </button>,
  );
}

/** Text link that draws its underline in on hover. */
export function TextLink({
  href,
  children,
  className,
  tone = "brand",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  tone?: "brand" | "light";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "link-underline group/link inline-flex items-center gap-1.5 text-sm font-semibold",
        tone === "brand" ? "text-brand-500 hover:text-brand-600" : "text-brand-200 hover:text-white",
        className,
      )}
    >
      {children}
      <ArrowRight
        aria-hidden
        className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-1"
      />
    </Link>
  );
}
