"use client";

import { useState, useEffect } from "react";
import { 
  ArrowRight, Shield, ShieldCheck, Database, Navigation, MessageSquarePlus, 
  Terminal, Sparkles, Code, Cpu, DatabaseZap, Users, FileText, CheckCircle2,
  Lock, Globe, Cloud, Key, Check, Layers, BarChart3, Workflow,
  Eye, Clock, Activity, Bell, Box, Gauge, TrendingUp, DollarSign, Target,
  LayoutGrid, Truck, Package, Settings, ChevronDown
} from "lucide-react";
import { cn } from "@/app/core/lib/cn";
import { Breadcrumb } from "@/app/shared/ui/Breadcrumb";
import { Button } from "@/app/shared/ui/Button";
import { Card } from "@/app/shared/ui/Card";
import { Container, Eyebrow, Section } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";
import { GradientMesh, Grain } from "@/app/shared/backdrop/Backdrops";
import { CallToAction } from "@/app/shared/sections/CallToAction";
import { TrustAndFaqSection } from "@/app/shared/sections/TrustAndFaqSection";
import { ServiceHeroImage } from "@/app/shared/ui/ServiceHeroImage";
import { ProductRoiMetrics } from "@/app/products/components/ProductRoiMetrics";
import { ProductStandardsIntegrations } from "@/app/products/components/ProductStandardsIntegrations";
import { ProductResultBanner } from "@/app/products/components/ProductResultBanner";

/* ── WMS AI Chat Simulator Prompts & Responses ───────────────────────────── */
const WMS_CHAT_PROMPTS = [
  {
    question: "Which warehouse has 20% free space next week?",
    answer: "Analyzing 3D spatial twins across all facilities...\nFound 1 facility meeting criteria:\n• Chennai Logistics Hub: 24% free space projected (equivalent to 140 vacant pallet slots).\n• Navi Mumbai (HQ): 8% free space projected.\n• Delhi NCR Hub: 11% free space projected.\nRecommendation: Route incoming FMCG dispatches from Pune to Chennai Hub to capture available slot capacity."
  },
  {
    question: "What is our average turnaround time for Supplier X?",
    answer: "Calculating turnaround times for Supplier X...\n• Average Gate-to-Dock: 14 mins.\n• Average Unloading & GRN: 22 mins.\n• Average Put-away: 18 mins.\nTotal Dwell Time: 54 mins (12% faster than last month's average)."
  },
  {
    question: "Compare peak vs downtime cycles for Delhi Hub",
    answer: "Analyzing Delhi Hub throughput logs...\n• Peak Cycles: Tuesday/Thursday (14:00 - 18:30) - 94% dock occupancy.\n• Downtime Cycles: Monday/Wednesday (08:00 - 12:00) - 42% dock occupancy.\nAI Suggestion: Move stock replenishment tasks to morning downtime slots to unlock 2.5 hours of daily dock availability."
  }
];

/* ── 5 Core Capabilities of WMS Operations ────────────────────────────────── */
const WMS_ROLE_TABS = [
  {
    id: "pillar1",
    label: "Flow Velocity & Dwell",
    fullTitle: "Flow Velocity & Dwell Time Analytics",
    icon: Workflow,
    intro: "Track the end-to-end movement of inventory across suppliers, facilities, and end-customers.",
    points: [
      { title: "Upstream & Downstream Visibility", desc: "Know exactly which supplier provided the material, who the end customer is, and every node in between." },
      { title: "Turnaround Time Metrics", desc: "Automatically calculate average dwell time, picking speed, and fulfillment velocity to eliminate carrier bottlenecks." },
      { title: "Gate-to-Dock Telemetry", desc: "Track vehicle gate entries, dock door allocations, and unloading turnaround times in real time." },
      { title: "Cross-Docking Direct Routing", desc: "Route high-priority inbound transfers directly to outbound staging bays with zero unnecessary put-away delay." }
    ],
    dashboardTitle: "Inventory Flow Overview",
    topImage: "/assets/warehouse_wms_3d.jpg",
    metrics: [
      { label: "Total Shipments", val: "1,248", change: "↑ 18% vs last week" },
      { label: "In Transit", val: "342", change: "↑ 12% vs last week" },
      { label: "Avg Dwell Time", val: "2.4 Days", change: "↓ 6% vs last week" },
      { label: "On-Time Delivery", val: "94.6%", change: "↑ 6% vs last week" }
    ],
    widget1Title: "Inventory Flow Map",
    widget2Title: "Flow Velocity Trend"
  },
  {
    id: "pillar2",
    label: "Capacity & Yield",
    fullTitle: "Capacity Monetization & Yield Optimization",
    icon: Layers,
    intro: "Turn idle warehouse space and slow operational hours into pure revenue.",
    points: [
      { title: "Peak & Downtime Intelligence", desc: "AI analyzes historical throughput patterns to identify peak traffic hours versus low-volume downtime." },
      { title: "Commercial Growth Radar", desc: "Calculates available floor space and workforce capacity during low-volume cycles to safely onboard new 3PL volume." },
      { title: "Dynamic Space Utilization", desc: "Real-time 3D heatmapping and rack suggestions ensure every cubic meter is configured for maximum storage density." },
      { title: "Dynamic Velocity Slotting", desc: "Re-slot fast-moving SKUs closer to packing stations dynamically to minimize picker travel distance." }
    ],
    dashboardTitle: "Spatial Capacity & Yield Console",
    topImage: "/assets/fleet_tracking_3d.jpg",
    metrics: [
      { label: "Slot Occupancy", val: "78.4%", change: "↑ 8% vs last week" },
      { label: "Idle Slot Density", val: "21.6%", change: "↓ 4% vs last week" },
      { label: "Yield Monetized", val: "+$14.2K", change: "↑ 24% vs last week" },
      { label: "Rack Density Rate", val: "99.1%", change: "↑ 3% vs last week" }
    ],
    widget1Title: "3D Rack Density Heatmap",
    widget2Title: "Commercial Yield Growth"
  },
  {
    id: "pillar3",
    label: "Telemetry & Performance",
    fullTitle: "System Telemetry & User Performance Intelligence",
    icon: BarChart3,
    intro: "Maintain absolute control over how your operational software and floor teams perform.",
    points: [
      { title: "System Utilization Reports", desc: "Pure analytics on how the NXT WMS application is being utilized across branches, modules, and shift hours." },
      { title: "Personalized User & Staff Audits", desc: "Track individual operator activity, task completion rates, picking errors, and system interactions to optimize labor allocation." },
      { title: "What's Going Wrong Radar", desc: "AI scans system operations in the background to flag operational bottlenecks, unauthorized overrides, or stagnant inventory incurring holding costs." },
      { title: "Hardware & Scanner Latency Logs", desc: "Monitor wireless RF gun connectivity, barcode scan response times, and automated conveyor sensor health." }
    ],
    dashboardTitle: "Operator Telemetry & Audit Radar",
    topImage: "/assets/analytics_3d.jpg",
    metrics: [
      { label: "Active Operators", val: "48 Staff", change: "100% Shift Active" },
      { label: "Task Completion", val: "98.7%", change: "↑ 4% vs last shift" },
      { label: "Picking Error Rate", val: "0.08%", change: "↓ 12% vs last shift" },
      { label: "Telemetry Uptime", val: "99.99%", change: "Optimal Latency" }
    ],
    widget1Title: "Operator Activity Feed",
    widget2Title: "System Latency & Load"
  },
  {
    id: "pillar4",
    label: "Multi-Warehouse & 3PL",
    fullTitle: "Centralized Multi-Warehouse & 3PL Governance",
    icon: Globe,
    intro: "Execute global operations without fragmenting your data.",
    points: [
      { title: "Single-Pane Multi-Warehouse Access", desc: "Switch between multiple facilities, regional branches, or 3PL client views instantly in one application." },
      { title: "Real-Time In-Transit Visibility", desc: "Full traceability when inventory moves between facilities, with zero-touch automated GRNs/PO creation upon transfer dispatch." },
      { title: "Role-Based Security & Portals", desc: "Bank-grade access control allowing 3PL clients to view inventory status, track transfers, and download PDF/Excel reports independently." },
      { title: "Multi-Client Inventory Partitioning", desc: "Secure multi-tenant data barriers isolate client inventories, billing rates, and custom SLAs on one unified platform." }
    ],
    dashboardTitle: "Global Multi-Facility & 3PL Network",
    topImage: "/assets/cargo_ship_3d.jpg",
    metrics: [
      { label: "Connected Hubs", val: "14 Nodes", change: "All Hubs Synced" },
      { label: "Inter-Facility POs", val: "186 Orders", change: "↑ 15% vs last week" },
      { label: "Active 3PL Portals", val: "32 Clients", change: "100% Isolated" },
      { label: "Auto GRN Sync", val: "420 Batches", change: "Zero Touch Sync" }
    ],
    widget1Title: "Global Multi-Hub Routing Map",
    widget2Title: "Cross-Dock PO Velocity"
  },
  {
    id: "pillar5",
    label: "No-Code & Action Engine",
    fullTitle: "Enterprise No-Code Utility & Action Engine",
    icon: Cpu,
    intro: "A configurable automation layer that adapts to your business rules.",
    points: [
      { title: "Automated Action Schedulers", desc: "Set up custom time-based triggers, batch processes, and report delivery schedules." },
      { title: "Custom Event Notifications", desc: "Configure instant email, SMS, or app notifications for key triggers like cold-chain temperature alerts or stock threshold breaches." },
      { title: "Mobile-First Floor Execution", desc: "Native application for Android/iOS handheld RF devices, tablets, and mobile phones for real-time barcode scanning and floor execution." },
      { title: "Custom Inspection & Quarantine Gates", desc: "Enforce mandatory QC checkpoints, batch/serial verification, and custom quarantine holding rules before release." }
    ],
    dashboardTitle: "No-Code Workflows & RF Floor Console",
    topImage: "/assets/on_demand_3d.jpg",
    metrics: [
      { label: "Active Rules", val: "38 Workflows", change: "Automated Execution" },
      { label: "Triggered Events", val: "1,420/hr", change: "↑ 22% vs last week" },
      { label: "Active RF Scanners", val: "112 Handhelds", change: "Live Mobile Sync" },
      { label: "Execution Latency", val: "14 ms", change: "Sub-second response" }
    ],
    widget1Title: "Mobile Scanner Activity",
    widget2Title: "Rule Execution Flow Rate"
  }
];

/* ── Integration Brand Logos (Option 1 Reference) ───────────────────────── */
function SapLogo() {
  return (
    <div className="flex size-8 items-center justify-center rounded-md bg-[#0070F2] text-white font-black text-2xs tracking-tight">
      SAP
    </div>
  );
}

function ZohoLogo() {
  return (
    <img
      src="/assets/logo_zoho.svg"
      alt="Zoho"
      className="size-7 object-contain"
    />
  );
}

function OracleLogo() {
  return (
    <svg viewBox="0 0 50 30" className="w-8 h-4.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="3" width="42" height="24" rx="12" stroke="#EA1C24" strokeWidth="5.5" fill="none" />
    </svg>
  );
}

function CustomErpLogo() {
  return (
    <div className="flex size-8 items-center justify-center rounded-md bg-teal-50 text-teal-600 border border-teal-200/80">
      <Settings className="size-4.5 stroke-[2]" />
    </div>
  );
}

/* ── Pre-built Integrations ──────────────────────────────────────────────── */
const WMS_INTEGRATIONS = [
  {
    name: "SAP Enterprise",
    type: "ERP Integration",
    Logo: SapLogo,
    discBg: "bg-[#e0f7f5] border-teal-200/70",
  },
  {
    name: "Zoho Suite",
    type: "CRM Sync",
    Logo: ZohoLogo,
    discBg: "bg-[#e0f7f5] border-teal-200/70",
  },
  {
    name: "Oracle Logistics",
    type: "Supply Chain",
    Logo: OracleLogo,
    discBg: "bg-[#fee2e2] border-rose-200/70",
  },
  {
    name: "Custom ERPs",
    type: "REST Webhooks",
    Logo: CustomErpLogo,
    discBg: "bg-[#e0f7f5] border-teal-200/70",
  },
];

export default function NextOrbitWmsPage() {
  const [activeTab, setActiveTab] = useState("pillar1");
  const [chatIndex, setChatIndex] = useState(0);
  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const [typing, setTyping] = useState(false);

  // Open consultation modal with product preselected
  const handleRequestDemo = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-consultation-modal", { detail: { service: "nxt-wms" } })
      );
    }
  };

  // Scroll to AI Dashboard section
  const handleScrollToAI = () => {
    document.getElementById("wms-ai-showcase")?.scrollIntoView({ behavior: "smooth" });
  };

  // Typing effect simulation for chatbot mockup
  useEffect(() => {
    setTyping(true);
    setDisplayedAnswer("");
    const fullText = WMS_CHAT_PROMPTS[chatIndex].answer;
    let currentLength = 0;
    
    const interval = setInterval(() => {
      if (currentLength < fullText.length) {
        setDisplayedAnswer(fullText.slice(0, currentLength + 1));
        currentLength++;
      } else {
        setTyping(false);
        clearInterval(interval);
      }
    }, 6);

    return () => clearInterval(interval);
  }, [chatIndex]);

  return (
    <>
      {/* ── 1. Hero Section ── */}
      <section className="relative isolate overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-20">
        <GradientMesh />
        <Grain />
        <div className="absolute inset-0 bg-brand-950/5 pointer-events-none" />

        <Container className="relative">
          <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-20">
            <div className="flex flex-col items-start">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Products", href: "/products/nxt-wms" },
                  { label: "NXT WMS" },
                ]}
              />

              <Reveal from="up" className="mt-4">
                <Eyebrow>CAPACITY & YIELD OPTIMIZATION</Eyebrow>
              </Reveal>

              <Reveal from="up" delay={0.06} className="mt-2">
                <h1 className="max-w-2xl text-display-lg sm:text-display-xl font-extrabold text-ink-900">
                  One Platform. <br />
                  <span className="bg-linear-to-r from-[#006B7D] to-[#00d2c4] bg-clip-text text-transparent">
                    Total Warehouse Intelligence & Capacity Yield.
                  </span>
                </h1>
              </Reveal>

              <Reveal from="up" delay={0.14} className="mt-4">
                <p className="max-w-xl text-lead text-ink-600">
                  An enterprise-grade, AI-native Warehouse Operating System. Maximize space utilization, predict operational peak/downtime cycles, and manage multi-facility networks with total system transparency.
                </p>
              </Reveal>

              <Reveal from="up" delay={0.22} className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact" size="lg" variant="primary" withArrow magnetic>
                  Request a Live Demo
                </Button>
                <Button onClick={handleScrollToAI} size="lg" variant="outline" withArrow>
                  Explore AI Yield Analytics
                </Button>
              </Reveal>
            </div>

            {/* Hero Visualization Image */}
            <div className="relative flex justify-center">
              <Reveal from="up" scale={0.97} className="relative w-full max-w-[540px]">
                <ServiceHeroImage
                  src="/assets/hero_slider_2.webp"
                  alt="Total Warehouse Intelligence & Capacity Yield - NXT WMS"
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Executive Impact Cards (The Business Numbers Redesigned) ── */}
      <ProductRoiMetrics
        title="Measurable Capacity & Velocity Gains"
        subtitle="Anchor value in verified operational numbers before diving into technology details."
        metrics={[
          {
            value: "100%",
            badge: "Full Visibility",
            title: "Flow Traceability",
            description: "Complete visibility from supplier origin to end-customer delivery with real-time velocity metrics.",
            progressLabel: "Audit & Tracking Integrity",
            progressPercent: 100,
            benchmark: "100% End-to-End",
            icon: Target,
          },
          {
            value: "+25%",
            badge: "Capacity Yield",
            title: "Capacity Monetization",
            description: "AI-driven peak/downtime analysis revealing exact idle capacity available to onboard new customers.",
            progressLabel: "Bay Utilization Rate",
            progressPercent: 86,
            benchmark: "+25% Realized Space",
            icon: TrendingUp,
          },
          {
            value: "Full",
            badge: "Telemetry Engine",
            title: "System Telemetry",
            description: "Granular analytics on system usage, staff efficiency, and process turnaround times.",
            progressLabel: "Diagnostic Stream Health",
            progressPercent: 99,
            benchmark: "99.98% Live Telemetry",
            icon: Activity,
          },
        ]}
      />

      {/* ── 3. Core Enterprise Pillars (Redesigned to Match Image 1 Reference Mockup) ── */}
      <Section tone="sunken" spacing="lg" className="relative overflow-hidden border-t border-slate-200/80 bg-[#f8fafc] py-20 sm:py-28">
        <Container>
          {(() => {
            const currentTab = WMS_ROLE_TABS.find((t) => t.id === activeTab) || WMS_ROLE_TABS[0];
            const pillarIndex = WMS_ROLE_TABS.findIndex((t) => t.id === activeTab) + 1;
            return (
              <>
                {/* Top Section Header: Left Info + Value Rail & Right Isometric 3D Warehouse Image */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
                  {/* Left Header Info & 3 Value Badges */}
                  <div className="lg:col-span-6 flex flex-col items-start">
                    <Eyebrow tone="brand">STRATEGIC TRANSFORMATION</Eyebrow>
                    <h2 className="text-display-md sm:text-display-lg font-extrabold text-slate-900 mt-3">
                      Core Capabilities of Autonomous Warehouse Operations
                    </h2>
                    <p className="text-lead text-slate-600 leading-relaxed max-w-xl font-normal mt-3">
                      Deep dive into WMS utilities designed for end-to-end optimization, intelligent automation, and real-time control.
                    </p>

                    {/* 3 Horizontal Value Proof Badges */}
                    <div className="flex flex-wrap items-center gap-3 mt-5">
                      <div className="flex items-center gap-3 bg-white border border-slate-200/80 rounded-2xl px-4 py-2.5">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                          <Box className="size-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-extrabold text-slate-900 leading-tight">High Visibility</h5>
                          <p className="text-xs text-slate-500 leading-none mt-0.5">Across every node</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-white border border-slate-200/80 rounded-2xl px-4 py-2.5">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                          <Gauge className="size-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-extrabold text-slate-900 leading-tight">Real-Time Control</h5>
                          <p className="text-xs text-slate-500 leading-none mt-0.5">Faster decisions</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-white border border-slate-200/80 rounded-2xl px-4 py-2.5">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                          <TrendingUp className="size-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-extrabold text-slate-900 leading-tight">Operational Excellence</h5>
                          <p className="text-xs text-slate-500 leading-none mt-0.5">Lower cost, higher output</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right 3D Isometric Warehouse Illustration Container (Increased by 40px) */}
                  <div className="lg:col-span-6 relative flex items-center justify-center min-h-[320px] sm:min-h-[360px]">
                    {/* Concentric Circular Radar Target Rings Background */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-35">
                      <div className="size-[360px] rounded-full border border-teal-300/40 flex items-center justify-center">
                        <div className="size-[260px] rounded-full border border-teal-300/40 flex items-center justify-center">
                          <div className="size-[160px] rounded-full border border-teal-300/40" />
                        </div>
                      </div>
                    </div>

                    {/* 3D Warehouse Image - 100% Seamless Blend, Zero Box Border, No Hover */}
                    <div className="relative z-10 size-full flex items-center justify-center pointer-events-none select-none">
                      <img
                        src="/assets/warehouse_wms_3d.jpg"
                        alt="3D Autonomous Warehouse Operations"
                        className="w-full h-auto max-h-[380px] object-contain mix-blend-multiply opacity-95"
                        style={{
                          maskImage: "radial-gradient(circle at center, black 45%, transparent 72%)",
                          WebkitMaskImage: "radial-gradient(circle at center, black 45%, transparent 72%)"
                        }}
                        suppressHydrationWarning
                      />
                    </div>
                  </div>
                </div>

                {/* 5 Capabilities Tabbed Navigation Bar */}
                <div 
                  data-lenis-prevent="true"
                  className="flex items-center md:justify-center gap-2 overflow-x-auto overscroll-x-contain touch-pan-x scrollbar-none pb-2 mb-8 md:mb-10 px-1"
                  style={{ WebkitOverflowScrolling: "touch" }}
                >
                  {WMS_ROLE_TABS.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                          "flex shrink-0 whitespace-nowrap items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer border text-left",
                          isActive
                            ? "bg-[#0a2328] border-[#0a2328] text-white scale-[1.02]"
                            : "bg-white border-slate-200/90 text-slate-700 hover:border-teal-400 hover:text-teal-700 hover:bg-teal-50/50"
                        )}
                      >
                        <div className={cn("flex size-5 items-center justify-center rounded-full transition-colors shrink-0", isActive ? "bg-teal-500/20 text-teal-300" : "bg-slate-100 text-slate-500")}>
                          <Icon className="size-3" />
                        </div>
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Capability Showcase Card & Dynamic WMS Dashboard UI Mockup */}
                <div className="space-y-6">
                {/* 2-Column Showcase Container (Matching Freight Reference) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
                  {/* Left Hero Image Card */}
                  <div className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[290px] sm:min-h-[320px] lg:min-h-[340px] flex flex-col justify-end p-5 sm:p-6 border border-slate-200/80 group">
                    <img
                      src={currentTab.topImage || "/assets/warehouse_wms_3d.jpg"}
                      alt={currentTab.fullTitle}
                      className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      suppressHydrationWarning
                    />
                    {/* Dark Mask Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/95 via-slate-950/60 to-transparent pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-start gap-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug tracking-tight">
                        {currentTab.fullTitle}
                      </h3>
                      <p className="text-sm text-slate-200/90 leading-relaxed font-normal max-w-md line-clamp-3 mt-0.5">
                        {currentTab.intro}
                      </p>
                    </div>
                  </div>

                  {/* Right 2x2 Feature Cards Grid */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                    {currentTab.points.map((point, index) => (
                      <div
                        key={index}
                        className="group relative flex flex-col justify-start rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300"
                      >
                        {/* Circle Icon Badge */}
                        <div className="flex size-9 items-center justify-center rounded-xl bg-teal-50 text-teal-600 border border-teal-100/80 transition-colors duration-300 group-hover:bg-teal-600 group-hover:text-white mb-3">
                          <CheckCircle2 className="size-4.5" />
                        </div>

                        {/* Title */}
                        <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-teal-700 transition-colors">
                          {point.title}
                        </h4>

                        {/* Description */}
                        <p className="mt-1.5 text-sm text-slate-600 leading-relaxed font-normal">
                          {point.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Result Rail ("THE RESULT" Banner) */}
                <ProductResultBanner
                  eyebrow="THE RESULT"
                  headline="99.9% Inventory accuracy. 40% faster put-away. Peak space yield."
                  stats={[
                    {
                      icon: Clock,
                      title: "40% Faster Put-Away",
                      description: "Cut dock-to-stock turnaround time from hours to minutes.",
                    },
                    {
                      icon: Eye,
                      title: "Real-Time 3D Heatmap",
                      description: "Optimize bin and rack slotting for 35% higher storage density.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Zero Picking Errors",
                      description: "RF barcode scanning and directed pick paths eliminate dispatch mistakes.",
                    },
                    {
                      icon: TrendingUp,
                      title: "Multi-Facility Scale",
                      description: "Manage multi-site enterprise warehouses from a single pane of glass.",
                    },
                  ]}
                />
              </div>
            </>
          );
        })()}
        </Container>
      </Section>

      {/* ── 4. The AI Intelligence Core (Cognitive Showcase) ── */}
      <Section id="wms-ai-showcase" tone="sunken" spacing="lg" className="border-t border-hairline">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
            {/* Left side details */}
            <div className="flex flex-col justify-center">
              <Eyebrow tone="brand">AUTONOMOUS WAREHOUSE AI</Eyebrow>
              <h2 className="text-display-md sm:text-display-lg text-slate-900 font-extrabold mt-3 mb-6">
                Predictive Spatial Intelligence & Real-Time Telemetry
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex shrink-0 size-10 items-center justify-center rounded-xl bg-linear-to-br from-brand-600 to-teal-500 text-white font-mono text-sm font-extrabold">
                    1
                  </span>
                  <div className="flex-1 pt-0.5">
                    <h4 className="text-base font-bold text-slate-900">Conversational Operations Assistant</h4>
                    <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                      Ask questions in plain language like "What is our average turnaround time for Supplier X?" or "Which warehouse has 20% free space next week?" for instant reports.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex shrink-0 size-10 items-center justify-center rounded-xl bg-linear-to-br from-brand-600 to-teal-500 text-white font-mono text-sm font-extrabold">
                    2
                  </span>
                  <div className="flex-1 pt-0.5">
                    <h4 className="text-base font-bold text-slate-900">Predictive Demand & Inventory Forecasting</h4>
                    <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                      Machine-learning models project seasonal stock requirements to prevent stockouts and overstock costs before they manifest.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex shrink-0 size-10 items-center justify-center rounded-xl bg-linear-to-br from-brand-600 to-teal-500 text-white font-mono text-sm font-extrabold">
                    3
                  </span>
                  <div className="flex-1 pt-0.5">
                    <h4 className="text-base font-bold text-slate-900">Executive Trend Dashboards</h4>
                    <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                      High-level visual summaries translating complex floor operational data into actionable business strategy for C-suite executives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side interactive AI Chatbot Mockup */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-slate-300 bg-white flex flex-col h-[480px]">
                {/* Header */}
                <div className="bg-slate-950 text-white px-5 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex size-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold font-mono tracking-wider">NXT WMS AI Copilot</span>
                  </div>
                  <Terminal className="size-4 text-teal-400" />
                </div>

                {/* Chat feed */}
                <div className="flex-1 p-5 overflow-y-auto font-mono text-xs space-y-4 bg-slate-900 text-slate-100">
                  <div className="text-teal-400">&gt; Prompt: {WMS_CHAT_PROMPTS[chatIndex].question}</div>
                  <div className="border-t border-slate-800 pt-3 text-slate-300 leading-relaxed whitespace-pre-wrap">
                    {displayedAnswer}
                    {typing && <span className="inline-block w-1.5 h-3.5 bg-teal-400 ml-1" />}
                  </div>
                </div>

                {/* Prompt clickers */}
                <div className="bg-slate-950 border-t border-slate-800 p-4">
                  <span className="text-2xs text-slate-500 font-bold uppercase tracking-wider block mb-2 font-mono">Suggested WMS Queries:</span>
                  <div className="flex flex-col gap-2">
                    {WMS_CHAT_PROMPTS.map((prompt, idx) => (
                      <button
                        key={idx}
                        onClick={() => !typing && setChatIndex(idx)}
                        disabled={typing}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg border text-xs font-mono transition-colors duration-200 cursor-pointer disabled:opacity-50",
                          idx === chatIndex 
                            ? "bg-teal-500/10 border-teal-500/60 text-teal-400" 
                            : "border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300 bg-slate-900/50"
                        )}
                      >
                        {prompt.question}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 5. Integration Layer Visual (Option 1 Reference Redesign) ── */}
      <ProductStandardsIntegrations
        id="enterprise-integrations"
        eyebrow="GLOBAL OPERATIONAL STANDARDS"
        title="Built for Industry Standards."
        highlightTitle="100% Tailored to Your Process."
        description="NXT WMS combines standardized industry best practices with deep workflow customization, seamlessly connecting via open APIs to SAP, Zoho, Oracle, and automated warehouse machinery."
        pills={[
          "SAP Warehouse",
          "Oracle NetSuite",
          "Zoho Inventory",
          "Tally Prime",
          "Zebra RFID",
          "Honeywell Scanners",
        ]}
        features={[
          {
            icon: Database,
            iconBg: "bg-teal-50 text-teal-600 border border-teal-200/80",
            title: "Bi-Directional WMS Sync",
            description:
              "Direct enterprise connectors sync purchase orders, inventory levels, and dispatch manifests across your core ERPs.",
          },
          {
            icon: Cpu,
            iconBg: "bg-amber-50 text-amber-600 border border-amber-200/80",
            title: "Hardware & Scanner Gateways",
            description:
              "Native support for industrial RF barcode guns, RFID portals, Bluetooth weigh scales, and automated pick-to-light systems.",
          },
          {
            icon: ShieldCheck,
            iconBg: "bg-indigo-50 text-indigo-600 border border-indigo-200/80",
            title: "Global Operational Compliance",
            description:
              "FDA 21 CFR Part 11 compliant audit trails, batch & lot traceability, FIFO/FEFO rules, and ISO quality workflows.",
          },
        ]}
        visualImage="/assets/laptop_integration_visual.png"
        visualAlt="NXT WMS Global Operational Standards"
      />

      {/* ── 5.5. Trust Certifications & FAQ ── */}
      <TrustAndFaqSection />

      {/* ── 6. Bottom CTA Section ── */}
      <CallToAction
        eyebrow="HIGH-YIELD REVENUE ASSETS"
        title="Transform Your Warehouse into a High-Yield Revenue Asset."
        description="Book a personalized walkthrough with our supply chain architects to see how NXT WMS optimizes space, staff, and system utilization."
        primary={{ label: "Schedule Enterprise Demo", href: "/contact" }}
        secondary={{ label: "Call +91 9763804442", href: "tel:+919763804442" }}
      />
    </>
  );
}
