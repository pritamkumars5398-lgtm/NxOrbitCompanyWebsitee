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
    <Section tone="none" spacing="lg" className="relative overflow-hidden py-8 sm:py-12 lg:py-14 bg-[#f8fafc] border-t border-b border-slate-200/80">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
          className="mb-6 sm:mb-8 max-w-3xl mx-auto"
        />

        {/* ── Handcrafted 2-Column Engineering Cards Grid ── */}
        <Stagger stagger={0.08} className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            const IconComponent = getTechIcon(feature.title, index);

            return (
              <StaggerItem
                key={feature.title}
                from={isEven ? "left" : "right"}
                distance={40}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400"
              >
                {/* Subtle Hover Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Card Header: Icon Badge */}
                  <div className="flex items-center mb-3.5">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 border border-brand-100/80 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                      <IconComponent className="size-4.5" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors duration-200">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Footer Standard Badge & Action Link */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <CheckCircle2 className="size-3.5 text-teal-500" />
                    Enterprise Standard
                  </span>

                  <Link
                    href={`/contact?service=${encodeURIComponent(feature.title)}`}
                    className="flex items-center gap-1 text-brand-600 font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 hover:text-brand-700"
                  >
                    Explore Standard <ArrowRight className="size-3.5" />
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
