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
 * A balanced grid with identical card styling for all items.
 */
export function Capabilities() {
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

        <Stagger stagger={0.09} className="grid gap-6 sm:grid-cols-2">
          {CAPABILITIES.map((item) => (
            <StaggerItem
              key={item.href}
              from="up"
              scale={0.97}
            >
              <Link
                href={item.href}
                className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-hairline/80 bg-white/60 p-8 backdrop-blur-md shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/10"
              >
                {/* Decorative background glow on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 -z-10 size-40 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.12)_0%,transparent_70%)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="flex items-start justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-linear-to-br from-brand-500 to-teal-400 text-white shadow-md shadow-brand-500/20 transition-transform duration-300 group-hover:scale-110">
                    <NavIcon name={item.icon} className="size-5.5" />
                  </span>
                  <div className="flex size-8 items-center justify-center rounded-full bg-slate-50 text-ink-400 transition-all duration-300 group-hover:bg-teal-50 group-hover:text-teal-600">
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <h3 className="text-lg font-bold text-ink-900 transition-colors duration-200 group-hover:text-brand-600">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-600">
                    {item.description}
                  </p>
                </div>

                <ul className="mt-auto flex flex-wrap gap-2 pt-4">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-lg border border-hairline bg-slate-50/50 px-2.5 py-1 text-[0.725rem] font-semibold text-ink-500 transition-colors duration-300 group-hover:border-teal-100 group-hover:bg-teal-50/30 group-hover:text-teal-600"
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
