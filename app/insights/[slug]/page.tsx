import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  Clock,
  Calendar,
  CheckCircle2,
  Sparkles,
  Quote,
  Share2,
  HelpCircle,
  ShieldCheck,
  Layers,
  Cpu,
  BookOpen,
  Cloud,
  Warehouse,
  Workflow,
} from "lucide-react";
import { cn } from "@/app/core/lib/cn";
import { INSIGHTS_DATA } from "@/app/core/data/insights";
import { Container, Eyebrow, Section } from "@/app/shared/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";
import { CallToAction } from "@/app/shared/sections/CallToAction";
import { Breadcrumb } from "@/app/shared/ui/Breadcrumb";
import { Button } from "@/app/shared/ui/Button";

const ICONS_MAP: Record<string, React.ElementType> = {
  "erp-implementation": Layers,
  "modernizing-legacy-systems": BookOpen,
  "ai-in-enterprise": Cpu,
  "cloud-devops": Cloud,
  "warehouse-digital-transformation": Warehouse,
  "business-process-automation": Workflow,
};

export async function generateStaticParams() {
  return Object.keys(INSIGHTS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = INSIGHTS_DATA[slug];
  if (!data) return { title: "Insight Not Found | NXT Orbit" };
  return {
    title: data.title,
    description: data.metaDescription,
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = INSIGHTS_DATA[slug];

  if (!data) {
    notFound();
  }

  const Icon = ICONS_MAP[slug] || Layers;
  const otherInsights = Object.values(INSIGHTS_DATA).filter((item) => item.slug !== slug);

  return (
    <div className="relative isolate overflow-hidden bg-white text-slate-900">
      {/* ── Breadcrumb & Top Navigation Bar ── */}
      <div className="border-b border-slate-200/80 bg-slate-50/60 py-3.5">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Insights", href: "/#insights" },
                { label: data.title },
              ]}
            />
            <Link
              href="/#insights"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#008c83] transition-colors"
            >
              <ArrowLeft className="size-3.5" />
              Back to all insights
            </Link>
          </div>
        </Container>
      </div>

      {/* ── Editorial Hero ── */}
      <header className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200/70 overflow-hidden bg-linear-to-b from-slate-50/80 via-white to-white">
        {/* Ambient background glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 size-[32rem] rounded-full bg-teal-500/10 blur-[130px]"
        />

        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
            {/* Left Column: Category, Headline, Summary, Meta */}
            <div className="flex flex-col items-start gap-6">
              <Reveal from="up">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-teal-500/20 bg-teal-50 px-4 py-1.5">
                  <span className="size-2 rounded-full bg-[#008c83] animate-pulse" />
                  <Eyebrow tone="brand">{data.category}</Eyebrow>
                </div>
              </Reveal>

              <Reveal from="up" delay={0.06}>
                <h1 className="text-display-md sm:text-display-lg lg:text-display-xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
                  {data.title}
                </h1>
              </Reveal>

              <Reveal from="up" delay={0.12}>
                <p className="text-lead text-slate-600 leading-relaxed font-normal max-w-xl">
                  {data.executiveSummary}
                </p>
              </Reveal>

              {/* Meta information row */}
              <Reveal from="up" delay={0.18}>
                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-200 w-full text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-3">
                    <img
                      src={data.author.avatar}
                      alt={data.author.name}
                      className="size-9 rounded-full object-cover border border-teal-500/30"
                    />
                    <div>
                      <span className="block font-bold text-slate-900 text-sm">{data.author.name}</span>
                      <span className="text-[11px] text-slate-500">{data.author.role}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-slate-500 ml-auto sm:ml-0">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-3.5 text-[#008c83]" />
                      {data.readTime}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="size-3.5 text-[#008c83]" />
                      {data.publishedDate}
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: 3D Visual Artwork Card with subtle depth */}
            <Reveal from="up" delay={0.1}>
              <div className="relative group overflow-hidden rounded-3xl border border-slate-200/90 bg-[#06131F] p-2.5">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-950 flex items-center justify-center">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-linear-to-t from-[#06131F] via-transparent to-transparent opacity-80"
                  />
                  {/* Floating category badge */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-teal-500/20 text-teal-300 border border-teal-500/30">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-teal-300 block">Perspective</span>
                        <span className="text-sm font-bold text-white">{data.title}</span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-teal-300 bg-teal-400/20 px-3 py-1 rounded-full border border-teal-400/40">
                      Verified Architecture
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </header>

      {/* ── Key Operational Challenges (The Problem) ── */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200/80">
        <Container>
          <Reveal className="flex flex-col items-start gap-3 mb-12 max-w-2xl">
            <Eyebrow tone="brand">THE CORE CHALLENGE</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Traditional Approaches Fail at Scale
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Enterprises rarely fail due to technology features; they fail when system changes create live operational friction across connected business units.
            </p>
          </Reveal>

          <Stagger stagger={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.keyChallenges.map((challenge, idx) => (
              <StaggerItem
                key={challenge.title}
                from="up"
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 transition-all duration-300 hover:border-red-300"
              >
                <div>
                  <div className="flex size-10 items-center justify-center rounded-xl bg-red-50 text-red-600 mb-4 border border-red-200/60">
                    <AlertTriangle className="size-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">{challenge.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {challenge.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ── Strategic Architectural Pillars (The Solution) ── */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
        <Container>
          <Reveal className="flex flex-col items-start gap-3 mb-14 max-w-3xl">
            <Eyebrow tone="brand">STRATEGIC ARCHITECTURE</Eyebrow>
            <h2 className="text-display-sm sm:text-display-md font-extrabold text-slate-900 tracking-tight">
              The Engineering Framework Behind Real Uptime
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We apply proven architectural patterns that guarantee zero data loss, high operator adoption, and continuous operational visibility.
            </p>
          </Reveal>

          <div className="flex flex-col gap-8">
            {data.architecturalPillars.map((pillar) => (
              <Reveal
                key={pillar.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 p-7 sm:p-9 rounded-3xl border border-slate-200/90 bg-slate-50/50 transition-all duration-300 hover:border-teal-400 hover:bg-white"
              >
                <div className="lg:col-span-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                      {pillar.title}
                    </h3>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Core Implementation Method
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-8 flex flex-col justify-between gap-6">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {pillar.description}
                  </p>

                  <div className="rounded-2xl bg-white border border-slate-200 p-5">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Architectural Specifications:
                    </h4>
                    <ul className="flex flex-col gap-2.5">
                      {pillar.technicalDetails.map((tech) => (
                        <li key={tech} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="size-4 shrink-0 text-[#008c83] mt-0.5" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Measurable Impact Metrics & Proof Points ── */}
      <section className="py-16 sm:py-20 bg-[#06131F] text-white relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"
        />

        <Container className="relative z-10">
          <Reveal className="flex flex-col items-center text-center gap-3 mb-14 max-w-2xl mx-auto">
            <Eyebrow tone="light">MEASURABLE IMPACT</Eyebrow>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Operational Metrics from Live Implementations
            </h2>
          </Reveal>

          <Stagger stagger={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.impactMetrics.map((metric) => (
              <StaggerItem
                key={metric.label}
                from="up"
                className="flex flex-col justify-between p-8 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md text-center"
              >
                <div>
                  <span className="font-mono text-4xl sm:text-5xl font-black text-[#00d2c4] tracking-tight block mb-2">
                    {metric.value}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">{metric.label}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {metric.detail}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Pull quote banner */}
          <Reveal from="up" delay={0.1} className="mt-14 max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl border border-teal-500/30 bg-teal-950/40 p-8 sm:p-10 text-center">
              <Quote className="size-10 text-teal-400/40 mx-auto mb-4" />
              <blockquote className="text-lg sm:text-xl font-medium text-teal-100 italic leading-relaxed">
                &ldquo;{data.quote.text}&rdquo;
              </blockquote>
              <cite className="mt-4 block text-xs font-mono uppercase tracking-widest text-teal-400 not-italic">
                — {data.quote.attribution}
              </cite>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Frequently Asked Questions ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5 flex flex-col items-start gap-4 lg:sticky lg:top-32">
              <Eyebrow tone="brand">EXECUTIVE QUESTIONS</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Common Implementation Queries Answered
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Have specific technical or contractual questions regarding your environment? Our engineering team is available for architectural consultations.
              </p>
              <Button href="/contact" variant="primary" withArrow className="mt-2">
                Consult an engineer
              </Button>
            </Reveal>

            <div className="lg:col-span-7 flex flex-col gap-5">
              {data.faqs.map((faq) => (
                <Reveal
                  key={faq.question}
                  className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="size-5 shrink-0 text-[#008c83] mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-2">{faq.question}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Explore Other Insights ── */}
      <section className="py-20 sm:py-24 bg-[#06131F] text-white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <Reveal className="flex flex-col items-start gap-3 max-w-2xl">
              <Eyebrow tone="light">MORE PERSPECTIVES</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Explore Related Architectural Insights
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <Link
                href="/#insights"
                className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-md border border-white/15 transition-all hover:bg-white/20"
              >
                View all insights
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <Stagger stagger={0.06} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherInsights.slice(0, 3).map((item) => (
              <StaggerItem key={item.slug} from="up">
                <Link
                  href={`/insights/${item.slug}`}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:bg-white/[0.07] h-full"
                >
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-teal-400 block mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {item.executiveSummary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-teal-400 group-hover:text-teal-300">
                    <span>Read Perspective</span>
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ── Closing Call To Action ── */}
      <CallToAction
        eyebrow="READY TO TRANSFORM?"
        title="Let's build technology that moves your business forward."
        description="Whether you're modernizing legacy systems, implementing enterprise applications, building digital platforms, or planning your next transformation initiative, we'll help you choose the right approach."
        primary={{ label: "Book a Consultation", href: "/contact" }}
        secondary={{ label: "Talk to an Architect", href: "/contact" }}
      />
    </div>
  );
}
