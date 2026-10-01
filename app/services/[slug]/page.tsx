import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Smartphone, Globe, Sparkles, Palette, Layers, Cloud, FolderGit2 } from "lucide-react";
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
import { TrustAndFaqSection } from "@/app/shared/sections/TrustAndFaqSection";
import { ProcessArcLayout } from "@/app/shared/sections/ProcessArcLayout";
import { Capabilities3DCards } from "@/app/shared/sections/Capabilities3DCards";

const SERVICE_ACTION_ICONS: Record<string, React.ReactNode> = {
  mobile: <Smartphone className="size-4 text-brand-300" />,
  web: <Globe className="size-4 text-brand-300" />,
  ai: <Sparkles className="size-4 text-brand-300" />,
  design: <Palette className="size-4 text-brand-300" />,
  blockchain: <Layers className="size-4 text-brand-300" />,
  devops: <Cloud className="size-4 text-brand-300" />,
};

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
  return { title: data.title, description: data.metaDescription };
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
  mobile: "bg-[radial-gradient(circle,rgba(0,187,169,0.22)_0%,rgba(0,107,125,0.1)_50%,transparent_75%)]",
  web: "bg-[radial-gradient(circle,rgba(0,107,125,0.22)_0%,rgba(10,46,77,0.1)_50%,transparent_75%)]",
  ai: "bg-[radial-gradient(circle,rgba(60,207,199,0.22)_0%,rgba(0,187,169,0.1)_50%,transparent_75%)]",
  design: "bg-[radial-gradient(circle,rgba(0,187,169,0.2)_0%,rgba(0,107,125,0.1)_50%,transparent_75%)]",
  blockchain: "bg-[radial-gradient(circle,rgba(0,107,125,0.2)_0%,rgba(10,46,77,0.1)_50%,transparent_75%)]",
  devops: "bg-[radial-gradient(circle,rgba(60,207,199,0.2)_0%,rgba(0,187,169,0.1)_50%,transparent_75%)]",
};

const BADGE_TEXTS: Record<string, string> = {
  mobile: "1400+ Apps Shipped",
  web: "99.9% Uptime SLA",
  ai: "LLM & RAG Pipelines",
  design: "Human-Centric UX",
  blockchain: "Smart Contract Audits",
  devops: "Automated CI/CD",
};

function formatTwoColorTitle(text: string) {
  const words = text.split(" ");
  if (words.length <= 2) {
    return <span className="bg-linear-to-r from-[#006B7D] to-[#00d2c4] bg-clip-text text-transparent">{text}</span>;
  }
  const mid = Math.ceil(words.length / 2);
  const firstHalf = words.slice(0, mid).join(" ");
  const secondHalf = words.slice(mid).join(" ");
  return (
    <>
      <span className="text-slate-900">{firstHalf}</span> <br />
      <span className="bg-linear-to-r from-[#006B7D] to-[#00d2c4] bg-clip-text text-transparent">
        {secondHalf}
      </span>
    </>
  );
}

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
      <section className="relative isolate overflow-hidden pt-5 pb-6 sm:pt-6 sm:pb-8 lg:pt-6 lg:pb-8">
        <GradientMesh />
        <Grain />

        <Container className="relative">
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
            <div className="flex flex-col items-start">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services/mobile" },
                  { label: data.title },
                ]}
              />

              <Reveal from="up" className="mt-2.5 sm:mt-3">
                <Eyebrow>{data.category}</Eyebrow>
              </Reveal>

              <Reveal from="up" delay={0.06} className="mt-1.5">
                <h1 className="max-w-2xl text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-slate-900 leading-tight">
                  {formatTwoColorTitle(data.tagline)}
                </h1>
              </Reveal>

              <Reveal from="up" delay={0.14} className="mt-2 sm:mt-3">
                <p className="max-w-xl text-xs sm:text-sm text-ink-600 leading-relaxed">{data.description}</p>
              </Reveal>

              <Reveal from="up" delay={0.22} className="mt-4 flex flex-wrap gap-2.5">
                <Button 
                  href="/contact" 
                  size="md" 
                  variant="primary" 
                  icon={SERVICE_ACTION_ICONS[slug] || <Sparkles className="size-4 text-brand-300" />}
                  magnetic
                >
                  {data.ctaText}
                </Button>
                <Button 
                  href="/portfolio" 
                  size="md" 
                  variant="outline" 
                  icon={<FolderGit2 className="size-4 text-brand-600" />}
                >
                  View our work
                </Button>
              </Reveal>
            </div>

            {/* Service Hero JPG Image Visual */}
            <Parallax distance={20} className="relative flex justify-center">
              <Reveal from="up" scale={0.96} className="relative w-full max-w-[360px] sm:max-w-[420px]">
                {/* Ambient Radial Backdrop Glow */}
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[50px]",
                    glowClass
                  )}
                />

                {/* Service Hero Image Card Frame */}
                <ServiceHeroImage src={data.heroImage} alt={data.title} />

              </Reveal>
            </Parallax>

          </div>

          <Reveal from="up" delay={0.1} className="mt-6 sm:mt-8 border-t border-hairline pt-4 sm:pt-5">
            <Stats items={[...data.heroStats]} layout="rail" columns={4} />
          </Reveal>
        </Container>
      </section>

      {/* ── Business Challenge Interstitial ── */}
      <TheChallenge />

      {/* ── Capabilities: 3D Elevated Feature Cards Grid ── */}
      <Capabilities3DCards
        eyebrow="Capabilities"
        title={`What we deliver in ${data.title.toLowerCase()}`}
        description="Every engagement is shaped around your goals, not a template. This is the ground we cover."
        features={data.features}
      />

      {/* ── Process: Arc Track Layout ── */}
      <ProcessArcLayout
        eyebrow="How we work"
        title="From first conversation to live product."
        subtitle="A proven, transparent delivery methodology for engineering products that scale."
        steps={data.process}
      />

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
              <TechPill key={`${tech}-${idx}`} direction="left">{tech}</TechPill>
            ))}
          </Marquee>
          <Marquee duration={52} gap="0.75rem" reverse>
            {[...data.techStack.slice(half), ...data.techStack.slice(half), ...data.techStack.slice(half), ...data.techStack.slice(half)].map((tech, idx) => (
              <TechPill key={`${tech}-${idx}`} direction="right">{tech}</TechPill>
            ))}
          </Marquee>
        </div>
      </Section>

      <TrustAndFaqSection />

      <CallToAction />
    </>
  );
}

function TechPill({ children, direction = "left" }: { children: React.ReactNode; direction?: "left" | "right" }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-hairline bg-white px-5 py-2.5 text-sm font-medium whitespace-nowrap text-ink-700 shadow-xs transition-colors duration-300 hover:border-brand-300 hover:text-brand-600">
      {direction === "left" ? (
        <ArrowLeft aria-hidden className="size-3 text-brand-300" />
      ) : (
        <ArrowRight aria-hidden className="size-3 text-brand-300" />
      )}
      {children}
    </span>
  );
}
