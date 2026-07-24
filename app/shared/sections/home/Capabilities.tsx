"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CAPABILITIES } from "@/app/core/data/home";
import { cn } from "@/app/core/lib/cn";
import { DotField } from "@/app/shared/backdrop/Backdrops";
import { Stagger, StaggerItem } from "@/app/shared/motion/Reveal";
import { Container, Section, SectionHeading } from "@/app/shared/ui/Layout";
import { NavIcon } from "@/app/shared/ui/NavIcon";
import { TextLink } from "@/app/shared/ui/Button";

/**
 * Capability grid.
 *
 * Deliberately asymmetric: the lead capability occupies a two-row cell on the
 * left and the rest tile beside it. An even 3×2 grid of identical cards is the
 * default every template reaches for — this reads as an edited page instead.
 */
export function Capabilities() {
  const [lead, ...rest] = CAPABILITIES;

  return (
    <Section tone="white" spacing="lg" id="services">
      <DotField className="opacity-50" />

      <Container className="relative">
        <SectionHeading
          eyebrow="What we do"
          title="Four disciplines, one delivery team."
          description="Design, engineering, data, and infrastructure sit in the same room and ship on the same board — which is why the hand-offs that usually cost you a quarter don't happen here."
          action={<TextLink href="/contact">Discuss your project</TextLink>}
          className="mb-14"
        />

        <Stagger stagger={0.09} className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {/* Lead card — spans both rows */}
          <StaggerItem className="lg:row-span-2" from="up" scale={0.97}>
            <Link
              href={lead.href}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-brand-900 p-8 transition-shadow duration-500 hover:shadow-xl"
            >
              <div
                aria-hidden
                className="absolute -top-24 -right-16 size-64 rounded-full bg-brand-400/20 blur-3xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-125"
              />
              <div
                aria-hidden
                className="backdrop-grid-dark pointer-events-none absolute inset-0 opacity-40"
              />

              <div className="relative flex flex-col gap-5">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-white/10 text-brand-200 transition-colors duration-300 group-hover:bg-white/16">
                  <NavIcon name={lead.icon} className="size-5.5" />
                </span>
                <h3 className="text-display-sm text-white">{lead.title}</h3>
                <p className="max-w-sm text-sm leading-relaxed text-ink-300">{lead.description}</p>
              </div>

              <div className="relative mt-10 flex flex-col gap-6">
                <ul className="flex flex-wrap gap-2">
                  {lead.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full border border-white/12 px-3 py-1.5 text-xs font-medium text-ink-300"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-200">
                  Explore mobile engineering
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </Link>
          </StaggerItem>

          {rest.map((item, index) => (
            <StaggerItem
              key={item.href}
              from="up"
              scale={0.97}
              className={cn(index === 0 && "lg:col-span-2")}
            >
              <Link
                href={item.href}
                className="spotlight hover-lift group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-hairline bg-surface p-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-colors duration-300 group-hover:bg-brand-100">
                    <NavIcon name={item.icon} className="size-5" />
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 text-ink-300 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-500"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-ink-900">{item.title}</h3>
                  <p className="max-w-md text-sm leading-relaxed text-ink-600">
                    {item.description}
                  </p>
                </div>

                <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full bg-ink-100 px-2.5 py-1 text-[0.6875rem] font-medium text-ink-600"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
