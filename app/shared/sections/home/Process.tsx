"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Check } from "lucide-react";
import { PROCESS } from "@/app/core/data/home";
import { Button } from "@/app/shared/ui/Button";
import { Container, Eyebrow } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";

interface StepRowProps {
  phase: (typeof PROCESS)[number];
  index: number;
  total: number;
  activeStep: number;
  setActiveStep: (idx: number) => void;
}

function StepRow({ phase, index, total, activeStep, setActiveStep }: StepRowProps) {
  const rowRef = useRef<HTMLLIElement>(null);
  const isActive = activeStep === index;
  const isPast = activeStep > index;

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        });
      },
      {
        rootMargin: "-20% 0px -35% 0px",
        threshold: 0.2,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index, setActiveStep]);

  return (
    <li
      ref={rowRef}
      className="relative flex gap-6 sm:gap-10 pb-16 sm:pb-24 lg:pb-28 last:pb-6 transition-all duration-300"
    >
      {/* ── Numbered Circle Node on Timeline ── */}
      <div className="relative z-10 flex size-12 shrink-0 items-center justify-center">
        <div
          className={`flex size-11 sm:size-12 items-center justify-center rounded-full border-2 bg-white transition-colors duration-300 shadow-xs ${
            isActive || isPast
              ? "border-[#008c83] text-[#008c83]"
              : "border-slate-200 text-slate-400"
          }`}
        >
          <span className="text-xs sm:text-sm font-extrabold tracking-tight">
            {phase.step}
          </span>
        </div>
      </div>

      {/* ── Phase Details (Title, Description, and Full Outputs) ── */}
      <div className="flex flex-1 flex-col pt-1">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {phase.title}
        </h3>

        <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl">
          {phase.description}
        </p>

        {/* ── Deliverables Outputs Checklist (Full Data Display) ── */}
        <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-x-5 gap-y-2.5">
          {phase.outputs.map((output) => (
            <div
              key={output}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700"
            >
              <Check className="size-4 text-[#008c83] shrink-0" strokeWidth={2.6} />
              <span>{output}</span>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
}

/**
 * Delivery Process section matching 100% with the authentic Vercel production design:
 * - Left column: Sticky rail with eyebrow, main heading, subtitle, and discovery button.
 * - Center: Continuous vertical timeline line with numbered nodes (01, 02, 03, 04).
 * - Right: Clean typographic layout displaying full phase title, description, and every single output with checkmarks.
 * - True sticky scrolling: Left side stays firmly pinned while right side steps scroll through.
 */
export function Process() {
  const trackRef = useRef<HTMLOListElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Smooth scroll progress tracking for the vertical line fill
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 65%", "end 75%"],
  });

  const fill = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section
      className="relative isolate overflow-clip border-t border-b border-slate-200/90 bg-white py-18 sm:py-24 lg:py-28"
      id="process"
    >
      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 items-start">
          
          {/* ── Left Column: Sticky Rail (Firmly pinned on desktop) ── */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal className="flex flex-col gap-4">
              <Eyebrow tone="brand">DELIVERY PROCESS</Eyebrow>

              <h2 className="text-display-sm sm:text-display-md lg:text-display-lg text-slate-900 font-extrabold tracking-tight leading-[1.16]">
                How We Work<br className="hidden sm:inline" /> — A process you can see through.
              </h2>

              <p className="max-w-md text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Four phases, each with a defined output you can hold us to — not a status deck standing in for working software.
              </p>

              <div className="pt-2">
                <Button href="/contact" variant="primary" withArrow className="self-start rounded-full">
                  Start with discovery
                </Button>
              </div>
            </Reveal>
          </div>

          {/* ── Right Column: Complete Timeline with All 4 Steps & Every Output ── */}
          <ol ref={trackRef} className="relative flex flex-col pl-1 sm:pl-2">
            {/* Background static timeline track */}
            <span
              aria-hidden
              className="absolute top-6 bottom-8 left-[1.875rem] sm:left-[2.125rem] w-0.5 bg-slate-200"
            />

            {/* Dynamic scroll-driven animated progress line */}
            <motion.span
              aria-hidden
              style={{ scaleY: fill }}
              className="absolute top-6 bottom-8 left-[1.875rem] sm:left-[2.125rem] w-0.5 origin-top bg-gradient-to-b from-[#008c83] via-[#00bba9] to-[#00d2c4]"
            />

            {PROCESS.map((phase, idx) => (
              <StepRow
                key={phase.title}
                phase={phase}
                index={idx}
                total={PROCESS.length}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            ))}
          </ol>

        </div>
      </Container>
    </section>
  );
}
