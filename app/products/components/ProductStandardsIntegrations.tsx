"use client";

import React from "react";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Container, Eyebrow } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";

export interface IntegrationFeatureItem {
  icon: LucideIcon;
  iconBg: string;
  title: string;
  description: string;
}

export interface ProductStandardsIntegrationsProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  highlightTitle?: string;
  description?: string;
  pills?: string[];
  features: IntegrationFeatureItem[];
  visualImage?: string;
  visualAlt?: string;
  className?: string;
}

export function ProductStandardsIntegrations({
  id = "enterprise-integrations",
  eyebrow = "ENTERPRISE INTEGRATIONS",
  title = "Built for Industry Standards.",
  highlightTitle = "Tailored to Your Enterprise.",
  description = "Operates seamlessly as a standalone powerhouse or as a fully integrated layer within your existing ERP and technology ecosystem.",
  pills = [
    "SAP Enterprise",
    "Oracle NetSuite",
    "Tally Prime",
    "Zoho Books",
    "Microsoft Dynamics",
    "Banking Gateways",
  ],
  features,
  visualImage = "/assets/laptop_integration_visual.png",
  visualAlt = "Enterprise Dashboard and Multi-Platform Integrations",
  className = "",
}: ProductStandardsIntegrationsProps) {
  return (
    <section
      id={id}
      style={{ scrollMarginTop: "5rem" }}
      className={`relative isolate overflow-hidden py-14 sm:py-20 bg-linear-to-b from-[#f8fafc] via-white to-[#f8fafc] border-t border-slate-200/80 ${className}`}
    >
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-teal-500/5 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/3 -z-10 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px]"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-7 items-center max-w-7xl mx-auto">
          {/* ── Left Column: Headline, Subtitle, Copy & Ecosystem Badges ── */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <Reveal from="up">
              {eyebrow && (
                <div className="mb-3">
                  <Eyebrow tone="brand">{eyebrow}</Eyebrow>
                </div>
              )}

              <h2 className="text-display-md sm:text-display-lg font-extrabold text-slate-900">
                {title}
              </h2>

              {highlightTitle && (
                <p className="text-lead font-bold text-teal-600 mt-2 tracking-tight">
                  {highlightTitle}
                </p>
              )}

              <p className="text-sm sm:text-base text-slate-600 mt-3.5 leading-relaxed font-normal">
                {description}
              </p>

              {/* Ecosystem Pills Wrap */}
              {pills && pills.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {pills.map((pill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2.5 py-1 rounded-lg text-2xs font-semibold bg-teal-50/70 text-teal-800 border border-teal-200/80 hover:bg-teal-100/70 hover:border-teal-300 transition-all duration-200"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              )}
            </Reveal>
          </div>

          {/* ── Middle Column: 3 Feature Rows with Color Badges ── */}
          <div className="lg:col-span-4 flex flex-col gap-3.5 sm:gap-4">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={idx} from="up" delay={0.08 * (idx + 1)}>
                  <div className="group relative flex items-start gap-3.5 sm:gap-4 rounded-xl border border-slate-200/80 bg-white p-4 sm:p-4.5 transition-all duration-300 hover:border-teal-400 hover:-translate-y-0.5">
                    {/* Icon Badge */}
                    <div
                      className={`flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-xl ${item.iconBg} transition-all duration-300 group-hover:scale-105`}
                    >
                      <Icon className="size-5 stroke-[1.8]" />
                    </div>

                    {/* Content Stack */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1.5">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors tracking-tight">
                          {item.title}
                        </h3>
                        <ArrowRight className="size-3.5 text-slate-300 group-hover:text-teal-600 group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                      </div>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* ── Right Column: 3D Laptop Visual Showcase (Seamless Background Blend, No Borders) ── */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <Reveal from="right" delay={0.15} className="w-full">
              <div className="relative group w-full flex items-center justify-center py-2">
                {/* Soft ambient teal radial aura behind graphic */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-4 -z-10 rounded-full bg-linear-to-tr from-teal-400/25 via-cyan-400/20 to-transparent blur-3xl transition-transform duration-700 group-hover:scale-110"
                />

                {/* Seamlessly blended graphic with NO borders */}
                <div
                  className="relative w-full max-w-[440px] transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{
                    maskImage: "radial-gradient(ellipse 80% 75% at 50% 50%, black 50%, rgba(0,0,0,0.85) 65%, transparent 85%)",
                    WebkitMaskImage: "radial-gradient(ellipse 80% 75% at 50% 50%, black 50%, rgba(0,0,0,0.85) 65%, transparent 85%)",
                  }}
                >
                  <img
                    src={visualImage}
                    alt={visualAlt}
                    className="w-full h-auto object-contain select-none"
                    suppressHydrationWarning
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
