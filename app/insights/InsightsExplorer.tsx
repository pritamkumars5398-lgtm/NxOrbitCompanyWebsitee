"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Search, 
  Layers, 
  Cpu, 
  Cloud, 
  Warehouse, 
  Workflow, 
  BookOpen, 
  Clock, 
  Sparkles
} from "lucide-react";
import type { InsightDetail } from "@/app/core/data/insights";
import { cn } from "@/app/core/lib/cn";
import { EASE } from "@/app/core/motion/tokens";

const ICONS_MAP: Record<string, React.ElementType> = {
  "erp-implementation": Layers,
  "modernizing-legacy-systems": BookOpen,
  "ai-in-enterprise": Cpu,
  "cloud-devops": Cloud,
  "warehouse-digital-transformation": Warehouse,
  "business-process-automation": Workflow,
};

const CATEGORIES = [
  "All",
  "Enterprise Systems",
  "Legacy Modernization",
  "AI & Automation",
  "Cloud & DevOps",
  "Supply Chain",
] as const;

type CategoryType = (typeof CATEGORIES)[number];

const CATEGORY_MAPPING: Record<string, CategoryType> = {
  "erp-implementation": "Enterprise Systems",
  "modernizing-legacy-systems": "Legacy Modernization",
  "ai-in-enterprise": "AI & Automation",
  "cloud-devops": "Cloud & DevOps",
  "warehouse-digital-transformation": "Supply Chain",
  "business-process-automation": "AI & Automation",
};

export function InsightsExplorer({ items }: { items: InsightDetail[] }) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const mappedCat = CATEGORY_MAPPING[item.slug] || "Enterprise Systems";
      const matchesCategory =
        selectedCategory === "All" || mappedCat === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.executiveSummary.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [items, selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col gap-8">
      {/* ── Filter & Search Bar matching site system ── */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-hairline pb-6">
        {/* Category Filter Pills (identical to JobBoard.tsx) */}
        <div
          role="group"
          aria-label="Filter insights by category"
          className="scrollbar-none -mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1"
        >
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            const count =
              category === "All"
                ? items.length
                : items.filter((i) => CATEGORY_MAPPING[i.slug] === category).length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                aria-pressed={active}
                className={cn(
                  "relative shrink-0 rounded-full border px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors duration-200 cursor-pointer",
                  active
                    ? "border-transparent text-white"
                    : "border-hairline-strong text-ink-600 hover:border-brand-300 hover:text-brand-500 bg-white",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="insight-cat-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-800"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
                {category}
                <span
                  className={cn(
                    "ml-2 text-xs tabular-nums font-mono",
                    active ? "text-brand-200" : "text-ink-400",
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72 shrink-0">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-ink-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search papers..."
            className="w-full rounded-full border border-hairline-strong bg-white pl-9.5 pr-4 py-2 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-2xs font-bold text-ink-400 hover:text-ink-700 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* ── Insights Cards Grid ── */}
      {filteredItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center rounded-2xl border border-dashed border-hairline bg-surface-muted">
          <div className="size-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 mb-3">
            <Search className="size-5" />
          </div>
          <h3 className="text-base font-bold text-ink-900 mb-1">No papers found</h3>
          <p className="text-sm text-ink-500 max-w-sm mb-4">
            We couldn&apos;t find any architectural papers matching &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="text-xs font-bold text-brand-600 hover:text-brand-700 underline underline-offset-4 cursor-pointer"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              const Icon = ICONS_MAP[item.slug] || Layers;
              return (
                <motion.div
                  key={item.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: EASE.outExpo, delay: idx * 0.04 }}
                  className="h-full"
                >
                  <Link
                    href={`/insights/${item.slug}`}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-hairline bg-white transition-all duration-300 hover:border-brand-300 hover:shadow-lg hover:shadow-slate-900/5 hover:-translate-y-1 h-full"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-950">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-brand-950/80 via-transparent to-transparent" />
                        
                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-ink-800 text-2xs font-mono font-semibold uppercase tracking-wider shadow-2xs">
                            <Icon className="size-3 text-brand-500" />
                            {item.category.split("&")[0].trim()}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-2xs font-mono">
                            <Clock className="size-3 text-brand-300" />
                            {item.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <span className="text-2xs font-mono font-bold uppercase tracking-wider text-brand-500 block mb-2">
                          {item.publishedDate}
                        </span>
                        <h2 className="text-lg font-bold text-ink-900 leading-snug group-hover:text-brand-600 transition-colors mb-2.5">
                          {item.title}
                        </h2>
                        <p className="text-sm text-ink-600 leading-relaxed line-clamp-3 mb-4">
                          {item.executiveSummary}
                        </p>

                        {/* Anchor Highlight */}
                        {item.architecturalPillars && item.architecturalPillars.length > 0 && (
                          <div className="rounded-xl bg-surface-muted border border-hairline p-3">
                            <div className="text-2xs font-mono font-bold uppercase text-ink-400 mb-1 flex items-center gap-1.5">
                              <Sparkles className="size-3 text-brand-500" />
                              Architecture Focus
                            </div>
                            <p className="text-xs font-semibold text-ink-700 line-clamp-1">
                              {item.architecturalPillars[0].title}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="px-6 pb-5 pt-3 flex items-center justify-between border-t border-hairline text-xs font-bold text-brand-600 group-hover:text-brand-700 bg-surface-muted/40">
                      <span>Read perspective</span>
                      <span className="size-7 rounded-full bg-white border border-hairline flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all shadow-2xs">
                        <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
