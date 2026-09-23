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
} from "lucide-react";
import { Container } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";
import { whyChooseUsWomanSvgData } from "@/app/shared/assets/whyChooseUsWomanData";


interface FeatureCard {
  title: string;
  desc: string;
  icon: React.ElementType;
}

const FEATURES: FeatureCard[] = [
  {
    title: "Business Discovery",
    desc: "Every engagement begins with understanding your business processes, operational challenges, and goals to build solutions that solve the right problems.",
    icon: Sparkles,
  },
  {
    title: "Business Process Automation",
    desc: "We streamline workflows, automate repetitive operations, and reduce manual dependencies to improve efficiency and productivity.",
    icon: RefreshCw,
  },
  {
    title: "Customized Enterprise Solutions",
    desc: "From ERP and CRM to enterprise platforms and mobile applications, every solution is designed around your business — not generic software.",
    icon: Layers,
  },
  {
    title: "Connected Business Ecosystem",
    desc: "Integrate ERP, CRM, finance, warehouse, HR, cloud platforms, and third-party applications into one connected digital ecosystem with complete operational visibility.",
    icon: Link2,
  },
  {
    title: "AI Enablement",
    desc: "Apply AI where it delivers measurable business value — from intelligent search and workflow automation to document processing, predictive insights, and decision support.",
    icon: Zap,
  },
  {
    title: "Industry-Focused Solutions",
    desc: "Every industry operates differently. Our solutions are designed to address the unique workflows, compliance requirements, and operational challenges of manufacturing, logistics, healthcare, retail, finance, and service businesses.",
    icon: ShieldCheck,
  },
];

/**
 * Our Business Approach section featuring 6-card modular grid & visual portrait.
 */
export function WhyChooseUs() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-50/70 py-12 lg:py-16" id="solutions">

      {/* Background Lighting Elements */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-0 size-[36rem] rounded-full bg-cyan-400/10 blur-[150px]"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & 6 Feature Cards Grid */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8">
            <Reveal className="flex flex-col items-start gap-3">
              <span className="text-xs font-bold tracking-widest text-[#008c83] uppercase">
                OUR BUSINESS APPROACH
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Understanding Business. Delivering Technology. Creating Value.
              </h2>
            </Reveal>

            {/* 6 Features Grid (2 Cols on desktop, 1 on mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mt-2">
              {FEATURES.map((feat, idx) => {
                const Icon = feat.icon;

                return (
                  <Reveal
                    key={feat.title}
                    delay={idx * 0.05}
                    className="flex flex-col items-start p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm transition-all duration-300 hover:border-[#00d2c4] hover:shadow-md hover:-translate-y-1 group"
                  >
                    <div className="flex items-center justify-between w-full mb-3">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-teal-50 text-[#008c83] group-hover:bg-[#00d2c4] group-hover:text-[#01141b] transition-colors">
                        <Icon className="size-4.5" />
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {feat.desc}
                    </p>
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
              {/* Local Project Asset Image /assets/why_choose_us_woman.avif (or .jpg) */}
              <div className="relative z-10 w-[300px] sm:w-[360px] ml-auto">
                <img
                  src="/assets/why_choose_us_woman.avif"
                  alt="Young businesswoman smiling warmly"
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 hover:scale-[1.02] shadow-xl"
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
