import type { Metadata } from "next";

import { PROJECTS } from "@/app/core/data/projects";
import { DotField, Grain } from "@/app/shared/backdrop/Backdrops";
import { Reveal } from "@/app/shared/motion/Reveal";
import { CallToAction } from "@/app/shared/sections/CallToAction";
import { Breadcrumb } from "@/app/shared/ui/Breadcrumb";
import { Button } from "@/app/shared/ui/Button";
import { Container, Eyebrow, Section } from "@/app/shared/ui/Layout";
import { Stats } from "@/app/shared/ui/Stats";
import { ProjectGallery } from "./ProjectGallery";
import { TrustAndFaqSection } from "@/app/shared/sections/TrustAndFaqSection";

export const metadata: Metadata = {
  title: "Portfolio | NXTorbit",
  description: "Products NXTorbit has designed, engineered, and shipped.",
};

const REACH = [
  { value: "1400+", label: "Products shipped" },
  { value: "180M+", label: "End users reached" },
  { value: "35+", label: "Countries" },
  { value: `${PROJECTS.length}`, label: "Featured here" },
];

/**
 * Portfolio.
 *
 * Layout signature: a **gallery**. Compact hero, filter, then the work. The
 * long-form narrative lives on /case-studies — this page is for scanning.
 */
export default function PortfolioPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-20">
        {/* Full-width hero background image container */}
        <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop"
            alt="NXTorbit Digital Products & Portfolio Showcase"
            className="w-full h-full object-cover object-center lg:object-right opacity-85"
            suppressHydrationWarning
          />
          {/* Single clean responsive gradient mask */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.88)_40%,transparent_90%)] lg:bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_35%,rgba(255,255,255,0.45)_65%,transparent_95%)]" />
        </div>

        <DotField className="opacity-30" />
        <Grain />

        <Container className="relative">
          <div className="flex flex-col gap-6">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />

            <Reveal from="up">
              <Eyebrow>Our work</Eyebrow>
            </Reveal>

            <Reveal from="up" delay={0.06}>
              <h1 className="max-w-3xl text-display-lg sm:text-display-xl text-slate-950 font-extrabold">
                Every one of these is still running.
              </h1>
            </Reveal>

            <Reveal from="up" delay={0.12}>
              <p className="max-w-xl text-lead text-slate-800 font-medium">
                Products we designed and engineered, in production and in the hands of real users.
                Filter by sector to find something close to your problem.
              </p>
            </Reveal>

            <Reveal from="up" delay={0.18} className="flex flex-wrap gap-3">
              <Button href="/case-studies" size="lg" variant="primary" withArrow magnetic>
                Read the full case studies
              </Button>
              <Button href="/contact" size="lg" variant="outline" withArrow>
                Start a project
              </Button>
            </Reveal>
          </div>

          <Reveal from="up" delay={0.1} className="mt-12 rounded-2xl border border-hairline bg-white/95 p-6 sm:p-8 shadow-xs backdrop-blur-md">
            <Stats items={REACH} layout="rail" columns={4} />
          </Reveal>
        </Container>
      </section>

      <Section tone="muted" spacing="lg">
        <Container>
          <ProjectGallery />
        </Container>
      </Section>

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
