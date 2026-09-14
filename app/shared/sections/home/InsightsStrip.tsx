"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Cpu, Cloud, Warehouse, Workflow } from "lucide-react";
import { Container, Section } from "@/app/shared/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";

const INSIGHT_TOPICS = [
  {
    title: "ERP Implementation",
    description: "Strategies for integrating modern ERP platforms without disrupting live shop floor operations.",
    icon: Layers,
    href: "/services",
  },
  {
    title: "Modernizing Legacy Systems",
    description: "Decoupling monolithic architectures into manageable microservices through secure API contracts.",
    icon: BookOpen,
    href: "/services",
  },
  {
    title: "AI in Enterprise",
    description: "Practical deployment of intelligent search, document parsing, and predictive automation.",
    icon: Cpu,
    href: "/services/ai",
  },
  {
    title: "Cloud & DevOps",
    description: "Building resilient CI/CD pipelines, automated testing, and high-availability cloud setups.",
    icon: Cloud,
    href: "/services/devops",
  },
  {
    title: "Warehouse Digital Transformation",
    description: "Sub-second stock telemetry, bi-directional ERP sync, and barcode/GRN digitization.",
    icon: Warehouse,
    href: "/services",
  },
  {
    title: "Business Process Automation",
    description: "Eliminating manual spreadsheet dependency and connecting disconnected department data.",
    icon: Workflow,
    href: "/services",
  },
];

/**
 * Section 8 — Insights
 * Insights for business and technology leaders.
 */
export function InsightsStrip() {
  return (
    <Section tone="muted" spacing="lg" id="insights" className="relative isolate overflow-hidden py-16 sm:py-20">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal className="flex flex-col items-start gap-3 max-w-2xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#008c83]">
              INSIGHTS
            </span>
            <h2 className="text-display-sm sm:text-display-md lg:text-display-lg text-slate-900 font-bold leading-tight">
              Insights for business and technology leaders.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#008c83] hover:text-[#005f57] transition-colors"
            >
              Explore our tech guides
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <Stagger stagger={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSIGHT_TOPICS.map((topic) => {
            const Icon = topic.icon;
            return (
              <StaggerItem
                key={topic.title}
                from="up"
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#00d2c4] hover:shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="flex size-10 items-center justify-center rounded-xl bg-teal-50 text-[#008c83] mb-4 group-hover:bg-[#00d2c4] group-hover:text-[#01141b] transition-colors">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#008c83] transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {topic.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-teal-700 group-hover:text-teal-900">
                  Read perspective
                  <ArrowRight className="ml-1.5 size-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
