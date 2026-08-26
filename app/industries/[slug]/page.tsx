import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check } from "lucide-react";

import { INDUSTRIES_DATA } from "@/app/core/data/industries";
import { INDUSTRY_LINKS } from "@/app/core/data/navigation";
import { DotField, Grain } from "@/app/shared/backdrop/Backdrops";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";
import { CallToAction } from "@/app/shared/sections/CallToAction";
import { Breadcrumb } from "@/app/shared/ui/Breadcrumb";
import { Button } from "@/app/shared/ui/Button";
import { Card } from "@/app/shared/ui/Card";
import { Container, Eyebrow, Section, SectionHeading } from "@/app/shared/ui/Layout";
import { Stats } from "@/app/shared/ui/Stats";
import { SubNav } from "@/app/shared/ui/SubNav";

export async function generateStaticParams() {
  return Object.keys(INDUSTRIES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = INDUSTRIES_DATA[slug];
  if (!data) return { title: "Not Found" };
  return { title: data.metaTitle, description: data.metaDescription };
}

/**
 * Industry detail page.
 *
 * Layout signature: a **centred, tinted** hero with no artwork — the evidence
 * (stats, use cases) carries the page instead. Third distinct template after
 * the light-editorial service page and the dark-documentation technology page.
 */
export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = INDUSTRIES_DATA[slug];
  if (!data) notFound();

  return (
    <>
      <SubNav links={INDUSTRY_LINKS} label="Industries" />

      {/* ── Hero: centred, tinted, evidence-led ── */}
      <section className="relative isolate overflow-hidden bg-brand-50/60 pt-8 pb-12 sm:pt-10 sm:pb-12 lg:pt-10 lg:pb-14">
        <DotField className="opacity-70" />
        <Grain />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[56rem] -translate-x-1/2 rounded-full bg-brand-200/25 blur-[120px]"
        />

        <Container className="relative">
          <div className="flex flex-col items-center text-center">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Industries", href: "/industries/healthcare" },
                { label: data.title },
              ]}
            />

            <Reveal from="up" className="mt-4">
              <Eyebrow>{data.category}</Eyebrow>
            </Reveal>

            <Reveal from="up" delay={0.06} className="mt-2">
              <h1 className="max-w-4xl text-display-lg sm:text-display-xl">{data.tagline}</h1>
            </Reveal>

            <Reveal from="up" delay={0.14} className="mt-4">
              <p className="max-w-2xl text-lead text-ink-600">{data.description}</p>
            </Reveal>

            <Reveal from="up" delay={0.22} className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href="/contact" size="lg" variant="primary" withArrow magnetic>
                {data.ctaText}
              </Button>
              <Button href="/contact" size="lg" variant="outline" withArrow>
                Talk to an Expert
              </Button>
            </Reveal>
          </div>

          {/* Boxed stat cells — the tinted hero needs the contrast of solid cards. */}
          <Reveal from="up" delay={0.1} className="mt-16">
            <Stats items={[...data.heroStats]} layout="grid" columns={4} />
          </Reveal>
        </Container>
      </section>

      {/* ── Use cases: two-column checklist ── */}
      <Section tone="white" spacing="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
            <Reveal className="flex flex-col gap-5 lg:sticky lg:top-36 lg:self-start">
              <Eyebrow>Where we help</Eyebrow>
              <h2 className="text-display-md sm:text-display-lg">
                Problems we have already solved in {data.title.toLowerCase()}.
              </h2>
              <p className="text-lead text-ink-600">
                Not a wish list — every item here is something we have built, shipped, and
                supported for a client in this sector.
              </p>
              <Button href="/contact" variant="outline" withArrow className="mt-2 self-start">
                Discuss your case
              </Button>
            </Reveal>

            <Stagger stagger={0.05} className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
              {data.useCases.map((useCase) => (
                <StaggerItem
                  key={useCase}
                  from="up"
                  className="group flex items-start gap-3 rounded-xl px-3 py-3.5 transition-colors duration-300 hover:bg-brand-50/60"
                >
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600 transition-colors duration-300 group-hover:bg-brand-300 group-hover:text-white">
                    <Check aria-hidden className="size-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-ink-700">{useCase}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </Section>

      {/* ── Capabilities: card grid on a sunken surface ── */}
      <Section tone="sunken" spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title={`What we build for ${data.title.toLowerCase()} teams`}
            description="Systems designed around the constraints this sector actually operates under."
            align="center"
            className="mx-auto mb-14"
          />

          <Stagger stagger={0.07} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.features.map((feature, index) => (
              <StaggerItem key={feature.title} from="up" scale={0.97}>
                <Card tone="plain" interactive spotlight className="flex h-full flex-col gap-4">
                  <span className="font-mono text-xs text-brand-400 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold text-ink-900">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-600">{feature.description}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* ── Process: oversized index numbers ── */}
      <Section tone="white" spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="Engagement"
            title="How a project runs, start to finish."
            className="mb-14"
          />

          <Stagger stagger={0.09} className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {data.process.map((step) => (
              <StaggerItem key={step.step} from="up" className="flex flex-col gap-3">
                <span className="text-5xl font-bold tracking-tight text-brand-100 tabular-nums">
                  {step.step}
                </span>
                <h3 className="text-base font-semibold text-ink-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ink-600">{step.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CallToAction />
    </>
  );
}
