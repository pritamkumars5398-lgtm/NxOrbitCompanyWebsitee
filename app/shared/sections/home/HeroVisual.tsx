"use client";

import { motion } from "motion/react";
import { CircleCheck, Sparkles } from "lucide-react";
import { EASE } from "@/app/core/motion/tokens";
import { RealPhoneImage } from "@/app/shared/ui/RealPhoneImage";

export function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center p-4">


      {/* ── Background Curved Wave Shape ── */}
      <div 
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-24 -z-10 h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-brand-800 via-brand-600 to-teal-500 opacity-95 shadow-2xl transition-all duration-700" 
        style={{ borderRadius: "40% 60% 30% 70% / 60% 40% 60% 40%" }}
      />
      <div 
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-16 -z-10 h-[30rem] w-[30rem] rounded-full bg-teal-400/20 blur-2xl" 
      />

      {/* ── Main Hero Image with Curved Shield Mask & White Border ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.85, ease: EASE.outExpo }}
        className="relative z-10 overflow-hidden rounded-tl-[10rem] rounded-br-[10rem] rounded-tr-[3rem] rounded-bl-[3rem] border-[12px] border-white bg-slate-100 shadow-[0_25px_60px_rgba(0,0,0,0.18)] max-w-full lg:max-w-md aspect-[4/3]"
      >
        <img
          src="/assets/consulting-team.png"
          alt="NXTorbit Consultancy Team"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        {/* Soft lighting overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/10 via-transparent to-white/10 pointer-events-none" />
      </motion.div>

      {/* Floating proof chips */}
      <FloatCard
        className="absolute -top-6 right-0 z-20"
        delay={0.65}
        drift={-6}
        icon={<CircleCheck aria-hidden className="size-4 text-teal-500" strokeWidth={2} />}
        title="Client Satisfaction"
        detail="98% Positive Rating"
      />

      <FloatCard
        className="absolute -bottom-6 left-0 z-20"
        delay={0.85}
        drift={8}
        icon={<Sparkles aria-hidden className="size-4 text-teal-500" strokeWidth={2} />}
        title="Consulting Experts"
        detail="250+ Global Engineers"
      />
    </div>
  );
}

function FloatCard({
  className,
  icon,
  title,
  detail,
  delay,
  drift,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  detail: string;
  delay: number;
  drift: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: EASE.outExpo, delay }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, drift, 0] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        className="flex items-center gap-3 rounded-2xl border border-teal-500/20 bg-slate-950/85 px-4 py-3 shadow-xl backdrop-blur-md text-white"
      >
        <span className="inline-flex size-8 items-center justify-center rounded-lg bg-teal-500/10">
          {icon}
        </span>
        <span className="flex flex-col">
          <span className="text-xs font-semibold text-white">{title}</span>
          <span className="text-[0.6875rem] text-teal-300">{detail}</span>
        </span>
      </motion.div>
    </motion.div>
  );
}
