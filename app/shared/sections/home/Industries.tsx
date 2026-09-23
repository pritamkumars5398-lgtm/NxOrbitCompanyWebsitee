"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { INDUSTRY_SHOWCASE } from "@/app/core/data/home";
import { Container, Section, SectionHeading } from "@/app/shared/ui/Layout";
import { Tabs, type TabItem } from "@/app/shared/ui/Tabs";
import { Reveal } from "@/app/shared/motion/Reveal";
import { CountUp } from "@/app/shared/motion/CountUp";

/**
 * Industry showcase.
 *
 * Tabbed rather than gridded — six industry cards side by side say nothing,
 * while one panel at a time gives each sector room for a real claim and the
 * number behind it.
 */
export function Industries() {
  const tabs: TabItem[] = INDUSTRY_SHOWCASE.map((industry) => ({
    id: industry.id,
    label: industry.label,
    content: (
      <div className="grid gap-8 rounded-xl border border-slate-200/80 bg-white p-6 sm:p-10 lg:grid-cols-[1.25fr_1fr] lg:gap-12 shadow-xl shadow-slate-900/5 items-center">
        {/* Left: Sector Details */}
        <div className="flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-50/80 px-3.5 py-1 w-fit">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#008c83]">
              {industry.label} Sector
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            {industry.headline}
          </h3>
          <p className="max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {industry.description}
          </p>

          <ul className="mt-1 flex flex-col gap-3">
            {industry.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm sm:text-[15px] text-slate-700 font-medium">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-100/70 text-[#008c83]">
                  <Check aria-hidden className="size-3.5" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <Link
              href={industry.href}
              className="group inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#008c83] hover:shadow-md hover:shadow-teal-900/20"
            >
              Explore {industry.label.toLowerCase()} work
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Right: Clean 3D Industry Visual with Reduced Border Radius & Sleek Floating Stat */}
        <div className="relative group overflow-hidden rounded-lg border border-slate-200/90 bg-gradient-to-br from-slate-50 to-slate-100/70 aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center shadow-sm">
          <img
            src={(industry as any).image3d || "/assets/logistics_map_truck.jpg"}
            alt={industry.headline}
            className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          {/* Floating Stat Overlay Badge - compact and positioned so the image remains fully clear */}
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 rounded-md border border-slate-900/10 bg-slate-950/85 px-3.5 py-2 sm:px-4 sm:py-2.5 backdrop-blur-md shadow-lg transition-all duration-300 group-hover:border-[#00d2c4]/50 group-hover:bg-slate-950/95">
            <div className="flex items-center gap-3">
              <div>
                <span className="block text-xl sm:text-2xl font-black tracking-tight tabular-nums text-white leading-tight">
                  <CountUp value={industry.stat.value} />
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-slate-300">
                  {industry.stat.label}
                </span>
              </div>
              <div className="size-7 sm:size-8 flex items-center justify-center rounded bg-[#008c83]/30 border border-[#00d2c4]/40 text-[#00d2c4]">
                <ArrowRight className="size-3.5 sm:size-4 -rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <Section tone="white" spacing="lg" id="industries">
      <Container>
        <Reveal className="mb-12">
          <SectionHeading
            eyebrow="INDUSTRIES"
            title="Experience Across Industries"
            description="Every industry has unique workflows, compliance requirements, and operational priorities. Our solutions are designed around those realities — not around generic software."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <Tabs items={tabs} />
      </Container>
    </Section>
  );
}
