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
      <div className="grid gap-10 rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 lg:grid-cols-[1.35fr_1fr] lg:gap-14 shadow-lg shadow-slate-900/5">
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            {industry.headline}
          </h3>
          <p className="max-w-xl text-base text-slate-600 leading-relaxed font-normal">
            {industry.description}
          </p>

          <ul className="mt-2 flex flex-col gap-3.5">
            {industry.points.map((point) => (
              <li key={point} className="flex items-start gap-3.5 text-sm sm:text-base text-slate-700 font-medium">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-[#008c83]">
                  <Check aria-hidden className="size-3.5" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <Link
            href={industry.href}
            className="group mt-3 inline-flex w-fit items-center gap-2 text-sm sm:text-base font-bold text-[#008c83] transition-colors hover:text-[#005f57]"
          >
            Explore {industry.label.toLowerCase()} work
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Numeric anchor — one big figure per sector */}
        <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-teal-50/90 via-slate-50 to-teal-100/40 p-8 sm:p-10 border border-teal-100 shadow-inner">
          <div
            aria-hidden
            className="absolute -top-12 -right-8 size-48 rounded-full bg-[#00d2c4]/20 blur-3xl"
          />
          <div className="relative flex flex-col gap-2">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight tabular-nums text-slate-900">
              <CountUp value={industry.stat.value} />
            </span>
            <span className="text-sm sm:text-base font-semibold text-slate-600">
              {industry.stat.label}
            </span>
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
