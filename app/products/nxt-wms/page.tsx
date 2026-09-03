"use client";

import { useState, useEffect } from "react";
import { 
  ArrowRight, Shield, ShieldCheck, Database, Navigation, MessageSquarePlus, 
  Terminal, Sparkles, Code, Cpu, DatabaseZap, Users, FileText, CheckCircle2,
  Lock, Globe, Cloud, Key, Check, Layers, BarChart3, Workflow,
  PlayCircle, Eye, Clock, Activity, Bell, Box, Gauge, TrendingUp, DollarSign, Target,
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

/* ── 5 Pillars of WMS Operations ────────────────────────────────────────── */
const WMS_ROLE_TABS = [
  {
    id: "pillar1",
    label: "Pillar 1: Flow Velocity & Dwell",
    icon: Workflow,
    intro: "Track the end-to-end movement of inventory across suppliers, facilities, and end-customers.",
    points: [
      { title: "Upstream & Downstream Visibility", desc: "Know exactly which supplier provided the material, who the end customer is, and every node in between." },
      { title: "Turnaround Time Metrics", desc: "Automatically calculate average dwell time, picking speed, and fulfillment velocity to eliminate carrier bottlenecks." }
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
    label: "Pillar 2: Capacity & Yield",
    icon: Layers,
    intro: "Turn idle warehouse space and slow operational hours into pure revenue.",
    points: [
      { title: "Peak & Downtime Intelligence", desc: "AI analyzes historical throughput patterns to identify peak traffic hours versus low-volume downtime." },
      { title: "Commercial Growth Radar", desc: "The system calculates available floor space and workforce capacity during low-volume cycles, telling warehouse owners exactly when and how much 3PL customer volume they can safely onboard." },
      { title: "Dynamic Space Utilization", desc: "Real-time 3D heatmapping and rack suggestions ensure every cubic meter is configured for maximum storage density." }
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
    label: "Pillar 3: Telemetry & Performance",
    icon: BarChart3,
    intro: "Maintain absolute control over how your operational software and floor teams perform.",
    points: [
      { title: "System Utilization Reports", desc: "Pure analytics on how the NXT WMS application is being utilized across branches, modules, and shift hours." },
      { title: "Personalized User & Staff Audits", desc: "Track individual operator activity, task completion rates, picking errors, and system interactions to optimize labor allocation." },
      { title: "What's Going Wrong Radar", desc: "AI scans system operations in the background to flag operational bottlenecks, unauthorized overrides, or stagnant inventory incurring holding costs." }
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
    label: "Pillar 4: Multi-Warehouse & 3PL",
    icon: Globe,
    intro: "Execute global operations without fragmenting your data.",
    points: [
      { title: "Single-Pane Multi-Warehouse Access", desc: "Switch between multiple facilities, regional branches, or 3PL client views instantly in one application." },
      { title: "Real-Time In-Transit Visibility", desc: "Full traceability when inventory moves between facilities, with zero-touch automated GRNs/PO creation upon transfer dispatch." },
      { title: "Role-Based Security & Portals", desc: "Bank-grade access control allowing 3PL clients to view inventory status, track transfers, and download PDF/Excel reports independently." }
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
    label: "Pillar 5: No-Code & Execution",
    icon: Cpu,
    intro: "A configurable automation layer that adapts to your business rules.",
    points: [
      { title: "Automated Action Schedulers", desc: "Set up custom time-based triggers, batch processes, and report delivery schedules." },
      { title: "Custom Event Notifications", desc: "Configure instant email, SMS, or app notifications for key triggers like cold-chain temperature alerts or stock threshold breaches." },
      { title: "Mobile-First Floor Execution", desc: "Native application for Android/iOS handheld RF devices, tablets, and mobile phones for real-time barcode scanning and floor execution." }
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

/* ── Pre-built Integrations ──────────────────────────────────────────────── */
const INTEGRATIONS = [
  { name: "SAP Enterprise", type: "ERP Integration" },
  { name: "Zoho Suite", type: "CRM Sync" },
  { name: "Oracle Logistics", type: "Supply Chain" },
  { name: "Custom ERPs", type: "REST Webhooks" }
];

export default function NextOrbitWmsPage() {
  const [activeTab, setActiveTab] = useState("pillar1");
  const [chatIndex, setChatIndex] = useState(0);
  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const [typing, setTyping] = useState(false);

  // Trigger modal drawer
  const handleRequestDemo = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
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
                <h1 className="max-w-2xl text-display-lg sm:text-display-xl text-ink-900 leading-[1.05]">
                  One Platform. <br />
                  <span className="bg-gradient-to-r from-[#006B7D] to-[#00d2c4] bg-clip-text text-transparent">
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
                <Button onClick={handleRequestDemo} size="lg" variant="primary" withArrow magnetic>
                  Request Enterprise Demo
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
                  categoryText="Capacity & Yield"
                  badgeText="Total Warehouse Intelligence"
                  statBadge={{
                    label: "Capacity Yield",
                    value: "84% Occupancy | +25% Yield"
                  }}
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Executive Impact Cards (The Business Numbers) ── */}
      <Section tone="sunken" spacing="md" className="border-y border-hairline relative">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-display-sm text-slate-900 font-extrabold tracking-tight">
              Measurable Capacity & Velocity Gains
            </h2>
            <p className="text-sm text-ink-600 mt-2">Anchor value in numbers before diving into technology details.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer">
              <span className="text-display-md text-teal-600 font-black">100%</span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Flow Traceability</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Complete visibility from supplier origin to end-customer delivery with real-time velocity metrics.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer">
              <span className="text-display-md text-brand-600 font-black">+25%</span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Capacity Monetization</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                AI-driven peak/downtime analysis revealing exact idle capacity available to onboard new customers.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer">
              <span className="text-display-md text-slate-900 font-black">Full</span>
              <h3 className="text-base font-bold text-slate-900 mt-2">System Telemetry</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Granular analytics on system usage, staff efficiency, and process turnaround times.
              </p>
            </div>
          </div>
        </Container>
      </Section>

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
                  <div className="lg:col-span-6 flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <span className="h-0.5 w-6 bg-teal-500 rounded-full" />
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-600">
                        STRATEGIC TRANSFORMATION
                      </span>
                    </div>
                    <h2 className="text-display-md sm:text-display-lg font-extrabold text-slate-900 tracking-tight leading-tight">
                      Five Pillars of Autonomous Warehouse Operations
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                      Deep dive into WMS utilities designed for end-to-end optimization, intelligent automation, and real-time control.
                    </p>

                    {/* 3 Horizontal Value Proof Badges */}
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <div className="flex items-center gap-3 bg-white border border-slate-200/80 rounded-2xl px-4 py-2.5 shadow-2xs">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                          <Box className="size-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-extrabold text-slate-900 leading-tight">High Visibility</h5>
                          <p className="text-[11px] text-slate-500 leading-none mt-0.5">Across every node</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-white border border-slate-200/80 rounded-2xl px-4 py-2.5 shadow-2xs">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                          <Gauge className="size-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-extrabold text-slate-900 leading-tight">Real-Time Control</h5>
                          <p className="text-[11px] text-slate-500 leading-none mt-0.5">Faster decisions</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-white border border-slate-200/80 rounded-2xl px-4 py-2.5 shadow-2xs">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                          <TrendingUp className="size-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-extrabold text-slate-900 leading-tight">Operational Excellence</h5>
                          <p className="text-[11px] text-slate-500 leading-none mt-0.5">Lower cost, higher output</p>
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

                {/* 5 Pillars Tabbed Navigation Bar */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {WMS_ROLE_TABS.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                          "flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs font-extrabold transition-all duration-300 cursor-pointer shadow-2xs border",
                          isActive
                            ? "bg-[#0a2328] border-[#0a2328] text-white shadow-md scale-[1.02]"
                            : "bg-white border-slate-200/90 text-slate-700 hover:border-teal-400 hover:text-teal-700 hover:bg-teal-50/50"
                        )}
                      >
                        <div className={cn("flex size-6 items-center justify-center rounded-lg transition-colors", isActive ? "bg-teal-500/20 text-teal-300" : "bg-slate-100 text-slate-500")}>
                          <Icon className="size-3.5" />
                        </div>
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {/* Active Pillar Showcase Card & Dynamic WMS Dashboard UI Mockup */}
                <div className="space-y-6">
                {/* Main Showcase Container */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Left Sub-Column: Feature Info & Points */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                      <div>
                        {/* Eyebrow Badge Tag */}
                        <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1 rounded-md text-[11px] font-mono font-bold uppercase border border-teal-200/60 mb-3">
                          PILLAR {pillarIndex}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
                          {currentTab.label.replace(/^Pillar \d+: /, "")}
                        </h3>

                        {/* Subtitle / Intro */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-2">
                          {currentTab.intro}
                        </p>

                        {/* Feature Points List Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                          {currentTab.points.map((point, idx) => (
                            <div key={idx} className="flex gap-3 items-start p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all">
                              <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-teal-100/80 text-teal-700 font-bold mt-0.5">
                                {idx === 0 ? <Eye className="size-4" /> : idx === 1 ? <Clock className="size-4" /> : idx === 2 ? <Activity className="size-4" /> : <Bell className="size-4" />}
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-slate-900 leading-tight">{point.title}</h4>
                                <p className="text-[11px] text-slate-600 leading-relaxed mt-1 font-normal">{point.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-wrap items-center gap-4 pt-2">
                        <button type="button" className="flex items-center gap-2 bg-[#08282e] text-white rounded-full px-5 py-2.5 text-xs font-extrabold hover:bg-teal-900 transition-all cursor-pointer shadow-sm">
                          Explore Pillar {pillarIndex} in Detail
                          <ArrowRight className="size-3.5 text-teal-300" />
                        </button>
                        <button type="button" className="flex items-center gap-2 text-teal-700 hover:text-teal-900 text-xs font-bold transition-all cursor-pointer">
                          See how it works
                          <PlayCircle className="size-4 text-teal-600" />
                        </button>
                      </div>
                    </div>

                    {/* Right Sub-Column: Dynamic WMS Interactive Dashboard UI Mockup */}
                    <div className="lg:col-span-7 bg-[#f8fafc] border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex gap-4 shadow-2xs overflow-hidden">
                      {/* Left Dark Teal Vertical App Menu Bar */}
                      <div className="w-12 sm:w-14 bg-[#082025] rounded-xl p-3 flex flex-col items-center justify-between text-teal-400 shrink-0">
                        <div className="flex flex-col gap-5 items-center">
                          <div className="size-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-300">
                            <LayoutGrid className="size-4" />
                          </div>
                          <Truck className="size-4 text-slate-400 hover:text-teal-300 transition-colors cursor-pointer" />
                          <Package className="size-4 text-slate-400 hover:text-teal-300 transition-colors cursor-pointer" />
                          <Activity className="size-4 text-slate-400 hover:text-teal-300 transition-colors cursor-pointer" />
                          <Globe className="size-4 text-slate-400 hover:text-teal-300 transition-colors cursor-pointer" />
                          <Bell className="size-4 text-slate-400 hover:text-teal-300 transition-colors cursor-pointer" />
                        </div>
                        <Settings className="size-4 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer" />
                      </div>

                      {/* Right Main Dashboard Display Panel */}
                      <div className="flex-1 flex flex-col gap-4 overflow-hidden">
                        {/* Top Metric Header Card */}
                        <div className="bg-white rounded-xl border border-slate-200/80 p-3.5 shadow-2xs">
                          <h5 className="text-xs font-extrabold text-slate-900 mb-3">{currentTab.dashboardTitle}</h5>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {currentTab.metrics.map((metric, mIdx) => (
                              <div key={mIdx} className="flex flex-col">
                                <span className="text-[10px] text-slate-500 font-semibold truncate">{metric.label}</span>
                                <span className="text-sm font-extrabold text-slate-900 mt-0.5">{metric.val}</span>
                                <span className="text-[10px] text-emerald-600 font-bold truncate">{metric.change}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bottom 2 Widgets Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                          {/* Mini Map Widget */}
                          <div className="bg-white rounded-xl border border-slate-200/80 p-3 flex flex-col justify-between shadow-2xs">
                            <h6 className="text-[11px] font-extrabold text-slate-900">{currentTab.widget1Title}</h6>
                            <div className="relative h-28 my-1 flex items-center justify-center overflow-hidden rounded-lg bg-teal-50/30">
                              <svg viewBox="0 0 300 120" className="w-full h-full object-contain">
                                <path d="M 40 70 Q 120 20 200 60 Q 240 30 270 50" stroke="#0d9488" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.8" fill="none" />
                                <circle cx="40" cy="70" r="4" fill="#0284c7" />
                                <circle cx="120" cy="40" r="4" fill="#0d9488" />
                                <circle cx="200" cy="60" r="4" fill="#16a34a" />
                                <circle cx="270" cy="50" r="4" fill="#ea580c" />
                              </svg>
                            </div>
                            <div className="flex flex-wrap items-center justify-between text-[9px] text-slate-500 font-medium">
                              <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-sky-600" />Node A</span>
                              <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-teal-600" />Active</span>
                              <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-green-600" />Verified</span>
                              <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-orange-600" />Output</span>
                            </div>
                          </div>

                          {/* Mini Graph Widget */}
                          <div className="bg-white rounded-xl border border-slate-200/80 p-3 flex flex-col justify-between shadow-2xs">
                            <div className="flex items-center justify-between">
                              <h6 className="text-[11px] font-extrabold text-slate-900">{currentTab.widget2Title}</h6>
                              <span className="text-[9px] text-slate-500 font-bold flex items-center gap-0.5 border px-1.5 py-0.5 rounded">Live <ChevronDown className="size-2.5" /></span>
                            </div>
                            <div className="relative h-28 my-1 flex items-center justify-center">
                              <svg viewBox="0 0 300 120" className="w-full h-full object-contain">
                                <path d="M 20 90 L 60 70 L 100 80 L 140 60 L 180 68 L 220 45 L 260 55" fill="none" stroke="#0d9488" strokeWidth="2" />
                                <circle cx="220" cy="45" r="4" fill="#0d9488" />
                                <rect x="200" y="20" width="40" height="18" rx="4" fill="#09252a" />
                                <text x="220" y="32" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">{pillarIndex * 150 + 400}</text>
                              </svg>
                            </div>
                            <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono">
                              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Value Rail (4 Pillars Proof Cards) */}
                <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-2xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                  <div className="flex items-center gap-3.5">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 border border-teal-100">
                      <TrendingUp className="size-5" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">Increase Throughput</h5>
                      <p className="text-[11px] text-slate-600 leading-normal mt-0.5">Accelerate movement and improve order fulfillment.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 border border-teal-100">
                      <DollarSign className="size-5" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">Reduce Costs</h5>
                      <p className="text-[11px] text-slate-600 leading-normal mt-0.5">Optimize resources and minimize operational waste.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 border border-teal-100">
                      <Target className="size-5" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">Improve Accuracy</h5>
                      <p className="text-[11px] text-slate-600 leading-normal mt-0.5">Real-time data ensures better decisions and fewer errors.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 border border-teal-100">
                      <Users className="size-5" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">Scale with Confidence</h5>
                      <p className="text-[11px] text-slate-600 leading-normal mt-0.5">Built to grow across locations, partners, and business models.</p>
                    </div>
                  </div>
                </div>
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
              <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight mt-3 mb-6">
                Predictive Spatial Intelligence & Real-Time Telemetry
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex shrink-0 size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-teal-500 text-white font-mono text-sm font-extrabold">
                    1
                  </span>
                  <div className="flex-1 pt-0.5">
                    <h4 className="text-base font-bold text-slate-900">Conversational Operations Assistant</h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Ask questions in plain language like "What is our average turnaround time for Supplier X?" or "Which warehouse has 20% free space next week?" for instant reports.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex shrink-0 size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-teal-500 text-white font-mono text-sm font-extrabold">
                    2
                  </span>
                  <div className="flex-1 pt-0.5">
                    <h4 className="text-base font-bold text-slate-900">Predictive Demand & Inventory Forecasting</h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Machine-learning models project seasonal stock requirements to prevent stockouts and overstock costs before they manifest.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex shrink-0 size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-teal-500 text-white font-mono text-sm font-extrabold">
                    3
                  </span>
                  <div className="flex-1 pt-0.5">
                    <h4 className="text-base font-bold text-slate-900">Executive Trend Dashboards</h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      High-level visual summaries translating complex floor operational data into actionable business strategy for C-suite executives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side interactive AI Chatbot Mockup */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-slate-300 bg-white flex flex-col h-[480px]">
                {/* Header */}
                <div className="bg-slate-950 text-white px-5 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold font-mono tracking-wider">NXT WMS AI Copilot</span>
                  </div>
                  <Terminal className="size-4 text-teal-400" />
                </div>

                {/* Chat feed */}
                <div className="flex-1 p-5 overflow-y-auto font-mono text-xs space-y-4 bg-slate-900 text-slate-100">
                  <div className="text-teal-400">&gt; Prompt: {WMS_CHAT_PROMPTS[chatIndex].question}</div>
                  <div className="border-t border-slate-800 pt-3 text-slate-300 leading-relaxed whitespace-pre-wrap">
                    {displayedAnswer}
                    {typing && <span className="inline-block w-1.5 h-3.5 bg-teal-400 ml-1 animate-pulse" />}
                  </div>
                </div>

                {/* Prompt clickers */}
                <div className="bg-slate-950 border-t border-slate-800 p-4">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-2 font-mono">Suggested WMS Queries:</span>
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

      {/* ── 5. Integration Layer Visual ── */}
      <Section tone="white" spacing="lg" className="border-t border-hairline">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight">
              Built on Global Operational Standards.
            </h2>
            <p className="text-sm text-brand-600 font-semibold mt-2">100% Tailored to Your Process.</p>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              We recognize that no two supply chains operate identically. NXT WMS combines standardized industry best practices with deep workflow customization, seamlessly connecting via open APIs to SAP, Zoho, Oracle, and custom enterprise systems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {INTEGRATIONS.map((item, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl border border-slate-300 bg-white p-5 text-center flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400 hover:shadow-md hover:shadow-teal-500/10 cursor-pointer"
              >
                <div className="size-11 rounded-xl bg-slate-50 flex items-center justify-center mb-3">
                  <Code className="size-5 text-slate-400" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                <span className="text-[10px] text-brand-600 bg-brand-50/50 px-2 py-0.5 rounded-md font-semibold mt-1">
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

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
