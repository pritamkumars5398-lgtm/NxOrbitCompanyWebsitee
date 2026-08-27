"use client";

import {
  ArrowRight, FileText, Target, Cpu, Code, Layers, Activity,
  CheckCircle2, Workflow, Sparkles, Zap, ShieldCheck, Lightbulb, LucideIcon,
  MessageSquare, UserCheck, Eye, Award
} from "lucide-react";
import { Container, Section } from "@/app/shared/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";

export interface ProcessStepItem {
  step: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

const DEFAULT_ICONS: LucideIcon[] = [
  Eye,
  MessageSquare,
  UserCheck,
  ShieldCheck,
  Award,
  Workflow,
  Cpu,
  Code,
  Layers,
  Activity,
  CheckCircle2,
  Sparkles,
];

interface ProcessArcLayoutProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  steps: ProcessStepItem[];
  className?: string;
}

/**
 * Clean Process Layout aligned 100% with NXTorbit Brand Teal & Slate Color System.
 * Features curved arc dotted line on desktop (lg+) and clean vertical timeline on mobile/tablet (<lg).
 */
export function ProcessArcLayout({
  eyebrow = "HOW WE WORK",
  title = "From first conversation to live product.",
  subtitle = "A proven, transparent delivery methodology for engineering products that scale.",
  steps,
  className,
}: ProcessArcLayoutProps) {
  const total = steps.length;

  // Row height & padding for desktop arc track (lg+)
  const rowHeight = 108;
  const paddingTop = 35;
  const bottomPadding = 45;
  const totalHeight = paddingTop + (total - 1) * rowHeight + bottomPadding;

  // Large gentle circular arc parameters (R=520px) for desktop curve
  const R = 520;
  const Xc = -410;
  const maxAngle = 0.54; // radians (~31 degrees)

  // Compute exact center points for each step badge on desktop
  const stepPositions = steps.map((_, i) => {
    const fraction = total > 1 ? (i - (total - 1) / 2) / ((total - 1) / 2) : 0;
    const angle = fraction * maxAngle;
    const y = paddingTop + i * rowHeight + 25;
    const x = Xc + R * Math.cos(angle);
    return { x, y, angle };
  });

  // Construct SVG path passing EXACTLY through the center of every DOM badge!
  const generateSvgCenterline = () => {
    if (stepPositions.length === 0) return "";
    const p0 = stepPositions[0];
    let d = `M ${p0.x + 25} ${p0.y}`;
    for (let i = 1; i < stepPositions.length; i++) {
      const prev = stepPositions[i - 1];
      const curr = stepPositions[i];
      const cy1 = prev.y + rowHeight * 0.45;
      const cy2 = curr.y - rowHeight * 0.45;
      d += ` C ${prev.x + 25} ${cy1}, ${curr.x + 25} ${cy2}, ${curr.x + 25} ${curr.y}`;
    }
    return d;
  };

  const svgArcPath = generateSvgCenterline();
  const svgWidth = 310;

  return (
    <Section tone="white" spacing="lg" className={`relative isolate overflow-hidden py-10 sm:py-16 lg:py-20 ${className || ""}`}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10 xl:gap-14 items-center">

          {/* ── Left Column: Circular Branding Hub (NXTorbit Brand Colors) ── */}
          <Reveal from="left" className="relative flex justify-center w-full">
            <div className="relative flex flex-col items-center justify-center rounded-full bg-white p-6 sm:p-8 md:p-10 text-center shadow-2xl shadow-brand-500/10 border border-slate-200/90 aspect-square w-full max-w-[290px] sm:max-w-[350px] lg:max-w-[390px] xl:max-w-[430px] mx-auto shrink-0">

              {/* Outer NXTorbit Brand Arc */}
              <svg
                aria-hidden
                className="absolute inset-0 size-full pointer-events-none"
                viewBox="0 0 440 440"
                fill="none"
              >
                <defs>
                  <linearGradient id="nxtorbit-brand-arc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00BBA9" />
                    <stop offset="60%" stopColor="#009990" />
                    <stop offset="100%" stopColor="#0284c7" />
                  </linearGradient>
                </defs>

                <path
                  d="M 220 20 A 200 200 0 1 0 220 420"
                  stroke="url(#nxtorbit-brand-arc-grad)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  className="opacity-95"
                />
              </svg>

              {/* Inner Watermark Star */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.05] select-none"
              >
                <svg className="size-48 sm:size-60 lg:size-68 xl:size-72 text-brand-600" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0 L63 37 L100 50 L63 63 L50 100 L37 63 L0 50 L37 37 Z" />
                </svg>
              </div>

              {/* Hub Title Contents */}
              <div className="relative z-10 flex flex-col items-center max-w-[220px] sm:max-w-xs">
                <span className="text-eyebrow text-brand-600 font-bold uppercase tracking-wider mb-1.5 sm:mb-2 text-[10px] sm:text-xs">
                  {eyebrow}
                </span>

                <h2 className="text-display-xs sm:text-display-sm lg:text-display-md text-slate-900 font-extrabold tracking-tight leading-tight">
                  {title}
                </h2>

                <div className="h-1 w-10 sm:w-12 rounded-full bg-brand-600 my-2 sm:my-3 lg:my-4" />

                {subtitle && (
                  <p className="text-[11px] sm:text-xs lg:text-sm text-slate-500 leading-relaxed font-normal">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          </Reveal>

          {/* ── Right Column: Arc Track & Step Nodes ── */}
          <div
            className="relative pb-4 pt-1 w-full lg:min-h-[610px]"
          >

            {/* SVG Curved Dotted Guide Line (Desktop lg+) */}
            <svg
              aria-hidden
              className="absolute left-0 top-0 hidden lg:block pointer-events-none z-0"
              style={{ width: `${svgWidth}px`, height: `${totalHeight}px` }}
              viewBox={`0 0 ${svgWidth} ${totalHeight}`}
              fill="none"
            >
              {/* Only Center Dotted/Dashed Guide Line */}
              <path
                d={svgArcPath}
                stroke="#00BBA9"
                strokeWidth="2"
                strokeDasharray="6 4"
                opacity="0.5"
              />
            </svg>

            {/* Mobile / Tablet Vertical Dotted Line Guide (< lg) */}
            <div
              aria-hidden
              className="absolute left-5 sm:left-6 top-6 bottom-6 w-0.5 border-l-2 border-dotted border-brand-500/40 lg:hidden"
            />

            {/* Steps Container */}
            <Stagger stagger={0.08} className="relative z-10 flex flex-col space-y-6 lg:space-y-0">
              {steps.map((stepItem, index) => {
                const IconComponent = stepItem.icon || DEFAULT_ICONS[index % DEFAULT_ICONS.length];
                const pt = stepPositions[index];

                // Curve offset in exact 1:1 pixel parity with SVG viewBox (active on lg+)
                const curveOffsetPx = Math.round(pt.x);

                return (
                  <StaggerItem
                    key={stepItem.step || index}
                    from="right"
                    className="group relative flex items-center gap-3 sm:gap-4 transition-transform duration-300 hover:translate-x-1 ml-0 lg:ml-[var(--curve-offset)] lg:h-[108px]"
                    style={
                      {
                        "--curve-offset": `${curveOffsetPx}px`,
                      } as React.CSSProperties
                    }
                  >
                    {/* 3D Elevated Circular Step Badge Centered Directly on Guide Line (01, 02, 03...) */}
                    <div className="relative z-20 flex size-10 sm:size-11 lg:size-12 shrink-0 items-center justify-center rounded-full bg-white font-mono text-xs sm:text-sm lg:text-base font-extrabold text-brand-600 shadow-lg shadow-slate-900/15 border border-slate-200 ring-4 ring-slate-100 transition-all duration-300 group-hover:scale-110 group-hover:border-brand-500 group-hover:ring-brand-100">
                      {stepItem.step}
                    </div>

                    {/* Connector Arrow Line (──→) */}
                    <div className="flex items-center text-brand-600 shrink-0 font-bold -ml-1">
                      <span className="w-2 sm:w-3.5 h-0.5 bg-brand-500/40 hidden sm:inline-block" />
                      <ArrowRight className="size-3.5 sm:size-4 text-brand-600 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    {/* Step Icon Badge */}
                    <div className="flex size-9 sm:size-10 lg:size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 border border-brand-100 shadow-2xs transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                      <IconComponent className="size-4 sm:size-5" />
                    </div>

                    {/* Step Title & Description Content */}
                    <div className="flex flex-col min-w-0 pl-1">
                      <h3 className="text-sm sm:text-base lg:text-lg font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-brand-600 transition-colors duration-200">
                        {stepItem.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs lg:text-sm leading-relaxed text-slate-500 mt-0.5 max-w-[260px] sm:max-w-md lg:max-w-[280px] xl:max-w-sm font-normal line-clamp-2">
                        {stepItem.description}
                      </p>
                    </div>
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
