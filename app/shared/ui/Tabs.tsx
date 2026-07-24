"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/app/core/lib/cn";
import { EASE } from "@/app/core/motion/tokens";

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

/**
 * Tabs with a shared-layout indicator: the pill slides between triggers
 * instead of appearing under each one, so the change of state is continuous.
 * Arrow keys move focus, per the WAI-ARIA tabs pattern.
 */
export function Tabs({
  items,
  className,
  tone = "dark",
}: {
  items: TabItem[];
  className?: string;
  tone?: "dark" | "light";
}) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const light = tone === "light";

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next =
      event.key === "ArrowRight"
        ? (active + 1) % items.length
        : (active - 1 + items.length) % items.length;
    setActive(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  };

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-orientation="horizontal"
        onKeyDown={onKeyDown}
        className={cn(
          "scrollbar-none flex gap-1 overflow-x-auto rounded-2xl p-1.5",
          light ? "bg-white/6" : "bg-surface-muted border border-hairline",
        )}
      >
        {items.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.id}
              id={`${baseId}-tab-${index}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${index}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              className={cn(
                "relative shrink-0 rounded-xl px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors duration-200",
                selected
                  ? light
                    ? "text-brand-950"
                    : "text-white"
                  : light
                    ? "text-ink-300 hover:text-white"
                    : "text-ink-500 hover:text-brand-600",
              )}
            >
              {selected && (
                <motion.span
                  layoutId={`${baseId}-indicator`}
                  className={cn(
                    "absolute inset-0 -z-10 rounded-xl",
                    light ? "bg-brand-200" : "bg-brand-800",
                  )}
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              )}
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="relative mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={items[active].id}
            id={`${baseId}-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${active}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE.outExpo }}
          >
            {items[active].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
