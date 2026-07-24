"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { WORK_ITEMS } from "@/app/core/constants/app.constant";
import { cn } from "@/app/core/lib/cn";
import { EASE } from "@/app/core/motion/tokens";
import { Container, Section, SectionHeading } from "@/app/shared/ui/Layout";
import { TextLink } from "@/app/shared/ui/Button";
import { Reveal } from "@/app/shared/motion/Reveal";

/**
 * Selected work.
 *
 * An editorial index rather than a card grid: each project is a full-width row
 * that expands on hover to show the outcome. Rows scale better than cards for
 * a list this long, and the expansion gives the page a moment of motion that
 * the visitor causes rather than watches.
 */
export function SelectedWork() {
  const [active, setActive] = useState<string | null>(WORK_ITEMS[0].id);

  return (
    <Section tone="white" spacing="lg" id="work">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Products in the hands of millions of people."
          description="A sample of what we have shipped — social platforms, marketplaces, media apps, and logistics systems, all still running."
          action={<TextLink href="/portfolio">View the full portfolio</TextLink>}
          className="mb-14"
        />

        <Reveal>
          <ul
            className="border-t border-hairline"
            onMouseLeave={() => setActive(null)}
          >
            {WORK_ITEMS.map((item, index) => {
              const isActive = active === item.id;

              return (
                <li key={item.id} className="border-b border-hairline">
                  <Link
                    href="/portfolio"
                    onMouseEnter={() => setActive(item.id)}
                    onFocus={() => setActive(item.id)}
                    className="group block py-7 transition-colors duration-500"
                  >
                    <div className="flex items-baseline gap-5 sm:gap-8">
                      <span className="font-mono text-xs text-ink-300 tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                          <h3
                            className={cn(
                              "text-display-sm transition-colors duration-400 sm:text-display-md",
                              isActive ? "text-brand-500" : "text-ink-900",
                            )}
                          >
                            {item.name}
                          </h3>
                          <span className="text-sm text-ink-500">{item.tagline}</span>
                        </div>

                        {/* Detail drawer */}
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.42, ease: EASE.outExpo }}
                              className="overflow-hidden"
                            >
                              <div className="grid gap-6 pt-5 sm:grid-cols-[1.4fr_1fr]">
                                <p className="max-w-xl text-sm leading-relaxed text-ink-600">
                                  {item.desc}
                                </p>
                                <div className="flex flex-col gap-1 sm:items-end sm:text-right">
                                  <span className="text-sm font-semibold text-brand-600">
                                    {item.highlight}
                                  </span>
                                  <span className="text-xs text-ink-500">{item.highlightSub}</span>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <ArrowUpRight
                        aria-hidden
                        className={cn(
                          "size-5 shrink-0 self-center transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                          isActive
                            ? "translate-x-0 -translate-y-0.5 text-brand-500 opacity-100"
                            : "-translate-x-2 text-ink-300 opacity-0",
                        )}
                      />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
