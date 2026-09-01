"use client";

import React from "react";
import Link from "next/link";
import { 
  Brain, Cpu, Eye, Smartphone, Code, Cloud, ShieldCheck, Layers, 
  Sparkles, Zap, ArrowRight, CheckCircle2, Workflow
} from "lucide-react";
import { cn } from "@/app/core/lib/cn";
import { Container, Eyebrow, Section, SectionHeading } from "@/app/shared/ui/Layout";
import { Stagger, StaggerItem } from "@/app/shared/motion/Reveal";

export interface FeatureItem {
  title: string;
  description: string;
}

interface Capabilities3DCardsProps {
  eyebrow?: string;
  title: string;
  description?: string;
  features: FeatureItem[];
}

const BADGE_GRADIENTS = [
  "from-teal-500 via-emerald-500 to-teal-600",
  "from-blue-600 via-indigo-500 to-blue-700",
  "from-sky-500 via-cyan-500 to-blue-600",
  "from-indigo-500 via-purple-500 to-indigo-600",
  "from-slate-700 via-slate-800 to-slate-900",
  "from-emerald-500 via-teal-600 to-emerald-700",
];

const getFeatureIcon = (title: string, index: number) => {
  const t = title.toLowerCase();
  if (t.includes("research") || t.includes("brain") || t.includes("llm") || t.includes("strategy")) return Brain;
  if (t.includes("ml") || t.includes("model") || t.includes("predictive") || t.includes("engine")) return Cpu;
  if (t.includes("vision") || t.includes("ocr") || t.includes("image")) return Eye;
  if (t.includes("ios") || t.includes("android") || t.includes("mobile") || t.includes("app")) return Smartphone;
  if (t.includes("react") || t.includes("flutter") || t.includes("code") || t.includes("architecture")) return Code;
  if (t.includes("cloud") || t.includes("devops") || t.includes("deploy") || t.includes("aws")) return Cloud;
  if (t.includes("blockchain") || t.includes("contract") || t.includes("security")) return ShieldCheck;
  if (t.includes("design") || t.includes("ui") || t.includes("ux")) return Layers;
  
  const fallbacks = [Sparkles, Cpu, Layers, Workflow, Brain, Zap, ShieldCheck, Code];
  return fallbacks[index % fallbacks.length];
};

export function Capabilities3DCards({
  eyebrow = "Capabilities",
  title,
  description = "Every engagement is shaped around your goals, not a template. This is the ground we cover.",
  features,
}: Capabilities3DCardsProps) {
  return (
    <Section tone="muted" spacing="lg" className="relative overflow-hidden py-16 sm:py-24 bg-slate-50/70">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
          className="mb-14 max-w-3xl mx-auto"
        />

        <Stagger stagger={0.08} className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => {
            const IconComponent = getFeatureIcon(feature.title, index);
            const gradient = BADGE_GRADIENTS[index % BADGE_GRADIENTS.length];
            const stepNumber = String(index + 1).padStart(2, "0");

            return (
              <StaggerItem
                key={feature.title}
                from="up"
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
              >
                {/* 3D Top Gradient Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-brand-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Row: Icon Badge & Number Pill */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon Disc without shadow */}
                    <div
                      className={cn(
                        "size-14 rounded-2xl bg-gradient-to-br text-white shadow-none flex items-center justify-center border border-white/20 transition-transform duration-300 group-hover:scale-105",
                        gradient
                      )}
                    >
                      <IconComponent className="size-7" strokeWidth={1.8} />
                    </div>

                    {/* Number Pill */}
                    <span className="font-mono text-xs font-extrabold tracking-wider text-teal-700 bg-teal-50/90 border border-teal-200/70 px-3.5 py-1.5 rounded-full shadow-2xs group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 transition-all duration-300">
                      FEATURE {stepNumber}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700 font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Footer Standard Tag & Action */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 className="size-4 text-teal-500" />
                    Enterprise Standard
                  </span>

                  <Link
                    href={`/contact?service=${encodeURIComponent(feature.title)}`}
                    className="flex items-center gap-1.5 text-teal-600 font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 hover:text-teal-700"
                  >
                    Explore Capability <ArrowRight className="size-4" />
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
