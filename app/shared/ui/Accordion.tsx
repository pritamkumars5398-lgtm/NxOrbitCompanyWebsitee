"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { cn } from "@/app/core/lib/cn";
import { EASE } from "@/app/core/motion/tokens";

export interface AccordionItem {
  question: string;
  answer: string;
  points?: string[];
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  /** Index open on first render. Pass `null` for all-closed. */
  defaultOpen?: number | null;
  tone?: "dark" | "light";
}

/**
 * Single-open accordion with proper button/region semantics and an animated
 * height. The icon rotates rather than swapping glyphs so the transition
 * carries between states.
 */
export function Accordion({ items, className, defaultOpen = 0, tone = "dark" }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();
  const light = tone === "light";

  return (
    <div className={cn("divide-y", light ? "divide-white/10" : "divide-hairline", className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className={cn(
                  "group flex w-full items-start justify-between gap-6 py-5 text-left transition-colors duration-200",
                  light
                    ? "text-white hover:text-brand-200"
                    : "text-ink-900 hover:text-brand-500",
                )}
              >
                <span className="text-[0.9375rem] font-semibold sm:text-base">{item.question}</span>
                <span
                  aria-hidden
                  className={cn(
                    "mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isOpen && "rotate-45",
                    light
                      ? "bg-white/8 text-brand-200 group-hover:bg-white/14"
                      : "bg-ink-100 text-brand-500 group-hover:bg-brand-50",
                  )}
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.42, ease: EASE.outExpo }}
                  className="overflow-hidden"
                >
                  <div className={cn("pb-6 pr-12 text-sm leading-relaxed", light ? "text-ink-400" : "text-ink-600")}>
                    <p>{item.answer}</p>
                    {item.points && (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className={cn(
                              "rounded-full px-3 py-1.5 text-xs font-medium",
                              light ? "bg-white/8 text-ink-200" : "bg-brand-50 text-brand-600",
                            )}
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
