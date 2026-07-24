"use client";

import { motion } from "motion/react";
import { CircleCheck, Sparkles } from "lucide-react";
import { EASE } from "@/app/core/motion/tokens";
import { RealPhoneImage } from "@/app/shared/ui/RealPhoneImage";

export function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center">
      {/* 3D Phone Mockups Visual with Radial Glow Circle */}
      <RealPhoneImage variant="hero" />

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
        title="Apps Delivered"
        detail="250+ High Performance"
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
