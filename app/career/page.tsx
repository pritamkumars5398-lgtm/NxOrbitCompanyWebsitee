import type { Metadata } from "next";
import {
  BookOpen,
  Clock,
  Globe,
  Heart,
  Shield,
  Target,
  TrendingUp,
  Wallet,
  type LucideIcon,
} from "lucide-react";

import { HIRING_STEPS, JOBS, PERKS } from "@/app/core/data/careers";
import { GradientMesh, Grain } from "@/app/shared/backdrop/Backdrops";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";
import { CallToAction } from "@/app/shared/sections/CallToAction";
import { Breadcrumb } from "@/app/shared/ui/Breadcrumb";
import { Button } from "@/app/shared/ui/Button";
import { Container, Eyebrow, Section, SectionHeading } from "@/app/shared/ui/Layout";
import { Stats } from "@/app/shared/ui/Stats";
import { JobBoard } from "./JobBoard";

export const metadata: Metadata = {
  title: "Careers at NXTorbit",
  description: "Open engineering, design, and operations roles at NXTorbit in Navi Mumbai.",
};

const PERK_ICONS: Record<string, LucideIcon> = {
  wallet: Wallet,
  shield: Shield,
  globe: Globe,
  book: BookOpen,
  clock: Clock,
  trending: TrendingUp,
  target: Target,
  heart: Heart,
};

const TEAM_STATS = [
  { value: "200+", label: "People on the team" },
  { value: "98%", label: "Annual retention" },
  { value: "14", label: "Years in business" },
  { value: `${JOBS.length}`, label: "Roles open now" },
];

/**
 * Careers page.
 *
 * Layout signature: a **job-board** page. The openings list is the centre of
 * gravity and sits high on the page; culture and process support it rather
 * than delaying it behind three scroll-lengths of marketing.
 */
export default function CareerPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-20">
        <GradientMesh />
        <Grain />

        <Container className="relative">
          <div className="flex flex-col gap-6">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Careers" }]} />

            <Reveal from="up">
              <Eyebrow>We&apos;re hiring</Eyebrow>
            </Reveal>

            <Reveal from="up" delay={0.06}>
              <h1 className="max-w-3xl text-display-lg sm:text-display-xl">
                Work on products millions of people actually open.
              </h1>
            </Reveal>

            <Reveal from="up" delay={0.12}>
              <p className="max-w-xl text-lead text-ink-600">
                Two hundred engineers, designers, and operators in one studio in Navi Mumbai. We
                hire for judgement, pay properly, and let people own their work.
              </p>
            </Reveal>

            <Reveal from="up" delay={0.18} className="flex flex-wrap gap-3">
              <Button href="#openings" size="lg" variant="primary" withArrow magnetic>
                See open roles
              </Button>
              <Button
                href="mailto:info@nxt-orbit.com?subject=Speculative application"
                size="lg"
                variant="outline"
                withArrow
              >
                Send a speculative application
              </Button>
            </Reveal>
          </div>

          <Reveal from="up" delay={0.1} className="mt-14 border-t border-hairline pt-10">
            <Stats items={TEAM_STATS} layout="rail" columns={4} />
          </Reveal>
        </Container>
      </section>

      {/* ── Openings ── */}
      <Section tone="white" spacing="md" id="openings">
        <Container>
          <SectionHeading
            eyebrow="Open roles"
            title="Where we need people right now."
            description="Filter by team. Every role below is genuinely open — we don't post evergreen adverts."
            className="mb-12"
          />

          <Reveal from="up">
            <JobBoard />
          </Reveal>
        </Container>
      </Section>

      {/* ── Perks ── */}
      <Section tone="muted" spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="What you get"
            title="The offer, stated plainly."
            align="center"
            className="mx-auto mb-14"
          />

          <Stagger
            stagger={0.05}
            className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4"
          >
            {PERKS.map((perk) => {
              const Icon = PERK_ICONS[perk.icon] ?? Target;
              return (
                <StaggerItem
                  key={perk.title}
                  from="up"
                  className="group flex flex-col gap-3.5 bg-white p-7 transition-colors duration-400 hover:bg-brand-50/50"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-colors duration-400 group-hover:bg-white">
                    <Icon aria-hidden className="size-4.5" strokeWidth={1.6} />
                  </span>
                  <h3 className="text-sm font-semibold text-ink-900">{perk.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-600">{perk.description}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </Section>

      {/* ── Hiring process ── */}
      <Section tone="white" spacing="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <Reveal className="flex flex-col gap-5 lg:sticky lg:top-32 lg:self-start">
              <Eyebrow>Hiring process</Eyebrow>
              <h2 className="text-display-md sm:text-display-lg">
                Four conversations. Ten working days.
              </h2>
              <p className="text-lead text-ink-600">
                No take-home that eats your weekend, no algorithm trivia, and a decision you
                won&apos;t have to chase.
              </p>
            </Reveal>

            <Stagger stagger={0.08} className="flex flex-col">
              {HIRING_STEPS.map((step) => (
                <StaggerItem
                  key={step.step}
                  from="up"
                  className="flex gap-6 border-t border-hairline py-7"
                >
                  <span className="font-mono text-sm text-brand-400 tabular-nums">{step.step}</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-semibold text-ink-900">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-600">{step.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </Section>

      <CallToAction
        eyebrow="Don't see your role?"
        title="Tell us what you'd want to work on."
        description="We keep speculative applications on file and genuinely go back to them when something opens up."
        primary={{
          label: "Email your CV",
          href: "mailto:info@nxt-orbit.com?subject=Speculative application",
        }}
        secondary={{ label: "See open roles", href: "#openings" }}
      />
    </>
  );
}
