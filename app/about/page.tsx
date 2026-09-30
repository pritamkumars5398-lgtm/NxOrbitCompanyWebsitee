import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Target,
  Users,
  Compass,
  Code2,
  FileCheck,
  Search,
  Activity,
  UserCheck,
  Mail,
  Sparkles,
  Star,
  Award,
  TrendingUp,
  Check,
  Lightbulb,
  RefreshCw,
  Headphones,
  Maximize2,
  Handshake,
  Calendar,
  SlidersHorizontal,
  Network,
  FileSearch,
  Settings,
  Rocket,
} from "lucide-react";
import { Container, Eyebrow, Section } from "@/app/shared/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";
import { Button } from "@/app/shared/ui/Button";
import { CallToAction } from "@/app/shared/sections/CallToAction";
import { cn } from "@/app/core/lib/cn";

export const metadata: Metadata = {
  title: "About NXT Orbit | Enterprise Engineering, Built Around Your Business",
  description:
    "NXT Orbit designs, modernizes, and maintains scalable enterprise software — guided by our Keep It Simple philosophy and a business-first approach.",
  metadataBase: new URL("https://nxt-orbit.com"),
};

const PHILOSOPHY_PRINCIPLES = [
  {
    principle: "Simplify Processes",
    whatItMeans: "Remove unnecessary steps and streamline the way work gets done.",
    icon: SlidersHorizontal,
    iconStyle:
      "bg-sky-50 text-sky-600 border-sky-100 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600",
  },
  {
    principle: "Connect Systems",
    whatItMeans: "Bring information together instead of creating isolated applications.",
    icon: Network,
    iconStyle:
      "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600",
  },
  {
    principle: "Design for Users",
    whatItMeans: "Build technology people can adopt naturally, creating confidence — not confusion.",
    icon: Users,
    iconStyle:
      "bg-violet-50 text-violet-600 border-violet-100 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600",
  },
  {
    principle: "Focus on Value",
    whatItMeans: "Prioritize business outcomes and avoid unnecessary features.",
    icon: Target,
    iconStyle:
      "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600",
  },
  {
    principle: "Build for the Long Term",
    whatItMeans: "Create solutions that remain relevant and scale as businesses evolve.",
    icon: ShieldCheck,
    iconStyle:
      "bg-teal-50 text-[#008c83] border-teal-100 group-hover:bg-[#008c83] group-hover:text-white group-hover:border-[#008c83]",
  },
];

const HOW_WE_BUILD = [
  {
    title: "Understand Before We Build",
    description:
      "Every engagement begins with understanding your business processes, operational challenges, user needs, and goals before defining technology.",
    meansForYou: "Solutions that solve the right problems — not just technical problems.",
    icon: Compass,
  },
  {
    title: "Simplify and Automate",
    description:
      "We streamline workflows, reduce manual effort, and automate repetitive business operations.",
    meansForYou: "Teams spend less time on administrative work and more time on what matters.",
    icon: Zap,
  },
  {
    title: "Build with Purpose",
    description:
      "Solutions are designed around business outcomes, user needs, and long-term sustainability — not generic templates.",
    meansForYou: "Technology that works the way your business actually works.",
    icon: Target,
  },
  {
    title: "Connect the Enterprise",
    description:
      "ERP, CRM, finance, warehouse, HR, cloud, and third-party systems integrate into one connected ecosystem.",
    meansForYou: "One source of truth. No more scattered information.",
    icon: Layers,
  },
  {
    title: "Apply Technology Where It Matters",
    description:
      "AI, analytics, cloud, and automation are used where they create measurable business value.",
    meansForYou: "Technology investments that deliver real returns.",
    icon: Cpu,
  },
  {
    title: "Partner for the Long Term",
    description:
      "Implementation is the beginning, not the end. We continue supporting and improving systems as businesses grow.",
    meansForYou: "A technology partner who stays with you beyond go-live.",
    icon: Users,
  },
];

const ENGINEERING_PRACTICES = [
  {
    title: "Architecture & Solution Design",
    description: "Solutions designed for scalability, performance, and future integration.",
  },
  {
    title: "Development Standards",
    description: "Version control, peer reviews, and structured development practices.",
  },
  {
    title: "Quality Assurance & Testing",
    description: "Comprehensive testing, user acceptance validation, and deployment readiness.",
  },
  {
    title: "Documentation & Knowledge Transfer",
    description: "Clear technical documentation and user guidance for smooth implementation.",
  },
  {
    title: "Security & Performance",
    description: "Security, reliability, and performance considered throughout development.",
  },
  {
    title: "Continuous Improvement",
    description: "Ongoing enhancements, optimization, and support as business needs evolve.",
  },
];

const CHECKPOINT_SEQUENCE = [
  { stepNumber: "STEP 01", title: "Architecture Review", icon: FileSearch },
  { stepNumber: "STEP 02", title: "Peer Code Audit", icon: Code2 },
  { stepNumber: "STEP 03", title: "Automated QA & Regression", icon: Settings },
  { stepNumber: "STEP 04", title: "Security Scan", icon: ShieldCheck },
  { stepNumber: "STEP 05", title: "UAT Sign-off", icon: UserCheck },
  { stepNumber: "STEP 06", title: "Monitored Deployment", icon: Rocket },
];

const WHY_PARTNERS_STAY = [
  {
    title: "Deep Business Understanding That Evolves",
    description:
      "As we work together, we gain a deeper understanding of your business, enabling us to deliver enhancements that align with your evolving goals.",
    icon: Lightbulb,
  },
  {
    title: "A Dedicated Team That Knows Your Systems",
    description:
      "The teams supporting your business understand your architecture, processes, and integrations, reducing onboarding time and ensuring continuity.",
    icon: Users,
  },
  {
    title: "Continuous Improvement",
    description:
      "We help organizations optimize existing systems, introduce new capabilities, and modernize applications without disrupting operations.",
    icon: RefreshCw,
  },
  {
    title: "Reliable Support Beyond Go-Live",
    description:
      "Structured maintenance, issue resolution, performance monitoring, and enhancement planning.",
    icon: Headphones,
  },
  {
    title: "Solutions Designed to Scale",
    description:
      "Enterprise systems accommodate new users, business units, integrations, and operational requirements as your organization grows.",
    icon: Maximize2,
  },
  {
    title: "Transparency and Trust",
    description:
      "Clear communication, milestone-based delivery, and collaborative planning build relationships based on accountability.",
    icon: Handshake,
  },
];

const LEADERSHIP_TEAM = [
  {
    name: "Jaydeep Gajera",
    role: "Leadership & Strategic Growth",
    description:
      "Focuses on enterprise client partnerships, digital strategy, and aligning software delivery with business goals.",
    email: "jaydeep@nxt-orbit.com",
    avatar: "/assets/consulting-team.png",
  },
  {
    name: "Yogesh Phanse",
    role: "Leadership & Technology Operations",
    description:
      "Oversees software architecture, technical execution, and engineering delivery across complex multi-system environments.",
    email: "yogesh.phanase@nxt-orbit.com",
    avatar: "/assets/consulting-team.png",
  },
  {
    name: "Jaydeep Gajera",
    role: "Leadership & Strategic Growth",
    description:
      "Focuses on enterprise client partnerships, digital strategy, and aligning software delivery with business goals.",
    email: "jaydeep@nxt-orbit.com",
    avatar: "/assets/consulting-team.png",
  },
];


export default function AboutPage() {
  return (
    <>
      {/* ── Section 1 — Hero & Vision ── */}
      <section className="relative isolate overflow-hidden min-h-[580px] lg:min-h-[660px] flex items-center pt-28 pb-20 lg:pt-36 lg:pb-28">
        {/* Full Hero Background Image */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/assets/consulting-team.png"
            alt="NXT Orbit Enterprise Advisory"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Multi-layered overlay for high contrast and readability */}
        <div 
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 to-white/40 lg:via-white/90 lg:to-transparent" 
        />
        <div 
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-white via-transparent to-white/60" 
        />

        <Container className="relative z-10 w-full">
          <div className="max-w-3xl flex flex-col items-start gap-6">
            <Reveal from="up">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-white/90 px-4 py-1.5 backdrop-blur-md shadow-sm">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#008c83]">
                  THE WAY WE WORK
                </span>
              </div>
            </Reveal>

            <Reveal from="up" delay={0.06}>
              <h1 className="text-display-md sm:text-display-lg lg:text-display-xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Building Enterprise Technology with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008c83] via-teal-600 to-cyan-600">
                  Business Understanding
                </span>{" "}
                at the Center.
              </h1>
            </Reveal>

            <Reveal from="up" delay={0.12}>
              <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-normal">
                NXT Orbit partners with manufacturing and service businesses to design, develop, and modernize enterprise technology that supports operational excellence, digital transformation, and sustainable growth.
              </p>
            </Reveal>

            <Reveal from="up" delay={0.18}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button 
                  href="/contact" 
                  size="lg" 
                  variant="primary" 
                  icon={<Calendar className="size-4 text-brand-300" />}
                >
                  Book a Consultation
                </Button>
                <Button 
                  href="#our-story" 
                  size="lg" 
                  variant="accent"
                  icon={<Compass className="size-4 text-white" />}
                >
                  Explore Our Story
                </Button>
              </div>
            </Reveal>

            {/* 3 Executive Trust Pillars */}
            <Reveal from="up" delay={0.24}>
              <div className="grid grid-cols-3 gap-6 pt-8 mt-4 border-t border-slate-300/80 w-full max-w-lg">
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-slate-900">5+</span>
                  <span className="text-xs text-slate-600 font-medium">Years Building</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-[#008c83]">50+</span>
                  <span className="text-xs text-slate-600 font-medium">Systems Delivered</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-slate-900">100%</span>
                  <span className="text-xs text-slate-600 font-medium">Business-Driven</span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Section 2 — The "Keep It Simple" Philosophy ── */}
      <Section tone="muted" spacing="lg" id="philosophy" className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <Reveal from="up">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#008c83]">
                OUR PHILOSOPHY
              </span>
              <h2 className="mt-3 text-display-md sm:text-display-lg font-extrabold text-slate-900 tracking-tight leading-tight">
                Simplicity Is Not About Doing Less. It Is About Removing Complexity.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                &ldquo;Keep It Simple&rdquo; is more than our tagline — it is a principle that guides how we think, design, and deliver technology. Businesses already manage enough complexity through operations, regulations, processes, and growth. Technology should reduce that complexity, not add to it.
              </p>
            </Reveal>
          </div>

          {/* Cards Grid: Option 1 (3 in row 1, 2 in row 2, step numbering hidden) */}
          <Stagger stagger={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {PHILOSOPHY_PRINCIPLES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <StaggerItem
                  key={item.principle}
                  from="up"
                  className={cn(
                    "group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 transition-all duration-300 hover:border-[#00d2c4] hover:shadow-none hover:-translate-y-1",
                    idx < 3 ? "lg:col-span-2" : "lg:col-span-3",
                    idx === 4 ? "md:col-span-2 lg:col-span-3" : "md:col-span-1"
                  )}
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

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug">
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

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-slate-500 leading-relaxed">
              Simple does not mean basic. Simple means clear, efficient, maintainable, and purposeful. That is what Keep It Simple means at NXT Orbit.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── Section 3 — Our Story (Reference UI Design: Deep Tech Theme, Glowing Cyber Globe & Glass Cards) ── */}
      <section
        id="our-story"
        className="relative isolate overflow-hidden bg-[#030b18] py-16 lg:py-24 text-white border-t border-cyan-900/30"
      >
        {/* Ambient background glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-20 size-[36rem] rounded-full bg-cyan-500/15 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 size-[42rem] rounded-full bg-blue-600/20 blur-[150px]"
        />

        {/* High-Tech Laptop + Holographic Globe Visual matching Reference right side */}
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-full lg:w-7/12 overflow-hidden select-none -z-10 flex justify-end">
          <img
            src="/assets/our-story-tech.jpg"
            alt="NXT Orbit Digital Innovation"
            className="w-full h-full object-cover object-right opacity-90 lg:opacity-100"
          />
          {/* Edge gradient masks so text on left remains 100% readable while the globe & laptop visual on right is crisp and clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030b18] via-[#030b18]/70 to-transparent lg:via-[#030b18]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030b18]/70 via-transparent to-[#030b18]/40" />
        </div>

        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-center">
            {/* Left Column: Eyebrow, Heading, and 3 Context Paragraphs */}
            <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-5">
              <Reveal from="up">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#00d2c4] drop-shadow-[0_0_12px_rgba(0,210,196,0.5)]">
                  OUR STORY
                </span>
                <h2 className="mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.2]">
                  Built on Business Understanding.{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2c4] via-teal-300 to-cyan-400">
                    Strengthened by Engineering.
                  </span>
                </h2>
              </Reveal>

              <Reveal from="up" delay={0.08} className="flex flex-col gap-3.5 text-sm sm:text-[15px] text-slate-300 leading-relaxed font-normal">
                <p>
                  Technology projects often struggle not because of technical limitations, but because business processes, operational challenges, and long-term objectives are not fully understood before development begins.
                </p>
                <p>
                  That understanding shaped NXT Orbit from the beginning. As organizations embraced digital transformation, we recognized that successful projects required more than technical expertise — they required a deep understanding of business operations, collaboration with stakeholders, and solutions designed around real-world workflows.
                </p>
                <p>
                  Today, our capabilities span enterprise applications, digital platforms, cloud technologies, intelligent automation, and technology consulting. While technology continues to evolve, our focus remains unchanged: delivering solutions that create measurable business value.
                </p>
              </Reveal>
            </div>

            {/* Right Column: 2 Stacked Sleek Glowing Glass Cards matching Reference Image */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-4">
              {/* Card 1: Vision */}
              <Reveal from="right" delay={0.12}>
                <div className="group relative flex items-start gap-4 rounded-2xl border border-cyan-500/30 bg-[#07192f]/60 p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-[#07192f]/80 hover:-translate-y-0.5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan-950/90 border border-cyan-400/40 text-[#00d2c4] shadow-[0_0_14px_rgba(0,210,196,0.25)] transition-transform duration-300 group-hover:scale-105 group-hover:border-cyan-300">
                    <Target className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#00d2c4] mb-1">
                      Our Vision
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                      To be a trusted enterprise technology partner, eliminating operational complexity through digital engineering.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Card 2: Mission */}
              <Reveal from="right" delay={0.18}>
                <div className="group relative flex items-start gap-4 rounded-2xl border border-cyan-500/30 bg-[#07192f]/60 p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-[#07192f]/80 hover:-translate-y-0.5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan-950/90 border border-cyan-400/40 text-[#00d2c4] shadow-[0_0_14px_rgba(0,210,196,0.25)] transition-transform duration-300 group-hover:scale-105 group-hover:border-cyan-300">
                    <Compass className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#00d2c4] mb-1">
                      Our Mission
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                      Leveraging modern software engineering and architecture to help organizations optimize operations, integrate ecosystems, and scale securely.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section 4 — How We Build Enterprise Technology ── */}
      <Section tone="white" spacing="lg" id="how-we-build" className="py-16 sm:py-24 border-t border-hairline">
        <Container>
          <div className="max-w-3xl mb-14">
            <Reveal from="up">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#008c83]">
                OUR METHODOLOGY
              </span>
              <h2 className="mt-3 text-display-md sm:text-display-lg font-extrabold text-slate-900 tracking-tight leading-tight">
                Business-Led, Engineering-Driven, Partnership-Focused.
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Every successful technology initiative begins with understanding the business it is intended to support. Our approach combines business insight, engineering discipline, and structured execution.
              </p>
            </Reveal>
          </div>

          {/* 6-card grid with "What this means for you" line */}
          <Stagger stagger={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_WE_BUILD.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem
                  key={item.title}
                  from="up"
                  className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:border-[#00d2c4] hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-teal-50 text-[#008c83] mb-5 group-hover:bg-[#00d2c4] group-hover:text-[#01141b] transition-colors">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                      {item.description}
                    </p>
                  </div>

                  <div className="rounded-xl bg-teal-50/60 border border-teal-100/80 p-3.5 mt-auto">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#008c83] mb-0.5">
                      What this means for you
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                      {item.meansForYou}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </Section>

      {/* ── Section 5 — Engineering Excellence ── */}
      <Section tone="muted" spacing="lg" id="engineering-excellence" className="py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl mb-12">
            <Reveal from="up">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#008c83]">
                ENGINEERING EXCELLENCE
              </span>
              <h2 className="mt-3 text-display-md sm:text-display-lg font-extrabold text-slate-900 tracking-tight leading-tight">
                Quality Is Built Into the Process, Not Added at the End.
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Reliable enterprise systems require more than technical expertise. They require structured engineering practices that reduce risk, improve quality, and support long-term maintainability.
              </p>
            </Reveal>
          </div>

          {/* 6-box grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {ENGINEERING_PRACTICES.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="size-4 text-[#008c83] shrink-0" />
                  <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pl-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom visual checkpoint sequence strip matching reference design */}
          <div className="rounded-3xl border border-teal-200/90 bg-gradient-to-br from-white via-white to-teal-50/25 p-5 sm:p-7 lg:p-8 shadow-[0_4px_24px_rgba(0,140,131,0.06)]">
            {/* Header: Shield Icon | QUALITY CHECKPOINT SEQUENCE */}
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <div className="flex size-8 items-center justify-center rounded-lg bg-teal-50 text-[#008c83] border border-teal-200/70 shadow-xs">
                <ShieldCheck className="size-4 text-[#008c83]" />
              </div>
              <div className="h-4 w-px bg-slate-300" />
              <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800">
                Quality Checkpoint Sequence
              </h3>
            </div>

            {/* Desktop Sequence (Screens >= 1024px) */}
            <div className="relative hidden lg:grid lg:grid-cols-6 gap-2">
              {CHECKPOINT_SEQUENCE.map((item, idx) => {
                const Icon = item.icon;
                const isLast = idx === CHECKPOINT_SEQUENCE.length - 1;
                return (
                  <div key={item.stepNumber} className="relative flex flex-col items-center text-center group">
                    {/* Connecting line and center dot to the next step */}
                    {!isLast && (
                      <div className="absolute top-[28px] xl:top-[32px] left-1/2 w-full h-[2px] bg-teal-200/90 -z-0 pointer-events-none flex items-center justify-center">
                        <div className="size-2 rounded-full bg-[#00d2c4] ring-2 ring-white shadow-xs" />
                      </div>
                    )}

                    {/* Icon Badge */}
                    <div className="relative z-10 flex size-14 xl:size-16 items-center justify-center rounded-full border-2 border-teal-200/90 bg-gradient-to-b from-teal-50 to-white transition-all duration-300 group-hover:scale-105 group-hover:border-[#00d2c4]">
                      <Icon className="size-6 text-[#008c83]" />
                    </div>

                    {/* Step Pill */}
                    <span className="mt-3.5 inline-flex items-center rounded-full bg-teal-50 border border-teal-200/70 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#008c83]">
                      {item.stepNumber}
                    </span>

                    {/* Step Title */}
                    <h4 className="mt-2 text-xs xl:text-sm font-bold text-slate-900 leading-snug px-1 max-w-[130px]">
                      {item.title}
                    </h4>
                  </div>
                );
              })}
            </div>

            {/* Mobile & Tablet Sequence (Screens < 1024px, optimized for 320px - 768px) */}
            <div className="flex flex-col lg:hidden">
              {CHECKPOINT_SEQUENCE.map((item, idx) => {
                const Icon = item.icon;
                const isLast = idx === CHECKPOINT_SEQUENCE.length - 1;
                return (
                  <div
                    key={item.stepNumber}
                    className="relative flex items-center gap-3.5 sm:gap-4 pb-6 last:pb-0 group"
                  >
                    {/* Vertical connecting line & center dot to next step */}
                    {!isLast && (
                      <div className="absolute left-[23px] sm:left-[27px] top-[48px] sm:top-[56px] bottom-0 w-[2px] bg-teal-200/90 -z-0 pointer-events-none flex items-center justify-center">
                        <div className="size-2 rounded-full bg-[#00d2c4] ring-2 ring-white shadow-xs" />
                      </div>
                    )}

                    {/* Icon Badge */}
                    <div className="relative z-10 flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-full border-2 border-teal-200/90 bg-gradient-to-b from-teal-50 to-white transition-all duration-300 group-hover:scale-105 group-hover:border-[#00d2c4]">
                      <Icon className="size-5 sm:size-6 text-[#008c83]" />
                    </div>

                    {/* Step Pill & Title */}
                    <div className="flex flex-col min-w-0">
                      <span className="inline-flex self-start items-center rounded-full bg-teal-50 border border-teal-200/70 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#008c83] mb-1">
                        {item.stepNumber}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section 6 — Why Partners Stay (Reference UI Design: Deep Tech Handshake & Glowing Blue Cards) ── */}
      <section
        id="why-partners-stay"
        className="relative isolate overflow-hidden bg-[#040d1a] py-12 lg:py-16 text-white"
      >
        {/* Ambient background glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 size-[34rem] rounded-full bg-cyan-500/15 blur-[130px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 size-[38rem] rounded-full bg-blue-600/20 blur-[140px]"
        />

        {/* Handshake Graphic Placement matching Reference right side */}
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-full lg:w-7/12 overflow-hidden select-none -z-10 flex justify-end">
          <img
            src="/assets/technology-partnership.jpg"
            alt="Technology Partnerships"
            className="w-full h-full object-cover object-right opacity-80 lg:opacity-90"
          />
          {/* Edge gradient masks so text on left remains 100% readable while handshake on right shines */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040d1a] via-[#040d1a]/80 to-transparent lg:via-[#040d1a]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040d1a] via-transparent to-[#040d1a]/60" />
        </div>

        <Container className="relative z-10">
          {/* Header Area */}
          <div className="max-w-3xl mb-7 sm:mb-9">
            <Reveal from="up">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#00d2c4] drop-shadow-[0_0_12px_rgba(0,210,196,0.5)]">
                Our Partnerships
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Technology Partnerships Built for Sustained Evolution.
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Successful technology projects don&apos;t end at deployment. As businesses evolve, systems need to adapt, integrate with new technologies, and support changing operational requirements.
              </p>
            </Reveal>
          </div>

          {/* Cards Grid: Sleek Compact Glassmorphism Cards matching Reference Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {WHY_PARTNERS_STAY.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative flex flex-col justify-between rounded-xl border border-cyan-500/25 bg-[#07192f]/75 p-4.5 sm:p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-[#0a2342]/90 hover:-translate-y-0.5"
                >
                  <div>
                    {/* Top Row with glowing icon badge */}
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-cyan-950/80 border border-cyan-400/40 text-[#00d2c4] shadow-[0_0_12px_rgba(0,210,196,0.25)] transition-transform duration-300 group-hover:scale-105 group-hover:border-cyan-300">
                        <Icon className="size-4.5" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-snug group-hover:text-cyan-200 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Subtle bottom glowing accent line */}
                  <div className="mt-3.5 h-0.5 w-8 rounded-full bg-gradient-to-r from-[#00d2c4] to-transparent opacity-60 group-hover:w-full group-hover:opacity-100 transition-all duration-500" />
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Section 7 — Leadership Team (Exact Reference Parity) ── */}
      <Section tone="none" spacing="lg" id="leadership" className="relative isolate overflow-hidden py-16 sm:py-24 bg-[#f8fcfb] border-t border-b border-slate-200/70">
        {/* Visible Organic Background Curved Wave Structures (Reference Parity) */}
        {/* Top-Right Sweeping Organic Wave */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[42%] max-w-[550px] h-[75%] -z-10 overflow-hidden"
        >
          <svg
            viewBox="0 0 500 600"
            fill="none"
            className="w-full h-full text-[#e0f6f3]"
            preserveAspectRatio="none"
          >
            <path
              d="M160,0 C60,160 20,280 90,400 C160,520 80,570 300,600 L500,600 L500,0 Z"
              fill="currentColor"
            />
            <path
              d="M280,0 C190,140 160,260 220,380 C280,500 220,560 380,600 L500,600 L500,0 Z"
              fill="#cbf0ea"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Bottom-Left Sweeping Organic Wave */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-[36%] max-w-[460px] h-[65%] -z-10 overflow-hidden"
        >
          <svg
            viewBox="0 0 450 500"
            fill="none"
            className="w-full h-full text-[#e4f7f4]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,500 L0,180 C110,130 190,230 230,330 C270,430 200,480 360,500 Z"
              fill="currentColor"
            />
            <path
              d="M0,500 L0,270 C80,220 140,290 170,370 C200,450 160,480 280,500 Z"
              fill="#cbf0ea"
              opacity="0.45"
            />
          </svg>
        </div>

        <Container>
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-14">
            <Reveal from="up">
              {/* Eyebrow: Dash + Our Team */}
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-7 h-0.5 bg-[#008c83] rounded-full inline-block" />
                <span className="text-xs sm:text-sm font-semibold text-[#008c83] tracking-wide">
                  Our Team
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                The People Driving NXT Orbit Forward.
              </h2>
              <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Behind every engagement is a team of leaders committed to building technology that creates lasting business value.
              </p>
            </Reveal>
          </div>

          {/* 3-Column Leadership Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {LEADERSHIP_TEAM.map((leader, index) => (
              <div
                key={`${leader.name}-${index}`}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-teal-400 hover:shadow-xl hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Row: Avatar with Organic Decorative Backdrop + Name & Role */}
                  <div className="flex items-center gap-4 sm:gap-5 pr-5">
                    {/* Avatar with Custom Decorative Backdrop Shape */}
                    <div className="relative shrink-0 flex items-center justify-center size-20 sm:size-22">
                      {/* Card 1: Organic Turquoise/Teal Fluid Splash */}
                      {index === 0 && (
                        <div className="absolute -inset-2 -z-10 rounded-[1.75rem] bg-[#00d2c4]/25 rotate-[-8deg] scale-105 transition-transform duration-500 group-hover:rotate-[-14deg] group-hover:scale-110" />
                      )}

                      {/* Card 2: Mint Rounded Squircle */}
                      {index === 1 && (
                        <div className="absolute -inset-1.5 -z-10 rounded-2xl bg-teal-200/40 rotate-[6deg] transition-transform duration-500 group-hover:rotate-[12deg] group-hover:scale-105" />
                      )}

                      {/* Card 3: Concentric Circular Arc Outline */}
                      {index === 2 && (
                        <>
                          <div className="absolute -inset-2.5 -z-10 rounded-full border-2 border-teal-400/70 border-dashed animate-[spin_24s_linear_infinite]" />
                          <div className="absolute -inset-1 -z-10 rounded-full bg-teal-100/30" />
                        </>
                      )}

                      {/* Photo Image */}
                      <div className="size-full overflow-hidden rounded-2xl border border-white/90 shadow-md bg-slate-100">
                        <img
                          src={leader.avatar}
                          alt={leader.name}
                          className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Name & Role */}
                    <div className="flex flex-col min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#008c83] transition-colors">
                        {leader.name}
                      </h3>
                      <span className="text-[10px] sm:text-[11px] font-bold text-[#008c83] uppercase tracking-wider mt-1 leading-snug">
                        {leader.role}
                      </span>
                    </div>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mt-4 sm:mt-5">
                    {leader.description}
                  </p>
                </div>

                {/* Footer Row: Email Link + Executive Pill Badge */}
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${leader.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-950 transition-colors truncate"
                  >
                    <Mail className="size-3.5 shrink-0 text-teal-600 stroke-[2]" />
                    <span className="truncate">{leader.email}</span>
                  </a>
                  <span className="shrink-0 rounded-full bg-teal-50/80 border border-teal-200/60 px-3 py-0.5 text-[11px] font-bold text-teal-800 shadow-2xs">
                    Executive
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>



      {/* ── Section 9 — Final CTA ── */}
      <CallToAction
        eyebrow="GET STARTED"
        title="Let's Start with the Business Problem, Not the Code."
        description="Whether you're modernizing a legacy ERP, engineering a multi-facility WMS, or automating operational workflows, speak with our engineering leads today."
        primary={{ label: "Schedule a Consultation", href: "/contact" }}
        secondary={{ label: "Explore Our Solutions", href: "/#solutions" }}
      />
    </>
  );
}
