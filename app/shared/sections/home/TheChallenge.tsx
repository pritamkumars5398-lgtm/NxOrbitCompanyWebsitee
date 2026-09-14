"use client";

import { AlertTriangle, Clock, EyeOff, Layers } from "lucide-react";
import { Container, Section } from "@/app/shared/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";

const SYMPTOMS = [
  {
    symptom: "Disconnected systems",
    whatItLooksLike:
      "Your ERP, CRM, and finance tools don't talk to each other, so someone ends up re-entering the same data twice.",
    icon: Layers,
  },
  {
    symptom: "Manual overhead",
    whatItLooksLike:
      "Teams spend hours bridging the gaps between systems with spreadsheets and email instead of doing their actual jobs.",
    icon: Clock,
  },
  {
    symptom: "Unclear visibility",
    whatItLooksLike:
      "Leadership makes decisions on numbers that are a week old because nobody has a real-time view.",
    icon: EyeOff,
  },
  {
    symptom: "Legacy drag",
    whatItLooksLike:
      "Old infrastructure that resists modern security and integration, so every new project starts with a workaround.",
    icon: AlertTriangle,
  },
];

export function TheChallenge() {
  return (
    <Section tone="ink" spacing="lg" id="business-challenge" className="overflow-hidden bg-[#07121B] py-16 sm:py-20 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.1fr] lg:gap-16 items-start">
          {/* Left Side: Headline & Narrative */}
          <div className="flex flex-col items-start gap-6">
            <Reveal from="up">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-teal-400">
                BUSINESS CHALLENGE
              </span>
            </Reveal>

            <Reveal from="up" delay={0.06}>
              <h2 className="text-display-md sm:text-display-lg font-bold text-white leading-tight">
                Growth shouldn't make your business <br className="hidden sm:inline" />
                <span className="text-teal-300">more complicated.</span>
              </h2>
            </Reveal>

            <Reveal from="up" delay={0.12}>
              <div className="flex flex-col gap-4 text-base leading-relaxed text-slate-300 max-w-xl">
                <p>
                  Growth often brings new systems, new teams, and new processes — but not always better coordination. Information becomes scattered, manual work increases, and disconnected applications slow decision-making.
                </p>
                <p className="text-slate-400 font-medium">
                  Technology should simplify operations, not create more complexity. That's where the right enterprise platform makes the difference.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Side: 4 Symptom Cards */}
          <div className="flex flex-col gap-4">
            <Stagger stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SYMPTOMS.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem
                    key={item.symptom}
                    from="up"
                    className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/40 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex size-8 items-center justify-center rounded-lg bg-teal-500/10 text-teal-300">
                        <Icon className="size-4" />
                      </span>
                      <h3 className="text-sm font-bold text-white tracking-wide">
                        {item.symptom}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {item.whatItLooksLike}
                    </p>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </Container>
    </Section>
  );
}
