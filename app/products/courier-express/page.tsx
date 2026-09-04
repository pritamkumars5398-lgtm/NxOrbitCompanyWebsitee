"use client";

import { useState, useEffect } from "react";
import { 
  ArrowRight, Shield, ShieldCheck, Database, Navigation, MessageSquarePlus, 
  Terminal, Sparkles, Code, Cpu, DatabaseZap, Users, FileText, CheckCircle2,
  Lock, Globe, Cloud, Key, Check, Layers, BarChart3, Workflow, Truck, AlertTriangle,
  Eye, Clock, Activity, Bell, Box, Gauge, TrendingUp, DollarSign, Target,
  LayoutGrid, Package, Settings, ChevronDown
} from "lucide-react";
import { cn } from "@/app/core/lib/cn";
import { Breadcrumb } from "@/app/shared/ui/Breadcrumb";
import { Button } from "@/app/shared/ui/Button";
import { Card, Badge } from "@/app/shared/ui/Card";
import { Container, Eyebrow, Section } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";
import { GradientMesh, Grain } from "@/app/shared/backdrop/Backdrops";
import { CallToAction } from "@/app/shared/sections/CallToAction";
import { TrustAndFaqSection } from "@/app/shared/sections/TrustAndFaqSection";
import { ServiceHeroImage } from "@/app/shared/ui/ServiceHeroImage";

/* ── AI Chat Simulator Prompts & Responses ───────────────────────────── */
const COURIER_CHAT_PROMPTS = [
  {
    question: "Which pin-codes had the highest RTO rate this week?",
    answer: "Analyzing RTO pattern logs for this week...\nFound 2 high-risk clusters:\n• 400070 (Mumbai Suburbs): 28.4% RTO rate. Main reason: 'Customer Uncontactable' on COD orders.\n• 110001 (Delhi Central): 22.1% RTO rate. Main reason: 'Incorrect Address / Typo'.\nAction: AI address verification filters have been tightened for these zones."
  },
  {
    question: "Compare shipping costs between Courier A and Courier B for South Region",
    answer: "Calculating Q3 shipping rates for South Region...\n• Courier A: Avg. cost ₹84.20/kg, SLA compliance 94.6%\n• Courier B: Avg. cost ₹78.50/kg, SLA compliance 88.2%\nRecommendation: Route high-value orders to Courier A, and use Courier B for low-margin dispatches to save up to 12% in freight costs."
  },
  {
    question: "Show automated claim settlement report",
    answer: "Scanning SLA breaches...\n• Discovered 14 shipments delayed beyond carrier SLA limits (Total value: ₹18,400).\n• Claim status: 14 claims automatically drafted and submitted to carriers. 8 claims approved (₹9,800 reimbursed)."
  }
];

/* ── 4 Pillars of Autonomous E-Commerce Fulfillment ─────────────────────── */
const COURIER_ROLE_TABS = [
  {
    id: "pillar1",
    label: "Pillar 1: Courier Orchestration & Rates",
    icon: Workflow,
    intro: "Stop relying on single-carrier contracts or rigid manual allocation. Courier Express instantly connects you to 25+ global and national courier partners through one unified billing system.",
    points: [
      { title: "Smart Route Allocation", desc: "Our AI evaluates thousands of variables per second—pin-code carrier reliability, weather disruptions, historical weight discrepancies, and real-time pricing—to route every order through the optimal carrier." },
      { title: "Unified COD Reconciliation", desc: "Real-time cash-on-delivery tracking, automated remittance cycles, and early payout options to keep your cash flow liquid." }
    ],
    dashboardTitle: "Courier Allocation & Rate Matrix",
    metrics: [
      { label: "Active Courier Partners", val: "25+ Global", change: "100% SLA Synced" },
      { label: "Smart Route Rate", val: "99.4%", change: "↑ 12% vs last week" },
      { label: "Avg Shipping Cost", val: "₹54.20/kg", change: "↓ 18% vs benchmark" },
      { label: "Unified COD Remittance", val: "Same Day", change: "Early Payout Active" }
    ],
    widget1Title: "Carrier SLA & Routing Map",
    widget2Title: "Courier Freight Rate Trend"
  },
  {
    id: "pillar2",
    label: "Pillar 2: AI RTO Defense Engine",
    icon: ShieldCheck,
    intro: "RTO (Return to Origin) kills e-commerce margins. Courier Express eliminates bad shipments at the source.",
    points: [
      { title: "AI Address Intelligence", desc: "Machine learning models fix incomplete addresses, correct typos, and flag non-existent street numbers automatically before shipping labels are generated." },
      { title: "Order Fraud Scoring", desc: "Assigns a risk score to every incoming Cash-on-Delivery (COD) order based on past buyer behavior across our entire merchant network." },
      { title: "Pre-Dispatch WhatsApp Verification", desc: "High-risk orders automatically trigger an interactive WhatsApp verification flow to confirm buyer intent before inventory leaves the warehouse." }
    ],
    dashboardTitle: "AI RTO Defense & Fraud Score Console",
    metrics: [
      { label: "RTO Reduction", val: "-45.2%", change: "↓ 45% vs industry avg" },
      { label: "Address Typos Corrected", val: "4,120/mo", change: "Auto AI Cleaned" },
      { label: "High Risk COD Flagged", val: "182 Orders", change: "Fraud Shield Active" },
      { label: "WhatsApp Confirmations", val: "96.4%", change: "Pre-Dispatch Verified" }
    ],
    widget1Title: "Pincode RTO Risk Heatmap",
    widget2Title: "RTO Defense Success Rate"
  },
  {
    id: "pillar3",
    label: "Pillar 3: Autonomous NDR Management",
    icon: AlertTriangle,
    intro: "Turn shipping exceptions into successful deliveries without lifting a finger.",
    points: [
      { title: "Self-Healing NDR Workflows", desc: "When a delivery fails (e.g., 'Customer Unavailable' or 'Wrong Address'), our AI Agent immediately reaches out to the customer via WhatsApp and interactive voice response (IVR)." },
      { title: "Instant Rescheduling", desc: "Buyers can update their location, select a preferred delivery time slot, or switch COD to prepaid with one click inside WhatsApp." },
      { title: "Courier Accountability", desc: "Automatically logs carrier fake-attempt logs and escalates noncompliance directly to courier management teams." }
    ],
    dashboardTitle: "Self-Healing NDR Workflows & IVR Agent",
    metrics: [
      { label: "NDR Reattempt Rate", val: "88.6%", change: "↑ 24% vs manual" },
      { label: "Automated WhatsApp NDR", val: "1,840 Reached", change: "Sub-minute response" },
      { label: "Instant Buyer Reschedules", val: "1,240 Orders", change: "Address/Slot Updated" },
      { label: "Carrier Fake Attempt Log", val: "14 Escalated", change: "100% SLA Audited" }
    ],
    widget1Title: "NDR Exception Resolution Map",
    widget2Title: "NDR Conversion Trend"
  },
  {
    id: "pillar4",
    label: "Pillar 4: Post-Purchase Experience",
    icon: Globe,
    intro: "Turn order tracking into your highest-converting marketing channel.",
    points: [
      { title: "Custom Tracking Pages", desc: "Replace generic courier tracking screens with a fully branded tracking portal featuring live map visualization, product recommendations, and promotional banners." },
      { title: "Proactive Status Notifications", desc: "Send automated, branded updates via WhatsApp, SMS, and Email at every milestone: Dispatched, Out for Delivery, Delayed, or Delivered." }
    ],
    dashboardTitle: "Branded Tracking Portal & WhatsApp Updates",
    metrics: [
      { label: "Tracking Page Views", val: "42.8K/mo", change: "100% Merchant Branded" },
      { label: "Post-Purchase Upsell", val: "+14.8%", change: "↑ 6% vs benchmark" },
      { label: "WhatsApp Milestone Alerts", val: "99.8%", change: "Dispatched to Delivered" },
      { label: "Customer Satisfaction", val: "4.9 / 5.0", change: "Top Rated CSAT" }
    ],
    widget1Title: "Post-Purchase Delivery Map",
    widget2Title: "Buyer Tracking Engagement"
  }
];

/* ── Shift Table Data ────────────────────────────────────────────────────── */
const SHIFT_ROWS = [
  {
    dimension: "Carrier Allocation",
    oldWay: "Static rules based on simple price or weight.",
    newWay: "Dynamic AI Routing based on realtime carrier SLA performance, pincode history, and cost."
  },
  {
    dimension: "RTO Management",
    oldWay: "Reactive—manually handling failed deliveries after they happen.",
    newWay: "Predictive RTO Shield—detecting fake addresses and high-risk COD orders before dispatch."
  },
  {
    dimension: "Buyer Communication",
    oldWay: "Standard SMS updates with generic tracking links.",
    newWay: "Autonomous WhatsApp AI Agent that verifies addresses, reschedules delivery, and converts NDRs."
  },
  {
    dimension: "Inventory Split",
    oldWay: "Manual decision-making on where to stock products.",
    newWay: "Predictive Inventory Allocation suggesting multi-warehouse stock split based on regional demand."
  }
];

/* ── Integrations Data ───────────────────────────────────────────────────── */
const STOREFRONTS = ["Shopify", "WooCommerce", "Magento", "Amazon", "BigCommerce", "Wix", "Custom APIs"];
const CARRIERS = ["FedEx", "DHL", "BlueDart", "Delhivery", "Aramex", "Shadowfax", "Xpressbees", "Dunzo"];

/* ── Security & Infrastructure ───────────────────────────────────────────── */
const SECURITY_POINTS = [
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    desc: "Built for infinite scalability, continuous deployment, and seamless multi-branch expansion with zero local hardware footprint."
  },
  {
    icon: Lock,
    title: "AES-256 Bit Encryption",
    desc: "Enterprise-grade security protocols protecting all sensitive operational and financial records — both in-transit across networks and at-rest."
  },
  {
    icon: Shield,
    title: "Granular Access Control (RBAC)",
    desc: "Strict user governance that restricts data visibility and editing permissions based on job role, branch location, or client tier."
  },
  {
    icon: Key,
    title: "Multi-Tenant Branch Isolation",
    desc: "Secure data partitioning that allows multi-facility networks and 3PL clients to operate within isolated environments on a single application."
  },
  {
    icon: Globe,
    title: "99.9% High-Availability SLA",
    desc: "High-uptime infrastructure backed by redundant cloud backups, automated failover, and disaster recovery guarantees."
  }
];

export default function CourierExpressPage() {
  const [activeTab, setActiveTab] = useState("pillar1");
  const [chatIndex, setChatIndex] = useState(0);
  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const [typing, setTyping] = useState(false);

  // Trigger modal drawer
  const handleRequestDemo = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  // Scroll to AI Showcase section
  const handleScrollToAI = () => {
    document.getElementById("courier-ai-showcase")?.scrollIntoView({ behavior: "smooth" });
  };

  // Typing effect simulation for chatbot mockup
  useEffect(() => {
    setTyping(true);
    setDisplayedAnswer("");
    const fullText = COURIER_CHAT_PROMPTS[chatIndex].answer;
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
                  { label: "Products", href: "/products/courier-express" },
                  { label: "Courier Express" },
                ]}
              />

              <Reveal from="up" className="mt-4">
                <Eyebrow>E-COMMERCE FULFILLMENT & AI RTO DEFENSE</Eyebrow>
              </Reveal>

              <Reveal from="up" delay={0.06} className="mt-2">
                <h1 className="max-w-2xl text-display-lg sm:text-display-xl text-ink-900 leading-[1.05]">
                  The Intelligent Shipping & Fulfillment Engine <br />
                  <span className="bg-gradient-to-r from-[#006B7D] to-[#00d2c4] bg-clip-text text-transparent">
                    for Modern E-Commerce.
                  </span>
                </h1>
              </Reveal>

              <Reveal from="up" delay={0.14} className="mt-4">
                <p className="max-w-xl text-lead text-ink-600">
                  Beyond basic courier aggregation. Courier Express combines multicarrier logistics, AI address verification, dynamic RTO prevention, and autonomous buyer engagement into one unified shipping platform.
                </p>
              </Reveal>

              <Reveal from="up" delay={0.22} className="mt-6 flex flex-wrap gap-3">
                <Button onClick={handleRequestDemo} size="lg" variant="primary" withArrow magnetic>
                  Start Shipping Free
                </Button>
                <Button onClick={handleScrollToAI} size="lg" variant="outline" withArrow>
                  Schedule AI Demo
                </Button>
              </Reveal>
            </div>

            {/* Hero Visualization Image */}
            <div className="relative flex justify-center">
              <Reveal from="up" scale={0.97} className="relative w-full max-w-[540px]">
                <ServiceHeroImage
                  src="/assets/hero_slider_3.webp"
                  alt="Intelligent Shipping & Fulfillment Engine for Modern E-Commerce - Courier Express"
                  categoryText="E-Commerce Fulfillment"
                  badgeText="Intelligent Shipping Engine"
                  statBadge={{
                    label: "Fulfillment SLA",
                    value: "25+ Carriers | -45% RTO"
                  }}
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Business Impact Metric Cards ── */}
      <Section tone="sunken" spacing="md" className="border-y border-hairline relative">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-display-sm text-slate-900 font-extrabold tracking-tight">
              Proven Impact on Shipping Margins
            </h2>
            <p className="text-sm text-ink-600 mt-2">Anchoring ROI immediately beneath the hero fold.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer">
              <span className="text-display-md text-teal-600 font-black">-45%</span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Return-To-Origin (RTO)</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Pre-dispatch AI address validation and automated WhatsApp buyer confirmation.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer">
              <span className="text-display-md text-brand-600 font-black">18%</span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Lower Logistics Cost</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Dynamic real-time carrier allocation engine picking the best rate and SLA balance.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer">
              <span className="text-display-md text-slate-900 font-black">98.4%</span>
              <h3 className="text-base font-bold text-slate-900 mt-2">On-Time Delivery</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Predictive route intelligence that re-routes shipments before carrier bottlenecks occur.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 3. The Shift: Legacy Aggregation vs. Autonomous Shipping ── */}
      <Section tone="white" spacing="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight">
              Legacy Aggregation vs. Autonomous Shipping
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Positioning Courier Express as the next-generation evolution beyond standard shipping tools.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-300 bg-white">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-300">
                <tr>
                  <th className="p-4 font-bold text-slate-900">Strategic Dimension</th>
                  <th className="p-4 font-bold text-slate-500">Legacy Shipping Aggregators (The Old Way)</th>
                  <th className="p-4 font-bold text-teal-600">Courier Express (The AI-Native Way)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {SHIFT_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 font-bold text-slate-950">{row.dimension}</td>
                    <td className="p-4 text-slate-500">{row.oldWay}</td>
                    <td className="p-4 font-medium text-slate-800 bg-teal-50/10">{row.newWay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* ── 4. The Four Core Value Pillars (Redesigned to Match Exact Parity) ── */}
      <Section tone="sunken" spacing="lg" className="relative overflow-hidden border-t border-slate-200/80 bg-[#f8fafc] py-20 sm:py-28">
        <Container>
          {(() => {
            const currentTab = COURIER_ROLE_TABS.find((t) => t.id === activeTab) || COURIER_ROLE_TABS[0];
            const pillarIndex = COURIER_ROLE_TABS.findIndex((t) => t.id === activeTab) + 1;
            return (
              <>
                {/* Top Section Header: Left Info + Value Rail & Right Isometric 3D Ecommerce Image */}
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
                      Four Pillars of Autonomous E-Commerce Fulfillment
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                      Explore Courier Express capabilities engineered for high-growth operations.
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

                  {/* Right 3D Isometric Ecommerce Fulfillment Illustration Container */}
                  <div className="lg:col-span-6 relative flex items-center justify-center min-h-[320px] sm:min-h-[360px]">
                    {/* Concentric Circular Radar Target Rings Background */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-35">
                      <div className="size-[360px] rounded-full border border-teal-300/40 flex items-center justify-center">
                        <div className="size-[260px] rounded-full border border-teal-300/40 flex items-center justify-center">
                          <div className="size-[160px] rounded-full border border-teal-300/40" />
                        </div>
                      </div>
                    </div>

                    {/* 3D Ecommerce Image - 100% Seamless Blend, Zero Box Border, No Hover */}
                    <div className="relative z-10 size-full flex items-center justify-center pointer-events-none select-none">
                      <img
                        src="/assets/ecommerce_3d.jpg"
                        alt="3D Autonomous E-Commerce Fulfillment"
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

                {/* 4 Pillars Tabbed Navigation Bar */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {COURIER_ROLE_TABS.map((tab) => {
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

                {/* Active Pillar Showcase Card & Dynamic Dashboard UI Mockup */}
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
                      </div>

                      {/* Right Sub-Column: Dynamic Courier Interactive Dashboard UI Mockup */}
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
                                <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-sky-600" />Dispatch</span>
                                <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-teal-600" />In Transit</span>
                                <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-green-600" />Delivered</span>
                                <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-orange-600" />NDR Fixed</span>
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
                                  <text x="220" y="32" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">{pillarIndex * 140 + 420}</text>
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

                  {/* Bottom Value Rail (4 Pillars Proof Cards - 2 per row on Mobile) */}
                  <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-6 shadow-2xs grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-start">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5">
                      <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 border border-teal-100">
                        <TrendingUp className="size-4 sm:size-5" />
                      </div>
                      <div>
                        <h5 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">Increase Throughput</h5>
                        <p className="text-[11px] text-slate-600 leading-normal mt-0.5">Accelerate movement and improve order fulfillment.</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5">
                      <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 border border-teal-100">
                        <DollarSign className="size-4 sm:size-5" />
                      </div>
                      <div>
                        <h5 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">Reduce Costs</h5>
                        <p className="text-[11px] text-slate-600 leading-normal mt-0.5">Optimize resources and minimize operational waste.</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5">
                      <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 border border-teal-100">
                        <Target className="size-4 sm:size-5" />
                      </div>
                      <div>
                        <h5 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">Improve Accuracy</h5>
                        <p className="text-[11px] text-slate-600 leading-normal mt-0.5">Real-time data ensures better decisions and fewer errors.</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5">
                      <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 border border-teal-100">
                        <Users className="size-4 sm:size-5" />
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

      {/* ── 5. The AI Intelligence Showcase ── */}
      <Section id="courier-ai-showcase" tone="sunken" spacing="lg" className="border-t border-hairline">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
            {/* Left side details */}
            <div className="flex flex-col justify-center">
              <Eyebrow tone="brand">PREDICTIVE SHIPPING AI</Eyebrow>
              <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight mt-3 mb-6">
                Cognitive Shipping: AI That Solves Bottlenecks Before They Happen
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex shrink-0 size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-teal-500 text-white font-mono text-sm font-extrabold">
                    1
                  </span>
                  <div className="flex-1 pt-0.5">
                    <h4 className="text-base font-bold text-slate-900">Predictive ETA Engine</h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Calculates pin-code specific delivery timelines based on live carrier performance data, setting realistic customer expectations and reducing "Where Is My Order?" (WISMO) support calls by up to 60%.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex shrink-0 size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-teal-500 text-white font-mono text-sm font-extrabold">
                    2
                  </span>
                  <div className="flex-1 pt-0.5">
                    <h4 className="text-base font-bold text-slate-900">Conversational AI Logistics Assistant</h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Type natural queries into your dashboard like: "Which pin-codes had the highest RTO rate this week?" or "Compare shipping costs between Courier A and Courier B for South Region," and get instant visual analytics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex shrink-0 size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-teal-500 text-white font-mono text-sm font-extrabold">
                    3
                  </span>
                  <div className="flex-1 pt-0.5">
                    <h4 className="text-base font-bold text-slate-900">Automated Claim Settlement</h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      AI automatically detects lost, damaged, or delayed shipments exceeding SLA limits and drafts insurance/reimbursement claims instantly.
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
                    <span className="text-xs font-bold font-mono tracking-wider">Courier Express AI Copilot</span>
                  </div>
                  <Terminal className="size-4 text-teal-400" />
                </div>

                {/* Chat feed */}
                <div className="flex-1 p-5 overflow-y-auto font-mono text-xs space-y-4 bg-slate-900 text-slate-100">
                  <div className="text-teal-400">&gt; Prompt: {COURIER_CHAT_PROMPTS[chatIndex].question}</div>
                  <div className="border-t border-slate-800 pt-3 text-slate-300 leading-relaxed whitespace-pre-wrap">
                    {displayedAnswer}
                    {typing && <span className="inline-block w-1.5 h-3.5 bg-teal-400 ml-1 animate-pulse" />}
                  </div>
                </div>

                {/* Prompt clickers */}
                <div className="bg-slate-950 border-t border-slate-800 p-4">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-2 font-mono">Suggested Queries:</span>
                  <div className="flex flex-col gap-2">
                    {COURIER_CHAT_PROMPTS.map((prompt, idx) => (
                      <button
                        key={idx}
                        onClick={() => !typing && setChatIndex(idx)}
                        disabled={typing}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg border text-xs font-mono transition-colors duration-200 cursor-pointer disabled:opacity-50",
                          idx === chatIndex 
                            ? "bg-teal-500/10 border-teal-500/60 text-teal-400" 
                            : "border-slate-800 text-slate-400 hover:border-teal-400 hover:text-slate-300 bg-slate-900/50"
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

      {/* ── 6. Integrations & Developer-First Ecosystem ── */}
      <Section tone="white" spacing="lg" className="border-t border-hairline">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight">
              Connect Your Entire E-Commerce Stack in 2 Minutes
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Native, one-click plug-and-play integrations for every major e-commerce store, marketplace, and ERP system.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Storefronts */}
            <div className="rounded-2xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400 hover:shadow-md hover:shadow-teal-500/10 cursor-pointer">
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-4">
                <Globe className="size-5" />
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-3">Storefront Connections</h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Connect instantly to top e-commerce platforms and marketplaces.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {STOREFRONTS.map((sf, idx) => (
                  <span key={idx} className="text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md font-medium">
                    {sf}
                  </span>
                ))}
              </div>
            </div>

            {/* Carrier Networks */}
            <div className="rounded-2xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400 hover:shadow-md hover:shadow-teal-500/10 cursor-pointer">
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-4">
                <Truck className="size-5" />
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-3">Carrier Network</h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Pre-routed integrations with global and local logistics providers.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {CARRIERS.map((cr, idx) => (
                  <span key={idx} className="text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md font-medium">
                    {cr}
                  </span>
                ))}
              </div>
            </div>

            {/* Developer Flexibility */}
            <div className="rounded-2xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400 hover:shadow-md hover:shadow-teal-500/10 cursor-pointer">
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-4">
                <Code className="size-5" />
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-3">Developer Flexibility</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                RESTful APIs, webhooks for live status updates, and custom shipping rules builder for high-volume enterprise brands.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 7. Enterprise Security & Infrastructure (Referred from WMS/Freight) ── */}
      <Section tone="sunken" spacing="lg" className="border-t border-hairline">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow tone="brand">DATA GOVERNANCE & COMPLIANCE</Eyebrow>
            <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight mt-3">
              Enterprise-Grade Infrastructure & ISO 9001 Quality
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Established protocols to protect all operational and shipping logs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SECURITY_POINTS.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  onClick={handleRequestDemo}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/5 cursor-pointer overflow-hidden"
                >
                  {/* Top Subtle Teal Gradient Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Icon Badge */}
                    <div className="flex size-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 border border-teal-100/80 mb-4 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white group-hover:scale-105">
                      <Icon className="size-5" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-teal-700 transition-colors">
                      {point.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                      {point.desc}
                    </p>
                  </div>

                  {/* Bottom Learn More Indicator */}
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-teal-600 transition-all duration-300 group-hover:translate-x-1">
                    <span>Explore governance</span>
                    <ArrowRight className="size-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── 7.5. Trust Certifications & FAQ ── */}
      <TrustAndFaqSection />

      {/* ── 8. Bottom CTA Section ── */}
      <CallToAction
        eyebrow="RTO SHIELD DEFENSE"
        title="Ready to Cut RTO and Accelerate Shipping Velocity?"
        description="Join 10,000+ fast-growing e-commerce brands shipping smarter with Courier Express. Set up in under 10 minutes."
        primary={{ label: "Start Shipping Free Now", href: "/contact" }}
        secondary={{ label: "Talk to a Shipping Specialist", href: "/contact" }}
      />
    </>
  );
}
