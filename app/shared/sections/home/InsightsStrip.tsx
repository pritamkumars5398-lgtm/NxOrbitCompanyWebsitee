"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Cpu, Cloud, Warehouse, Workflow } from "lucide-react";
import { Container, Eyebrow } from "@/app/shared/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";
import { cn } from "@/app/core/lib/cn";

interface InsightTopic {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  image: string;
  badgeBg: string;
  btnBg: string;
  gradientOverlay: string;
}

const INSIGHT_TOPICS: InsightTopic[] = [
  {
    title: "ERP Implementation",
    description: "Strategies for integrating modern ERP platforms without disrupting live shop floor operations.",
    icon: Layers,
    href: "/insights/erp-implementation",
    image: "/assets/insight_erp_3d.jpg",
    badgeBg: "bg-teal-50 text-[#008c83] border-teal-200/80",
    btnBg: "bg-[#008c83]",
    gradientOverlay: "from-teal-950/80 via-emerald-900/40 to-transparent",
  },
  {
    title: "Modernizing Legacy Systems",
    description: "Decoupling monolithic architectures into manageable microservices through secure API contracts.",
    icon: BookOpen,
    href: "/insights/modernizing-legacy-systems",
    image: "/assets/insight_cloud_3d.jpg",
    badgeBg: "bg-sky-50 text-sky-600 border-sky-200/80",
    btnBg: "bg-sky-600",
    gradientOverlay: "from-blue-950/80 via-sky-900/40 to-transparent",
  },
  {
    title: "AI in Enterprise",
    description: "Practical deployment of intelligent search, document parsing, and predictive automation.",
    icon: Cpu,
    href: "/insights/ai-in-enterprise",
    image: "/assets/insight_ai_3d.jpg",
    badgeBg: "bg-purple-50 text-purple-600 border-purple-200/80",
    btnBg: "bg-purple-600",
    gradientOverlay: "from-purple-950/80 via-violet-900/40 to-transparent",
  },
  {
    title: "Cloud & DevOps",
    description: "Building resilient CI/CD pipelines, automated testing, and high-availability cloud setups.",
    icon: Cloud,
    href: "/insights/cloud-devops",
    image: "/assets/insight_devops_3d.jpg",
    badgeBg: "bg-cyan-50 text-cyan-600 border-cyan-200/80",
    btnBg: "bg-cyan-600",
    gradientOverlay: "from-cyan-950/80 via-blue-900/40 to-transparent",
  },
  {
    title: "Warehouse Digital Transformation",
    description: "Sub-second stock telemetry, bi-directional ERP sync, and barcode/GRN digitization.",
    icon: Warehouse,
    href: "/insights/warehouse-digital-transformation",
    image: "/assets/warehouse_wms_3d.jpg",
    badgeBg: "bg-amber-50 text-amber-600 border-amber-200/80",
    btnBg: "bg-amber-600",
    gradientOverlay: "from-amber-950/80 via-orange-900/40 to-transparent",
  },
  {
    title: "Business Process Automation",
    description: "Eliminating manual spreadsheet dependency and connecting disconnected department data.",
    icon: Workflow,
    href: "/insights/business-process-automation",
    image: "/assets/insight_workflow_3d.jpg",
    badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    btnBg: "bg-emerald-600",
    gradientOverlay: "from-emerald-950/80 via-teal-900/40 to-transparent",
  },
];

/**
 * Section 8 — Insights
 * Dedicated dark navy architectural theme with horizontal split cards matching designer specifications.
 */
export function InsightsStrip() {
  return (
    <section id="insights" className="relative isolate overflow-hidden bg-[#06131F] py-20 sm:py-24 text-white">
      {/* Ambient background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 size-[36rem] rounded-full bg-teal-500/10 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-0 size-[40rem] rounded-full bg-blue-500/10 blur-[150px]"
      />

      {/* Subtle tech dot matrix grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <Reveal className="flex flex-col items-start gap-3 max-w-2xl">
            <Eyebrow tone="light">INSIGHTS</Eyebrow>
            <h2 className="text-display-sm sm:text-display-md lg:text-display-lg text-white font-extrabold tracking-tight leading-[1.2]">
              Insights for business and technology leaders.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mt-1">
              Practical deployment strategies, modern software architectures, and battle-tested operational guidance.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-md border border-white/15 transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:shadow-lg"
            >
              Explore our tech guides
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* 6 Horizontal 2-Piece Split Cards Grid */}
        <Stagger stagger={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSIGHT_TOPICS.map((topic) => {
            const Icon = topic.icon;
            return (
              <StaggerItem key={topic.title} from="up">
                <Link
                  href={topic.href}
                  className="group relative flex overflow-hidden rounded-2xl border border-white/10 bg-white shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-white/30 h-full"
                >
                  {/* Left Column: 3D Visual with Dark Gradient Overlay & Floating Badge */}
                  <div className="relative w-[38%] shrink-0 overflow-hidden bg-slate-950 flex items-center justify-center">
                    <img
                      src={topic.image}
                      alt={topic.title}
                      className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Visual gradient overlay */}
                    <div
                      aria-hidden
                      className={cn("absolute inset-0 bg-linear-to-t", topic.gradientOverlay)}
                    />
                    {/* Bottom-left icon overlay badge */}
                    <div className="absolute bottom-2.5 left-2.5 size-7 rounded-lg bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 shadow-sm">
                      <Icon className="size-3.5" />
                    </div>
                  </div>

                  {/* Right Column: White Card Details & Circular Action Button */}
                  <div className="flex flex-1 flex-col justify-between p-4 sm:p-5 bg-white text-slate-900">
                    <div>
                      {/* Category Icon Badge */}
                      <div
                        className={cn(
                          "size-8 sm:size-9 rounded-xl flex items-center justify-center mb-2.5 border",
                          topic.badgeBg,
                        )}
                      >
                        <Icon className="size-4 sm:size-4.5" />
                      </div>

                      {/* Title */}
                      <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 leading-snug group-hover:text-[#008c83] transition-colors line-clamp-2">
                        {topic.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed mt-1.5 line-clamp-3">
                        {topic.description}
                      </p>
                    </div>

                    {/* Bottom Action Footer with explicit "Read perspective" label & button */}
                    <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] sm:text-xs font-bold text-slate-700 group-hover:text-[#008c83] transition-colors flex items-center gap-1">
                        Read perspective
                      </span>
                      <span
                        className={cn(
                          "size-7 sm:size-8 rounded-full flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5",
                          topic.btnBg,
                        )}
                      >
                        <ArrowRight className="size-3.5 sm:size-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
