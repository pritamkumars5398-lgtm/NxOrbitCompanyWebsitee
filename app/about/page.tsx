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
  Building,
  Briefcase,
  MapPin,
  Sparkles,
  Star,
  Award,
  TrendingUp,
  Check,
} from "lucide-react";
import { Container, Eyebrow, Section } from "@/app/shared/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";
import { Button } from "@/app/shared/ui/Button";
import { CallToAction } from "@/app/shared/sections/CallToAction";

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
  },
  {
    principle: "Connect Systems",
    whatItMeans: "Bring information together instead of creating isolated applications.",
  },
  {
    principle: "Design for Users",
    whatItMeans: "Build technology people can adopt naturally, creating confidence — not confusion.",
  },
  {
    principle: "Focus on Value",
    whatItMeans: "Prioritize business outcomes and avoid unnecessary features.",
  },
  {
    principle: "Build for the Long Term",
    whatItMeans: "Create solutions that remain relevant and scale as businesses evolve.",
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
  { step: "Architecture Review", icon: Search },
  { step: "Peer Code Audit", icon: Code2 },
  { step: "Automated QA & Regression", icon: Activity },
  { step: "Security Scan", icon: ShieldCheck },
  { step: "UAT Sign-off", icon: UserCheck },
  { step: "Monitored Deployment", icon: FileCheck },
];

const WHY_PARTNERS_STAY = [
  {
    title: "Deep Business Understanding That Evolves",
    description:
      "As we work together, we gain a deeper understanding of your business, enabling us to deliver enhancements that align with your evolving goals.",
  },
  {
    title: "A Dedicated Team That Knows Your Systems",
    description:
      "The teams supporting your business understand your architecture, processes, and integrations, reducing onboarding time and ensuring continuity.",
  },
  {
    title: "Continuous Improvement",
    description:
      "We help organizations optimize existing systems, introduce new capabilities, and modernize applications without disrupting operations.",
  },
  {
    title: "Reliable Support Beyond Go-Live",
    description:
      "Structured maintenance, issue resolution, performance monitoring, and enhancement planning.",
  },
  {
    title: "Solutions Designed to Scale",
    description:
      "Enterprise systems accommodate new users, business units, integrations, and operational requirements as your organization grows.",
  },
  {
    title: "Transparency and Trust",
    description:
      "Clear communication, milestone-based delivery, and collaborative planning build relationships based on accountability.",
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
];

const CORPORATE_INFO = [
  {
    field: "Legal Entity",
    detail: "NXT Orbit IT Solutions Pvt. Ltd.",
    icon: Building,
  },
  {
    field: "Engagement Models",
    detail: "Managed Project Delivery · Dedicated Engineering Teams · Technology Consulting & Architecture Audits",
    icon: Briefcase,
  },
  {
    field: "Based In",
    detail: "Navi Mumbai, India",
    icon: MapPin,
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
                <span className="size-2 rounded-full bg-[#008c83] animate-pulse" />
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
                <Button href="/contact" size="lg" variant="primary" withArrow>
                  Book a Consultation
                </Button>
                <Button href="#our-story" size="lg" variant="accent">
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

      {/* ── Section 2 — Our Story ── */}
      <Section tone="white" spacing="lg" id="our-story" className="border-t border-hairline py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <Reveal from="up">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#008c83]">
                  OUR STORY
                </span>
                <h2 className="mt-3 text-display-md sm:text-display-lg font-extrabold text-slate-900 leading-tight">
                  Built on Business Understanding, Strengthened by Engineering.
                </h2>
              </Reveal>

              <Reveal from="up" delay={0.08} className="flex flex-col gap-4 text-base text-slate-600 leading-relaxed font-normal">
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

            <div className="lg:col-span-6 flex flex-col gap-6">
              <Reveal from="right" delay={0.12} className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-8 sm:p-10 shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-teal-50 text-[#008c83]">
                    <Target className="size-5" />
                  </span>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                    Vision
                  </h3>
                </div>
                <p className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  To be a trusted enterprise technology partner, eliminating operational complexity through digital engineering.
                </p>
              </Reveal>

              <Reveal from="right" delay={0.18} className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-8 sm:p-10 shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-teal-50 text-[#008c83]">
                    <Compass className="size-5" />
                  </span>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                    Mission
                  </h3>
                </div>
                <p className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  Leveraging modern software engineering and architecture to help organizations optimize operations, integrate ecosystems, and scale securely.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section 3 — The "Keep It Simple" Philosophy ── */}
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

          {/* 5-row structured card table */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-12 bg-brand-950 text-white font-bold text-xs uppercase tracking-wider py-4 px-6 sm:px-8 border-b border-brand-900">
              <div className="md:col-span-4">Principle</div>
              <div className="md:col-span-8 mt-1 md:mt-0">What It Means</div>
            </div>

            <div className="divide-y divide-slate-100">
              {PHILOSOPHY_PRINCIPLES.map((item) => (
                <div
                  key={item.principle}
                  className="grid grid-cols-1 md:grid-cols-12 py-5 px-6 sm:px-8 transition-colors hover:bg-teal-50/30 items-center"
                >
                  <div className="md:col-span-4 font-bold text-slate-900 text-base">
                    {item.principle}
                  </div>
                  <div className="md:col-span-8 text-sm sm:text-base text-slate-600 mt-1 md:mt-0 leading-relaxed">
                    {item.whatItMeans}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm font-semibold text-slate-500">
              Simple does not mean basic. Simple means clear, efficient, maintainable, and purposeful. That is what Keep It Simple means at NXT Orbit.
            </p>
          </div>
        </Container>
      </Section>

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

          {/* Bottom visual checkpoint sequence strip (Option 2 visual) */}
          <div className="rounded-3xl border border-teal-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#008c83] mb-6 text-center sm:text-left">
              Quality Checkpoint Sequence
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {CHECKPOINT_SEQUENCE.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="flex flex-col items-center text-center p-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-teal-50 text-[#008c83] mb-3">
                      <Icon className="size-5" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-slate-400 mb-1">
                      STEP 0{idx + 1}
                    </span>
                    <span className="text-xs font-bold text-slate-900 leading-tight">
                      {item.step}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section 6 — Why Partners Stay ── */}
      <Section tone="white" spacing="lg" id="why-partners-stay" className="py-16 sm:py-24 border-t border-hairline">
        <Container>
          <div className="max-w-3xl mb-14">
            <Reveal from="up">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#008c83]">
                PARTNERSHIP
              </span>
              <h2 className="mt-3 text-display-md sm:text-display-lg font-extrabold text-slate-900 tracking-tight leading-tight">
                Technology Partnerships Built for Sustained Evolution.
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Successful technology projects don&apos;t end at deployment. As businesses evolve, systems need to adapt, integrate with new technologies, and support changing operational requirements.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_PARTNERS_STAY.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:shadow-md hover:border-slate-300"
              >
                <div className="flex size-8 items-center justify-center rounded-lg bg-teal-50 text-[#008c83] mb-4">
                  <CheckCircle2 className="size-4.5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Section 7 — Leadership Team ── */}
      <Section tone="muted" spacing="lg" id="leadership" className="py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl mb-14">
            <Reveal from="up">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#008c83]">
                LEADERSHIP TEAM
              </span>
              <h2 className="mt-3 text-display-md sm:text-display-lg font-extrabold text-slate-900 tracking-tight leading-tight">
                The People Driving NXT Orbit Forward.
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Behind every engagement is a team of leaders committed to building technology that creates lasting business value.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {LEADERSHIP_TEAM.map((leader) => (
              <div
                key={leader.name}
                className="group flex flex-col sm:flex-row gap-6 items-start rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:border-[#00d2c4] hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative flex size-24 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-teal-50 to-slate-100 border border-slate-200 shadow-inner">
                  <img
                    src={leader.avatar}
                    alt={leader.name}
                    className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#008c83] transition-colors">
                      {leader.name}
                    </h3>
                    <span className="size-2 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs font-bold text-[#008c83] uppercase tracking-wide">
                    {leader.role}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-1">
                    {leader.description}
                  </p>
                  <div className="pt-2 mt-auto border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={`mailto:${leader.email}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 transition-colors"
                    >
                      <Mail className="size-3.5" />
                      {leader.email}
                    </a>
                    <span className="text-[11px] font-semibold text-slate-400">Executive</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Section 8 — Corporate Information ── */}
      <Section tone="white" spacing="lg" id="corporate-info" className="py-16 sm:py-24 border-t border-hairline">
        <Container>
          <div className="max-w-3xl mb-10">
            <Reveal from="up">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#008c83]">
                COMPANY OVERVIEW
              </span>
              <h2 className="mt-3 text-display-md sm:text-display-lg font-extrabold text-slate-900 tracking-tight leading-tight">
                Corporate Information
              </h2>
            </Reveal>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-12 bg-brand-950 text-white font-bold text-xs uppercase tracking-wider py-4 px-6 sm:px-8 border-b border-brand-900">
              <div className="sm:col-span-4">Field</div>
              <div className="sm:col-span-8 mt-1 sm:mt-0">Detail</div>
            </div>

            <div className="divide-y divide-slate-100">
              {CORPORATE_INFO.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.field}
                    className="grid grid-cols-1 sm:grid-cols-12 py-5 px-6 sm:px-8 items-center"
                  >
                    <div className="sm:col-span-4 flex items-center gap-2.5 font-bold text-slate-900 text-sm sm:text-base">
                      <Icon className="size-4 text-[#008c83]" />
                      {item.field}
                    </div>
                    <div className="sm:col-span-8 text-sm sm:text-base text-slate-700 mt-1 sm:mt-0 font-medium leading-relaxed">
                      {item.detail}
                    </div>
                  </div>
                );
              })}
            </div>
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
