"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CircleCheck, Sparkles } from "lucide-react";
import { EASE } from "@/app/core/motion/tokens";

const SLIDER_IMAGES = [
  "/assets/hero_slider_1.webp",
  "/assets/hero_slider_2.webp",
  "/assets/hero_slider_3.webp",
];

export function HeroVisual() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

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

      {/* ── Main Hero Image with Curved Shield Mask & White Border (Larger & Shifted Upwards) ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.85, ease: EASE.outExpo }}
        className="relative z-10 overflow-hidden rounded-tl-[10rem] rounded-br-[10rem] rounded-tr-[3rem] rounded-bl-[3rem] border-[12px] border-white bg-slate-100 shadow-[0_25px_60px_rgba(0,0,0,0.18)] w-[520px] max-w-full lg:max-w-xl aspect-[4/3] lg:-translate-y-8 lg:-mt-4"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={SLIDER_IMAGES[currentIndex]}
            alt={`NXTorbit Consultancy Slide ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: EASE.outExpo }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Soft lighting overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/10 via-transparent to-white/10 pointer-events-none z-10" />

        {/* Dot navigation indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-slate-950/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          {SLIDER_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`size-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? "bg-teal-400 w-4.5" : "bg-white/60 hover:bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
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
