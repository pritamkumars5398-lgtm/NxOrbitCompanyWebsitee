"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  Zap,
  Layers,
  Cloud,
  Database,
  Link2,
  RefreshCw,
  Headphones,
  Sparkles,
  Star,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";
import { whyChooseUsWomanSvgData } from "@/app/shared/assets/whyChooseUsWomanData";


interface FeatureCard {
  title: string;
  icon: React.ElementType;
}

const FEATURES: FeatureCard[] = [
  {
    title: "Enterprise Security",
    icon: ShieldCheck,
  },
  {
    title: "High Performance",
    icon: Zap,
  },
  {
    title: "Scalable Architecture",
    icon: Layers,
  },
  {
    title: "Cloud Ready",
    icon: Cloud,
  },
  {
    title: "Offline Capability",
    icon: Database,
  },
  {
    title: "Seamless Integrations",
    icon: Link2,
  },
  {
    title: "Agile Delivery",
    icon: RefreshCw,
  },
  {
    title: "Long-term Support",
    icon: Headphones,
  },
];

/**
 * Why Businesses Choose NXTorbit section featuring feature grid & girl holding smartphone portrait.
 */
export function WhyChooseUs() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-50/70 py-12 lg:py-16">

      {/* Background Lighting Elements */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-0 size-[36rem] rounded-full bg-cyan-400/10 blur-[150px]"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & 8 Feature Cards Grid */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8">
            <Reveal className="flex flex-col items-start gap-3">
              <span className="text-xs font-bold tracking-widest text-[#008c83] uppercase">
                WHY BUSINESSES CHOOSE NXT ORBIT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Built for performance.<br />Designed for impact.
              </h2>
            </Reveal>

            {/* 8 Features Grid (4 Cols on desktop, 2 on mobile) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mt-2">
              {FEATURES.map((feat, idx) => {
                const Icon = feat.icon;

                return (
                  <Reveal
                    key={feat.title}
                    delay={idx * 0.05}
                    className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center transition-all duration-300 hover:border-[#00d2c4] hover:shadow-md hover:-translate-y-1 group"
                  >
                    <div className="flex size-11 items-center justify-center rounded-xl bg-teal-50 text-[#008c83] mb-3 group-hover:bg-[#00d2c4] group-hover:text-[#01141b] transition-colors">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 leading-snug">
                      {feat.title}
                    </span>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right Column: Woman holding Smartphone Image & Floating Proof Badges */}
          <Reveal from="right" delay={0.15} className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            {/* Ambient Cyan Radial Arc Behind Photo (Matching Reference Image 2) */}
            <div
              aria-hidden
              className="pointer-events-none absolute right-0 top-1/2 -z-10 size-[34rem] -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,210,196,0.35)_0%,rgba(0,168,150,0.12)_50%,transparent_75%)] blur-[70px]"
            />

            {/* Relative Wrapper for Image and Floating Badges */}
            <div className="relative flex items-center justify-end w-full max-w-[480px] pt-4">
              {/* Floating Badge 1: Performance Optimized (Top Left) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-6 left-0 sm:-left-8 z-30"
              >
                <div className="flex items-center gap-3 rounded-2xl border border-teal-400/30 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md text-slate-900">
                  <div className="flex size-8 items-center justify-center rounded-xl bg-teal-500/10 text-[#008c83]">
                    <Zap className="size-4.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900">Performance</span>
                    <span className="text-[10px] font-semibold text-teal-600">Optimized</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Secure By Design (Middle Left) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-1/2 left-0 sm:-left-10 -translate-y-1/2 z-30"
              >
                <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md text-slate-900">
                  <div className="flex size-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                    <CheckCircle2 className="size-4.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900">Secure</span>
                    <span className="text-[10px] font-semibold text-emerald-600">By Design</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 3: 4.8/5 Rating (Bottom Left) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute bottom-6 left-2 sm:-left-6 z-30"
              >
                <div className="flex items-center gap-2.5 rounded-2xl border border-amber-400/30 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md">
                  <div className="flex items-center text-amber-400">
                    <Star className="size-3.5 fill-amber-400" />
                    <Star className="size-3.5 fill-amber-400" />
                    <Star className="size-3.5 fill-amber-400" />
                    <Star className="size-3.5 fill-amber-400" />
                    <Star className="size-3.5 fill-amber-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900">4.8/5 Rating</span>
                    <span className="text-[9px] text-slate-500">Client Rating</span>
                  </div>
                </div>
              </motion.div>

              {/* Local Project Asset Image /assets/why_choose_us_woman.avif (or .jpg) */}
              <div className="relative z-10 w-[300px] sm:w-[360px] ml-auto">
                <img
                  src="/assets/why_choose_us_woman.avif"
                  alt="Young businesswoman smiling warmly"
                  className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 hover:scale-[1.02] shadow-xl"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedJpg) {
                      target.dataset.triedJpg = "true";
                      target.src = "/assets/why_choose_us_woman.jpg";
                    } else {
                      target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop";
                    }
                  }}
                />
              </div>









            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}
