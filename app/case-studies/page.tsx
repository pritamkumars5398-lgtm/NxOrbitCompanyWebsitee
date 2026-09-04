import type { Metadata } from "next";

import { PROJECTS } from "@/app/core/data/projects";
import { cn } from "@/app/core/lib/cn";
import { DotField, Grain, GridField } from "@/app/shared/backdrop/Backdrops";
import { CountUp } from "@/app/shared/motion/CountUp";
import { Parallax } from "@/app/shared/motion/Parallax";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";
import { CallToAction } from "@/app/shared/sections/CallToAction";
import { Breadcrumb } from "@/app/shared/ui/Breadcrumb";
import { Button } from "@/app/shared/ui/Button";
import { Container, Eyebrow, Section } from "@/app/shared/ui/Layout";
import { TrustAndFaqSection } from "@/app/shared/sections/TrustAndFaqSection";

export const metadata: Metadata = {
  title: "Case Studies | NXTorbit",
  description: "How NXTorbit built and scaled products across social, fintech, media, and logistics.",
};

/**
 * Case studies.
 *
 * Layout signature: **long-form alternating blocks**, one screen-height band
 * per project, side flipping each time. Where /portfolio is built for
 * scanning, this page is built for reading one story properly.
 */
export default function CaseStudiesPage() {
  return (
    <>
      {/* ── Hero: light ── */}
      <section className="relative isolate overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-20">
        {/* Full-width hero background image container */}
        <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1600&auto=format&fit=crop"
            alt="NXTorbit Case Studies & UI/UX Product Architecture"
            className="w-full h-full object-cover object-center lg:object-right opacity-85"
            suppressHydrationWarning
          />
          {/* Single clean responsive gradient mask */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.7)_40%,transparent_80%)] lg:bg-[linear-gradient(90deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.8)_30%,rgba(255,255,255,0.25)_60%,transparent_85%)]" />
        </div>

        <DotField className="opacity-30" />
        <Grain />

        <Container className="relative">
          <div className="flex flex-col gap-6">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Case studies" }]} />

            <Reveal from="up">
              <Eyebrow>Case studies</Eyebrow>
            </Reveal>

            <Reveal from="up" delay={0.06}>
              <h1 className="max-w-3xl text-display-lg sm:text-display-xl text-slate-900 leading-[1.05]">
                The work, <br />
                <span className="bg-gradient-to-r from-[#006B7D] to-[#00d2c4] bg-clip-text text-transparent">
                  with the numbers attached.
                </span>
              </h1>
            </Reveal>

            <Reveal from="up" delay={0.12}>
              <p className="max-w-xl text-lead text-ink-600">
                Seven products, what each one had to solve, and what changed after we shipped it.
                No vanity metrics.
              </p>
            </Reveal>

            <Reveal from="up" delay={0.18} className="mt-2 flex flex-wrap gap-3">
              <Button href="/contact" size="lg" variant="primary" withArrow magnetic>
                Start your project
              </Button>
              <Button href="/portfolio" size="lg" variant="outline" withArrow>
                Browse the gallery
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Alternating study blocks ── */}
      {PROJECTS.map((project, index) => {
        const flipped = index % 2 === 1;

        return (
          <Section
            key={project.id}
            tone={flipped ? "muted" : "white"}
            spacing="lg"
            id={project.id}
          >
            <Container>
              <div
                className={cn(
                  "grid items-center gap-12 lg:grid-cols-2 lg:gap-20",
                  flipped && "lg:[&>*:first-child]:order-2",
                )}
              >
                {/* Narrative */}
                <Reveal from={flipped ? "left" : "right"} className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-ink-300 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-8 bg-hairline-strong" />
                    <span className="text-eyebrow uppercase text-brand-500">
                      {project.industry}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h2 className="text-display-md sm:text-display-lg">{project.name}</h2>
                    <p className="text-lead font-medium text-brand-600">{project.tagline}</p>
                  </div>

                  <p className="max-w-xl text-base leading-relaxed text-ink-600">{project.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-hairline-strong px-3 py-1.5 text-xs font-medium text-ink-600">
                      {project.platform}
                    </span>
                    <span className="rounded-full border border-hairline-strong px-3 py-1.5 text-xs font-medium text-ink-600">
                      {project.resultLabel}
                    </span>
                  </div>

                  <Button
                    href="/contact"
                    variant="primary"
                    withArrow
                    className="mt-2 self-start"
                  >
                    Build something like this
                  </Button>
                </Reveal>

                {/* Metric slab */}
                <Parallax distance={22}>
                  <Reveal from={flipped ? "right" : "left"} scale={0.97}>
                    <div className="relative isolate overflow-hidden rounded-2xl bg-brand-900 p-8 sm:p-10">
                      <GridField tone="dark" className="opacity-50" />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -top-16 -right-12 size-56 rounded-full bg-brand-400/20 blur-3xl"
                      />

                      <Stagger stagger={0.1} className="relative flex flex-col divide-y divide-white/10">
                        {project.metrics.map((metric) => (
                          <StaggerItem
                            key={metric.label}
                            from="up"
                            className="flex items-baseline justify-between gap-6 py-5 first:pt-0 last:pb-0"
                          >
                            <span className="text-3xl font-bold tracking-tight text-white tabular-nums sm:text-4xl">
                              <CountUp value={metric.value} />
                            </span>
                            <span className="text-right text-sm text-ink-400">{metric.label}</span>
                          </StaggerItem>
                        ))}
                      </Stagger>
                    </div>
                  </Reveal>
                </Parallax>
              </div>
            </Container>
          </Section>
        );
      })}

      <TrustAndFaqSection />

      <CallToAction
        eyebrow="READY TO START?"
        title="Let's talk about your mobile app development project."
        description="A 30-minute call with an engineer who has shipped this before — not a salesperson. No commitment."
        primary={{ label: "Start Your Mobile Project", href: "/contact" }}
        secondary={{ label: "Call +91 9763804442", href: "tel:+919763804442" }}
      />
    </>
  );
}
