"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Ship, 
  Warehouse, 
  Truck, 
  Landmark, 
  CheckCircle2, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  Check
} from "lucide-react";
import { Container, Eyebrow, Section } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";
import { Button } from "@/app/shared/ui/Button";
import { cn } from "@/app/core/lib/cn";

interface SolutionProduct {
  id: string;
  tabLabel: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  context: string;
  solution: string;
  result: string;
  href: string;
  image: string;
  imageAlt: string;
}

const SOLUTIONS_DATA: SolutionProduct[] = [
  {
    id: "freight",
    tabLabel: "NXT Orbit Freight",
    icon: Ship,
    title: "NXT Orbit Freight",
    subtitle: "End-to-End Freight Execution & Tracking Platform",
    context: "Fragmented freight operations spanning quotes, dispatch, and transit.",
    solution: "Unified cloud platform connecting sales pipelines, operational manifests, and live shipment tracking.",
    result: "Centralized shipment execution workflows with live milestone visibility for shippers and operators.",
    href: "/products/nxt-orbit-freight",
    image: "/assets/orbit_freight_banner.jpg",
    imageAlt: "NXT Orbit Freight Global Container Vessel & Logistics Port",
  },
  {
    id: "wms",
    tabLabel: "NXT WMS",
    icon: Warehouse,
    title: "NXT WMS",
    subtitle: "Integrated ERP & Warehouse Management System (WMS)",
    context: "Complex multi-facility warehouse operations requiring sub-second inventory accuracy.",
    solution: "Enterprise WMS featuring direct bi-directional synchronization with SAP and Tally systems.",
    result: "Removed manual inventory reconciliations, automated GRN and picking, and enabled real-time stock visibility.",
    href: "/products/nxt-wms",
    image: "/assets/wms_real_banner.jpg",
    imageAlt: "NXT WMS High-Bay Enterprise Distribution Facility",
  },
  {
    id: "courier",
    tabLabel: "NXT Courier Express",
    icon: Truck,
    title: "NXT Courier Express",
    subtitle: "Multicarrier Shipping & Autonomous RTO Defense",
    context: "High RTO rates and manual courier allocation across fragmented 3PL logistics carriers.",
    solution: "Dynamic routing engine with pre-dispatch address verification and automated NDR recovery workflows.",
    result: "Reduced RTO leakage by 45%, automated carrier allocation, and achieved same-day COD reconciliation.",
    href: "/products/courier-express",
    image: "/assets/courier_real_banner.jpg",
    imageAlt: "NXT Courier Express Commercial Fleet Distribution Hub",
  },
  {
    id: "finance",
    tabLabel: "NXT Sales & Finance",
    icon: Landmark,
    title: "NXT Sales & Finance",
    subtitle: "Decoupled Core Financial & Accounts Module",
    context: "Legacy enterprise environment needing upgraded billing capabilities without risking core system downtime.",
    solution: "Standalone financial microservice integrated with live transactional databases via secure REST APIs.",
    result: "Delivered modern financial reporting and automated accounting without disturbing legacy core operations.",
    href: "/products/nxt-sales-finance",
    image: "/assets/finance_real_banner.jpg",
    imageAlt: "NXT Sales & Finance Corporate Financial Operations Suite",
  },
];

/**
 * Section 6 — Our Solutions in Action
 * Design Option 2: Tabbed / Segmented Layout with Wide Illustration Banner
 * Strictly preserves authentic enterprise context, engineered solutions, and business results.
 */
export function SolutionsInAction() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = SOLUTIONS_DATA[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? SOLUTIONS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === SOLUTIONS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="solutions-in-action" className="relative isolate overflow-hidden bg-linear-to-br from-[#072444] via-[#092c53] to-[#04162a] py-16 sm:py-24">
      {/* Subtle ambient lighting / mesh background accents */}
      <div className="absolute -top-32 -right-32 size-96 rounded-full bg-[#00d2c4]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <Container width="wide" className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <Reveal className="flex flex-col items-start gap-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d2c4]/15 text-[#00d2c4] text-xs font-bold tracking-wider uppercase border border-[#00d2c4]/25">
              OUR SOLUTIONS IN ACTION
            </span>
            <h2 className="font-heading text-xl sm:text-3xl lg:text-5xl text-white font-bold leading-tight tracking-tight">
              Proven Capability in Mission-Critical Environments
            </h2>
            <p className="text-slate-300 text-xs sm:text-base lg:text-lg font-normal leading-relaxed">
              Four specialized platforms. One integrated ecosystem.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Button 
              href="/contact" 
              variant="primary" 
              withArrow 
              className="self-start md:self-end whitespace-nowrap bg-[#00d2c4] text-[#031324] hover:bg-[#00baa9] font-bold shadow-none hover:shadow-none border-0"
            >
              Discuss Your Architecture
            </Button>
          </Reveal>
        </div>

        {/* Tabbed / Segmented Navigation Bar */}
        <div className="mb-6 sm:mb-8">
          <div 
            data-lenis-prevent="true"
            className="flex items-center gap-2 sm:gap-3 overflow-x-auto overscroll-x-contain touch-pan-x pb-2 scrollbar-none"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {SOLUTIONS_DATA.map((item, idx) => {
              const Icon = item.icon;
              const isActive = idx === activeIndex;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  type="button"
                  className={cn(
                    "flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-[11.5px] sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer select-none",
                    isActive
                      ? "bg-white text-slate-900 shadow-md scale-[1.01]"
                      : "bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white border border-white/10"
                  )}
                  aria-selected={isActive}
                  role="tab"
                >
                  <div
                    className={cn(
                      "flex size-7 sm:size-8 items-center justify-center rounded-xl transition-colors",
                      isActive
                        ? "bg-[#072444] text-[#00d2c4]"
                        : "bg-white/10 text-slate-300"
                    )}
                  >
                    <Icon className="size-4 sm:size-4.5" />
                  </div>
                  <span>{item.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Product Showcase Banner - Clean Panoramic Split Layout */}
        <div className="rounded-2xl sm:rounded-3xl bg-white shadow-2xl border border-slate-100 text-slate-900 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[500px]">
            {/* Left Column: Product Data & Proof Layers */}
            <div className="lg:col-span-5 xl:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between z-10 bg-white">
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {activeProduct.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base font-normal mt-1 mb-5">
                  {activeProduct.subtitle}
                </p>

                {/* 3 Structured Layers */}
                <div className="flex flex-col gap-4 border-t border-slate-100 pt-4">
                  {/* Operational Context */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#072444] text-white">
                      <Check className="size-3 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                        Operational Context
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {activeProduct.context}
                      </p>
                    </div>
                  </div>

                  {/* Engineered Solution */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#072444] text-white">
                      <Check className="size-3 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
                        Engineered Solution
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        {activeProduct.solution}
                      </p>
                    </div>
                  </div>

                  {/* Business Result */}
                  <div className="flex items-start gap-3 rounded-xl bg-teal-50/80 border border-teal-100/90 p-3.5">
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#008c83] text-white">
                      <CheckCircle2 className="size-3.5" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#008c83]">
                        Business Result
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
                        {activeProduct.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Explore CTA Button */}
              <div className="pt-6 flex items-center gap-4">
                <Link
                  href={activeProduct.href}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#072444] hover:bg-[#00d2c4] hover:text-[#031324] text-white text-sm font-semibold transition-all duration-200 shadow-none group"
                >
                  <span>Explore</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                  View architecture & workflows
                </span>
              </div>
            </div>

            {/* Right Column / Crystal-Clear Banner Image with NO blurry fog */}
            <div className="lg:col-span-7 xl:col-span-7 min-h-[300px] lg:min-h-full relative overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-100">
              <Image
                src={activeProduct.image}
                alt={activeProduct.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-all duration-700 hover:scale-105"
                priority
              />

              {/* Bottom subtle dark gradient vignette for controls */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/50 via-black/20 to-transparent z-10 pointer-events-none" />

              {/* Slide Controls & Pagination placed at bottom-right inside image */}
              <div className="absolute bottom-4 right-5 sm:bottom-6 sm:right-8 z-20 flex items-center gap-3 sm:gap-4">
                {/* Indicator Dots */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {SOLUTIONS_DATA.map((dot, dIdx) => (
                    <button
                      key={dot.id}
                      onClick={() => setActiveIndex(dIdx)}
                      aria-label={`Go to slide ${dIdx + 1}: ${dot.tabLabel}`}
                      className={cn(
                        "h-2 rounded-full transition-all duration-300 cursor-pointer shadow-sm",
                        dIdx === activeIndex
                          ? "w-7 sm:w-8 bg-white"
                          : "w-2 bg-white/50 hover:bg-white/80"
                      )}
                    />
                  ))}
                </div>

                {/* Previous / Next Arrows */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    onClick={handlePrev}
                    type="button"
                    aria-label="Previous platform"
                    className="flex size-8 sm:size-9 items-center justify-center rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md backdrop-blur-xs transition-all hover:scale-105 cursor-pointer"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    type="button"
                    aria-label="Next platform"
                    className="flex size-8 sm:size-9 items-center justify-center rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md backdrop-blur-xs transition-all hover:scale-105 cursor-pointer"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


