import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { SERVICES_DATA } from "@/app/core/data/services";
import { SERVICE_LINKS } from "@/app/core/data/navigation";
import { GradientMesh, Grain } from "@/app/shared/backdrop/Backdrops";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";
import { Parallax } from "@/app/shared/motion/Parallax";
import { CallToAction } from "@/app/shared/sections/CallToAction";
import { Breadcrumb } from "@/app/shared/ui/Breadcrumb";
import { Button } from "@/app/shared/ui/Button";
import { Container, Eyebrow, Section, SectionHeading } from "@/app/shared/ui/Layout";
import { Marquee } from "@/app/shared/ui/Marquee";
import { Stats } from "@/app/shared/ui/Stats";
import { SubNav } from "@/app/shared/ui/SubNav";
import { ServiceHeroImage } from "@/app/shared/ui/ServiceHeroImage";



export async function generateStaticParams() {

  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = SERVICES_DATA[slug];
  if (!data) return { title: "Not Found" };
  return { title: data.metaTitle, description: data.metaDescription };
}

/**
 * Service detail page.
 *
 * Layout signature: a **light** editorial hero with the artwork offset to the
 * right, a sticky sibling rail, and numbered hairline rows for capabilities.
 * Deliberately different from the technology template (dark, terminal-led) and
 * the industry template (tinted, evidence-led) so moving between them feels
 * like arriving somewhere new.
 */
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = SERVICES_DATA[slug];
  if (!data) notFound();

  const half = Math.ceil(data.techStack.length / 2);

  return (
    <>
      <SubNav links={SERVICE_LINKS} label="Services" />

      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden pt-20 pb-20 lg:pt-28 lg:pb-28">
        <GradientMesh />
        <Grain />

        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-20">
            <div className="flex flex-col items-start gap-6">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services/mobile" },
                  { label: data.title },
                ]}
              />

              <Reveal from="up">
                <Eyebrow>{data.category}</Eyebrow>
              </Reveal>

              <Reveal from="up" delay={0.06}>
                <h1 className="max-w-2xl text-display-lg sm:text-display-xl">{data.tagline}</h1>
              </Reveal>

              <Reveal from="up" delay={0.14}>
                <p className="max-w-xl text-lead text-ink-600">{data.description}</p>
              </Reveal>

              <Reveal from="up" delay={0.22} className="flex flex-wrap gap-3">
                <Button href="/contact" size="lg" variant="primary" withArrow magnetic>
                  {data.ctaText}
                </Button>
                <Button href="/portfolio" size="lg" variant="outline">
                  View our work
                </Button>
              </Reveal>
            </div>

            {/* Service Hero JPG Image Visual */}
            <Parallax distance={26} className="relative flex justify-center">
              <Reveal from="up" scale={0.96} className="relative w-full max-w-[540px]">
                {/* Ambient Cyan Radial Backdrop Glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,210,196,0.3)_0%,rgba(0,168,150,0.1)_50%,transparent_75%)] blur-[60px]"
                />

                {/* Service Hero Image Card Frame */}
                <ServiceHeroImage src={data.heroImage} alt={data.title} />

              </Reveal>
            </Parallax>

          </div>

          <Reveal from="up" delay={0.1} className="mt-16 border-t border-hairline pt-10">
            <Stats items={[...data.heroStats]} layout="rail" columns={4} />
          </Reveal>
        </Container>
      </section>

      {/* ── Capabilities: numbered hairline rows, not cards ── */}
      <Section tone="muted" spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title={`What we deliver in ${data.title.toLowerCase()}`}
            description="Every engagement is shaped around your goals, not a template. This is the ground we cover."
            className="mb-14"
          />

          <Stagger stagger={0.07} className="grid gap-x-16 md:grid-cols-2">
            {data.features.map((feature, index) => (
              <StaggerItem
                key={feature.title}
                from="up"
                className="group flex gap-6 border-t border-hairline py-7"
              >
                <span className="font-mono text-xs text-ink-300 tabular-nums transition-colors duration-300 group-hover:text-brand-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-ink-900">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-600">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* ── Process: connected horizontal steps ── */}
      <Section tone="white" spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="From first conversation to live product."
            align="center"
            className="mx-auto mb-16"
          />

          <Stagger stagger={0.1} className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Connector rule behind the step markers */}
            <span
              aria-hidden
              className="absolute top-6 right-8 left-8 hidden h-px bg-[linear-gradient(to_right,transparent,var(--color-brand-200),transparent)] lg:block"
            />

            {data.process.map((step) => (
              <StaggerItem key={step.step} from="up" className="relative flex flex-col gap-4">
                <span className="inline-flex size-12 items-center justify-center rounded-full border border-hairline bg-white font-mono text-sm font-semibold text-brand-500 shadow-sm">
                  {step.step}
                </span>
                <h3 className="text-base font-semibold text-ink-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ink-600">{step.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* ── Tech stack: opposing marquee rails ── */}
      <Section tone="sunken" spacing="md" className="overflow-hidden">
        <Container className="mb-10">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <Eyebrow>Technology stack</Eyebrow>
            <h2 className="max-w-xl text-display-sm sm:text-display-md">
              The tools we reach for on {data.title.toLowerCase()}.
            </h2>
          </Reveal>
        </Container>

        <div className="flex flex-col gap-3">
          <Marquee duration={44} gap="0.75rem">
            {data.techStack.slice(0, half).map((tech) => (
              <TechPill key={tech}>{tech}</TechPill>
            ))}
          </Marquee>
          <Marquee duration={52} gap="0.75rem" reverse>
            {data.techStack.slice(half).map((tech) => (
              <TechPill key={tech}>{tech}</TechPill>
            ))}
          </Marquee>
        </div>
      </Section>

      <CallToAction
        eyebrow="Ready to start?"
        title={`Let's talk about your ${data.title.toLowerCase()} project.`}
        description={`A 30-minute call with an engineer who has shipped this before — not a salesperson. No commitment.`}
        primary={{ label: data.ctaText, href: "/contact" }}
        secondary={{ label: "Call +91 9763804442", href: "tel:+919763804442" }}
      />
    </>
  );
}

function TechPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-hairline bg-white px-5 py-2.5 text-sm font-medium whitespace-nowrap text-ink-700 shadow-xs transition-colors duration-300 hover:border-brand-300 hover:text-brand-600">
      <ArrowRight aria-hidden className="size-3 text-brand-300" />
      {children}
    </span>
  );
}
