"use client";

import { ArrowRight, DollarSign, Frown, ThumbsDown, Trash2, CheckCircle2 } from "lucide-react";
import { Container, Eyebrow, Section } from "@/app/shared/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";

const BULLETS = [
  "High user expectations and low tolerance for friction",
  "Security and data privacy concerns",
  "Complex integration with existing systems",
  "Scalability and performance at enterprise level",
];

const IMPACT_STEPS = [
  { title: "Poor User Experience", icon: Frown },
  { title: "Low User Engagement", icon: ThumbsDown },
  { title: "Higher Uninstalls", icon: Trash2 },
  { title: "Lost Revenue & Opportunities", icon: DollarSign, highlighted: true },
];

export function TheChallenge() {
  return (
    <Section tone="ink" spacing="lg" id="the-challenge" className="overflow-hidden bg-[#07121B] py-16 sm:py-20 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
          {/* Left Side: Challenge Text & Bullets */}
          <div className="flex flex-col items-start gap-6">
            <Reveal from="up">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-teal-400">
                THE CHALLENGE
              </span>
            </Reveal>

            <Reveal from="up" delay={0.06}>
              <h2 className="text-display-md sm:text-display-lg font-bold text-white leading-tight">
                Building an app is easy. <br />
                <span className="text-teal-300">Building one people rely on is much harder.</span>
              </h2>
            </Reveal>

            <Reveal from="up" delay={0.12}>
              <p className="text-base leading-relaxed text-slate-300 max-w-xl">
                Poor performance, confusing navigation, and lack of scalability lead to frustrated users, abandoned apps, and missed business opportunities.
              </p>
            </Reveal>

            <Stagger stagger={0.08} className="mt-2 flex flex-col gap-3">
              {BULLETS.map((bullet) => (
                <StaggerItem key={bullet} from="up" className="flex items-center gap-3 text-sm font-medium text-slate-200">
                  <CheckCircle2 className="size-4 shrink-0 text-teal-400" />
                  <span>{bullet}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Right Side: Impact Flow Cards */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-6 text-center">
              The Impact on your business
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
              {IMPACT_STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex flex-col items-center">
                    <div
                      className={`group relative flex w-full flex-col items-center justify-center rounded-2xl p-5 text-center transition-all duration-300 ${
                        step.highlighted
                          ? "bg-teal-950/80 border-2 border-teal-400 text-teal-200 shadow-lg shadow-teal-500/20"
                          : "bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <span
                        className={`inline-flex size-10 items-center justify-center rounded-xl mb-3 ${
                          step.highlighted ? "bg-teal-400 text-slate-950 font-bold" : "bg-white/5 text-teal-400"
                        }`}
                      >
                        <Icon className="size-5" />
                      </span>
                      <span className="text-xs font-bold leading-tight">{step.title}</span>
                    </div>

                    {idx < IMPACT_STEPS.length - 1 && (
                      <ArrowRight className="my-2 size-4 text-teal-400/60 hidden lg:block rotate-90 lg:rotate-0" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
