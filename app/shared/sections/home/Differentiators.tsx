"use client";

import {
  BookOpen,
  Gauge,
  KeyRound,
  LifeBuoy,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { DIFFERENTIATORS } from "@/app/core/data/home";
import { GridField } from "@/app/shared/backdrop/Backdrops";
import { Stagger, StaggerItem } from "@/app/shared/motion/Reveal";
import { Container, Eyebrow, Section } from "@/app/shared/ui/Layout";

const ICONS: Record<string, LucideIcon> = {
  users: Users,
  gauge: Gauge,
  "shield-check": ShieldCheck,
  key: KeyRound,
  book: BookOpen,
  "life-buoy": LifeBuoy,
};

/**
 * Why-us section.
 *
 * Rendered as a hairline-ruled matrix instead of a card grid. The section
 * above already uses cards; repeating them here would make the two blur
 * together on scroll.
 */
export function Differentiators() {
  return (
    <Section tone="ink" spacing="lg" id="why-us" className="overflow-hidden">
      <GridField tone="dark" className="opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-64 w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400/12 blur-[110px]"
      />

      <Container className="relative">
        <div className="mb-16 flex max-w-2xl flex-col gap-5">
          <Eyebrow tone="light">Why teams stay</Eyebrow>
          <h2 className="text-display-md text-white sm:text-display-lg">
            The parts of the engagement nobody puts in the pitch deck.
          </h2>
          <p className="text-lead text-ink-400">
            Most agencies compete on the demo. These are the six things clients tell us actually
            decided the second contract.
          </p>
        </div>

        <Stagger
          stagger={0.07}
          className="grid gap-px overflow-hidden rounded-2xl bg-white/8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {DIFFERENTIATORS.map((item) => {
            const Icon = ICONS[item.icon] ?? ShieldCheck;
            return (
              <StaggerItem
                key={item.title}
                from="up"
                className="group relative flex flex-col gap-4 bg-brand-950 p-8 transition-colors duration-500 hover:bg-brand-900"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-white/6 text-brand-200 transition-all duration-500 group-hover:bg-brand-300 group-hover:text-brand-950">
                  <Icon aria-hidden className="size-5" strokeWidth={1.6} />
                </span>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-400">{item.description}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
