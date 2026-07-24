"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

interface CountUpProps {
  /** The full display value, e.g. "1400+", "98%", "$120M", "60fps". */
  value: string;
  className?: string;
  duration?: number;
}

/** Pull the first number out of a display string, keeping its prefix/suffix. */
function parse(value: string) {
  const match = value.match(/^(\D*)([\d.,]+)(.*)$/);
  if (!match) return null;

  const [, prefix, digits, suffix] = match;
  const numeric = Number(digits.replace(/,/g, ""));
  if (!Number.isFinite(numeric)) return null;

  const decimals = digits.includes(".") ? digits.split(".")[1].length : 0;
  const grouped = digits.includes(",");

  return { prefix, suffix, numeric, decimals, grouped };
}

/**
 * Counts a stat up when it scrolls into view. Values that aren't numeric
 * (e.g. "HIPAA") render as-is, so the same component can back every stat slot.
 */
export function CountUp({ value, className, duration = 1600 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();
  const parsed = useMemo(() => parse(value), [value]);
  const animatable = Boolean(parsed) && !reduced;
  const [display, setDisplay] = useState(() =>
    parsed ? `${parsed.prefix}0${parsed.suffix}` : value,
  );

  useEffect(() => {
    if (!parsed || reduced || !inView) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = Math.max(0, now - start);
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo — fast start, long settle, so the final digits land softly.
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = parsed.numeric * eased;
      const formatted = parsed.grouped
        ? current.toLocaleString("en-US", {
            minimumFractionDigits: parsed.decimals,
            maximumFractionDigits: parsed.decimals,
          })
        : current.toFixed(parsed.decimals);

      setDisplay(`${parsed.prefix}${formatted}${parsed.suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration, reduced, parsed]);

  // Non-numeric values (e.g. "HIPAA") and reduced-motion users get the final
  // string straight away — no state involved.
  return (
    <span ref={ref} className={className}>
      {animatable ? display : value}
    </span>
  );
}
