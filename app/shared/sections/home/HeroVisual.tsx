"use client";

import { motion } from "motion/react";
import { CircleCheck, Sparkles } from "lucide-react";
import { EASE } from "@/app/core/motion/tokens";
import { RealPhoneImage } from "@/app/shared/ui/RealPhoneImage";

export function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Ambient background radial glow */}
      <div className="pointer-events-none absolute -right-6 top-1/2 -z-10 h-[34rem] w-[28rem] -translate-y-1/2 sm:h-[40rem] sm:w-[34rem]">
        <div className="absolute inset-0 rounded-[40%_60%_70%_30%/50%_60%_40%_50%] bg-gradient-to-tr from-[#003840] via-[#00808C] to-[#00A896] opacity-60 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE.outExpo }}
        className="relative overflow-hidden rounded-[2rem] border-2 border-white/10 bg-slate-950/20 p-2 shadow-[0_30px_70px_rgba(0,0,0,0.5)] backdrop-blur-md max-w-full lg:max-w-lg"
      >
        <div className="relative overflow-hidden rounded-[1.6rem]">
          <img
            src="/assets/consultancy-hero.png"
            alt="NXTorbit Consultancy"
            className="w-full h-auto object-cover max-h-[460px] aspect-[4/3] rounded-[1.5rem]"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* Floating proof chips */}
      <FloatCard
        className="absolute -top-4 -right-2 sm:-right-4 z-20"
        delay={0.6}
        drift={-8}
        icon={<CircleCheck aria-hidden className="size-4 text-teal-500" strokeWidth={2} />}
        title="Client Satisfaction"
        detail="98% Positive Rating"
      />

      <FloatCard
        className="absolute -bottom-4 -left-2 sm:-left-4 z-20"
        delay={0.8}
        drift={10}
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
