import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Cpu,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
  TrendingUp,
  Workflow,
  Activity,
  SlidersHorizontal,
  Network,
  Users,
  Target,
} from "lucide-react";
import { INSIGHTS_DATA } from "@/app/core/data/insights";
import { GradientMesh, Grain } from "@/app/shared/backdrop/Backdrops";
import { Container, Eyebrow, Section, SectionHeading } from "@/app/shared/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";
import { Button } from "@/app/shared/ui/Button";
import { Breadcrumb } from "@/app/shared/ui/Breadcrumb";
import { StatsBand } from "@/app/shared/sections/StatsBand";
import { TrustAndFaqSection } from "@/app/shared/sections/TrustAndFaqSection";
import { CallToAction } from "@/app/shared/sections/CallToAction";
import { InsightsExplorer } from "./InsightsExplorer";
import { cn } from "@/app/core/lib/cn";

export const metadata: Metadata = {
  title: "Insights — Perspectives for Business & Technology Leaders",
  description:
    "Pragmatic architectural patterns, deployment playbooks, and battle-tested guidance from enterprise software engineers who build mission-critical systems.",
};

const INSIGHTS_STATS = [
  { value: "6", label: "Architectural field papers" },
  { value: "14", label: "Years enterprise engineering" },
  { value: "200+", label: "Engineers & team specialists" },
  { value: "99.99%", label: "System availability target" },
];

const ENGINEERING_DOCTRINE = [
  {
    principle: "Zero-Downtime Migration Architecture",
    whatItMeans:
      "Enterprise transformations cannot afford 72-hour operational halts. We architect bi-directional shadow pipelines and event-driven CDC so cutovers happen with zero live business friction.",
    icon: Activity,
    iconStyle: "bg-teal-50 text-[#008c83] border-teal-100 group-hover:bg-[#008c83] group-hover:text-white group-hover:border-[#008c83]",
  },
  {
    principle: "Pragmatic Business ROI over Tech Vanity",
    whatItMeans:
      "We reject unnecessary technical complexity. Every microservice, cache tier, or AI workflow must directly compress cycle times, reduce operational overhead, or eliminate human error.",
    icon: Target,
    iconStyle: "bg-sky-50 text-sky-600 border-sky-100 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600",
  },
  {
    principle: "Human-First Shop Floor & Executive UX",
    whatItMeans:
      "Software adoption fails when interfaces fight human instinct. We design sub-second keyboard shortcuts for warehouse pickers and intuitive dashboard clarity for corporate leadership.",
    icon: Users,
    iconStyle: "bg-violet-50 text-violet-600 border-violet-100 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600",
  },
  {
    principle: "Resilient, Evolutionary Core Systems",
    whatItMeans:
      "We build domain-driven contracts with explicit boundaries. When business models pivot or enterprise regulations evolve, your core platform adapts cleanly without risky rewrites.",
    icon: ShieldCheck,
    iconStyle: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600",
  },
];

const STRATEGIC_FAQS = [
  {
    question: "How do you avoid operational downtime during core ERP and WMS implementations?",
    answer:
      "We use a parallel 'shadow-execution' model. Legacy databases and new modules run synchronously via event brokers (Kafka/RabbitMQ). Dispatches, inventory changes, and ledger balances update across both systems in real-time until historical accuracy is mathematically proven.",
  },
  {
    question: "When should an enterprise modernize a legacy monolith versus rewriting it?",
    answer:
      "Complete rewrites fail over 70% of the time due to lost edge-case institutional logic. We champion the Strangler Fig pattern: decoupling high-friction modules (like billing, checkout, or dispatch) into high-performance micro-services while preserving stable core ledgers.",
  },
  {
    question: "How does NXT Orbit evaluate where AI delivers legitimate enterprise ROI?",
    answer:
      "We focus on operational bottlenecks: unstructured document intake (OCR + LLM validation for logistics bills of lading), anomaly detection in high-volume warehouse fulfillment, and predictive equipment maintenance — never generic chatbots.",
  },
  {
    question: "What governance and compliance standards do your architectural blueprints follow?",
    answer:
      "All architectures are engineered around SOC-2 Type II controls, GDPR/DPDP data sovereignty standards, PCI-DSS payment boundaries, and strict Role-Based Access Controls (RBAC) with cryptographic audit logging.",
  },
];

export default function InsightsIndexPage() {
  const insights = Object.values(INSIGHTS_DATA);
  const featured = INSIGHTS_DATA["erp-implementation"] || insights[0];

  return (
    <>
      {/* ── Standard Site Hero ── */}
      <section className="relative isolate overflow-hidden pt-24 pb-12 lg:pt-28 lg:pb-12">
        {/* Full-width hero background image container matching Careers & Portfolio */}
        <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop"
            alt="NXTorbit Enterprise Technology Insights & Perspectives"
            className="w-full h-full object-cover object-center lg:object-right opacity-85"
            suppressHydrationWarning
          />
          {/* Single clean responsive gradient mask */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.7)_40%,transparent_80%)] lg:bg-[linear-gradient(90deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.8)_30%,rgba(255,255,255,0.25)_60%,transparent_85%)]" />
        </div>

        <GradientMesh />
        <Grain />

        <Container className="relative">
          <div className="flex flex-col gap-6">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Company", href: "/about" },
                { label: "Insights" },
              ]}
            />

            <Reveal from="up">
              <Eyebrow>Executive perspectives</Eyebrow>
            </Reveal>

            <Reveal from="up" delay={0.06}>
              <h1 className="max-w-3xl text-display-lg sm:text-display-xl font-extrabold text-slate-900">
                Engineering insights for <br />
                <span className="bg-linear-to-r from-[#006B7D] to-[#00d2c4] bg-clip-text text-transparent">
                  business &amp; technology leaders.
                </span>
              </h1>
            </Reveal>

            <Reveal from="up" delay={0.12}>
              <p className="max-w-xl text-lead text-ink-600">
                Pragmatic architectural patterns, deployment playbooks, and battle-tested guidance from enterprise software engineers who design, modernize, and maintain mission-critical systems.
              </p>
            </Reveal>

            <Reveal from="up" delay={0.18} className="flex flex-wrap gap-3">
              <Button href="#papers-directory" size="lg" variant="primary" withArrow magnetic>
                Explore all papers
              </Button>
              <Button href="/contact" size="lg" variant="outline" withArrow>
                Book a consultation
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Proof Band ── */}
      <StatsBand
        items={INSIGHTS_STATS}
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop"
        imageAlt="NXT Orbit enterprise architecture team"
      />

      {/* ── Featured Editorial Spotlight ── */}
      {featured && (
        <Section tone="muted" spacing="md" id="featured-paper">
          <Container>
            <SectionHeading
              eyebrow="Featured Paper"
              title={
                <>
                  Solving cutover downtime in{" "}
                  <span className="text-brand-500">live ERP environments.</span>
                </>
              }
              description="Enterprise ERP transformations often fail not from flawed software, but from live operational friction. Here is how shadow synchronization mitigates risk."
            />

            <div className="mt-8 relative overflow-hidden rounded-2xl border border-hairline bg-white shadow-sm grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Column: Summary & Pillars */}
              <div className="p-7 sm:p-10 lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 text-2xs font-mono font-bold uppercase tracking-wider">
                      <Layers className="size-3 text-brand-500" />
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1 text-ink-400 text-xs font-mono">
                      <Clock className="size-3 text-ink-400" />
                      {featured.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-ink-900 leading-tight mb-3 hover:text-brand-600 transition-colors">
                    <Link href={`/insights/${featured.slug}`}>
                      {featured.title}: Solving Cutover Downtime in Live Environments
                    </Link>
                  </h3>

                  <p className="text-sm text-ink-600 leading-relaxed mb-6">
                    {featured.executiveSummary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    {featured.architecturalPillars.slice(0, 3).map((pillar) => (
                      <div key={pillar.number} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-700">
                        <CheckCircle2 className="size-4 text-brand-500 shrink-0 mt-0.5" />
                        <span>
                          <strong className="font-semibold text-ink-900">{pillar.title}:</strong>{" "}
                          {pillar.description.slice(0, 105)}...
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-hairline flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={featured.author.avatar}
                      alt={featured.author.name}
                      className="size-9 rounded-full object-cover border border-hairline"
                    />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-ink-900">{featured.author.name}</div>
                      <div className="text-2xs text-ink-400">{featured.author.role}</div>
                    </div>
                  </div>

                  <Button href={`/insights/${featured.slug}`} variant="primary" size="md" withArrow magnetic>
                    Read full blueprint
                  </Button>
                </div>
              </div>

              {/* Right Column: Visual Thumbnail */}
              <div className="relative lg:col-span-5 min-h-[260px] lg:min-h-full bg-brand-950 overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="size-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-950/90 via-brand-950/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-white">
                  <p className="text-xs font-medium italic text-slate-200 leading-relaxed mb-1.5">
                    &ldquo;{featured.quote.text}&rdquo;
                  </p>
                  <p className="text-2xs font-mono font-bold text-teal-300">
                    — {featured.quote.attribution}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* ── All Insights Directory Section ── */}
      <Section tone="white" spacing="md" id="papers-directory">
        <Container>
          <SectionHeading
            eyebrow="Architectural Library"
            title={
              <>
                All field reports &amp;{" "}
                <span className="text-brand-500">architectural papers.</span>
              </>
            }
            description="Filter by engineering domain or search across migration strategies, AI workflows, and distributed systems."
          />

          <div className="mt-8">
            <InsightsExplorer items={insights} />
          </div>
        </Container>
      </Section>

      {/* ── Section: The NXT Orbit Engineering Doctrine ── */}
      <Section tone="muted" spacing="lg" id="doctrine">
        <Container>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
            <Reveal from="up">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#008c83]">
                OUR ARCHITECTURAL STANDARDS
              </span>
              <h2 className="mt-3 text-display-md sm:text-display-lg font-extrabold text-slate-900">
                The NXT Orbit Engineering Doctrine
              </h2>
              <p className="mt-4 text-lead text-slate-600 leading-relaxed font-normal">
                Every enterprise module and advisory report we ship adheres to four foundational technical criteria designed to eliminate downtime and protect enterprise balance sheets.
              </p>
            </Reveal>
          </div>

          <Stagger stagger={0.06} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ENGINEERING_DOCTRINE.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem
                  key={item.principle}
                  from="up"
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 transition-all duration-300 hover:border-[#00d2c4] hover:shadow-none hover:-translate-y-1"
                >
                  <div>
                    <div
                      className={cn(
                        "flex size-12 items-center justify-center rounded-2xl border transition-all duration-300 mb-6",
                        item.iconStyle
                      )}
                    >
                      <Icon className="size-6" />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {item.principle}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {item.whatItMeans}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </Section>

      {/* ── Strategic Decision FAQs ── */}
      <TrustAndFaqSection faqs={STRATEGIC_FAQS} />

      {/* ── Call To Action ── */}
      <CallToAction
        eyebrow="READY TO ARCHITECT YOUR NEXT PLATFORM?"
        title="Let's build technology that moves your business forward."
        description="Whether you're modernizing legacy systems, implementing enterprise applications, building digital platforms, or planning your next transformation initiative."
        primary={{ label: "Book a Consultation", href: "/contact" }}
        secondary={{ label: "Talk to Our Team", href: "/contact" }}
      />
    </>
  );
}
