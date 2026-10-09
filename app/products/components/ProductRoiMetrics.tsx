"use client";

import { LucideIcon, CheckCircle2 } from "lucide-react";
import { Container, Eyebrow } from "@/app/shared/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";

export interface RoiMetricItem {
  value: string;
  badge: string;
  title: string;
  description: string;
  progressLabel: string;
  progressPercent: number;
  benchmark: string;
  icon: LucideIcon;
}

interface ProductRoiMetricsProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  metrics: RoiMetricItem[];
}

export function ProductRoiMetrics({
  eyebrow = "PROVEN BUSINESS IMPACT",
  title = "Engineered for Measurable ROI",
  subtitle = "Anchor value in verified operational numbers before diving into technology details.",
  metrics,
}: ProductRoiMetricsProps) {
  return (
    <section className="relative isolate overflow-hidden py-12 sm:py-16 bg-linear-to-b from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc] border-y border-slate-200/80">
      {/* Ambient background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/5 blur-[120px]"
      />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 flex flex-col items-center">
          {eyebrow && (
            <Reveal from="up">
              <Eyebrow tone="brand">{eyebrow}</Eyebrow>
            </Reveal>
          )}

          <Reveal from="up" delay={eyebrow ? 0.06 : 0}>
            <h2 className="text-display-md sm:text-display-lg font-extrabold text-slate-900 mt-3">
              {title}
            </h2>
          </Reveal>

          {subtitle && (
            <Reveal from="up" delay={eyebrow ? 0.12 : 0.06}>
              <p className="text-lead text-slate-600 font-normal mt-3 max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>

        {/* ── 3 Redesigned High-Impact ROI Cards ── */}
        <Stagger stagger={0.1} className="grid gap-5 sm:gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <StaggerItem
                key={item.title}
                from="up"
                distance={30}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400"
              >
                {/* Top Accent Bar */}
                <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-teal-500 via-brand-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar: Icon Badge & Benchmark Tag */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 border border-teal-100/90 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white group-hover:scale-105">
                      <Icon className="size-5.5 stroke-[1.8]" />
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100/90 px-2.5 py-1 text-2xs font-semibold text-slate-600 border border-slate-200/70">
                      <CheckCircle2 className="size-3 text-teal-500" />
                      {item.badge}
                    </span>
                  </div>

                  {/* High-Impact Numerical Stat */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl lg:text-display-lg font-black tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors leading-none">
                      {item.value}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-3 tracking-tight group-hover:text-brand-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Telemetry Progress & Metric Comparison Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100/90 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-2xs font-semibold">
                    <span className="text-slate-500">{item.progressLabel}</span>
                    <span className="text-teal-700 font-mono font-bold">{item.benchmark}</span>
                  </div>

                  {/* Micro Progress Bar */}
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-teal-500 via-teal-400 to-cyan-500 transition-all duration-500 group-hover:brightness-110"
                      style={{ width: `${item.progressPercent}%` }}
                    />
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
