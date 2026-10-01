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
  "from-teal-600 via-teal-700 to-brand-900",
  "from-brand-800 via-brand-900 to-slate-900",
  "from-cyan-600 via-teal-600 to-brand-800",
  "from-teal-500 via-teal-600 to-teal-700",
  "from-slate-700 via-slate-800 to-slate-900",
  "from-brand-700 via-teal-700 to-brand-900",
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
    <Section tone="none" spacing="lg" className="relative overflow-hidden py-8 sm:py-12 lg:py-14 bg-[#f1f5f9] border-t border-b border-slate-200/90 shadow-[inset_0_4px_12px_rgba(0,0,0,0.03)]">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
          className="mb-6 sm:mb-8 max-w-3xl mx-auto"
        />

        <Stagger stagger={0.08} className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            const IconComponent = getFeatureIcon(feature.title, index);
            const gradient = BADGE_GRADIENTS[index % BADGE_GRADIENTS.length];

            return (
              <StaggerItem
                key={feature.title}
                from="up"
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/5"
              >
                {/* Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-teal-500 via-brand-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Row: Icon Badge & Number Pill */}
                  <div className="flex items-center mb-3.5">
                    {/* Icon Disc without shadow */}
                    <div
                      className={cn(
                        "size-11 sm:size-12 rounded-xl bg-linear-to-br text-white shadow-none flex items-center justify-center border border-white/20 transition-transform duration-300 group-hover:scale-105",
                        gradient
                      )}
                    >
                      <IconComponent className="size-5 sm:size-6" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-700 font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Footer Standard Tag & Action */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <CheckCircle2 className="size-3.5 text-teal-500" />
                    Enterprise Standard
                  </span>

                  <Link
                    href={`/contact?service=${encodeURIComponent(feature.title)}`}
                    className="flex items-center gap-1 text-teal-600 font-bold opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 hover:text-teal-700"
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
