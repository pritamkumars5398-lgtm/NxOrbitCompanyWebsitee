"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/app/core/lib/cn";
import { EASE } from "@/app/core/motion/tokens";
import { PROJECT_INDUSTRIES, PROJECTS } from "@/app/core/data/projects";
import { Tilt } from "@/app/shared/motion/Magnetic";

/**
 * Filterable project gallery.
 *
 * Cards carry a generated abstract cover rather than a screenshot — we don't
 * have rights-cleared imagery for every client, and a consistent generated
 * cover looks far better than a mismatched set of stock shots.
 */
export function ProjectGallery() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.industry === filter)),
    [filter],
  );

  return (
    <div className="flex flex-col gap-10">
      <div
        role="group"
        aria-label="Filter projects by industry"
        className="scrollbar-none -mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1"
      >
        {PROJECT_INDUSTRIES.map((industry) => {
          const active = filter === industry;
          return (
            <button
              key={industry}
              type="button"
              onClick={() => setFilter(industry)}
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
                  layoutId="portfolio-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-brand-800"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              )}
              {industry}
            </button>
          );
        })}
      </div>

      <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <motion.li
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: EASE.outExpo }}
            >
              <Tilt max={4}>
                <article className="spotlight group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-white transition-shadow duration-500 hover:shadow-lg">
                  <ProjectCover seed={index} name={project.name} />

                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-ink-900 transition-colors duration-300 group-hover:text-brand-500">
                        {project.name}
                      </h3>
                      <ArrowUpRight
                        aria-hidden
                        className="mt-1 size-4 shrink-0 text-ink-300 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-500"
                      />
                    </div>

                    <p className="text-sm leading-relaxed text-ink-600">{project.desc}</p>

                    <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-hairline pt-4">
                      <span className="rounded-full bg-ink-100 px-2.5 py-1 text-[0.6875rem] font-medium text-ink-600">
                        {project.industry}
                      </span>
                      <span className="rounded-full bg-ink-100 px-2.5 py-1 text-[0.6875rem] font-medium text-ink-600">
                        {project.platform}
                      </span>
                      <span className="ml-auto text-xs font-semibold text-brand-600">
                        {project.result}
                      </span>
                    </div>
                  </div>
                </article>
              </Tilt>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}

/**
 * Abstract cover art. Each project gets a deterministic variation of the same
 * brand gradient plus an initial, so the grid reads as one designed set.
 */
function ProjectCover({ seed, name }: { seed: number; name: string }) {
  const angle = 120 + seed * 26;
  const shift = 12 + ((seed * 13) % 40);

  return (
    <div
      aria-hidden
      className="relative h-44 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(${angle}deg, var(--color-brand-800), var(--color-brand-500) ${shift}%, var(--color-brand-300))`,
      }}
    >
      <div className="backdrop-grid-dark absolute inset-0 opacity-40" />
      <div className="absolute -right-10 -bottom-14 size-44 rounded-full bg-white/12 blur-2xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-125" />
      <span className="absolute bottom-5 left-6 text-5xl font-bold tracking-tight text-white/25 select-none">
        {name.slice(0, 2).toUpperCase()}
      </span>
    </div>
  );
}
