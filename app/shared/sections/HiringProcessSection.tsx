"use client";

import React from "react";
import { PhoneCall, Code2, Users, FileCheck, CheckCircle, Search, UserCheck } from "lucide-react";
import { Container, Section } from "@/app/shared/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";

export interface HiringStep {
  step: string;
  title: string;
  description: string;
}

export interface HiringProcessSectionProps {
  steps?: HiringStep[];
  title?: string;
  subtitle?: string;
}

const STEP_ICONS: Record<number, any> = {
  0: PhoneCall,
  1: Code2,
  2: Users,
  3: FileCheck,
};

export function HiringProcessSection({
  steps = [
    {
      step: "01",
      title: "Intro call",
      description: "Thirty minutes with the hiring manager. What you've built, what you want next.",
    },
    {
      step: "02",
      title: "Technical conversation",
      description: "A real problem from our work, discussed together. No whiteboard algorithm trivia.",
    },
    {
      step: "03",
      title: "Team session",
      description: "Meet the people you'd work with daily and ask them anything about the job.",
    },
    {
      step: "04",
      title: "Offer",
      description: "Decision and written offer within three working days of the last conversation.",
    },
  ],
  title = "Four conversations. Ten working days.",
  subtitle = "No take-home that eats your weekend, no algorithm trivia, and a decision you won't have to chase.",
}: HiringProcessSectionProps) {
  return (
    <Section tone="none" spacing="lg" className="relative overflow-hidden py-20 sm:py-28 bg-[#f8fafc] border-t border-b border-slate-200/80">
      {/* Background World Map Vector Watermark - Soft & Subtle (Halki Halki) */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none opacity-[0.10] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1600&auto=format&fit=crop"
          alt="World Map Vector Background"
          className="w-full h-full object-cover mix-blend-multiply"
          suppressHydrationWarning
        />
      </div>

      <Container className="relative z-10">
        {/* Top Header: Brand Theme Highlighted Tag + Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <Reveal from="up">
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold tracking-widest uppercase mb-3 sm:mb-4">
              <span className="bg-teal-600 text-white px-3 py-1 rounded-md shadow-xs">HIRING</span>
              <span className="text-slate-900 font-extrabold px-1 tracking-wider">PROCESS</span>
            </div>
          </Reveal>

          <Reveal from="up" delay={0.06}>
            <h2 className="text-display-md sm:text-display-lg font-extrabold text-slate-900 tracking-tight leading-tight">
              {title}
            </h2>
          </Reveal>

          <Reveal from="up" delay={0.12}>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-600 font-normal max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </Reveal>
        </div>

        {/* 4-Step Timeline Grid: 2 Columns on Mobile, 4 Columns on Desktop */}
        <div className="relative">
          {/* Connecting Line behind circles (Desktop only) */}
          <div aria-hidden className="hidden md:block absolute top-14 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-slate-300 z-0" />

          <Stagger stagger={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 lg:gap-10 relative z-10">
            {steps.map((item, idx) => {
              const IconComponent = STEP_ICONS[idx] || Search;

              return (
                <StaggerItem
                  key={item.title}
                  from="up"
                  className="group flex flex-col items-center text-center relative p-2"
                >
                  {/* Dashed Outer Circle Badge */}
                  <div className="size-20 sm:size-28 rounded-full bg-white border-2 border-dashed border-slate-200 p-1.5 sm:p-2 flex items-center justify-center shadow-xs transition-all duration-300 group-hover:border-teal-500 group-hover:shadow-md group-hover:scale-105 relative z-10">
                    <div className="size-full rounded-full bg-teal-50/80 flex items-center justify-center text-teal-600 transition-colors duration-300 group-hover:bg-teal-600 group-hover:text-white">
                      <IconComponent className="size-6 sm:size-10 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="mt-4 sm:mt-6 text-xs sm:text-base font-extrabold uppercase tracking-wider text-slate-900 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>

                  {/* Theme Teal Underline Accent Bar */}
                  <div className="w-6 sm:w-8 h-1 bg-teal-500 my-2 sm:my-2.5 rounded-full transition-all duration-300 group-hover:w-10 sm:group-hover:w-12 group-hover:bg-teal-600" />

                  {/* Step Description */}
                  <p className="text-[11px] sm:text-sm text-slate-600 font-normal leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
