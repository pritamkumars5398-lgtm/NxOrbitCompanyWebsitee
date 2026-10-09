"use client";

import React from "react";
import { LucideIcon, Clock, Eye, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";

export interface ResultStatItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProductResultBannerProps {
  eyebrow?: string;
  headline?: string;
  stats?: ResultStatItem[];
  className?: string;
}

const DEFAULT_STATS: ResultStatItem[] = [
  {
    icon: Clock,
    title: "Faster Bookings",
    description: "Reduce turnaround time with automation.",
  },
  {
    icon: Eye,
    title: "Real-Time Visibility",
    description: "Track shipments and inventory in real time.",
  },
  {
    icon: ShieldCheck,
    title: "Lower Operational Costs",
    description: "Optimize routes, reduce delays and save costs.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Built to grow with your business needs.",
  },
];

export function ProductResultBanner({
  eyebrow = "THE RESULT",
  headline = "More efficiency. Greater visibility. Real business impact.",
  stats = DEFAULT_STATS,
  className = "",
}: ProductResultBannerProps) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-2xl border-2 border-teal-300/80 bg-linear-to-r from-[#edf8f6] via-[#f4fbf9] to-[#edf8f6] p-5 sm:p-7 transition-colors duration-300 hover:border-teal-400 ${className}`}
    >
      {/* Soft background ambient gradient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 -z-10 h-44 w-44 rounded-full bg-teal-400/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-12 -bottom-12 -z-10 h-44 w-44 rounded-full bg-cyan-400/15 blur-3xl"
      />

      <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
        {/* Left Headline Area */}
        <div className="lg:w-[32%] flex flex-col justify-center gap-2 shrink-0">
          <div className="flex items-center gap-1.5 w-fit">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-2xs font-mono font-extrabold uppercase tracking-widest bg-teal-600 text-white">
              <Sparkles className="size-2.5 text-teal-200" />
              {eyebrow}
            </span>
          </div>

          <h4 className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {headline}
          </h4>
        </div>

        {/* Vertical Divider Line */}
        <div className="hidden lg:block w-px bg-teal-200/90 self-stretch shrink-0" />

        {/* Right 4 Columns Grid */}
        <div className="lg:w-[68%] grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-5 items-start my-auto">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col gap-1.5 min-w-0">
                <div className="flex size-8 sm:size-9 items-center justify-center rounded-xl bg-teal-100/90 text-teal-700 border border-teal-200">
                  <Icon className="size-4 sm:size-4.5 stroke-[2]" />
                </div>
                <h5 className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight leading-tight mt-0.5">
                  {stat.title}
                </h5>
                <p className="text-sm text-slate-600 leading-normal font-normal">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
