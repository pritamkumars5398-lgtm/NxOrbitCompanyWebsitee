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
import { TrustAndFaqSection } from "@/app/shared/sections/TrustAndFaqSection";
import { ProcessArcLayout } from "@/app/shared/sections/ProcessArcLayout";
import { TechVectorInfographic } from "@/app/shared/sections/TechVectorInfographic";
import { TechStackEcosystem } from "@/app/shared/sections/TechStackEcosystem";

const TECH_HERO_ASSETS: Record<
  string,
  { logo: string; glowClass: string; rgb: string; label: string; version: string }
> = {
  "react-native": {
    logo: "https://icon.icepanel.io/Technology/svg/React.svg",
    glowClass: "border-sky-500/20 bg-sky-950/20 shadow-sky-500/5",
    rgb: "14, 165, 233",
    label: "React Native Core Engine",
    version: "v0.74.x",
  },
  flutter: {
    logo: "https://icon.icepanel.io/Technology/svg/Flutter.svg",
    glowClass: "border-cyan-500/20 bg-cyan-950/20 shadow-cyan-500/5",
    rgb: "6, 182, 212",
    label: "Flutter Rendering Engine",
    version: "v3.22.x",
  },
  ios: {
    logo: "https://icon.icepanel.io/Technology/svg/Swift.svg",
    glowClass: "border-orange-500/20 bg-orange-950/20 shadow-orange-500/5",
    rgb: "249, 115, 22",
    label: "Swift Native SDK Compiler",
    version: "v5.10",
  },
  android: {
    logo: "https://icon.icepanel.io/Technology/svg/Kotlin.svg",
    glowClass: "border-purple-500/20 bg-purple-950/20 shadow-purple-500/5",
    rgb: "168, 85, 247",
    label: "Kotlin JVM Runtime Environment",
    version: "v2.0.x",
  },
  nodejs: {
    logo: "https://icon.icepanel.io/Technology/svg/Node.js.svg",
    glowClass: "border-emerald-500/20 bg-emerald-950/20 shadow-emerald-500/5",
    rgb: "16, 185, 129",
    label: "Node.js V8 Runtime Engine",
    version: "v20.x LTS",
  },
  nextjs: {
    logo: "https://icon.icepanel.io/Technology/svg/Next.js.svg",
    glowClass: "border-white/10 bg-white/5 shadow-white/5",
    rgb: "255, 255, 255",
    label: "Next.js Production Server",
    version: "v14.2.x",
  },
};

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
function formatTwoColorTitle(text: string) {
  const words = text.split(" ");
  if (words.length <= 2) {
    return <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">{text}</span>;
  }
  const mid = Math.ceil(words.length / 2);
  const firstHalf = words.slice(0, mid).join(" ");
  const secondHalf = words.slice(mid).join(" ");
  return (
    <>
      <span className="text-white">{firstHalf}</span> <br />
      <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
        {secondHalf}
      </span>
    </>
  );
}

export default async function TechnologyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = TECHNOLOGY_DATA[slug];
  if (!data) notFound();

  const asset = TECH_HERO_ASSETS[data.slug] || TECH_HERO_ASSETS["react-native"];
  const isNextJs = data.slug === "nextjs";

  return (
    <>
      <SubNav links={TECHNOLOGY_LINKS} label="Technology" />

      {/* ── Hero: dark ── */}
      <section className="relative isolate overflow-hidden bg-brand-950 pt-8 pb-12 sm:pt-10 sm:pb-12 lg:pt-10 lg:pb-14">
        <Aurora tone="dark" />
        <GridField tone="dark" />
        <Grain />

        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20">
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
                <h1 className="max-w-2xl text-display-lg text-white sm:text-display-xl leading-[1.05]">
                  {formatTwoColorTitle(data.tagline)}
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

            <Reveal from="right" className="relative flex justify-center w-full group/hero">
              {/* Ambient Tech Glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-10 -z-10 rounded-full blur-3xl opacity-60 transition-opacity duration-500 group-hover/hero:opacity-80"
                style={{
                  background: `radial-gradient(circle, rgba(${asset.rgb}, 0.22) 0%, transparent 70%)`,
                }}
              />

              {/* Futuristic Glassmorphism Tech Card */}
              <div
                className={`relative flex flex-col items-center justify-center p-8 sm:p-10 rounded-2xl border backdrop-blur-md aspect-square w-full max-w-[380px] mx-auto shadow-2xl transition-all duration-500 group-hover/hero:-translate-y-1 ${asset.glowClass}`}
              >
                {/* Tech Logo */}
                <div className="relative flex items-center justify-center p-6 bg-brand-950/40 rounded-2xl border border-white/5 shadow-inner">
                  <img
                    src={asset.logo}
                    alt={data.title}
                    className="size-24 sm:size-28 object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/hero:scale-110"
                    style={isNextJs ? { filter: "invert(1) brightness(2)" } : undefined}
                    suppressHydrationWarning
                  />
                </div>

                {/* Subtitle Details */}
                <div className="mt-6 flex flex-col items-center text-center">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                    {asset.label}
                  </span>
                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono font-medium text-teal-400">
                    <span
                      className="size-1.5 rounded-full animate-pulse"
                      style={{ backgroundColor: `rgb(${asset.rgb})` }}
                    />
                    {asset.version}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal from="up" delay={0.1} className="mt-16 border-t border-white/10 pt-10">
            <Stats items={[...data.heroStats]} tone="light" layout="rail" columns={4} />
          </Reveal>
        </Container>
      </section>

      {/* ── Engineering detail: Serpentine Vector Infographic Timeline ── */}
      <TechVectorInfographic
        eyebrow="Engineering detail"
        title={`How we build with ${data.title.replace(" Development", "")}.`}
        description="The specifics that decide whether a codebase is still pleasant to work in two years from now."
        features={data.features}
      />

      {/* ── Process: Arc Track Layout ── */}
      <ProcessArcLayout
        eyebrow="Delivery"
        title="What working with us looks like."
        subtitle="The same proven process on every engagement, whatever the tech stack underneath."
        steps={data.process}
      />

      {/* ── Stack: TechStackEcosystem matching reference image design ── */}
      <TechStackEcosystem
        eyebrow="ECOSYSTEM"
        title="Libraries and services we run in production."
        description="Tested, scalable building blocks selected for performance and long-term stability."
        techStack={data.techStack}
      />

      <TrustAndFaqSection />

      <CallToAction />
    </>
  );
}
