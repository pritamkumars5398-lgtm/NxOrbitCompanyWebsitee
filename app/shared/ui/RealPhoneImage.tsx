"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  Zap,
  Home,
  PieChart,
  User,
  Activity,
  CheckCircle2,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  Wifi,
  Signal,
  Battery,
} from "lucide-react";

interface RealPhoneImageProps {
  variant?: "cta" | "hero";
  className?: string;
}

export function RealPhoneImage({ variant = "cta", className = "" }: RealPhoneImageProps) {
  const isHero = variant === "hero";

  if (isHero) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        {/* Deep Fluid Organic Teal Shape Backdrop for Hero */}
        <div className="pointer-events-none absolute -right-6 top-1/2 -z-10 h-[34rem] w-[28rem] -translate-y-1/2 sm:h-[40rem] sm:w-[34rem]">
          <div className="absolute inset-0 rounded-[40%_60%_70%_30%/50%_60%_40%_50%] bg-gradient-to-tr from-[#003840] via-[#00808C] to-[#00A896] opacity-95 shadow-[0_25px_90px_rgba(0,168,150,0.4)] backdrop-blur-3xl transition-all duration-700 hover:scale-[1.01]" />
          <div className="absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-cyan-300/30 blur-[75px]" />
          <div className="absolute -inset-4 rounded-[45%_55%_65%_35%/55%_50%_50%_45%] border border-teal-300/30" />
          <div className="absolute -inset-10 rounded-[50%_50%_60%_40%/45%_55%_45%_55%] border border-teal-400/20" />
        </div>

        {/* Hero Upright Light Phones Visual */}
        <div className="relative z-10 flex w-full max-w-xl items-center justify-center py-6">
          <div className="relative flex w-full items-center justify-center gap-3 sm:gap-6">
            {/* Left Hero Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[50%] max-w-[250px] shrink-0 rounded-[2.8rem] border-[8px] border-slate-900 bg-slate-900 p-1.5 shadow-[0_35px_80px_rgba(0,0,0,0.6)] sm:max-w-[275px]"
            >
              <div className="relative overflow-hidden rounded-[2.2rem] bg-slate-50 text-slate-900 shadow-inner">
                <div className="sticky top-0 z-30 flex h-7 items-center justify-center bg-slate-50 pt-1.5">
                  <div className="h-3.5 w-24 rounded-full bg-slate-950 flex items-center justify-end px-2">
                    <div className="size-2 rounded-full bg-indigo-950 border border-slate-800" />
                  </div>
                </div>

                <div className="p-3.5 pt-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex size-7 items-center justify-center rounded-full bg-teal-600 font-bold text-white text-[10px]">
                        NX
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] text-slate-400">ACTIVE PROJECT</span>
                        <span className="text-xs font-bold text-slate-800">NXTorbit Mobile</span>
                      </div>
                    </div>
                    <Zap className="size-3.5 text-teal-600" />
                  </div>

                  <div className="mt-3.5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 p-3.5 text-white shadow-md">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-semibold text-teal-400 tracking-wider">MONTHLY REVENUE</span>
                      <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[9px] font-bold text-emerald-400">
                        <TrendingUp className="size-2.5" /> +24.8%
                      </span>
                    </div>
                    <div className="mt-1 text-lg font-black tracking-tight">$48,250.00</div>

                    <div className="mt-2 h-10 w-full">
                      <svg viewBox="0 0 100 40" className="h-full w-full overflow-visible">
                        <defs>
                          <linearGradient id="chartGradHero" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#00A896" stopOpacity="0.45" />
                            <stop offset="100%" stopColor="#00A896" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M 0 30 Q 25 8, 50 20 T 100 4 L 100 40 L 0 40 Z" fill="url(#chartGradHero)" />
                        <path d="M 0 30 Q 25 8, 50 20 T 100 4" fill="none" stroke="#00A896" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-col gap-1.5 text-[10px]">
                    <div className="flex items-center justify-between rounded-xl bg-slate-100 p-2 font-medium">
                      <span className="text-slate-600">User Retention</span>
                      <span className="font-bold text-teal-700">94.2%</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-slate-100 p-2 font-medium">
                      <span className="text-slate-600">App Store Rating</span>
                      <span className="font-bold text-teal-700">4.9 ★</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-slate-100 p-2 font-medium">
                      <span className="text-slate-600">Active Installs</span>
                      <span className="font-bold text-slate-900">250K+</span>
                    </div>
                  </div>
                </div>

                <div className="mt-1 flex items-center justify-around border-t border-slate-200 bg-white py-2 text-slate-400">
                  <Home className="size-4 text-teal-600 font-bold" />
                  <PieChart className="size-4" />
                  <User className="size-4" />
                </div>
              </div>
            </motion.div>

            {/* Right Hero Phone */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 5 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative -ml-4 w-[52%] max-w-[260px] shrink-0 rounded-[2.8rem] border-[8px] border-slate-900 bg-slate-900 p-1.5 shadow-[0_40px_90px_rgba(0,0,0,0.65)] sm:max-w-[285px]"
            >
              <div className="relative overflow-hidden rounded-[2.2rem] bg-slate-50 text-slate-900 shadow-inner">
                <div className="sticky top-0 z-30 flex h-7 items-center justify-center bg-slate-50 pt-1.5">
                  <div className="h-3.5 w-24 rounded-full bg-slate-950 flex items-center justify-end px-2">
                    <div className="size-2 rounded-full bg-indigo-950 border border-slate-800" />
                  </div>
                </div>

                <div className="p-3.5 pt-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">System Analytics</span>
                    <ShieldCheck className="size-3.5 text-teal-600" />
                  </div>

                  <div className="mt-3 rounded-2xl bg-teal-950/10 p-3 border border-teal-500/20">
                    <span className="text-[9px] font-bold text-teal-800 uppercase tracking-wider">UPTIME SLA</span>
                    <div className="text-lg font-black text-teal-900 mt-0.5">99.99%</div>
                    <span className="text-[9px] text-teal-700">Enterprise grade reliability</span>
                  </div>

                  <div className="mt-3 space-y-2">
                    <span className="text-[10px] font-bold text-slate-700">Live Status</span>
                    <div className="space-y-1.5 text-[10px]">
                      <div className="flex items-center justify-between rounded-xl bg-slate-100 p-2 font-medium">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-3 text-emerald-500" /> Cloud Sync
                        </span>
                        <span className="font-bold text-emerald-600">Active</span>
                      </div>
                      <div className="flex items-center justify-between rounded-xl bg-slate-100 p-2 font-medium">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-3 text-emerald-500" /> Security Audit
                        </span>
                        <span className="font-bold text-emerald-600">Passed</span>
                      </div>
                      <div className="flex items-center justify-between rounded-xl bg-slate-100 p-2 font-medium">
                        <span className="flex items-center gap-1.5">
                          <Activity className="size-3 text-teal-600" /> Latency
                        </span>
                        <span className="font-bold text-slate-900">12ms</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-1 flex items-center justify-around border-t border-slate-200 bg-white py-2 text-slate-400">
                  <Home className="size-4" />
                  <PieChart className="size-4 text-teal-600 font-bold" />
                  <User className="size-4" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  /* Dual 3D floating phone motion matching CTA reference image perspective */
  const leftPhoneMotion = {
    initial: { opacity: 0, y: 40, rotateZ: -7, rotateY: -18, rotateX: 10 },
    animate: {
      opacity: 1,
      y: [0, -8, 0],
      rotateZ: -7,
      rotateY: -18,
      rotateX: 10,
      transformPerspective: 1600,
    },
  };

  const rightPhoneMotion = {
    initial: { opacity: 0, y: 50, rotateZ: -2, rotateY: -18, rotateX: 10 },
    animate: {
      opacity: 1,
      y: [0, -12, 0],
      rotateZ: -2,
      rotateY: -18,
      rotateX: 10,
      transformPerspective: 1600,
    },
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* ── Background Organic Fluid Shape & Tech Orbit Structure for CTA ── */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 sm:h-[38rem] sm:w-[38rem]">
        {/* Organic Fluid Teal Backdrop Blob (Matching Reference Image 2) */}
        <div className="absolute inset-0 rounded-[40%_60%_70%_30%/50%_60%_40%_50%] bg-gradient-to-tr from-[#002d38] via-[#006e78] to-[#00a896] opacity-65 blur-3xl" />

        {/* Luminous Central Cyan Radial Light Orb */}
        <div className="absolute left-1/2 top-1/2 size-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,210,196,0.45)_0%,rgba(0,168,150,0.15)_50%,transparent_75%)] blur-[60px]" />

        {/* Concentric Tech Orbit Rings */}
        <div className="absolute left-1/2 top-1/2 size-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00d2c4]/25 shadow-[inset_0_0_40px_rgba(0,210,196,0.12)]" />
        <div className="absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-300/10 border-dashed animate-[spin_80s_linear_infinite]" />
      </div>

      {/* ── Hyper-Realistic 3D Floating Dual Smartphones for CTA ── */}
      <div className="relative z-10 flex w-full max-w-xl items-center justify-center py-4 [perspective:1800px] [transform-style:preserve-3d]">
        <div className="relative flex w-full items-center justify-center gap-2 sm:gap-4" style={{ transformStyle: "preserve-3d" }}>

          {/* ──── LEFT IPHONE (Photorealistic Titanium + Glowing Dark Teal Finance Screen) ──── */}
          <motion.div
            initial={leftPhoneMotion.initial}
            animate={leftPhoneMotion.animate}
            transition={{
              y: { duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
              default: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
            }}
            className="relative w-[52%] max-w-[260px] shrink-0 sm:max-w-[285px]"
          >
            {/* Metallic Titanium Outer Phone Body */}
            <div className="relative rounded-[48px] bg-gradient-to-b from-[#484c56] via-[#22252c] to-[#121419] p-[3px] shadow-[0_0_0_1px_rgba(0,0,0,0.9),0_35px_80px_-15px_rgba(0,0,0,0.95),0_15px_30px_-15px_rgba(0,210,196,0.3)]">
              {/* Outer Metallic Bevel Highlight */}
              <div className="rounded-[45px] border border-white/20 bg-[#000000] p-[7px]">
                {/* OLED Glass Screen Container */}
                <div className="relative overflow-hidden rounded-[38px] bg-[#07131b] text-white shadow-inner">
                  {/* Glass Sheen / Reflection Overlay */}
                  <div className="pointer-events-none absolute inset-0 z-40 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent" />

                  {/* Dynamic Island Notch */}
                  <div className="sticky top-0 z-30 flex h-7 items-center justify-between bg-[#07131b]/90 px-5 pt-2 backdrop-blur-md">
                    <span className="text-[10px] font-semibold text-slate-300">9:41</span>
                    <div className="flex h-4 w-20 items-center justify-end rounded-full bg-black px-2 shadow-inner border border-slate-800/80">
                      <div className="size-2 rounded-full bg-[#0a0f1d] border border-slate-700/50" />
                    </div>
                    <div className="flex items-center gap-1 text-slate-300">
                      <Signal className="size-2.5" />
                      <Wifi className="size-2.5" />
                      <Battery className="size-3 text-emerald-400" />
                    </div>
                  </div>

                  {/* App UI Content */}
                  <div className="p-3.5 pt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex size-7 items-center justify-center rounded-xl bg-gradient-to-br from-[#00d2c4] to-[#008c83] font-black text-[#01141b] text-[10px] shadow-sm">
                          NX
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[8px] font-bold text-[#00d2c4] tracking-widest uppercase">ACTIVE PROJECT</span>
                          <span className="text-xs font-bold text-white">NXTorbit Mobile</span>
                        </div>
                      </div>
                      <div className="flex size-6 items-center justify-center rounded-full bg-slate-800/80 text-[#00d2c4]">
                        <Zap className="size-3" />
                      </div>
                    </div>

                    <div className="mt-3 rounded-2xl border border-[#00d2c4]/30 bg-gradient-to-br from-[#0d2733] via-[#081a24] to-[#051119] p-3 shadow-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-bold tracking-wider text-slate-300">MONTHLY REVENUE</span>
                        <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[8px] font-bold text-emerald-400">
                          <TrendingUp className="size-2.5" /> +24.8%
                        </span>
                      </div>
                      <div className="mt-1 text-lg font-black tracking-tight text-white">$48,250.00</div>

                      <div className="mt-2 h-10 w-full">
                        <svg viewBox="0 0 100 40" className="h-full w-full overflow-visible">
                          <defs>
                            <linearGradient id="glowChartGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#00d2c4" stopOpacity="0.5" />
                              <stop offset="100%" stopColor="#00d2c4" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path d="M 0 30 Q 25 6, 50 18 T 100 3 L 100 40 L 0 40 Z" fill="url(#glowChartGrad)" />
                          <path d="M 0 30 Q 25 6, 50 18 T 100 3" fill="none" stroke="#00d2c4" strokeWidth="2.5" strokeLinecap="round" />
                          <circle cx="100" cy="3" r="3" fill="#00d2c4" className="animate-pulse" />
                        </svg>
                      </div>
                    </div>

                    <div className="mt-2.5 flex flex-col gap-1.5 text-[9px]">
                      <div className="flex items-center justify-between rounded-xl bg-slate-900/80 border border-slate-800/60 p-2 font-medium">
                        <span className="text-slate-400">User Retention</span>
                        <span className="font-bold text-[#00d2c4]">94.2%</span>
                      </div>
                      <div className="flex items-center justify-between rounded-xl bg-slate-900/80 border border-slate-800/60 p-2 font-medium">
                        <span className="text-slate-400">App Store Rating</span>
                        <span className="font-bold text-amber-400">4.9 ★</span>
                      </div>
                      <div className="flex items-center justify-between rounded-xl bg-slate-900/80 border border-slate-800/60 p-2 font-medium">
                        <span className="text-slate-400">Active Installs</span>
                        <span className="font-bold text-white">250K+</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-1 flex items-center justify-around border-t border-slate-800/80 bg-[#040d13] py-2 text-slate-500">
                    <Home className="size-4 text-[#00d2c4]" />
                    <PieChart className="size-4" />
                    <User className="size-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>


          {/* ──── RIGHT IPHONE (Photorealistic Titanium + Dark Teal Analytics Screen) ──── */}
          <motion.div
            initial={rightPhoneMotion.initial}
            animate={rightPhoneMotion.animate}
            transition={{
              y: { duration: 5.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.5 },
              default: { duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
            }}
            className="relative -ml-6 w-[54%] max-w-[270px] shrink-0 sm:max-w-[295px]"
          >
            <div className="relative rounded-[48px] bg-gradient-to-b from-[#484c56] via-[#22252c] to-[#121419] p-[3px] shadow-[0_0_0_1px_rgba(0,0,0,0.9),0_40px_90px_-15px_rgba(0,0,0,0.95),0_15px_35px_-15px_rgba(0,210,196,0.35)]">
              <div className="rounded-[45px] border border-white/20 bg-[#000000] p-[7px]">
                <div className="relative overflow-hidden rounded-[38px] bg-[#051118] text-white shadow-inner">
                  <div className="pointer-events-none absolute inset-0 z-40 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent" />

                  <div className="sticky top-0 z-30 flex h-7 items-center justify-between bg-[#051118]/90 px-5 pt-2 backdrop-blur-md">
                    <span className="text-[10px] font-semibold text-slate-300">9:41</span>
                    <div className="flex h-4 w-20 items-center justify-end rounded-full bg-black px-2 shadow-inner border border-slate-800/80">
                      <div className="size-2 rounded-full bg-[#0a0f1d] border border-slate-700/50" />
                    </div>
                    <div className="flex items-center gap-1 text-slate-300">
                      <Signal className="size-2.5" />
                      <Wifi className="size-2.5" />
                      <Battery className="size-3 text-emerald-400" />
                    </div>
                  </div>

                  <div className="p-3.5 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white tracking-wide">System Analytics</span>
                      <ShieldCheck className="size-4 text-[#00d2c4]" />
                    </div>

                    <div className="mt-3 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-[#09232e] to-[#041219] p-3 shadow-md">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-bold uppercase tracking-wider text-[#00d2c4]">UPTIME SLA</span>
                        <Sparkles className="size-3 text-[#00d2c4]" />
                      </div>
                      <div className="mt-0.5 text-xl font-black tracking-tight text-white">99.99%</div>
                      <span className="text-[8px] text-slate-400">Enterprise grade reliability</span>
                    </div>

                    <div className="mt-2.5 space-y-1.5">
                      <span className="text-[9px] font-bold text-slate-300 uppercase tracking-wider">Live Status</span>
                      <div className="space-y-1.5 text-[9px]">
                        <div className="flex items-center justify-between rounded-xl bg-slate-900/80 border border-slate-800/60 p-2 font-medium">
                          <span className="flex items-center gap-1.5 text-slate-300">
                            <CheckCircle2 className="size-3 text-emerald-400" /> Cloud Sync
                          </span>
                          <span className="font-bold text-emerald-400">Active</span>
                        </div>
                        <div className="flex items-center justify-between rounded-xl bg-slate-900/80 border border-slate-800/60 p-2 font-medium">
                          <span className="flex items-center gap-1.5 text-slate-300">
                            <CheckCircle2 className="size-3 text-emerald-400" /> Security Audit
                          </span>
                          <span className="font-bold text-emerald-400">Passed</span>
                        </div>
                        <div className="flex items-center justify-between rounded-xl bg-slate-900/80 border border-slate-800/60 p-2 font-medium">
                          <span className="flex items-center gap-1.5 text-slate-300">
                            <Activity className="size-3 text-[#00d2c4]" /> Latency
                          </span>
                          <span className="font-bold text-white">12ms</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-1 flex items-center justify-around border-t border-slate-800/80 bg-[#030b10] py-2 text-slate-500">
                    <Home className="size-4" />
                    <PieChart className="size-4 text-[#00d2c4]" />
                    <User className="size-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}


