"use client";

import React from "react";
import { 
  CheckCircle2, ArrowRight, Truck, Package, Warehouse, 
  Clock, Ship, Thermometer, RefreshCw, BarChart3, Globe,
  ShieldCheck, Activity, Award, HeartPulse, Building2, Zap
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/app/core/lib/cn";
import { Button } from "@/app/shared/ui/Button";
import { Container, Eyebrow, Section } from "@/app/shared/ui/Layout";
import { Stagger, StaggerItem, Reveal } from "@/app/shared/motion/Reveal";

export interface IndustryProblemsSolvedProps {
  eyebrow?: string;
  title: string;
  description?: string;
  industrySlug: string;
  useCases: string[];
}

// Server-side asset sync logic
if (typeof window === "undefined") {
  try {
    const fs = require("fs");
    const path = require("path");
    const brainDir = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\d7538071-8803-4a17-b9d4-5d4b4cf9119f";
    const targetDir = path.join(process.cwd(), "public", "assets");
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const mapping = [
      ["fleet_tracking_3d_1788346586976.jpg", "fleet_tracking_3d.jpg"],
      ["last_mile_3d_1788346606027.jpg", "last_mile_3d.jpg"],
      ["warehouse_wms_3d_1788346790897.jpg", "warehouse_wms_3d.jpg"],
      ["on_demand_3d_1788346833084.jpg", "on_demand_3d.jpg"],
      ["cargo_ship_3d_1788346813435.jpg", "cargo_ship_3d.jpg"],
      ["cold_chain_3d_1788346852231.jpg", "cold_chain_3d.jpg"],
      ["returns_3d_1788346871612.jpg", "returns_3d.jpg"],
      ["analytics_3d_1788346890363.jpg", "analytics_3d.jpg"],
      ["logistics_map_truck_1788344749023.jpg", "logistics_map_truck.jpg"],
      ["healthcare_3d_1788348860663.jpg", "healthcare_3d.jpg"],
      ["fintech_3d_1788348879580.jpg", "fintech_3d.jpg"],
      ["education_3d_1788348901605.jpg", "education_3d.jpg"],
      ["ecommerce_3d_1788348925868.jpg", "ecommerce_3d.jpg"],
    ];
    for (const [srcName, destName] of mapping) {
      const srcPath = path.join(brainDir, srcName);
      const destPath = path.join(targetDir, destName);
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  } catch (e) {
    // silent
  }
}

const INDUSTRY_BANNER_IMAGES: Record<string, { src: string; label: string }> = {
  healthcare: {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    label: "Healthcare Digital Network",
  },
  fintech: {
    src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    label: "Global Financial Pipeline",
  },
  education: {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    label: "Global E-Learning Network",
  },
  ecommerce: {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    label: "Global Commerce Infrastructure",
  },
  logistics: {
    src: "/assets/logistics_map_truck.jpg",
    label: "Global Logistics Engine",
  },
  entertainment: {
    src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    label: "Global Streaming Infrastructure",
  },
};

/** Vector Illustration & Icon Metadata per Use Case */
const USE_CASE_META: Record<string, { icon: any; desc: string; illustration: string }> = {
  // Logistics
  "Fleet Management & Tracking": {
    icon: Truck,
    desc: "Real-time fleet visibility, route optimization, driver behavior monitoring, and automated alerts.",
    illustration: "/assets/fleet_tracking_3d.jpg",
  },
  "Last-Mile Delivery Apps": {
    icon: Package,
    desc: "Fast, reliable, and user-friendly delivery apps that improve customer experience and delivery efficiency.",
    illustration: "/assets/last_mile_3d.jpg",
  },
  "Warehouse Management (WMS)": {
    icon: Warehouse,
    desc: "End-to-end warehouse operations, inventory control, order fulfillment, and staff productivity.",
    illustration: "/assets/warehouse_wms_3d.jpg",
  },
  "On-Demand Delivery Platforms": {
    icon: Clock,
    desc: "Scalable on-demand delivery solutions for businesses handling urgent and scheduled deliveries.",
    illustration: "/assets/on_demand_3d.jpg",
  },
  "Freight & Cargo Management": {
    icon: Ship,
    desc: "Manage shipments, carriers, documents, and compliance with full visibility and transparency.",
    illustration: "/assets/cargo_ship_3d.jpg",
  },
  "Cold Chain Monitoring": {
    icon: Thermometer,
    desc: "Real-time temperature tracking, alerts, and compliance for sensitive and perishable goods.",
    illustration: "/assets/cold_chain_3d.jpg",
  },
  "Reverse Logistics & Returns": {
    icon: RefreshCw,
    desc: "Streamlined return management, RMA workflows, return tracking, and analytics.",
    illustration: "/assets/returns_3d.jpg",
  },
  "Supply Chain Analytics": {
    icon: BarChart3,
    desc: "Data-driven insights, demand forecasting, performance metrics, and predictive analytics.",
    illustration: "/assets/analytics_3d.jpg",
  },

  // Healthcare
  "Telemedicine & Video Consultations": {
    icon: HeartPulse,
    desc: "HIPAA-compliant video consultation apps with WebRTC, e-prescriptions, and scheduling.",
    illustration: "/assets/healthcare_3d.jpg",
  },
  "Electronic Health Records (EHR)": {
    icon: Activity,
    desc: "HL7 FHIR compliant EMR/EHR systems for clinical notes, patient portals, and provider workflows.",
    illustration: "/assets/healthcare_3d.jpg",
  },
  "Remote Patient Monitoring": {
    icon: ShieldCheck,
    desc: "IoT wearable integrations for real-time vitals, chronic disease tracking, and instant alerts.",
    illustration: "/assets/healthcare_3d.jpg",
  },
  "AI Medical Imaging": {
    icon: Zap,
    desc: "Computer vision models for radiology analysis, clinical NLP, and predictive health risk scoring.",
    illustration: "/assets/healthcare_3d.jpg",
  },
  "Hospital Management Systems": {
    icon: Building2,
    desc: "End-to-end HMS with bed management, inventory, pharmacy, and department coordination.",
    illustration: "/assets/healthcare_3d.jpg",
  },
  "Mental Health & Wellness Apps": {
    icon: HeartPulse,
    desc: "Consumer wellness platforms with mood tracking, therapy sessions, and habit building.",
    illustration: "/assets/healthcare_3d.jpg",
  },
  "Clinical Trial Management": {
    icon: Activity,
    desc: "Patient recruitment, eCOA/ePRO data collection, protocol compliance, and trial tracking.",
    illustration: "/assets/healthcare_3d.jpg",
  },
  "Pharmacy & Prescription Apps": {
    icon: Package,
    desc: "Digital prescription processing, medication reminders, pill tracking, and pharmacy delivery.",
    illustration: "/assets/healthcare_3d.jpg",
  },

  // Fintech
  "Neobanking & Digital Wallets": {
    icon: Zap,
    desc: "Next-gen digital banking apps with multi-currency wallets, instant transfers, and card controls.",
    illustration: "/assets/fintech_3d.jpg",
  },
  "Payment Gateway Integration": {
    icon: ShieldCheck,
    desc: "PCI-DSS compliant payment processing, acquiring gateways, and global payment rails.",
    illustration: "/assets/fintech_3d.jpg",
  },
  "Lending & BNPL Platforms": {
    icon: BarChart3,
    desc: "Automated credit scoring, buy-now-pay-later engines, underwriting automation, and collections.",
    illustration: "/assets/fintech_3d.jpg",
  },
  "Investment & Robo-Advisory": {
    icon: Award,
    desc: "Robo-advisory platforms, portfolio rebalancing engines, and real-time market data feeds.",
    illustration: "/assets/fintech_3d.jpg",
  },
  "KYC / AML Automation": {
    icon: ShieldCheck,
    desc: "Biometric liveness verification, document parsing, AML screening, and regulatory reporting.",
    illustration: "/assets/fintech_3d.jpg",
  },
  "Crypto Exchange Platforms": {
    icon: RefreshCw,
    desc: "High-throughput matching engines, Web3 non-custodial wallets, and liquidity aggregation.",
    illustration: "/assets/fintech_3d.jpg",
  },
  "Insurance Technology (InsurTech)": {
    icon: Activity,
    desc: "Digital policy issuance, automated claims processing, parametric insurance, and telematics.",
    illustration: "/assets/fintech_3d.jpg",
  },
  "Open Banking APIs": {
    icon: Globe,
    desc: "PSD2 open banking API pipelines, account aggregation, and secure financial data sharing.",
    illustration: "/assets/fintech_3d.jpg",
  },

  // Education
  "Learning Management Systems (LMS)": {
    icon: Building2,
    desc: "SCORM/xAPI compliant LMS platforms with course authoring, quizzes, and learner tracking.",
    illustration: "/assets/education_3d.jpg",
  },
  "Live Online Classroom Platforms": {
    icon: Zap,
    desc: "Interactive video classrooms with whiteboards, breakout rooms, live polls, and screen share.",
    illustration: "/assets/education_3d.jpg",
  },
  "AI-Adaptive Learning": {
    icon: Activity,
    desc: "Personalized learning pathways, AI tutors, knowledge graph mapping, and auto-grading.",
    illustration: "/assets/education_3d.jpg",
  },
  "Corporate Training & L&D": {
    icon: Award,
    desc: "Enterprise skill assessment, compliance training modules, certificates, and workforce analytics.",
    illustration: "/assets/education_3d.jpg",
  },
  "K-12 Education Apps": {
    icon: HeartPulse,
    desc: "Gamified learning apps for school students with interactive exercises and parent tracking.",
    illustration: "/assets/education_3d.jpg",
  },
  "Test Prep & Competitive Exams": {
    icon: ShieldCheck,
    desc: "Mock exam engines, speed analytics, timed quizzes, and detailed performance breakdown.",
    illustration: "/assets/education_3d.jpg",
  },
  "Professional Certification Platforms": {
    icon: Award,
    desc: "Verifiable digital credentials, proctored examinations, and micro-degree tracking.",
    illustration: "/assets/education_3d.jpg",
  },
  "Coding Bootcamp Platforms": {
    icon: BarChart3,
    desc: "In-browser code execution environments, automated test runner grading, and pair programming.",
    illustration: "/assets/education_3d.jpg",
  },

  // E-Commerce
  "D2C E-Commerce Storefronts": {
    icon: Package,
    desc: "Ultra-fast headless Next.js storefronts with instant page loads, sub-second checkout, and personalization.",
    illustration: "/assets/ecommerce_3d.jpg",
  },
  "Multi-Vendor Marketplaces": {
    icon: Building2,
    desc: "Seller portals, multi-tenant catalogs, commission payout engines, and order splitting.",
    illustration: "/assets/ecommerce_3d.jpg",
  },
  "B2B Commerce Portals": {
    icon: ShieldCheck,
    desc: "Custom wholesale pricing tiers, bulk ordering, PO approval workflows, and ERP integration.",
    illustration: "/assets/ecommerce_3d.jpg",
  },
  "Mobile Shopping Apps": {
    icon: Zap,
    desc: "Native mobile apps with AR product try-on, 1-tap Apple/Google Pay, and push notifications.",
    illustration: "/assets/ecommerce_3d.jpg",
  },
  "Subscription Commerce": {
    icon: RefreshCw,
    desc: "Recurring billing engines, flexible delivery intervals, dunning management, and customer portal.",
    illustration: "/assets/ecommerce_3d.jpg",
  },
  "Flash Sale & Group Buying": {
    icon: Clock,
    desc: "High-concurrency checkout infrastructure designed for high traffic spikes during product drops.",
    illustration: "/assets/ecommerce_3d.jpg",
  },
  "Grocery & Quick Commerce": {
    icon: Truck,
    desc: "Dark store inventory management, 10-minute delivery dispatch, and real-time picker apps.",
    illustration: "/assets/ecommerce_3d.jpg",
  },
  "Luxury & Fashion Commerce": {
    icon: Award,
    desc: "High-end visual storytelling, 3D product view, virtual fitting room, and VIP loyalty programs.",
    illustration: "/assets/ecommerce_3d.jpg",
  },

  // Entertainment
  "OTT Streaming Platforms": {
    icon: Zap,
    desc: "Adaptive bitrate video streaming (HLS/DASH), multi-device DRM, and global CDN delivery.",
    illustration: "/assets/analytics_3d.jpg",
  },
  "Live Streaming & Events": {
    icon: Activity,
    desc: "Ultra-low latency live event broadcast with real-time chat, tipping, and interactive polls.",
    illustration: "/assets/analytics_3d.jpg",
  },
  "Creator Monetization Apps": {
    icon: Award,
    desc: "Membership subscriptions, fan paywalls, exclusive content feeds, and direct tipping.",
    illustration: "/assets/analytics_3d.jpg",
  },
  "Music & Podcast Streaming": {
    icon: HeartPulse,
    desc: "High-fidelity audio streaming players, offline playback downloads, and synchronized lyrics.",
    illustration: "/assets/analytics_3d.jpg",
  },
  "Social Entertainment & Rooms": {
    icon: Globe,
    desc: "Virtual social audio rooms, watch party sync, and community interaction tools.",
    illustration: "/assets/analytics_3d.jpg",
  },
  "Fan Engagement Platforms": {
    icon: ShieldCheck,
    desc: "Gamified fan rewards, digital collectibles, contest voting, and VIP community forums.",
    illustration: "/assets/analytics_3d.jpg",
  },
  "Gaming Backends & Services": {
    icon: RefreshCw,
    desc: "Game server orchestration, matchmaking engines, leaderboards, and anti-cheat protection.",
    illustration: "/assets/analytics_3d.jpg",
  },
  "Sports & Live Score Apps": {
    icon: Clock,
    desc: "Real-time sports score updates, play-by-play commentary, stats feed, and match alerts.",
    illustration: "/assets/analytics_3d.jpg",
  },
};

const DEFAULT_DESCS: Record<string, string> = {
  healthcare: "HIPAA-compliant software tailored for hospitals, clinics, and medical devices.",
  fintech: "PCI-DSS compliant banking, payments, and financial processing engines.",
  education: "Scalable EdTech platforms, LMS engines, and interactive learning systems.",
  ecommerce: "High-conversion storefronts, multi-vendor marketplaces, and checkout engines.",
  logistics: "Real-time fleet tracking, WMS, freight OS, and supply chain management.",
  entertainment: "High-throughput media streaming, fan platforms, and interactive apps.",
};

export function IndustryProblemsSolved({
  eyebrow = "WHERE WE HELP",
  title,
  description = "From real-time tracking to intelligent planning, we build digital solutions that make operations faster, smarter, and more reliable.",
  industrySlug,
  useCases,
}: IndustryProblemsSolvedProps) {
  return (
    <Section tone="none" spacing="lg" className="relative overflow-hidden py-16 sm:py-24 bg-[#f8fafc] border-t border-b border-slate-200/80">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-14 items-start">
          
          {/* ── Left Column: Section Heading, Callout Box & Graphics ── */}
          <Reveal from="left" className="flex flex-col gap-6 lg:sticky lg:top-36">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/70 mb-3 inline-block">
                {eyebrow}
              </span>
              <h2 className="text-display-md sm:text-display-lg font-extrabold text-slate-900 tracking-tight leading-tight">
                {title}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {description}
              </p>
            </div>

            {/* Teal Callout Badge Box */}
            <div className="bg-teal-500/10 border border-teal-200/80 rounded-2xl p-4 flex items-start gap-3">
              <CheckCircle2 className="size-5 text-teal-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-teal-950 font-semibold leading-relaxed">
                Enterprise-grade solutions. Real-world impact. Built, shipped & supported for leading {industrySlug} businesses.
              </p>
            </div>

            {/* Primary Action Button */}
            <div className="pt-1">
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Discuss your case
              </Button>
            </div>

            {/* Bottom World Map / Industry Vector Watermark Card */}
            {(() => {
              const banner = INDUSTRY_BANNER_IMAGES[industrySlug] || INDUSTRY_BANNER_IMAGES["logistics"];
              return (
                <div className="relative mt-4 overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-2 shadow-xs group">
                  <div className="relative h-48 w-full overflow-hidden rounded-xl bg-slate-50">
                    <img
                      src={banner.src}
                      alt={banner.label}
                      className="size-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                      suppressHydrationWarning
                    />
                  </div>
                </div>
              );
            })()}
          </Reveal>

          {/* ── Right Column: 2-Column 3D Cards Grid for Use Cases ── */}
          <div className="flex flex-col gap-6">
            <Stagger stagger={0.08} className="grid gap-5 sm:grid-cols-2">
              {useCases.map((useCaseName, index) => {
                const meta = USE_CASE_META[useCaseName] || {
                  icon: Truck,
                  desc: DEFAULT_DESCS[industrySlug] || "Custom enterprise software built for production scale.",
                  illustration: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&auto=format&fit=crop",
                };
                const IconComp = meta.icon;

                return (
                  <StaggerItem
                    key={useCaseName}
                    from="right"
                    distance={40}
                    className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                  >
                    {/* Left Column: Icon Badge, Title, Description, Arrow */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between h-full pr-1">
                      <div>
                        {/* Circular Teal Icon Badge */}
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 border border-teal-100/80 transition-colors duration-300 group-hover:bg-teal-600 group-hover:text-white mb-2.5">
                          <IconComp className="size-4.5" />
                        </div>

                        {/* Use Case Title */}
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug group-hover:text-teal-700 transition-colors">
                          {useCaseName}
                        </h3>

                        {/* Description Paragraph */}
                        <p className="mt-1.5 text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                          {meta.desc}
                        </p>
                      </div>

                      {/* Bottom Action Arrow */}
                      <div className="mt-3 flex items-center gap-1 text-xs font-bold text-teal-600 opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                        <ArrowRight className="size-3.5" />
                      </div>
                    </div>

                    {/* Right Column: 3D Vector Illustration Asset */}
                    <div className="size-28 sm:size-32 overflow-hidden rounded-2xl bg-white border border-slate-100 shrink-0 p-1 flex items-center justify-center">
                      <img
                        src={meta.illustration}
                        alt={useCaseName}
                        className="size-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                        suppressHydrationWarning
                      />
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>

        </div>
      </Container>
    </Section>
  );
}
