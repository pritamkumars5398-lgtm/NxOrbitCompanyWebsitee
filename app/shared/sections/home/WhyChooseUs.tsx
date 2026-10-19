"use client";

import {
  Search,
  Cog,
  Database,
  Share2,
  Brain,
  Target,
  BarChart3,
} from "lucide-react";
import { Container, Eyebrow } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";

interface FeatureCard {
  title: string;
  desc: string;
  icon: React.ElementType;
  iconColor: string;
  bgClass: string;
  shadowClass: string;
}

const FEATURES: FeatureCard[] = [
  {
    title: "Business Discovery",
    desc: "Every engagement begins with understanding your business processes, operational challenges, and goals to build solutions that solve the right problems.",
    icon: Search,
    iconColor: "text-[#008c83]",
    bgClass: "bg-[#e6f7f5]",
    shadowClass: "shadow-[0_8px_20px_-4px_rgba(0,140,131,0.22)]",
  },
  {
    title: "Business Process Automation",
    desc: "We streamline workflows, automate repetitive operations, and reduce manual dependencies to improve efficiency and productivity.",
    icon: Cog,
    iconColor: "text-[#0284c7]",
    bgClass: "bg-[#e0f2fe]",
    shadowClass: "shadow-[0_8px_20px_-4px_rgba(2,132,199,0.22)]",
  },
  {
    title: "Customized Enterprise Solutions",
    desc: "From ERP and CRM to enterprise platforms and mobile applications, every solution is designed around your business — not generic software.",
    icon: Database,
    iconColor: "text-[#1e3a8a]",
    bgClass: "bg-[#e0e7ff]",
    shadowClass: "shadow-[0_8px_20px_-4px_rgba(30,58,138,0.2)]",
  },
  {
    title: "Connected Business Ecosystem",
    desc: "Integrate ERP, CRM, finance, warehouse, HR, cloud platforms, and third-party applications into one connected digital ecosystem with complete operational visibility.",
    icon: Share2,
    iconColor: "text-[#ea580c]",
    bgClass: "bg-[#ffedd5]",
    shadowClass: "shadow-[0_8px_20px_-4px_rgba(234,88,12,0.22)]",
  },
  {
    title: "AI Enablement",
    desc: "Apply AI where it delivers measurable business value — from intelligent search and workflow automation to document processing, predictive insights, and decision support.",
    icon: Brain,
    iconColor: "text-[#0891b2]",
    bgClass: "bg-[#cffafe]",
    shadowClass: "shadow-[0_8px_20px_-4px_rgba(8,145,178,0.22)]",
  },
  {
    title: "Industry-Focused Solutions",
    desc: "Every industry operates differently. Our solutions are designed to address the unique workflows, compliance requirements, and operational challenges of manufacturing, logistics, healthcare, retail, finance, and service businesses.",
    icon: Target,
    iconColor: "text-[#0d9488]",
    bgClass: "bg-[#ccfbf1]",
    shadowClass: "shadow-[0_8px_20px_-4px_rgba(13,148,136,0.22)]",
  },
];

/**
 * Our Business Approach section:
 * Compact, cohesive layout with brand-aligned palette and seamless section transition
 */
export function WhyChooseUs() {
  return (
    <section
      className="relative isolate overflow-hidden bg-slate-50/70 pb-4 sm:pb-6"
      id="solutions"
    >
      {/* Ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/3 size-[36rem] rounded-full bg-cyan-300/10 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 size-[30rem] rounded-full bg-teal-300/10 blur-[140px]"
      />

      {/* ───────── Top hero ───────── */}
      <div className="relative">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[320px] items-center pt-8 sm:pt-10 lg:py-8">
            <Reveal className="flex flex-col items-start lg:pr-8">
              <div className="mb-3 flex items-center gap-3">
                <Eyebrow tone="brand">OUR BUSINESS APPROACH</Eyebrow>
                <span className="h-0.5 w-10 rounded-full bg-[#00a396]/60" />
              </div>

              <h2 className="text-display-sm sm:text-display-md font-extrabold text-[#0b2545] leading-tight">
                Understanding Business.
                <br />
                Delivering Technology.
                <br />
                <span className="bg-linear-to-r from-[#008c83] via-[#00a396] to-[#0a2e4d] bg-clip-text text-transparent">
                  Creating Value.
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                We combine industry expertise, technology and a people-first approach to help businesses solve complex challenges and achieve sustainable growth.
              </p>
            </Reveal>
          </div>
        </Container>

        {/* Right visual — compact, edge-to-edge on desktop */}
        <Reveal
          from="right"
          delay={0.15}
          className="relative mt-6 h-64 sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-auto lg:w-[46%]"
        >
          <div className="relative h-full w-full overflow-hidden [clip-path:polygon(9%_0,100%_0,100%_100%,9%_100%,0_72%)] lg:[clip-path:polygon(9%_0,100%_0,100%_100%,12%_100%,0_74%)]">
            <img
              src="/assets/our_business_approach_executive.jpg"
              alt="Business executive delivering results with technology"
              className="absolute inset-0 h-full w-full object-cover object-[50%_22%]"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.triedFallback) {
                  target.dataset.triedFallback = "true";
                  target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop";
                }
              }}
            />

            {/* Soft fade into the page on the left edge */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-linear-to-r from-white/20 via-transparent to-transparent"
            />

            {/* Navy diagonal shape on the right */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-[34%] bg-linear-to-b from-[#0d4f73] via-[#0a3d5c] to-[#08304a] [clip-path:polygon(62%_0,100%_0,100%_100%,0_100%,0_38%)]"
            />

            {/* Cyan accent corner */}
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 right-0 h-[26%] w-[22%] bg-linear-to-tr from-[#5fe0e6] via-[#38c7d6] to-[#1aa3bf] [clip-path:polygon(100%_0,100%_100%,0_100%)]"
            />
          </div>

          {/* Frosted glass badge — compact */}
          <div className="absolute right-4 top-4 sm:right-6 lg:right-8 lg:top-[16%] z-20 w-44 sm:w-48 rounded-2xl border border-white/25 bg-white/15 p-3.5 sm:p-4 shadow-[0_16px_40px_rgba(2,24,40,0.3)] backdrop-blur-md">
            <BarChart3 className="size-6 text-[#7ee8ef]" strokeWidth={2} />
            <p className="mt-2.5 text-xs sm:text-sm font-medium leading-snug text-white">
              Turning business goals into real results with technology.
            </p>
            <div className="mt-2.5 h-0.5 w-9 rounded-full bg-[#5fe0e6]" />
          </div>
        </Reveal>
      </div>

      {/* ───────── Feature grid — compact vertical padding & margins ───────── */}
      <Container className="relative z-10 mt-4 lg:mt-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon;

            const vDivider = `${idx % 2 !== 0 ? "md:block" : "md:hidden"} ${
              idx % 3 !== 0 ? "lg:block" : "lg:hidden"
            }`;
            const hDivider = `${idx < 5 ? "block" : "hidden"} ${
              idx < 4 ? "md:block" : "md:hidden"
            } ${idx < 3 ? "lg:block" : "lg:hidden"}`;

            return (
              <Reveal
                key={feat.title}
                delay={idx * 0.04}
                className="group relative flex items-start gap-3.5 sm:gap-4 px-2 py-3.5 sm:px-5 sm:py-4.5 lg:px-6"
              >
                {/* Inset vertical divider */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute left-0 top-4 bottom-4 hidden w-px bg-slate-200/80 ${vDivider}`}
                />
                {/* Inset horizontal divider */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute bottom-0 left-2 right-2 sm:left-5 sm:right-5 h-px bg-slate-200/80 ${hDivider}`}
                />

                {/* Glowing circular icon — compact */}
                <div
                  className={`relative flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-full ${feat.bgClass} ${feat.shadowClass} ring-1 ring-white/80 transition-transform duration-300 group-hover:-translate-y-0.5`}
                >
                  <Icon className={`size-5 sm:size-5.5 ${feat.iconColor}`} strokeWidth={1.9} />
                </div>

                <div className="flex flex-col pt-0.5">
                  <h3 className="text-sm sm:text-base font-bold leading-snug text-[#0b2545] transition-colors group-hover:text-[#008c83]">
                    {feat.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-slate-500">
                    {feat.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
