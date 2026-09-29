"use client";

import { Check } from "lucide-react";
import { INDUSTRY_SHOWCASE } from "@/app/core/data/home";
import { Container, Eyebrow } from "@/app/shared/ui/Layout";
import { Tabs, type TabItem } from "@/app/shared/ui/Tabs";
import { Reveal } from "@/app/shared/motion/Reveal";
import { Button } from "@/app/shared/ui/Button";

/**
 * Industry showcase.
 *
 * Tabbed view with compact, viewport-optimized layout so switching between
 * industry tabs fits within standard viewports without extra scrolling.
 */
export function Industries() {
  const tabs: TabItem[] = INDUSTRY_SHOWCASE.map((industry) => ({
    id: industry.id,
    label: industry.label,
    content: (
      <div className="grid gap-6 rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-7 lg:p-8 lg:grid-cols-[1.25fr_1fr] lg:gap-10 shadow-xl shadow-slate-900/5 items-center">
        {/* Left: Sector Details */}
        <div className="flex flex-col gap-3.5 sm:gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-50/80 px-3 py-0.5 w-fit">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#008c83]">
              {industry.label} Sector
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-[1.65rem] font-extrabold text-slate-900 tracking-tight leading-snug">
            {industry.headline}
          </h3>
          <p className="max-w-xl text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {industry.description}
          </p>

          <ul className="mt-0.5 flex flex-col gap-2">
            {industry.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <span className="mt-0.5 inline-flex size-4.5 shrink-0 items-center justify-center rounded-full bg-teal-100/70 text-[#008c83]">
                  <Check aria-hidden className="size-3" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="pt-1.5">
            <Button
              href={industry.href}
              variant="primary"
              size="md"
              withArrow
            >
              Explore {industry.label.toLowerCase()} work
            </Button>
          </div>
        </div>

        {/* Right: Clean 3D Industry Visual with Sleek Floating Stat */}
        <div className="relative group overflow-hidden rounded-xl border border-slate-200/90 bg-gradient-to-br from-slate-50 to-slate-100/70 aspect-[16/11] max-h-[300px] lg:max-h-[320px] flex items-center justify-center shadow-sm">
          <img
            src={(industry as any).image3d || "/assets/logistics_map_truck.jpg"}
            alt={industry.headline}
            className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          {industry.stat && (
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 flex items-center gap-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md px-3.5 py-2 border border-white/10 shadow-lg text-white">
              <span className="font-mono text-base sm:text-lg font-black text-[#00d2c4] leading-none">
                {industry.stat.value}
              </span>
              <span className="text-[11px] text-slate-300 font-medium leading-tight max-w-[120px]">
                {industry.stat.label}
              </span>
            </div>
          )}
        </div>
      </div>
    ),
  }));

  return (
    <section className="relative bg-white py-10 sm:py-12 lg:py-14 border-t border-b border-slate-200/80" id="industries">
      <Container>
        <Reveal className="mb-5 sm:mb-6 text-center max-w-2xl mx-auto">
          <Eyebrow tone="brand" className="mb-1.5">INDUSTRIES</Eyebrow>
          <h2 className="text-display-xs sm:text-display-sm lg:text-display-md font-extrabold text-slate-900 tracking-tight">
            Experience Across Industries
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            Every industry has unique workflows, compliance requirements, and operational priorities. Our solutions are designed around those realities.
          </p>
        </Reveal>

        <Tabs items={tabs} />
      </Container>
    </section>
  );
}
