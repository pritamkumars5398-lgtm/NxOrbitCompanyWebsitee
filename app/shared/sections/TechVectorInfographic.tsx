"use client";

import React from "react";
import { 
  Cpu, Code, Layers, Zap, ShieldCheck, Terminal, 
  Workflow, GitBranch, Server, Sparkles, CheckCircle2, ArrowRight 
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/app/core/lib/cn";
import { Container, Section, SectionHeading } from "@/app/shared/ui/Layout";
import { Stagger, StaggerItem } from "@/app/shared/motion/Reveal";

export interface TechFeatureItem {
  title: string;
  description: string;
}

interface TechVectorInfographicProps {
  eyebrow?: string;
  title: string;
  description?: string;
  features: TechFeatureItem[];
}

const getTechIcon = (title: string, index: number) => {
  const t = title.toLowerCase();
  if (t.includes("performance") || t.includes("native") || t.includes("speed") || t.includes("gpu")) return Cpu;
  if (t.includes("workflow") || t.includes("code") || t.includes("setup") || t.includes("expo")) return Code;
  if (t.includes("state") || t.includes("redux") || t.includes("store") || t.includes("architecture")) return Layers;
  if (t.includes("testing") || t.includes("fast") || t.includes("ci") || t.includes("pipeline")) return Zap;
  if (t.includes("security") || t.includes("auth") || t.includes("encryption")) return ShieldCheck;
  
  const fallbacks = [Cpu, Code, Layers, Zap, ShieldCheck, Terminal, Workflow, GitBranch];
  return fallbacks[index % fallbacks.length];
};

export function TechVectorInfographic({
  eyebrow = "Engineering Detail",
  title,
  description = "The specifics that decide whether a codebase is still pleasant to work in two years from now.",
  features,
}: TechVectorInfographicProps) {
  return (
    <Section tone="none" spacing="lg" className="relative overflow-hidden py-16 sm:py-24 bg-[#f8fafc] border-t border-b border-slate-200/80">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
          className="mb-14 max-w-3xl mx-auto"
        />

        {/* ── Handcrafted 2-Column Engineering Cards Grid ── */}
        <Stagger stagger={0.1} className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            const IconComponent = getTechIcon(feature.title, index);
            const stepNumber = String(index + 1).padStart(2, "0");

            return (
              <StaggerItem
                key={feature.title}
                from={isEven ? "left" : "right"}
                distance={50}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
              >
                {/* Subtle Hover Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Card Header: Icon Badge & Pillar Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 border border-brand-100/80 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                      <IconComponent className="size-5" strokeWidth={1.8} />
                    </div>

                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60">
                      PILLAR {stepNumber}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors duration-200">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-700 font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Footer Standard Badge & Action Link */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 className="size-4 text-teal-500" />
                    Enterprise Standard
                  </span>

                  <Link
                    href={`/contact?service=${encodeURIComponent(feature.title)}`}
                    className="flex items-center gap-1.5 text-brand-600 font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 hover:text-brand-700"
                  >
                    Explore Standard <ArrowRight className="size-4" />
                  </Link>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
