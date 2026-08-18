import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { cn } from "@/app/core/lib/cn";

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
import { TheChallenge } from "@/app/shared/sections/home/TheChallenge";



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
const GLOW_COLORS: Record<string, string> = {
  mobile: "bg-[radial-gradient(circle,rgba(0,210,196,0.35)_0%,rgba(0,168,150,0.15)_50%,transparent_75%)]",
  web: "bg-[radial-gradient(circle,rgba(37,99,235,0.35)_0%,rgba(29,78,216,0.15)_50%,transparent_75%)]",
  ai: "bg-[radial-gradient(circle,rgba(168,85,247,0.35)_0%,rgba(147,51,234,0.15)_50%,transparent_75%)]",
  design: "bg-[radial-gradient(circle,rgba(244,63,94,0.35)_0%,rgba(225,29,72,0.15)_50%,transparent_75%)]",
  blockchain: "bg-[radial-gradient(circle,rgba(245,158,11,0.35)_0%,rgba(217,119,6,0.15)_50%,transparent_75%)]",
  devops: "bg-[radial-gradient(circle,rgba(34,197,94,0.35)_0%,rgba(22,163,74,0.15)_50%,transparent_75%)]",
};

const BADGE_TEXTS: Record<string, string> = {
  mobile: "1400+ Apps Shipped",
  web: "99.9% Uptime SLA",
  ai: "LLM & RAG Pipelines",
  design: "Human-Centric UX",
  blockchain: "Smart Contract Audits",
  devops: "Automated CI/CD",
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = SERVICES_DATA[slug];
  if (!data) notFound();

  const half = Math.ceil(data.techStack.length / 2);
  const glowClass = GLOW_COLORS[slug] || GLOW_COLORS.mobile;
  const badgeText = BADGE_TEXTS[slug] || "Global Standard";

  return (
    <>
      <SubNav links={SERVICE_LINKS} label="Services" />

      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden pt-8 pb-12 sm:pt-10 sm:pb-12 lg:pt-10 lg:pb-14">
        <GradientMesh />
        <Grain />

        <Container className="relative">
          <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-20">
            <div className="flex flex-col items-start">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services/mobile" },
                  { label: data.title },
                ]}
              />

              <Reveal from="up" className="mt-4">
                <Eyebrow>{data.category}</Eyebrow>
              </Reveal>

              <Reveal from="up" delay={0.06} className="mt-2">
                <h1 className="max-w-2xl text-display-lg sm:text-display-xl">{data.tagline}</h1>
              </Reveal>

              <Reveal from="up" delay={0.14} className="mt-4">
                <p className="max-w-xl text-lead text-ink-600">{data.description}</p>
              </Reveal>

              <Reveal from="up" delay={0.22} className="mt-6 flex flex-wrap gap-3">
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
                {/* Ambient Radial Backdrop Glow */}
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px]",
                    glowClass
                  )}
                />

                {/* Service Hero Image Card Frame */}
                <ServiceHeroImage src={data.heroImage} alt={data.title} badgeText={badgeText} />

              </Reveal>
            </Parallax>

          </div>

          <Reveal from="up" delay={0.1} className="mt-16 border-t border-hairline pt-10">
            <Stats items={[...data.heroStats]} layout="rail" columns={4} />
          </Reveal>
        </Container>
      </section>

      {slug === "mobile" && <TheChallenge />}

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
            {data.process.map((step, index) => {
              const isLast = index === data.process.length - 1;
              const isRowEndLg = (index + 1) % 4 === 0;
              const isRowEndMd = (index + 1) % 2 === 0;

              return (
                <StaggerItem key={step.step} from="up" className="relative flex flex-col gap-4">
                  <div className="relative inline-flex">
                    <span className="relative z-10 inline-flex size-12 items-center justify-center rounded-full border border-hairline bg-white font-mono text-sm font-semibold text-brand-500 shadow-sm">
                      {step.step}
                    </span>
                    <span 
                      aria-hidden 
                      className="absolute top-6 left-12 right-[-2rem] h-px bg-brand-300/80 -z-10 hidden md:block" 
                    />
                  </div>
                  <h3 className="text-base font-semibold text-ink-900">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-600">{step.description}</p>
                </StaggerItem>
              );
            })}
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
            {[...data.techStack.slice(0, half), ...data.techStack.slice(0, half), ...data.techStack.slice(0, half), ...data.techStack.slice(0, half)].map((tech, idx) => (
              <TechPill key={`${tech}-${idx}`}>{tech}</TechPill>
            ))}
          </Marquee>
          <Marquee duration={52} gap="0.75rem" reverse>
            {[...data.techStack.slice(half), ...data.techStack.slice(half), ...data.techStack.slice(half), ...data.techStack.slice(half)].map((tech, idx) => (
              <TechPill key={`${tech}-${idx}`}>{tech}</TechPill>
            ))}
          </Marquee>
        </div>
      </Section>

      <CallToAction />
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
