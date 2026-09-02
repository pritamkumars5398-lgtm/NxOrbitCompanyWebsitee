"use client";

import { cn } from "@/app/core/lib/cn";
import { CountUp } from "@/app/shared/motion/CountUp";
import { Stagger, StaggerItem } from "@/app/shared/motion/Reveal";

export interface StatItem {
  value: string;
  label: string;
}

interface StatsProps {
  items: StatItem[];
  className?: string;
  tone?: "dark" | "light";
  /** `rail` = hairline-separated row, `grid` = boxed cells. */
  layout?: "rail" | "grid";
  columns?: 2 | 3 | 4;
}

const COLUMNS = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

/**
 * Stat row with counters that animate on entry. Used in every hero and in the
 * proof bands, so the number treatment stays identical site-wide.
 */
export function Stats({
  items,
  className,
  tone = "dark",
  layout = "rail",
  columns = 4,
}: StatsProps) {
  const light = tone === "light";

  return (
    <Stagger
      as="dl"
      stagger={0.09}
      className={cn(
        "grid w-full",
        COLUMNS[columns],
        layout === "rail" ? "gap-x-2 sm:gap-x-5 lg:gap-x-8" : "gap-2 sm:gap-4",
        className,
      )}
    >
      {items.map((item, index) => (
        <StaggerItem
          key={item.label}
          as="div"
          // Reversed so the value reads first while the DOM keeps the required
          // <dt> before <dd> order.
          className={cn(
            "flex flex-col-reverse gap-1 min-w-0",
            layout === "rail" && index > 0 && "border-l pl-2 sm:pl-5 lg:pl-8",
            layout === "rail" && index > 0 && (light ? "border-white/15" : "border-slate-200/80"),
            layout === "grid" &&
              cn("rounded-xl p-3 sm:p-5", light ? "bg-white/5" : "bg-surface-muted border border-hairline"),
          )}
        >
          <dt className={cn("text-[10px] sm:text-xs lg:text-sm font-semibold tracking-tight leading-tight line-clamp-2", light ? "text-slate-200" : "text-slate-800")}>
            {item.label}
          </dt>
          <dd
            className={cn(
              "text-lg sm:text-2xl lg:text-display-md font-bold tabular-nums leading-none mb-1",
              light ? "text-white" : "text-brand-800",
            )}
          >
            <CountUp value={item.value} />
          </dd>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
