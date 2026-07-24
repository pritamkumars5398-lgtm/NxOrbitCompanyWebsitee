"use client";

import { motion } from "motion/react";
import {
  Bell,
  Home,
  PieChart,
  ShoppingBag,
  User,
  Search,
  TrendingUp,
  Headphones,
  SlidersHorizontal,
} from "lucide-react";

interface PhoneMockupsProps {
  variant?: "hero" | "cta";
  className?: string;
}

export function PhoneMockups({ variant = "hero", className = "" }: PhoneMockupsProps) {
  if (variant === "cta") {
    return <CtaPhoneMockups className={className} />;
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* ── Background Organic Teal Backdrop Structure ── */}
      <div className="pointer-events-none absolute -right-6 top-1/2 -z-10 h-[32rem] w-[26rem] -translate-y-1/2 sm:h-[38rem] sm:w-[32rem] lg:h-[42rem] lg:w-[36rem]">
        {/* Deep Teal Fluid Organic Shape */}
        <div className="absolute inset-0 rounded-[40%_60%_70%_30%/50%_60%_40%_50%] bg-gradient-to-tr from-[#003840] via-[#00808C] to-[#00A896] shadow-[0_20px_80px_rgba(0,168,150,0.3)] backdrop-blur-3xl transition-all duration-700 hover:scale-[1.01]" />

        {/* Glowing Orb Filter */}
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-300/30 blur-[70px]" />

        {/* Translucent Outline Rings */}
        <div className="absolute -inset-4 rounded-[45%_55%_65%_35%/55%_50%_50%_45%] border border-teal-300/25" />
        <div className="absolute -inset-10 rounded-[50%_50%_60%_40%/45%_55%_45%_55%] border border-teal-400/15" />
      </div>

      {/* ── Floating Dual Smartphones Container ── */}
      <div className="relative z-10 flex w-full max-w-xl items-center justify-center py-6">
        <div className="relative flex w-full items-center justify-center gap-2 sm:gap-6">

          {/* ──── LEFT PHONE (Light Mode Revenue & Analytics App) ──── */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[50%] max-w-[250px] shrink-0 rounded-[2.8rem] border-[8px] border-slate-900 bg-slate-900 p-1.5 shadow-[0_30px_70px_rgba(0,0,0,0.45)] sm:max-w-[275px]"
          >
            {/* Glossy Screen Rim */}
            <div className="relative overflow-hidden rounded-[2.2rem] bg-slate-50 text-slate-900 shadow-inner">
              {/* Top Speaker / Dynamic Island */}
              <div className="sticky top-0 z-30 flex h-7 items-center justify-center bg-slate-50 pt-1.5">
                <div className="h-3.5 w-24 rounded-full bg-slate-950 flex items-center justify-end px-2">
                  <div className="size-2 rounded-full bg-indigo-950 border border-slate-800" />
                </div>
              </div>

              {/* App Content */}
              <div className="p-3.5 pt-1">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex size-7 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-800 text-[10px]">
                      JD
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400">Welcome</span>
                      <span className="text-xs font-bold text-slate-800">Hey, John Doe</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Search className="size-3.5" />
                    <Bell className="size-3.5" />
                  </div>
                </div>

                {/* Balance Card */}
                <div className="mt-3.5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 p-3.5 text-white shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-semibold text-teal-400 tracking-wider">TOTAL REVENUE</span>
                    <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[9px] font-bold text-emerald-400">
                      <TrendingUp className="size-2.5" /> +12.5%
                    </span>
                  </div>
                  <div className="mt-1 text-lg font-black tracking-tight">$24,780</div>

                  {/* Line Graph SVG */}
                  <div className="mt-2 h-10 w-full">
                    <svg viewBox="0 0 100 40" className="h-full w-full overflow-visible">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00A896" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#00A896" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0 30 Q 20 15, 40 22 T 80 8 T 100 5 L 100 40 L 0 40 Z"
                        fill="url(#chartGrad)"
                      />
                      <path
                        d="M 0 30 Q 20 15, 40 22 T 80 8 T 100 5"
                        fill="none"
                        stroke="#00A896"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Recent Orders List */}
                <div className="mt-3">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-800 mb-1.5">
                    <span>Recent Orders</span>
                    <span className="text-[10px] text-teal-600 font-semibold cursor-pointer">See all</span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    {[
                      { id: "Order #1254", price: "$135.00", date: "Today, 2:30 PM" },
                      { id: "Order #1255", price: "$230.00", date: "Today, 1:15 PM" },
                      { id: "Order #1256", price: "$349.00", date: "Yesterday" },
                      { id: "Order #1257", price: "$580.00", date: "22 Jul 2026" },
                    ].map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between rounded-xl bg-slate-100/80 p-2 text-[10px] transition-colors hover:bg-slate-200/60"
                      >
                        <div className="flex flex-col">
                          <span className="font-semibold text-slate-800">{order.id}</span>
                          <span className="text-[9px] text-slate-400">{order.date}</span>
                        </div>
                        <span className="font-bold text-slate-900">{order.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Nav Bar */}
              <div className="mt-1 flex items-center justify-around border-t border-slate-200 bg-white py-2 text-slate-400">
                <Home className="size-4 text-teal-600 font-bold" />
                <PieChart className="size-4" />
                <ShoppingBag className="size-4" />
                <User className="size-4" />
              </div>
            </div>
          </motion.div>


          {/* ──── RIGHT PHONE (Product Details & Shopping App) ──── */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 5 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative -ml-4 w-[52%] max-w-[260px] shrink-0 rounded-[2.8rem] border-[8px] border-slate-900 bg-slate-900 p-1.5 shadow-[0_35px_80px_rgba(0,0,0,0.5)] sm:max-w-[285px]"
          >
            {/* Glossy Screen Rim */}
            <div className="relative overflow-hidden rounded-[2.2rem] bg-slate-50 text-slate-900 shadow-inner">
              {/* Top Speaker / Dynamic Island */}
              <div className="sticky top-0 z-30 flex h-7 items-center justify-center bg-slate-50 pt-1.5">
                <div className="h-3.5 w-24 rounded-full bg-slate-950 flex items-center justify-end px-2">
                  <div className="size-2 rounded-full bg-indigo-950 border border-slate-800" />
                </div>
              </div>

              {/* App Content */}
              <div className="p-3.5 pt-1">
                {/* Search Bar */}
                <div className="flex items-center justify-between rounded-xl bg-slate-100 px-3 py-1.5 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Search className="size-3.5 text-slate-400" />
                    <span className="text-[10px]">Search store...</span>
                  </div>
                  <SlidersHorizontal className="size-3 text-slate-400" />
                </div>

                {/* Category Pills */}
                <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 text-[10px] scrollbar-none">
                  <span className="rounded-full bg-teal-600 px-3 py-1 font-semibold text-white">
                    Electronics
                  </span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-600">
                    Fashion
                  </span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-600">
                    Grocery
                  </span>
                </div>

                {/* Product Detail Card */}
                <div className="mt-3 rounded-2xl bg-white p-3 shadow-md border border-slate-100">
                  <div className="relative flex h-28 w-full items-center justify-center rounded-xl bg-gradient-to-b from-slate-100 to-slate-200/70 p-2">
                    {/* SVG Vector Headphones */}
                    <div className="flex flex-col items-center justify-center">
                      <Headphones className="size-16 text-slate-800 drop-shadow-md" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="mt-2.5 flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400">AUDIO & SOUND</span>
                    <span className="text-xs font-bold text-slate-900">Wireless Headphones</span>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[9px] text-slate-400">PRICE</span>
                        <span className="text-sm font-black text-slate-900">$129.99</span>
                      </div>
                      <button
                        type="button"
                        className="rounded-xl bg-teal-600 px-3 py-1.5 text-[10px] font-bold text-white shadow-md shadow-teal-600/30 transition-transform active:scale-95"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>

                {/* Best Sellers */}
                <div className="mt-3">
                  <span className="text-[11px] font-bold text-slate-800">Best Sellers</span>
                  <div className="mt-1.5 grid grid-cols-2 gap-2 text-[10px]">
                    <div className="rounded-xl bg-slate-100 p-2 font-medium text-slate-700">
                      Smart Watch
                      <div className="font-bold text-slate-900 mt-0.5">$199.00</div>
                    </div>
                    <div className="rounded-xl bg-slate-100 p-2 font-medium text-slate-700">
                      Air Earbuds
                      <div className="font-bold text-slate-900 mt-0.5">$89.00</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Nav Bar */}
              <div className="mt-1 flex items-center justify-around border-t border-slate-200 bg-white py-2 text-slate-400">
                <Home className="size-4" />
                <PieChart className="size-4" />
                <ShoppingBag className="size-4 text-teal-600 font-bold" />
                <User className="size-4" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

function CtaPhoneMockups({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Background Organic Teal Crescent Structure */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#00A896]/30 via-teal-500/20 to-transparent blur-[80px]"
      />

      {/* Dual Dark Mode Smartphones */}
      <div className="relative z-10 flex w-full max-w-lg items-center justify-center gap-4">
        {/* Dark Phone 1 */}
        <div className="relative w-[48%] max-w-[230px] rounded-[2.5rem] border-[6px] border-slate-800 bg-slate-950 p-1.5 shadow-2xl transition-transform hover:-translate-y-2 duration-500">
          <div className="relative aspect-[9/18] w-full overflow-hidden rounded-[2rem] bg-slate-900 p-3 text-white">
            <div className="mx-auto mb-3 h-3.5 w-20 rounded-full bg-slate-950" />
            <div className="text-[10px] text-teal-400 font-bold">DASHBOARD</div>
            <div className="mt-1 text-base font-bold">$142,850</div>
            <div className="mt-3 h-20 w-full rounded-xl bg-teal-950/60 p-2 border border-teal-500/30 flex items-end justify-between gap-1">
              <div className="h-[50%] w-2 rounded-t bg-teal-400" />
              <div className="h-[80%] w-2 rounded-t bg-teal-400" />
              <div className="h-[60%] w-2 rounded-t bg-teal-300" />
              <div className="h-[95%] w-2 rounded-t bg-teal-200" />
            </div>
          </div>
        </div>

        {/* Dark Phone 2 */}
        <div className="relative w-[48%] max-w-[230px] rounded-[2.5rem] border-[6px] border-slate-800 bg-slate-950 p-1.5 shadow-2xl transition-transform hover:-translate-y-2 duration-500">
          <div className="relative aspect-[9/18] w-full overflow-hidden rounded-[2rem] bg-[#021F28] p-3 text-white">
            <div className="mx-auto mb-3 h-3.5 w-20 rounded-full bg-slate-950" />
            <div className="text-[10px] text-teal-300 font-bold">ANALYTICS</div>
            <div className="mt-2 space-y-2">
              <div className="rounded-lg bg-white/5 p-2 text-[10px] flex justify-between">
                <span>Active Users</span>
                <span className="text-teal-300 font-bold">98.4%</span>
              </div>
              <div className="rounded-lg bg-white/5 p-2 text-[10px] flex justify-between">
                <span>Retention Rate</span>
                <span className="text-teal-300 font-bold">92.1%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
