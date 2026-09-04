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
      <div className="grid gap-10 rounded-2xl border border-hairline bg-surface p-8 sm:p-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
        <div className="flex flex-col gap-5">
          <h3 className="text-display-sm text-ink-900 sm:text-display-md">{industry.headline}</h3>
          <p className="max-w-xl text-lead text-ink-600">{industry.description}</p>

          <ul className="mt-2 flex flex-col gap-3">
            {industry.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-ink-700">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500">
                  <Check aria-hidden className="size-3" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <Link
            href={industry.href}
            className="group mt-3 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
          >
            Explore {industry.label.toLowerCase()} work
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Numeric anchor — one big figure per sector, not a stat grid. */}
        <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl bg-brand-50/70 p-8">
          <div
            aria-hidden
            className="absolute -top-12 -right-8 size-40 rounded-full bg-brand-200/30 blur-3xl"
          />
          <div className="relative flex flex-col gap-2">
            <span className="text-display-lg font-bold tracking-tight tabular-nums text-brand-800">
              <CountUp value={industry.stat.value} />
            </span>
            <span className="text-sm font-medium text-ink-600">{industry.stat.label}</span>
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
            eyebrow="Where we work"
            title="Regulated sectors, shipped software."
            description="Compliance is not a phase at the end. In these four sectors we build to the standard from the first commit, because retrofitting it costs more than doing it right."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <Tabs items={tabs} />
      </Container>
    </Section>
  );
}
