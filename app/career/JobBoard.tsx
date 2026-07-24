"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Briefcase, Clock, MapPin } from "lucide-react";
import { cn } from "@/app/core/lib/cn";
import { EASE } from "@/app/core/motion/tokens";
import { DEPARTMENTS, JOBS } from "@/app/core/data/careers";
import { Button } from "@/app/shared/ui/Button";

/**
 * Filterable openings list.
 *
 * Rows expand in place rather than linking to a detail page — with nine roles
 * that keeps the whole board on one screen, and the shared-layout animation
 * on the filter pill makes switching departments feel continuous.
 */
export function JobBoard() {
  const [dept, setDept] = useState<string>("All");
  const [openId, setOpenId] = useState<number | null>(null);

  const visible = useMemo(
    () => (dept === "All" ? JOBS : JOBS.filter((job) => job.dept === dept)),
    [dept],
  );

  return (
    <div className="flex flex-col gap-8">
      {/* Department filter */}
      <div
        role="group"
        aria-label="Filter roles by department"
        className="scrollbar-none -mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1"
      >
        {DEPARTMENTS.map((item) => {
          const active = dept === item;
          const count = item === "All" ? JOBS.length : JOBS.filter((j) => j.dept === item).length;

          return (
            <button
              key={item}
              type="button"
              onClick={() => {
                setDept(item);
                setOpenId(null);
              }}
              aria-pressed={active}
              className={cn(
                "relative shrink-0 rounded-full border px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors duration-200",
                active
                  ? "border-transparent text-white"
                  : "border-hairline-strong text-ink-600 hover:border-brand-300 hover:text-brand-500",
              )}
            >
              {active && (
                <motion.span
                  layoutId="dept-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-brand-800"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              )}
              {item}
              <span className={cn("ml-1.5 text-xs", active ? "text-brand-200" : "text-ink-400")}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Openings */}
      <ul className="border-t border-hairline">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((job) => {
            const expanded = openId === job.id;

            return (
              <motion.li
                key={job.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: EASE.outExpo }}
                className="border-b border-hairline"
              >
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setOpenId(expanded ? null : job.id)}
                  className="group flex w-full flex-col gap-3 py-6 text-left sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                >
                  <div className="flex flex-col gap-2">
                    <h3
                      className={cn(
                        "text-lg font-semibold transition-colors duration-300",
                        expanded ? "text-brand-500" : "text-ink-900 group-hover:text-brand-500",
                      )}
                    >
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-ink-500">
                      <Meta Icon={Briefcase}>{job.dept}</Meta>
                      <Meta Icon={MapPin}>{job.location}</Meta>
                      <Meta Icon={Clock}>{job.exp}</Meta>
                    </div>
                  </div>

                  <span
                    className={cn(
                      "inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold transition-colors duration-300",
                      expanded
                        ? "bg-brand-800 text-white"
                        : "bg-ink-100 text-ink-700 group-hover:bg-brand-50 group-hover:text-brand-600",
                    )}
                  >
                    {expanded ? "Hide details" : "View role"}
                    <ArrowRight
                      aria-hidden
                      className={cn(
                        "size-3.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        expanded && "rotate-90",
                      )}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE.outExpo }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-5 pb-7 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
                        <p className="max-w-2xl text-sm leading-relaxed text-ink-600">
                          {job.summary}
                        </p>
                        <Button
                          href={`mailto:info@itnextsolutions.com?subject=Application: ${encodeURIComponent(job.title)}`}
                          variant="primary"
                          withArrow
                          className="shrink-0"
                        >
                          Apply for this role
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>

      {visible.length === 0 && (
        <p className="py-10 text-center text-sm text-ink-500">
          No open roles in {dept} right now — but we always read speculative applications.
        </p>
      )}
    </div>
  );
}

function Meta({ Icon, children }: { Icon: typeof MapPin; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <Icon aria-hidden className="size-3.5 text-ink-300" strokeWidth={1.8} />
      {children}
    </span>
  );
}
