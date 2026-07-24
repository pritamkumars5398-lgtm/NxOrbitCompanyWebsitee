"use client";

import { motion } from "motion/react";
import {
  FileSearch,
  UserCheck,
  LayoutTemplate,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";

interface JourneyStep {
  number: string;
  title: string;
  icon: React.ElementType;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    number: "01",
    title: "Business Discovery",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "User Research",
    icon: UserCheck,
  },
  {
    number: "03",
    title: "UX Strategy & Wireframing",
    icon: LayoutTemplate,
  },
  {
    number: "04",
    title: "UI Design & Prototyping",
    icon: Palette,
  },
  {
    number: "05",
    title: "Development & Integration",
    icon: Code2,
  },
  {
    number: "06",
    title: "Testing & Quality Assurance",
    icon: ShieldCheck,
  },
  {
    number: "07",
    title: "Deployment & Launch",
    icon: Rocket,
  },
  {
    number: "08",
    title: "Continuous Support & Growth",
    icon: TrendingUp,
  },
];

/**
 * Our Development Journey timeline banner matching reference design 1.
 */
export function DevelopmentJourney() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-r from-[#01141b] via-[#01252e] to-[#003844] py-10 lg:py-14 text-white">

      {/* Background Radial Spotlights */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/4 size-[30rem] rounded-full bg-[#00d2c4]/10 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-1/4 size-[30rem] rounded-full bg-cyan-400/10 blur-[130px]"
      />

      <Container className="relative z-10">
        {/* Section Heading */}
        <Reveal className="flex flex-col items-start gap-3 mb-14">
          <span className="text-xs font-bold tracking-widest text-[#00d2c4] uppercase">
            OUR DEVELOPMENT JOURNEY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            From idea to launch—every step planned with purpose.
          </h2>
        </Reveal>

        {/* Horizontal Step Timeline Rail */}
        <div className="relative mt-6">
          {/* Connector Line */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[28px] left-[40px] right-[40px] h-[2px] bg-gradient-to-r from-[#00d2c4]/20 via-[#00d2c4]/50 to-[#00d2c4]/20 -z-0"
          />

          {/* Grid of Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-4 relative z-10">
            {JOURNEY_STEPS.map((step, idx) => {
              const Icon = step.icon;

              return (
                <Reveal
                  key={step.title}
                  delay={idx * 0.08}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Glowing Circular Icon Node */}
                  <div className="relative flex size-14 items-center justify-center rounded-full bg-[#031b24] border-2 border-[#00d2c4]/40 text-[#00d2c4] shadow-lg shadow-[#00d2c4]/15 transition-all duration-300 group-hover:scale-110 group-hover:border-[#00d2c4] group-hover:bg-[#00d2c4] group-hover:text-[#01141b]">
                    <Icon className="size-6 transition-transform duration-300 group-hover:scale-110" />
                    
                    {/* Step Number Badge */}
                    <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-[#00d2c4] text-[9px] font-black text-[#01141b]">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Step Title */}
                  <span className="mt-4 text-xs font-bold text-slate-200 leading-snug max-w-[110px] group-hover:text-white transition-colors">
                    {step.title}
                  </span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
