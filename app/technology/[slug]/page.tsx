import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { TECHNOLOGY_DATA } from "@/app/core/data/technology";
import { TECHNOLOGY_LINKS } from "@/app/core/data/navigation";
import { Aurora, Grain, GridField } from "@/app/shared/backdrop/Backdrops";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";
import { CallToAction } from "@/app/shared/sections/CallToAction";
import { Breadcrumb } from "@/app/shared/ui/Breadcrumb";
import { Button } from "@/app/shared/ui/Button";
import { Container, Divider, Eyebrow, Section, SectionHeading } from "@/app/shared/ui/Layout";
import { Stats } from "@/app/shared/ui/Stats";
import { SubNav } from "@/app/shared/ui/SubNav";
import { TerminalCard } from "@/app/technology/components/TerminalCard";
import { TrustAndFaqSection } from "@/app/shared/sections/TrustAndFaqSection";
import { ProcessArcLayout } from "@/app/shared/sections/ProcessArcLayout";

export async function generateStaticParams() {
  return Object.keys(TECHNOLOGY_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = TECHNOLOGY_DATA[slug];
  if (!data) return { title: "Not Found" };
  return { title: data.metaTitle, description: data.metaDescription };
}

/**
 * Technology detail page.
 *
 * Layout signature: a **dark, engineering-flavoured** hero fronted by a
 * terminal panel, then alternating full-width feature rows. Where the service
 * template is editorial and light, this one reads as documentation.
 */
export default async function TechnologyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = TECHNOLOGY_DATA[slug];
  if (!data) notFound();

  const terminalLines = [
    `# ${data.title.toLowerCase()} — production setup`,
    `nxt init ${data.slug} --template enterprise`,
    "nxt add ci --provider github --checks lint,test,e2e",
    "nxt deploy --env staging",
    "# build passed in 2m 41s",
  ];

  return (
    <>
      <SubNav links={TECHNOLOGY_LINKS} label="Technology" />

      {/* ── Hero: dark ── */}
      <section className="relative isolate overflow-hidden bg-brand-950 pt-8 pb-12 sm:pt-10 sm:pb-12 lg:pt-10 lg:pb-14">
        <Aurora tone="dark" />
        <GridField tone="dark" />
        <Grain />

        <Container className="relative">
          <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20">
            <div className="flex flex-col items-start">
              <Breadcrumb
                tone="dark"
                items={[
                  { label: "Home", href: "/" },
                  { label: "Technology", href: "/technology/react-native" },
                  { label: data.title },
                ]}
              />

              <Reveal from="up" className="mt-4">
                <Eyebrow tone="light">{data.category}</Eyebrow>
              </Reveal>

              <Reveal from="up" delay={0.06} className="mt-2">
                <h1 className="max-w-2xl text-display-lg text-white sm:text-display-xl">
                  {data.tagline}
                </h1>
              </Reveal>

              <Reveal from="up" delay={0.14} className="mt-4">
                <p className="max-w-xl text-lead text-ink-300">{data.description}</p>
              </Reveal>

              <Reveal from="up" delay={0.22} className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact" size="lg" variant="accent" withArrow magnetic>
                  {data.ctaText}
                </Button>
                <Button href="/contact" size="lg" variant="outline-light" withArrow>
                  Talk to an Expert
                </Button>
              </Reveal>
            </div>

            <div className="relative">
              <TerminalCard title={`${data.slug}/deploy.sh`} lines={terminalLines} />
            </div>
          </div>

          <Reveal from="up" delay={0.1} className="mt-16 border-t border-white/10 pt-10">
            <Stats items={[...data.heroStats]} tone="light" layout="rail" columns={4} />
          </Reveal>
        </Container>
      </section>

      {/* ── Features: full-width ledger rows ── */}
      <Section tone="white" spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="Engineering detail"
            title={`How we build with ${data.title.replace(" Development", "")}.`}
            description="The specifics that decide whether a codebase is still pleasant to work in two years from now."
            className="mb-6"
          />

          <div className="flex flex-col">
            {data.features.map((feature, index) => (
              <Reveal
                key={feature.title}
                from="up"
                className="group grid gap-4 border-t border-hairline py-9 md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1.15fr)] md:items-baseline md:gap-10"
              >
                <span className="font-mono text-sm text-ink-300 tabular-nums transition-colors duration-500 group-hover:text-brand-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-display-sm text-ink-900">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-ink-600 md:text-base">
                  {feature.description}
                </p>
              </Reveal>
            ))}
            <Divider />
          </div>
        </Container>
      </Section>

      {/* ── Process: Arc Track Layout ── */}
      <ProcessArcLayout
        eyebrow="Delivery"
        title="What working with us looks like."
        subtitle="The same proven process on every engagement, whatever the tech stack underneath."
        steps={data.process}
      />

      {/* ── Stack: bordered cell grid ── */}
      <Section tone="white" spacing="md">
        <Container>
          <Reveal className="mb-10 flex flex-col gap-4">
            <Eyebrow>Ecosystem</Eyebrow>
            <h2 className="max-w-xl text-display-sm sm:text-display-md">
              Libraries and services we run in production.
            </h2>
          </Reveal>

          <Stagger
            stagger={0.03}
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-3 lg:grid-cols-4"
          >
            {data.techStack.map((tech) => (
              <StaggerItem
                key={tech}
                from="none"
                className="flex items-center bg-white px-5 py-5 text-sm font-medium text-ink-700 transition-colors duration-300 hover:bg-brand-50 hover:text-brand-600"
              >
                {tech}
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <TrustAndFaqSection />

      <CallToAction />
    </>
  );
}
