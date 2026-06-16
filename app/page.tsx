"use client";

import { useState } from "react";
import { AppIcon } from "./shared/components/AppIcon";
import { AppButton } from "./shared/components/AppButton";
import Navbar from "./shared/components/Navbar";
import Footer from "./shared/components/Footer";
import {
  COMPLIANCE_ITEMS,
  WORK_ITEMS,
  TESTIMONIALS,
  FAQS,
} from "./core/constants/app.constant";

export default function Home() {
  const [activeWork, setActiveWork] = useState<string>("daylyy");
  const [activeCompliance, setActiveCompliance] = useState<number>(2);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaStatus, setCaptchaStatus] = useState<"idle" | "success" | "error">("idle");

  const handleCaptchaVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput === "16") setCaptchaStatus("success");
    else setCaptchaStatus("error");
  };

  return (
    <div className="min-h-screen bg-white text-nyt-charcoal font-sans antialiased">

      <Navbar />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white py-16 lg:py-24 overflow-hidden">

        {/* ── Floating tech icon background ── */}
        <div className="absolute inset-0 pointer-events-none select-none">

          {/* React */}
          <svg className="absolute top-10 left-[6%] opacity-[0.12] w-20 h-20" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="7" fill="#61DAFB" />
            <ellipse cx="50" cy="50" rx="46" ry="18" stroke="#61DAFB" strokeWidth="3" />
            <ellipse cx="50" cy="50" rx="46" ry="18" stroke="#61DAFB" strokeWidth="3" transform="rotate(60 50 50)" />
            <ellipse cx="50" cy="50" rx="46" ry="18" stroke="#61DAFB" strokeWidth="3" transform="rotate(120 50 50)" />
          </svg>

          {/* Android */}
          <svg className="absolute top-6 right-[8%] opacity-[0.12] w-16 h-16" viewBox="0 0 100 100">
            <line x1="30" y1="38" x2="20" y2="22" stroke="#3DDC84" strokeWidth="5" strokeLinecap="round" />
            <line x1="70" y1="38" x2="80" y2="22" stroke="#3DDC84" strokeWidth="5" strokeLinecap="round" />
            <circle cx="28" cy="19" r="4" fill="#3DDC84" />
            <circle cx="72" cy="19" r="4" fill="#3DDC84" />
            <rect x="18" y="42" width="64" height="38" rx="8" fill="#3DDC84" />
            <circle cx="38" cy="58" r="4" fill="white" />
            <circle cx="62" cy="58" r="4" fill="white" />
            <rect x="10" y="44" width="8" height="24" rx="4" fill="#3DDC84" />
            <rect x="82" y="44" width="8" height="24" rx="4" fill="#3DDC84" />
            <rect x="30" y="82" width="8" height="14" rx="4" fill="#3DDC84" />
            <rect x="62" y="82" width="8" height="14" rx="4" fill="#3DDC84" />
          </svg>

          {/* Flutter */}
          <svg className="absolute bottom-20 left-[3%] opacity-[0.12] w-14 h-14" viewBox="0 0 100 100">
            <polygon points="10,50 50,10 90,50 70,50 50,30 30,50" fill="#54C5F8" />
            <polygon points="30,50 50,30 70,50 50,70" fill="#01579B" />
            <polygon points="50,70 70,50 90,70 70,90" fill="#29B6F6" />
          </svg>

          {/* Swift */}
          <svg className="absolute top-[40%] left-[1%] opacity-[0.10] w-14 h-14" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="22" fill="#F05138" />
            <path d="M75 65c-2 3-5 6-9 8-5 3-11 4-17 3-7-1-13-5-18-11-3-4-5-9-5-14 0 0 6 8 14 10 5 2 11 1 15-2-3-3-14-16-16-34 7 8 15 15 22 18-4-6-7-13-7-20 0 0 10 11 19 18 5 5 9 11 10 18 1 4 0 8-1 11-3 8-7 15-7 15z" fill="white" />
          </svg>

          {/* Node.js */}
          <svg className="absolute bottom-[30%] right-[5%] opacity-[0.12] w-16 h-16" viewBox="0 0 100 100">
            <path d="M50 5L90 28v44L50 95 10 72V28z" fill="#68A063" />
            <text x="50" y="58" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold" fontFamily="Arial">JS</text>
          </svg>

          {/* Firebase */}
          <svg className="absolute top-[15%] right-[20%] opacity-[0.10] w-12 h-12" viewBox="0 0 100 100">
            <path d="M20 80L35 30l15 20 10-40 20 70z" fill="#FFA000" />
            <path d="M20 80l15-30 15 10 10-20 20 40z" fill="#F57C00" />
            <path d="M35 50l15 10 10-20L80 80 20 80z" fill="#FFCA28" />
          </svg>

          {/* Kotlin */}
          <svg className="absolute bottom-[15%] left-[20%] opacity-[0.10] w-14 h-14" viewBox="0 0 100 100">
            <polygon points="5,5 55,5 5,55" fill="#7F52FF" />
            <polygon points="5,55 5,95 50,50 95,5 55,5" fill="#C811E1" />
            <polygon points="5,95 95,95 50,50" fill="#E44857" />
          </svg>

          {/* JavaScript */}
          <svg className="absolute top-[55%] right-[2%] opacity-[0.10] w-14 h-14" viewBox="0 0 100 100">
            <rect width="100" height="100" fill="#F7DF1E" />
            <text x="10" y="72" fill="#323330" fontSize="38" fontWeight="bold" fontFamily="Arial">JS</text>
          </svg>

          {/* Apple/iOS */}
          <svg className="absolute top-[28%] left-[14%] opacity-[0.10] w-12 h-12" viewBox="0 0 100 100">
            <path d="M68 25c-4 5-10 8-16 8-1-6 2-12 5-16 4-5 11-8 16-8 1 6-1 11-5 16z" fill="#555" />
            <path d="M82 65c-2 4-4 8-7 11-3 5-7 8-12 8s-7-3-13-3-9 3-13 3c-5 0-9-3-12-8C17 66 12 53 12 41c0-14 9-22 18-22 5 0 9 3 13 3s9-4 15-4c6 0 12 3 15 9-13 7-11 25 9 38z" fill="#555" />
          </svg>

          {/* GraphQL */}
          <svg className="absolute bottom-[5%] right-[15%] opacity-[0.10] w-12 h-12" viewBox="0 0 100 100">
            <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" fill="none" stroke="#E535AB" strokeWidth="5" />
            <line x1="50" y1="5" x2="50" y2="95" stroke="#E535AB" strokeWidth="3" />
            <line x1="10" y1="28" x2="90" y2="72" stroke="#E535AB" strokeWidth="3" />
            <line x1="90" y1="28" x2="10" y2="72" stroke="#E535AB" strokeWidth="3" />
            <circle cx="50" cy="5" r="6" fill="#E535AB" />
            <circle cx="90" cy="28" r="6" fill="#E535AB" />
            <circle cx="90" cy="72" r="6" fill="#E535AB" />
            <circle cx="50" cy="95" r="6" fill="#E535AB" />
            <circle cx="10" cy="72" r="6" fill="#E535AB" />
            <circle cx="10" cy="28" r="6" fill="#E535AB" />
          </svg>

        </div>
        {/* ── end background icons ── */}

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Finding a Technology Partner That Turns Your{" "}
                <span className="text-nyt-green">Vision Into Reality?</span>
              </h1>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-lg">
                With 13+ years of expertise and 1400+ successful apps, NXTorbit's team of 200+ developers transforms your vision into award-winning digital products.
              </p>
              <div className="flex flex-wrap gap-3">
                <AppButton variant="primary" size="small" href="#contact">Get a Free Quote</AppButton>
                <AppButton variant="outline" size="small" href="#work">View Portfolio</AppButton>
              </div>

              {/* Rating badges */}
              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-400 font-semibold mb-3 uppercase tracking-wider">Recognized by</p>
                <div className="flex flex-wrap gap-5 items-center">
                  {[["Clutch", "4.9"], ["GoodFirms", "4.8"], ["AppFutura", "4.8"], ["DesignRush", "4.9"], ["Manifest", "4.7"]].map(([name, r]) => (
                    <div key={name} className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-slate-700">{name}</span>
                      <span className="text-[10px] text-amber-400">★★★★★</span>
                      <span className="text-[10px] text-slate-500 font-semibold">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right – 3D Phone mockups with vertical scroll */}
            <div className="flex justify-center items-end gap-5">

              {/* Left phone – 3D tilted */}
              <div className="hidden sm:flex flex-col w-[118px] h-[228px] rounded-[28px] overflow-hidden -mb-6 flex-shrink-0"
                style={{ background: 'linear-gradient(145deg,#2d3748,#1a202c)', boxShadow: '8px 16px 40px rgba(0,0,0,0.35),inset 0 1px 0 rgba(255,255,255,0.08)', transform: 'perspective(900px) rotateY(14deg) rotateX(4deg)' }}>
                <div className="flex items-center justify-center gap-1.5 pt-3 pb-1">
                  <div className="w-8 h-1 bg-white/15 rounded-full" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <div className="flex-1 mx-2 mb-2 rounded-2xl overflow-hidden bg-gradient-to-b from-[#0f1923] to-[#162030] flex flex-col p-2.5 gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[7px] font-black text-white tracking-wider">daylyy</span>
                    <div className="w-4 h-4 rounded-full bg-nyt-green/30 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-nyt-green" />
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {["#6cb790", "#61DAFB", "#FF6B8A", "#F59E0B"].map((c, i) => (
                      <div key={i} className="w-7 h-7 rounded-full flex-shrink-0" style={{ background: `${c}33`, border: `1.5px solid ${c}66` }} />
                    ))}
                  </div>
                  <div className="flex-1 rounded-xl overflow-hidden" style={{ background: 'linear-gradient(135deg,#1e3a2f,#0f2318)' }}>
                    <div className="h-full flex items-center justify-center text-2xl">🌿</div>
                  </div>
                  <div className="flex gap-2 text-white/40">
                    <span className="text-[7px]">♥ 2.1k</span>
                    <span className="text-[7px]">💬 84</span>
                  </div>
                </div>
                <div className="flex justify-center pb-2"><div className="w-8 h-1 bg-white/20 rounded-full" /></div>
              </div>

              {/* Center phone – main with vertical scrolling app screens */}
              <div className="flex flex-col w-[153px] h-[308px] rounded-[34px] overflow-hidden flex-shrink-0 relative"
                style={{ background: 'linear-gradient(160deg,#1a1f2e,#0d1117)', boxShadow: '0 30px 80px rgba(0,0,0,0.5),0 0 0 1.5px rgba(255,255,255,0.07),inset 0 1px 0 rgba(255,255,255,0.12)', transform: 'perspective(900px) rotateY(-4deg) rotateX(3deg)' }}>
                {/* Side buttons */}
                <div className="absolute -right-0.5 top-16 w-1 h-8 rounded-r bg-white/10" />
                <div className="absolute -left-0.5 top-12 w-1 h-5 rounded-l bg-white/10" />
                <div className="absolute -left-0.5 top-20 w-1 h-5 rounded-l bg-white/10" />
                {/* Notch */}
                <div className="flex justify-center pt-2.5 pb-1 relative z-10">
                  <div className="flex items-center gap-1.5 bg-black/60 rounded-full px-3 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <div className="w-8 h-1 bg-white/15 rounded-full" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  </div>
                </div>
                {/* Scrolling screens */}
                <div className="flex-1 mx-2 rounded-2xl overflow-hidden">
                  <div className="animate-app-scroll" style={{ height: '400%', display: 'flex', flexDirection: 'column' }}>

                    {/* Screen 1 – Social */}
                    <div className="flex-shrink-0 bg-gradient-to-b from-[#0f1923] to-[#162030] flex flex-col p-3 gap-2" style={{ height: '25%' }}>
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-black text-white tracking-wider">daylyy</span>
                        <div className="w-5 h-5 rounded-full bg-nyt-green/20 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-nyt-green" /></div>
                      </div>
                      <div className="flex gap-1.5">
                        {["#6cb790", "#61DAFB", "#FF6B8A"].map((c, i) => (
                          <div key={i} className="w-8 h-8 rounded-full flex-shrink-0" style={{ background: `${c}33`, border: `1.5px solid ${c}66` }} />
                        ))}
                      </div>
                      <div className="flex-1 rounded-xl overflow-hidden" style={{ background: 'linear-gradient(135deg,#1e3a2f,#0f2318)' }}>
                        <div className="h-full flex items-center justify-center text-3xl">🌿</div>
                      </div>
                      <div className="flex gap-3 text-white/50">
                        <span className="text-[7px]">♥ 2.1k</span><span className="text-[7px]">💬 84</span><span className="text-[7px]">↗ 32</span>
                      </div>
                    </div>

                    {/* Screen 2 – Cars */}
                    <div className="flex-shrink-0 bg-gradient-to-b from-[#04101d] to-[#071829] flex flex-col p-3 gap-2" style={{ height: '25%' }}>
                      <div className="flex items-center justify-between">
                        <span className="text-[7px] font-black text-slate-400 tracking-widest uppercase">Alba Motors</span>
                        <span className="text-[7px] text-nyt-lime font-bold">Catalog</span>
                      </div>
                      <div className="flex-1 rounded-xl bg-slate-900 flex items-center justify-center relative overflow-hidden">
                        <div className="text-4xl">🚗</div>
                        <div className="absolute bottom-1 left-2">
                          <div className="text-[6px] font-bold text-white">Porsche 911</div>
                          <div className="text-[7px] font-black text-nyt-lime">$189,400</div>
                        </div>
                      </div>
                      <div className="bg-nyt-green rounded-lg py-1.5 text-center">
                        <span className="text-[7px] font-black text-white">BOOK RESERVATION</span>
                      </div>
                    </div>

                    {/* Screen 3 – Finance */}
                    <div className="flex-shrink-0 bg-gradient-to-b from-[#0a0e1a] to-[#111827] flex flex-col p-3 gap-1.5" style={{ height: '25%' }}>
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-black text-white">Portfolio</span>
                        <span className="text-[7px] text-nyt-green font-bold">▲ Live</span>
                      </div>
                      <div>
                        <p className="text-[7px] text-slate-400">Balance</p>
                        <p className="text-sm font-black text-white">$24,830</p>
                        <p className="text-[7px] text-nyt-lime font-bold">+12.4% this month</p>
                      </div>
                      <div className="flex-1 flex items-end gap-0.5 pb-1">
                        {[40, 55, 35, 70, 50, 85, 60, 90, 45, 75].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i === 7 ? '#6cb790' : 'rgba(108,183,144,0.25)' }} />
                        ))}
                      </div>
                    </div>

                    {/* Screen 4 – Fitness */}
                    <div className="flex-shrink-0 bg-gradient-to-b from-[#0d1f12] to-[#0a1a0f] flex flex-col p-3 gap-2" style={{ height: '25%' }}>
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-black text-white">Activity</span>
                        <span className="text-[6px] text-slate-400">Today</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 flex-shrink-0">
                          <svg viewBox="0 0 48 48" className="w-full h-full -rotate-90">
                            <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(108,183,144,0.15)" strokeWidth="4" />
                            <circle cx="24" cy="24" r="20" fill="none" stroke="#6cb790" strokeWidth="4" strokeDasharray="125.6" strokeDashoffset="35" strokeLinecap="round" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[8px] font-black text-nyt-lime">72%</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-[8px] font-black text-white">8,432 steps</p>
                          <p className="text-[7px] text-slate-400">340 cal</p>
                        </div>
                      </div>
                      <div className="flex-1 space-y-1.5">
                        {[["Running", "68%", "#6cb790"], ["Cycling", "45%", "#61DAFB"], ["Sleep", "82%", "#a5d088"]].map(([l, p, c]) => (
                          <div key={l as string}>
                            <div className="flex justify-between mb-0.5">
                              <span className="text-[6px] text-slate-400">{l}</span>
                              <span className="text-[6px] text-slate-300 font-bold">{p}</span>
                            </div>
                            <div className="h-1 bg-white/10 rounded-full">
                              <div className="h-full rounded-full" style={{ width: p as string, background: c as string }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
                <div className="flex justify-center py-2"><div className="w-10 h-1 bg-white/25 rounded-full" /></div>
              </div>

              {/* Right phone – 3D tilted */}
              <div className="hidden sm:flex flex-col w-[118px] h-[248px] rounded-[28px] overflow-hidden -mb-3 flex-shrink-0"
                style={{ background: 'linear-gradient(145deg,#2a3244,#181e2c)', boxShadow: '-8px 16px 40px rgba(0,0,0,0.35),inset 0 1px 0 rgba(255,255,255,0.06)', transform: 'perspective(900px) rotateY(-14deg) rotateX(4deg)' }}>
                <div className="flex items-center justify-center gap-1.5 pt-3 pb-1">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-8 h-1 bg-white/15 rounded-full" />
                </div>
                <div className="flex-1 mx-2 mb-2 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-700 to-slate-900 flex flex-col p-2.5 gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[7px] font-black text-amber-400 tracking-wider">NIK BAKERS</span>
                    <span className="text-[6px] text-white/40 bg-amber-400/10 px-1.5 py-0.5 rounded">Live</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 flex-1">
                    {["🎂", "🍰", "🥐", "☕"].map((e, i) => (
                      <div key={i} className="rounded-xl bg-white/5 flex flex-col items-center justify-center gap-0.5 py-1.5">
                        <span className="text-lg">{e}</span>
                        <span className="text-[6px] text-white/40">$12.99</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-amber-500 rounded-lg py-1.5 text-center">
                    <span className="text-[7px] font-black text-white">ORDER NOW</span>
                  </div>
                </div>
                <div className="flex justify-center pb-2"><div className="w-8 h-1 bg-white/20 rounded-full" /></div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ─────────────────────────────────────────── */}
      <section className="border-y border-slate-100 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-7">Trusted by 1500+ Businesses Worldwide</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 items-center">
            {["GODFREY PHILLIPS", "GYAN DAIRY", "TRUEFAN", "KFC", "BYJU'S", "AIRTEL", "MOTHER DAIRY", "NIK BAKERS"].map((b) => (
              <span key={b} className="text-xs font-black text-slate-400 tracking-widest">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE PROFICIENCY ─────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-[#0f1624] rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* ── Left — heading + accordion ── */}
              <div className="p-10 lg:p-14 space-y-8 border-r border-white/5">

                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-nyt-green">Enterprise Grade</p>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
                    Enterprise Proficiency<br />with{" "}
                    <span className="text-nyt-green">Absolute Precision</span>
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                    We design and ship software that meets the toughest enterprise standards — from SOC 2 audits to GDPR compliance — giving your stakeholders full confidence from day one.
                  </p>
                </div>

                {/* Clean accordion */}
                <div className="space-y-0 divide-y divide-white/5">
                  {COMPLIANCE_ITEMS.slice(0, 5).map((item) => (
                    <div key={item.id}>
                      <button
                        onClick={() => setActiveCompliance(item.id)}
                        className="w-full flex items-center justify-between py-4 text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${activeCompliance === item.id ? "bg-nyt-green" : "bg-white/20"}`} />
                          <span className={`text-sm font-semibold transition-colors ${activeCompliance === item.id ? "text-white" : "text-slate-400 group-hover:text-slate-200"}`}>
                            {item.title}
                          </span>
                        </div>
                        <AppIcon
                          name="chevron-down"
                          size={16}
                          className={`flex-shrink-0 transition-transform duration-200 ${activeCompliance === item.id ? "rotate-180 text-nyt-green" : "text-slate-600"}`}
                        />
                      </button>
                      {activeCompliance === item.id && (
                        <div className="pb-5 pl-4.5">
                          <p className="text-sm text-slate-400 leading-relaxed mb-3">{item.content}</p>
                          {item.badges && (
                            <div className="flex flex-wrap gap-2">
                              {item.badges.map((b, i) => (
                                <span key={i} className="text-[10px] font-bold text-nyt-lime bg-nyt-green/10 px-2.5 py-1 rounded-full">
                                  {b}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Stats row */}
                <div className="flex gap-8 pt-4 border-t border-white/5">
                  {[["1400+", "Projects"], ["200+", "Engineers"], ["13+", "Years"]].map(([n, l]) => (
                    <div key={l}>
                      <p className="text-2xl font-black text-white">{n}</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right — certification & award badges ── */}
              <div className="p-10 lg:p-14 flex flex-col justify-center gap-8">

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">Industry Recognition</p>
                  {/* Award badges — 2 col */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { platform: "Clutch", badge: "Top App Dev Company", year: "2024", color: "#E63329", stars: 5, rating: "4.9" },
                      { platform: "GoodFirms", badge: "Top Mobile Developer", year: "2024", color: "#00B5D3", stars: 5, rating: "4.8" },
                      { platform: "AppFutura", badge: "Top Development Firm", year: "2023", color: "#F47B20", stars: 5, rating: "4.8" },
                      { platform: "Manifest", badge: "Most Reviewed Company", year: "2024", color: "#6B54E0", stars: 5, rating: "4.9" },
                    ].map((a) => (
                      <div key={a.platform} className="bg-white/5 rounded-xl p-4 hover:bg-white/8 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: a.color }} />
                          <span className="text-xs font-black text-white">{a.platform}</span>
                          <span className="text-[9px] text-slate-500 ml-auto">{a.year}</span>
                        </div>
                        <p className="text-[10px] text-slate-400 leading-tight mb-2">{a.badge}</p>
                        <div className="flex items-center gap-1">
                          <div className="flex">
                            {[...Array(a.stars)].map((_, i) => (
                              <svg key={i} viewBox="0 0 10 10" className="w-2.5 h-2.5" fill={a.color}>
                                <path d="M5 1l1.12 2.27 2.5.36-1.81 1.76.43 2.5L5 6.77 2.76 7.9l.43-2.5L1.38 3.63l2.5-.36z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-[10px] font-bold text-white ml-1">{a.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certification badges */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Certifications & Compliance</p>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { name: "ISO 27001", sub: "Information Security", color: "#0066CC" },
                      { name: "SOC 2", sub: "Type II Certified", color: "#6cb790" },
                      { name: "CMMI", sub: "Level 3", color: "#F59E0B" },
                      { name: "GDPR", sub: "Compliant", color: "#10B981" },
                      { name: "HIPAA", sub: "Secure Systems", color: "#8B5CF6" },
                      { name: "PCI DSS", sub: "Payments Ready", color: "#EC4899" },
                    ].map((c) => (
                      <div key={c.name} className="bg-white/5 rounded-lg p-3 text-center hover:bg-white/8 transition-colors">
                        <div className="w-6 h-6 rounded mx-auto mb-1.5 flex items-center justify-center" style={{ background: `${c.color}22` }}>
                          <div className="w-2.5 h-2.5 rounded-sm" style={{ background: c.color }} />
                        </div>
                        <p className="text-[10px] font-black text-white">{c.name}</p>
                        <p className="text-[9px] text-slate-500 mt-0.5">{c.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ─────────────────────────────────────────────── */}
      <section id="why-us" className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-xs text-nyt-green font-bold uppercase tracking-widest mb-2">Why Choose Us</p>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Why Partners Choose <span className="text-nyt-green">NXTorbit</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { stat: "1400+", label: "Apps Delivered", icon: "globe" as const },
              { stat: "35+", label: "Countries Served", icon: "map-pin" as const },
              { stat: "200+", label: "Tech Experts", icon: "code" as const },
              { stat: "50+", label: "Industries", icon: "settings" as const },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-lg p-7 text-center">
                <AppIcon name={item.icon} size={26} color="primary" className="mx-auto mb-4" />
                <p className="text-3xl font-black text-slate-900 mb-1">{item.stat}</p>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WELL FUNDED ────────────────────────────────────────── */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-7">Our Products Are Well Funded By</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 items-center">
            {["Saama Capital", "Y Combinator", "Sequoia Capital", "Incubate Fund", "Goldman Sachs", "Matrix Partners"].map((f) => (
              <span key={f} className="text-xs font-black text-slate-400 tracking-wide">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREATING DIGITAL PRODUCTS ──────────────────────────── */}
      <section id="services" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">

          {/* Top two-column header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-14">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Creating Digital{" "}
                <span className="text-blue-500">Products.</span>
                <br />
                That Perform And{" "}
                <span className="text-pink-500">Deliver.</span>
              </h2>
            </div>
            <div className="space-y-6 pt-2 lg:pt-3">
              <p className="text-slate-500 text-lg leading-relaxed">
                We design and develop digital products with AI at the core, leveraging machine learning, generative AI, &amp; intelligent automation to create systems that continuously learn, adapt, and improve.
              </p>
              <AppButton variant="primary" size="small" href="#contact">
                Let's Build Something That Scales →
              </AppButton>
            </div>
          </div>

          {/* Horizontal scroll cards — overflow shows partial cards on edges */}
          <div className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
            {[
              {
                title: "Data-Driven Decisions",
                desc: "We leverage real-time analytics and AI insights to help businesses make smarter, faster decisions that adapt to market dynamics automatically.",
              },
              {
                title: "Powered by Modern Technology",
                desc: "We combine modern technology with user-first innovation to deliver seamless, high-performance digital experiences that customers love and businesses trust.",
              },
              {
                title: "AI-First Approach",
                desc: "We build mobile app solutions with generative AI, ML, and automation to create adaptive, scalable, and future-ready digital experiences.",
              },
              {
                title: "Competitive Growth Strategy",
                desc: "Our competitive growth mindset helps businesses launch future-ready products that drive engagement, strengthen loyalty, and accelerate market leadership.",
              },
              {
                title: "Scalable Architecture",
                desc: "We design distributed systems and cloud-native architectures that scale horizontally, keeping performance consistent as your user base grows.",
              },
              {
                title: "End-to-End Delivery",
                desc: "From ideation to deployment and beyond — we handle design, engineering, QA, and DevOps so you can focus entirely on growing your business.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="min-w-[300px] max-w-[300px] bg-slate-100 rounded-3xl p-8 flex-shrink-0 flex flex-col gap-4"
              >
                <h3 className="text-xl font-extrabold text-slate-900 leading-snug">{card.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── PORTFOLIO ──────────────────────────────────────────── */}
      <section id="work" className="py-20 bg-nyt-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
            <div>
              <p className="text-xs text-nyt-green font-bold uppercase tracking-widest mb-2">Our Portfolio</p>
              <h2 className="text-2xl font-extrabold text-white">Proven Deployments.</h2>
              <p className="text-slate-400 mt-1 text-sm">Award-winning products trusted by millions of users.</p>
            </div>
            <a href="#contact" className="text-sm font-bold text-nyt-lime hover:text-nyt-green transition shrink-0">View All Work →</a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

            {/* Sidebar nav */}
            <div className="lg:col-span-4 space-y-1 bg-white/5 rounded-lg p-3">
              {WORK_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveWork(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded text-sm font-semibold text-left transition-all ${activeWork === item.id
                      ? "bg-nyt-green text-white"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  <span>{item.name}</span>
                  <span>→</span>
                </button>
              ))}
            </div>

            {/* Display panel */}
            <div className="lg:col-span-8">
              {WORK_ITEMS.map((item) => {
                if (item.id !== activeWork) return null;
                return (
                  <div key={item.id} className="bg-white/5 rounded-lg p-8 space-y-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-2">Production Deployment</p>
                      <h3 className="text-2xl font-black text-white">{item.name}</h3>
                      <p className="text-base font-semibold text-slate-300 mt-1">{item.tagline}</p>
                      <p className="text-sm text-slate-400 mt-2 leading-relaxed">{item.desc}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded p-4">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Primary Outcome</p>
                        <p className="text-sm font-bold text-white">{item.highlight}</p>
                      </div>
                      <div className="bg-white/5 rounded p-4">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Architecture Benefit</p>
                        <p className="text-sm font-bold text-white">{item.highlightSub}</p>
                      </div>
                    </div>

                    <div className="h-44 bg-white/5 rounded flex items-center justify-center text-slate-500">
                      <div className="text-center space-y-2">
                        <AppIcon name="globe" size={32} className="mx-auto opacity-30" />
                        <p className="text-sm">{item.name} — App Preview</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── AI / SMART APPS ────────────────────────────────────── */}
      <section id="smart-apps" className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="flex justify-center">
              <div className="w-full max-w-sm aspect-square bg-nyt-dark rounded-xl flex flex-col items-center justify-center gap-5 p-10">
                <div className="h-28 w-28 rounded-full border-2 border-nyt-green flex items-center justify-center">
                  <AppIcon name="lock" size={44} color="primary" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-white">AI Orchestrator Pipeline</p>
                  <p className="text-xs text-slate-400 mt-1">Managing remote requests dynamically</p>
                </div>
                <div className="flex gap-2 flex-wrap justify-center">
                  <span className="text-[10px] text-nyt-lime px-3 py-1 rounded font-semibold">INTELLIGENCE LAYER</span>
                  <span className="text-[10px] text-nyt-lime px-3 py-1 rounded font-semibold">LATENCY MONITOR</span>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-nyt-green px-3 py-1 rounded inline-block">
                Enterprise Framework
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                <span className="text-nyt-green">Optimized Automations</span> for Scalable Software
              </h2>
              <p className="text-slate-500 leading-relaxed">
                We embed call procedures and model evaluation loops directly into database layers, enabling automated actions and low-latency verification.
              </p>
              <div className="space-y-4 pt-2">
                {[
                  { title: "Analytical Model Evaluation", desc: "Verified data pipelines built to process queries securely while maintaining isolation constraints." },
                  { title: "Predictive Resource Tracking", desc: "Analyze indexing and execution trends to balance workloads automatically before peaks occur." },
                  { title: "Compliance-First Architecture", desc: "Every system starts with security, GDPR, HIPAA, and SOC2 built in — not bolted on." },
                ].map((f) => (
                  <div key={f.title} className="flex gap-3">
                    <div className="h-6 w-6 shrink-0 rounded-full bg-nyt-green flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{f.title}</p>
                      <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────── */}
      <section id="testimonials" className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Clients <span className="text-nyt-green">love us!</span>
              </h2>
              <p className="text-slate-400 mt-1 text-sm">Here's what makes us go the extra mile!</p>
            </div>
            <div className="flex gap-2">
              <button
                suppressHydrationWarning
                onClick={() => setCurrentTestimonial((p) => (p === 0 ? TESTIMONIALS.length - 1 : p - 1))}
                className="h-9 w-9 rounded-full flex items-center justify-center text-slate-500 hover:text-nyt-green transition"
              >
                <AppIcon name="chevron-down" size={16} className="rotate-90" />
              </button>
              <button
                suppressHydrationWarning
                onClick={() => setCurrentTestimonial((p) => (p === TESTIMONIALS.length - 1 ? 0 : p + 1))}
                className="h-9 w-9 rounded-full flex items-center justify-center text-slate-500 hover:text-nyt-green transition"
              >
                <AppIcon name="chevron-down" size={16} className="-rotate-90" />
              </button>
            </div>
          </div>

          {/* Avatar strip */}
          <div className="flex gap-5 mb-8">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className="relative shrink-0"
              >
                <div className={`h-20 w-20 rounded-full ${t.avatarBg} border-2 flex items-center justify-center transition-all ${currentTestimonial === i ? "border-nyt-green" : "border-slate-200 opacity-60"}`}>
                  <span className="text-2xl font-black text-slate-600">{t.name[0]}</span>
                </div>
                <div className="absolute inset-0 rounded-full flex items-center justify-center bg-black/20">
                  <div className="h-7 w-7 rounded-full bg-nyt-green flex items-center justify-center">
                    <AppIcon name="play" size={11} className="text-white ml-0.5" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Testimonial card */}
          <div className="rounded-lg p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 w-full md:w-64 aspect-[4/5] bg-slate-100 rounded-lg flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-slate-900/50 rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-nyt-green flex items-center justify-center">
                  <AppIcon name="play" size={20} className="text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10 text-left">
                <p className="text-sm font-bold text-white">{TESTIMONIALS[currentTestimonial].name}</p>
                <p className="text-[10px] text-slate-200 font-semibold uppercase tracking-wider mt-0.5">{TESTIMONIALS[currentTestimonial].company}</p>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <p className="text-4xl text-nyt-green font-serif leading-none opacity-50">"</p>
              <p className="text-lg text-slate-700 leading-relaxed italic">
                {TESTIMONIALS[currentTestimonial].quote}
              </p>
              <div>
                <p className="font-bold text-slate-900">{TESTIMONIALS[currentTestimonial].name}</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">
                  {TESTIMONIALS[currentTestimonial].role} — {TESTIMONIALS[currentTestimonial].company}
                </p>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <AppIcon key={i} name="star" size={15} className="text-amber-400" />)}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section id="faq" className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-5">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Frequently Asked <span className="text-nyt-green">Questions</span>
              </h2>
              <p className="text-slate-400 mt-1 text-sm">Have questions about integrations or architecture setups?</p>
            </div>
            <AppButton variant="primary" size="medium" href="#contact" className="shrink-0">
              Book a Free Call →
            </AppButton>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {[FAQS.slice(0, 4), FAQS.slice(4)].map((group, gi) => (
              <div key={gi} className="space-y-3">
                {group.map((faq) => (
                  <div key={faq.id} className="bg-white rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left"
                    >
                      <span className="font-semibold text-slate-800 text-sm pr-4">{faq.q}</span>
                      <AppIcon
                        name="chevron-down"
                        size={16}
                        className={`shrink-0 text-slate-400 transition-transform ${expandedFaq === faq.id ? "rotate-180 !text-nyt-green" : ""}`}
                      />
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="px-5 pb-5 border-t border-slate-100">
                        <p className="text-sm text-slate-500 leading-relaxed pt-3">{faq.a}</p>
                        {faq.bulletPoints && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {faq.bulletPoints.map((pt, i) => (
                              <span key={i} className="text-xs text-nyt-green px-2.5 py-1 rounded font-semibold bg-nyt-green/5">
                                {pt}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── LATEST INSIGHTS ────────────────────────────────────── */}
      <section id="insights" className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">Latest Insights</h2>
              <p className="text-slate-400 text-sm mt-1">Learn about technology and its impact on modern businesses.</p>
            </div>
            <a href="#" className="text-sm font-bold text-nyt-green hover:underline shrink-0">Browse All Blogs →</a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

            {/* Big card */}
            <div className="lg:col-span-7 rounded-lg overflow-hidden transition-colors">
              <div className="h-56 bg-gradient-to-br from-nyt-green/10 to-nyt-lime/10 flex items-center justify-center">
                <AppIcon name="code" size={64} color="primary" className="opacity-50" />
              </div>
              <div className="p-7 space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-nyt-green">Guide</p>
                <h3 className="font-extrabold text-slate-900 text-xl leading-snug">Step-by-Step Guide to Hire Node.js Developers: Skills, Cost & Platforms</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Everything about evaluating backend capabilities and budgeting for high-scale Node.js deployments.</p>
              </div>
            </div>

            {/* Side cards */}
            <div className="lg:col-span-5 space-y-4">
              {[
                { tag: "Sector Report", tagColor: "text-nyt-green", title: "Artificial Intelligence in the Transportation Industry", desc: "Driving the next era of mobility using predictive fleet tracking algorithms.", icon: "globe" as const },
                { tag: "Risk Assessment", tagColor: "text-purple-600", title: "Fraud Detection in Telecom: Prevention Strategies", desc: "Implementing real-time threat intelligence and verification layers for networks.", icon: "shield" as const },
                { tag: "Engineering", tagColor: "text-amber-600", title: "React Native vs Flutter: The 2024 Developer's Guide", desc: "Choosing the right cross-platform framework for your next mobile product.", icon: "code" as const },
              ].map((c) => (
                <div key={c.title} className="rounded-lg p-5 flex gap-4 transition-colors">
                  <div className="h-14 w-14 shrink-0 bg-nyt-green/10 rounded flex items-center justify-center">
                    <AppIcon name={c.icon} size={24} color="primary" />
                  </div>
                  <div>
                    <p className={`text-[9px] font-bold uppercase tracking-wider ${c.tagColor} mb-1`}>{c.tag}</p>
                    <h4 className="font-bold text-slate-900 text-sm leading-snug">{c.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="text-center mt-10">
            <AppButton variant="outline" size="medium" href="#">Browse All Insights</AppButton>
          </div>

        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────── */}
      <section id="contact" className="py-16 bg-white relative overflow-hidden">

        {/* Background vectors */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <svg className="absolute -right-20 top-10 opacity-[0.06] w-96 h-96" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="180" stroke="#6cb790" strokeWidth="40" />
            <circle cx="200" cy="200" r="100" stroke="#6cb790" strokeWidth="20" />
          </svg>
          <svg className="absolute -left-16 bottom-20 opacity-[0.05] w-72 h-72" viewBox="0 0 300 300" fill="none">
            <path d="M150 20 Q280 80 270 150 Q260 230 150 280 Q40 230 30 150 Q20 80 150 20Z" fill="#6cb790" />
          </svg>
        </div>

        <div className="mx-auto max-w-5xl px-6 relative z-10">

          {/* Section header */}
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
              Get in touch <span className="text-2xl">📧</span>
            </h2>
            <p className="text-nyt-green font-semibold text-lg mt-1">We'd love to hear from you.</p>
          </div>

          {/* Main white card */}
          <div className="bg-white rounded-xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Left — contact info + testimonial */}
            <div className="space-y-6">
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Write Us</p>
                <a href="mailto:info@itnextsolutions.com" className="text-xl font-extrabold text-slate-900 hover:text-nyt-green transition">
                  info@itnextsolutions.com
                </a>
              </div>

              <div>
                <p className="text-xs text-slate-400 font-semibold mb-3">We are just a call away</p>
                <div className="space-y-1.5">
                  <p className="font-extrabold text-slate-900 text-sm">
                    +91 9763804442
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-400 font-semibold mb-1">Business Hours</p>
                <div className="space-y-1.5">
                  <p className="font-bold text-slate-700 text-sm">Mon - Fri: 10:30 AM - 7:30 PM</p>
                  <p className="font-bold text-slate-700 text-sm">Sat: flexible hours</p>
                </div>
              </div>

              {/* Testimonial card */}
              <div className="bg-nyt-green rounded-xl p-6 text-white space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-lg font-black shrink-0">
                    {TESTIMONIALS[currentTestimonial].name[0]}
                  </div>
                  <div>
                    <p className="font-extrabold text-sm">{TESTIMONIALS[currentTestimonial].name}</p>
                    <p className="text-white/70 text-xs italic">{TESTIMONIALS[currentTestimonial].company}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-white/90 italic">
                  "{TESTIMONIALS[currentTestimonial].quote}"
                </p>
                <div className="flex gap-2 pt-1">
                  <button
                    suppressHydrationWarning
                    onClick={() => setCurrentTestimonial((p) => (p === 0 ? TESTIMONIALS.length - 1 : p - 1))}
                    className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-white/10 transition"
                  >
                    <AppIcon name="chevron-down" size={14} className="rotate-90 text-white" />
                  </button>
                  <button
                    suppressHydrationWarning
                    onClick={() => setCurrentTestimonial((p) => (p === TESTIMONIALS.length - 1 ? 0 : p + 1))}
                    className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-white/10 transition"
                  >
                    <AppIcon name="chevron-down" size={14} className="-rotate-90 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right — line-style form */}
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-6">Or fill this form</p>
              <form className="space-y-5" onSubmit={handleCaptchaVerify}>

                {/* Name */}
                <div className="border-b border-slate-300 focus-within:border-nyt-green transition-colors">
                  <input suppressHydrationWarning required placeholder="Name *" className="w-full py-2.5 text-sm text-slate-800 bg-transparent focus:outline-none placeholder-slate-400" />
                </div>

                {/* Email */}
                <div className="border-b border-slate-300 focus-within:border-nyt-green transition-colors">
                  <input suppressHydrationWarning required type="email" placeholder="Email *" className="w-full py-2.5 text-sm text-slate-800 bg-transparent focus:outline-none placeholder-slate-400" />
                </div>

                {/* Phone with country code */}
                <div className="flex items-end gap-3 border-b border-slate-300 focus-within:border-nyt-green transition-colors">
                  <select suppressHydrationWarning className="py-2.5 text-sm text-slate-700 bg-transparent focus:outline-none shrink-0 cursor-pointer">
                    <option>India (+91)</option>
                  </select>
                  <AppIcon name="chevron-down" size={14} className="text-slate-400 mb-3 shrink-0 -ml-5" />
                  <input suppressHydrationWarning required placeholder="Phone Number *" className="flex-1 py-2.5 text-sm text-slate-800 bg-transparent focus:outline-none placeholder-slate-400" />
                </div>

                {/* Attach file */}
                <div className="border-b border-slate-300 focus-within:border-nyt-green transition-colors flex items-center justify-between">
                  <input suppressHydrationWarning type="file" className="w-full py-2.5 text-sm text-slate-500 bg-transparent focus:outline-none file:mr-3 file:border-0 file:bg-transparent file:text-nyt-green file:font-semibold file:text-sm cursor-pointer" />
                  <AppIcon name="arrow-right" size={16} className="text-nyt-green shrink-0 -rotate-45" />
                </div>

                {/* Query */}
                <div className="border-b border-slate-300 focus-within:border-nyt-green transition-colors">
                  <input suppressHydrationWarning required placeholder="Query *" className="w-full py-2.5 text-sm text-slate-800 bg-transparent focus:outline-none placeholder-slate-400" />
                </div>

                {/* Captcha + Submit */}
                <div className="flex items-center justify-between pt-2 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-600">What's <strong>7 + 2</strong> =</span>
                    <input
                      suppressHydrationWarning
                      type="text"
                      required
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      className="w-12 rounded text-center text-sm py-1.5 focus:outline-none focus:border-nyt-green text-slate-900"
                    />
                  </div>
                  <button
                    suppressHydrationWarning
                    type="submit"
                    className="bg-nyt-green text-white font-extrabold text-sm px-7 py-3 rounded flex items-center gap-2 hover:brightness-105 transition tracking-wide uppercase"
                  >
                    Submit <AppIcon name="arrow-right" size={15} className="text-white" />
                  </button>
                </div>

                {captchaStatus === "success" && <p className="text-xs text-nyt-green font-bold">✓ Verified.</p>}
                {captchaStatus === "error" && <p className="text-xs text-red-500 font-bold">✗ Incorrect answer.</p>}
              </form>
            </div>

          </div>

          {/* ── Get your ideas validated ── */}
          <div className="mt-8 bg-slate-50 rounded-xl p-10 relative overflow-hidden">
            {/* Background blob vector */}
            <div className="absolute right-0 top-0 bottom-0 w-80 pointer-events-none overflow-hidden">
              <svg viewBox="0 0 320 200" className="absolute right-0 top-0 h-full w-full opacity-10" fill="none">
                <path d="M320 0 Q200 20 180 100 Q160 180 320 200Z" fill="#6cb790" />
                <path d="M320 30 Q240 50 220 100 Q200 150 320 170Z" fill="#a5d088" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-slate-900">Get your ideas validated.</h3>
                <p className="text-nyt-green font-semibold">Let NXTorbit give you an honest opinion.</p>
                <p className="text-sm font-bold text-slate-700">Book your 45min. consultation.</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border-2 border-nyt-green text-nyt-green font-bold text-sm px-5 py-2.5 rounded hover:bg-nyt-green hover:text-white transition mt-2"
                >
                  Connect With Us <AppIcon name="arrow-right" size={14} />
                </a>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="h-14 w-14 rounded-full bg-slate-300 flex items-center justify-center text-xl font-black text-white shrink-0">A</div>
                <div>
                  <p className="font-extrabold text-slate-900">Ankit Singh</p>
                  <p className="text-xs text-slate-400 italic">COO</p>
                  <p className="text-xs text-slate-500 mt-1">info@itnextsolutions.com</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-slate-500">+91 9763804442</span>
                    <a href="#" className="text-xs text-nyt-green font-bold hover:underline">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Our Offices ── */}
          <div className="mt-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl">🏢</div>
              <h3 className="text-2xl font-extrabold text-slate-900">Our Offices</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { city: "Navi Mumbai, India", addr: "Office No. 903, Kamdhenu 23 west, TTC Industrial area, MIDC Industrial area, Pawne, Navi Mumbai, 400705." },
              ].map((o) => (
                <div key={o.city}>
                  <p className="font-extrabold text-slate-900 text-sm underline decoration-nyt-green underline-offset-2 mb-1">{o.city}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{o.addr}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Exceptional Results ── */}
          <div className="mt-16 text-center space-y-4">
            <div className="text-5xl">🏆</div>
            <h3 className="text-2xl font-extrabold text-slate-900">Exceptional Results for great clients</h3>
            <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
              Partnered with great brands and entrepreneurs all over the world; Fortune 500, Fortune 200, Global 2000 companies and world's largest political party of current Indian Prime Minister — Mr. Narendra Modi.
            </p>
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-nyt-green text-white font-bold text-sm px-7 py-3 rounded hover:brightness-105 transition mt-2"
            >
              See More <AppIcon name="arrow-right" size={14} className="text-white" />
            </a>
          </div>

        </div>
      </section>

      <Footer />

    </div>
  );
}
