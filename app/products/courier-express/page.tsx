"use client";

import { useState, useEffect } from "react";
import { 
  Shield, ShieldCheck, Database, Navigation, MessageSquarePlus, 
  Terminal, Sparkles, Code, Cpu, DatabaseZap, Users, FileText, CheckCircle2,
  Lock, Globe, Cloud, Key, Check, Layers, BarChart3, Workflow, Truck, AlertTriangle,
  Eye, Clock, Activity, Bell, Box, Gauge, TrendingUp, DollarSign, Target,
  LayoutGrid, Package, Settings, ChevronDown, XCircle, Zap, Building2, Bot, X, MessageSquare
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
import { ProductRoiMetrics } from "@/app/products/components/ProductRoiMetrics";
import { ProductStandardsIntegrations } from "@/app/products/components/ProductStandardsIntegrations";
import { ProductResultBanner } from "@/app/products/components/ProductResultBanner";

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

/* ── Core Capabilities of Autonomous E-Commerce Fulfillment ─────────────── */
const COURIER_ROLE_TABS = [
  {
    id: "pillar1",
    label: "Courier Orchestration & Rates",
    fullTitle: "Courier Orchestration & Multi-Carrier Rate Engine",
    icon: Workflow,
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    intro: "Stop relying on single-carrier contracts or rigid manual allocation. Courier Express instantly connects you to 25+ global and national courier partners through one unified billing system.",
    points: [
      { title: "Smart Route Allocation", desc: "Our AI evaluates carrier reliability, weather disruptions, weight discrepancies, and real-time pricing to route every order through the optimal carrier." },
      { title: "Unified COD Reconciliation", desc: "Real-time cash-on-delivery tracking, automated remittance cycles, and early payout options to keep your cash flow liquid." },
      { title: "Multi-Carrier Rate Engine", desc: "Instant API queries across 25+ logistics partners guarantee the lowest cost per gram for every destination pin-code." },
      { title: "Automated Batch Manifesting", desc: "Batch generate thousands of carrier-compliant shipping labels, barcodes, and manifest handover slips in one single click." }
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
    label: "AI RTO Defense Engine",
    fullTitle: "AI RTO Defense & Fraud Score Engine",
    icon: ShieldCheck,
    heroImage: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1200&auto=format&fit=crop",
    intro: "RTO (Return to Origin) kills e-commerce margins. Courier Express eliminates bad shipments at the source.",
    points: [
      { title: "AI Address Intelligence", desc: "Machine learning models fix incomplete addresses, correct typos, and flag non-existent street numbers automatically before shipping labels are generated." },
      { title: "Order Fraud Scoring", desc: "Assigns a risk score to every incoming Cash-on-Delivery (COD) order based on past buyer behavior across our entire merchant network." },
      { title: "Pre-Dispatch WhatsApp Verification", desc: "High-risk orders automatically trigger an interactive WhatsApp verification flow to confirm buyer intent before inventory leaves the warehouse." },
      { title: "Pincode Risk Radar", desc: "Automatically blocks high-RTO pincodes or requires prepaid checkout for repeat fraudulent order zones." }
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
    label: "Autonomous NDR Management",
    fullTitle: "Autonomous Self-Healing NDR Workflows",
    icon: AlertTriangle,
    heroImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop",
    intro: "Turn shipping exceptions into successful deliveries without lifting a finger.",
    points: [
      { title: "Self-Healing NDR Workflows", desc: "When a delivery fails (e.g., 'Customer Unavailable' or 'Wrong Address'), our AI Agent immediately reaches out to the customer via WhatsApp and interactive IVR." },
      { title: "Instant Rescheduling", desc: "Buyers can update their location, select a preferred delivery time slot, or switch COD to prepaid with one click inside WhatsApp." },
      { title: "Courier Accountability & Audit", desc: "Automatically logs carrier fake-attempt logs with geotagged proof and escalates non-compliance directly to courier management." },
      { title: "Automated Re-attempt Triggers", desc: "Directly instructs field delivery agents on the verified re-attempt time slot without manual customer support intervention." }
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
    label: "Post-Purchase Experience",
    fullTitle: "Post-Purchase Experience & Branded Tracking Portal",
    icon: Globe,
    heroImage: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=1200&auto=format&fit=crop",
    intro: "Turn order tracking into your highest-converting marketing channel.",
    points: [
      { title: "Custom Tracking Pages", desc: "Replace generic courier tracking screens with a fully branded tracking portal featuring live map visualization, product recommendations, and promotional banners." },
      { title: "Proactive Status Notifications", desc: "Send automated, branded updates via WhatsApp, SMS, and Email at every milestone: Dispatched, Out for Delivery, Delayed, or Delivered." },
      { title: "Post-Purchase Marketing & Upsell", desc: "Display recommended products, cross-sell banners, and discount coupon triggers directly on the live tracking page." },
      { title: "Instant CSAT & Review Collection", desc: "Capture immediate buyer ratings, delivery feedback, and unboxing satisfaction scores upon parcel delivery." }
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

  // Open consultation modal with product preselected
  const handleRequestDemo = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-consultation-modal", { detail: { service: "courier-express" } })
      );
    }
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
                  <span className="bg-linear-to-r from-[#006B7D] to-[#00d2c4] bg-clip-text text-transparent">
                    for Modern <span className="inline-block whitespace-nowrap">E-Commerce.</span>
                  </span>
                </h1>
              </Reveal>

              <Reveal from="up" delay={0.14} className="mt-4">
                <p className="max-w-xl text-lead text-ink-600">
                  Beyond basic courier aggregation. Courier Express combines multicarrier logistics, AI address verification, dynamic RTO prevention, and autonomous buyer engagement into one unified shipping platform.
                </p>
              </Reveal>

              <Reveal from="up" delay={0.22} className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact" size="lg" variant="primary" withArrow magnetic>
                  Request a Live Demo
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
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Business Impact Metric Cards (Redesigned) ── */}
      <ProductRoiMetrics
        eyebrow="PROVEN BUSINESS IMPACT"
        title="Proven Impact on Shipping Margins"
        subtitle="Anchor value in verified operational numbers before diving into technology details."
        metrics={[
          {
            value: "-45%",
            badge: "RTO Shield",
            title: "Return-To-Origin (RTO)",
            description: "Pre-dispatch AI address validation and automated WhatsApp buyer confirmation.",
            progressLabel: "Delivery Attempt Success",
            progressPercent: 95,
            benchmark: "95.2% First-Attempt",
            icon: ShieldCheck,
          },
          {
            value: "18%",
            badge: "Freight Savings",
            title: "Lower Logistics Cost",
            description: "Dynamic real-time carrier allocation engine picking the best rate and SLA balance.",
            progressLabel: "Rate Arbitrage Capture",
            progressPercent: 82,
            benchmark: "18% Saved per AWB",
            icon: DollarSign,
          },
          {
            value: "98.4%",
            badge: "SLA Guarantee",
            title: "On-Time Delivery",
            description: "Predictive route intelligence that re-routes shipments before carrier bottlenecks occur.",
            progressLabel: "Autonomous Re-routing Rate",
            progressPercent: 98,
            benchmark: "98.4% On-Time SLA",
            icon: Truck,
          },
        ]}
      />

      {/* ── 3. The Shift: Legacy Aggregation vs. Autonomous Shipping ── */}
      <Section tone="white" spacing="lg" className="relative overflow-hidden py-16 sm:py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center">
            <Eyebrow tone="brand">THE LOGISTICS SHIFT</Eyebrow>
            <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight mt-3">
              Legacy Aggregation vs. Autonomous Shipping
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed font-normal">
              Standard aggregators only route packages based on simple cost rules. Courier Express combines predictive AI, instant WhatsApp verification, and automated SLA shielding.
            </p>
          </div>

          {/* 2-Column Split Architectural Comparison with Side-by-Side Visual Graphics */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Center Floating VS Badge for Desktop */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 size-9 rounded-full bg-slate-950 border-2 border-teal-400 text-white font-extrabold text-xs items-center justify-center shadow-xl shadow-teal-500/30">
              VS
            </div>

            {/* Left Card: Legacy Shipping Aggregators (The Old Way) */}
            <div className="relative rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/60">
              <div>
                {/* Column Header */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200/80">
                  <div>
                    <h3 className="text-sm font-extrabold tracking-wider text-slate-800 uppercase">
                      LEGACY SHIPPING AGGREGATORS
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1 bg-slate-200/70 text-slate-600 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider">
                    THE OLD WAY
                  </span>
                </div>

                {/* Feature Comparison Items */}
                <div className="space-y-4">
                  {SHIFT_ROWS.map((row, idx) => {
                    const LeftIcon = [Truck, Shield, MessageSquare, Building2][idx] || Truck;
                    return (
                      <div
                        key={idx}
                        className="group/item bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm flex items-center justify-between gap-3"
                      >
                        {/* Left Icon + Text Content */}
                        <div className="flex items-start gap-3 flex-1 min-w-0">
                          <div className="size-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 mt-0.5 group-hover/item:bg-rose-50 group-hover/item:text-rose-600 transition-colors">
                            <LeftIcon className="size-4 stroke-[1.75]" />
                          </div>
                          <div className="flex-1 min-w-0 pr-1">
                            <h4 className="text-xs font-bold text-slate-900 leading-tight">{row.dimension}</h4>
                            <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">{row.oldWay}</p>
                          </div>
                        </div>

                        {/* Red X Badge Tag */}
                        <span className="size-5 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center shrink-0">
                          <X className="size-3 stroke-[2.5]" />
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Card: Courier Express (The AI-Native Way) */}
            <div className="relative overflow-hidden rounded-2xl border border-teal-500/30 bg-[#041720] p-6 sm:p-8 text-white flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/50 group">
              {/* Subtle Ambient Background Gradient */}
              <div className="absolute top-0 right-0 -mt-12 -mr-12 size-64 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 -mb-12 -ml-12 size-64 rounded-full bg-brand-500/10 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Column Header */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                  <div>
                    <h3 className="text-sm font-extrabold tracking-wider text-white uppercase">
                      COURIER EXPRESS
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-teal-500/20 text-teal-300 border border-teal-500/40 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider">
                    THE AI-NATIVE WAY
                  </span>
                </div>

                {/* Feature Comparison Items */}
                <div className="space-y-4">
                  {SHIFT_ROWS.map((row, idx) => (
                    <div
                      key={idx}
                      className="group/item bg-white/[0.06] rounded-xl p-4 border border-white/10 backdrop-blur-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400/50 hover:bg-white/[0.1] flex items-center justify-between gap-3"
                    >
                      {/* Left Checkmark Icon + Text Content */}
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <div className="size-7 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                          <Check className="size-3.5 stroke-[2.5]" />
                        </div>
                        <div className="flex-1 min-w-0 pr-1">
                          <h4 className="text-xs font-bold text-white leading-tight">{row.dimension}</h4>
                          <p className="text-[11px] text-slate-300 leading-relaxed mt-0.5">{row.newWay}</p>
                        </div>
                      </div>

                      {/* Green Check Badge Tag */}
                      <span className="size-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="size-3 stroke-[2.5]" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
                  <div className="lg:col-span-6 flex flex-col items-start">
                    <Eyebrow tone="brand">STRATEGIC TRANSFORMATION</Eyebrow>
                    <h2 className="text-display-sm sm:text-display-md font-extrabold text-slate-900 tracking-tight leading-tight mt-3">
                      Core Capabilities of Autonomous <span className="inline-block whitespace-nowrap">E-Commerce</span> Fulfillment
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal mt-3">
                      Explore Courier Express capabilities engineered for high-growth operations and autonomous fulfillment resilience.
                    </p>

                    {/* 3 Horizontal Value Proof Badges */}
                    <div className="flex flex-wrap items-center gap-3 mt-5">
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

                {/* Capabilities Tabbed Navigation Bar */}
                <div 
                  data-lenis-prevent="true"
                  className="flex items-center md:justify-center gap-2 overflow-x-auto overscroll-x-contain touch-pan-x scrollbar-none pb-2 mb-8 md:mb-10 px-1"
                  style={{ WebkitOverflowScrolling: "touch" }}
                >
                  {COURIER_ROLE_TABS.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                          "flex shrink-0 whitespace-nowrap items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer shadow-2xs border",
                          isActive
                            ? "bg-[#0a2328] border-[#0a2328] text-white shadow-md scale-[1.02]"
                            : "bg-white border-slate-200/90 text-slate-700 hover:border-teal-400 hover:text-teal-700 hover:bg-teal-50/50"
                        )}
                      >
                        <div className={cn("flex size-5 items-center justify-center rounded-full transition-colors shrink-0", isActive ? "bg-teal-500/20 text-teal-300" : "bg-slate-100 text-slate-500")}>
                          <Icon className="size-3" />
                        </div>
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {/* Active Capability Showcase Card & Dynamic Dashboard UI Mockup */}
                <div className="space-y-6">
                  {/* 2-Column Showcase Container (Matching Freight Reference) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
                  {/* Left Hero Image Card */}
                  <div className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[290px] sm:min-h-[320px] lg:min-h-[340px] flex flex-col justify-end p-5 sm:p-6 shadow-md border border-slate-200/80 group">
                    <img
                      src={currentTab.heroImage || "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop"}
                      alt={currentTab.fullTitle}
                      className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      suppressHydrationWarning
                    />
                    {/* Dark Mask Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/95 via-slate-950/60 to-transparent pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-start gap-1.5">
                      <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-white leading-snug tracking-tight">
                        {currentTab.fullTitle}
                      </h3>
                      <p className="text-xs text-slate-200/90 leading-relaxed font-normal max-w-md line-clamp-3 mt-0.5">
                        {currentTab.intro}
                      </p>
                    </div>
                  </div>

                  {/* Right 2x2 Feature Cards Grid */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                    {currentTab.points.map((point, index) => (
                      <div
                        key={index}
                        className="group relative flex flex-col justify-start rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-md"
                      >
                        {/* Circle Icon Badge */}
                        <div className="flex size-9 items-center justify-center rounded-xl bg-teal-50 text-teal-600 border border-teal-100/80 transition-colors duration-300 group-hover:bg-teal-600 group-hover:text-white mb-3 shadow-2xs">
                          <CheckCircle2 className="size-4.5" />
                        </div>

                        {/* Title */}
                        <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-teal-700 transition-colors">
                          {point.title}
                        </h4>

                        {/* Description */}
                        <p className="mt-1.5 text-xs text-slate-600 leading-relaxed font-normal">
                          {point.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Result Rail ("THE RESULT" Banner) */}
                <ProductResultBanner
                  eyebrow="THE RESULT"
                  headline="45% lower RTO. 99.4% SLA adherence. Sub-second dispatch."
                  stats={[
                    {
                      icon: Clock,
                      title: "Same-Day Dispatch",
                      description: "Automated routing and batch label generation accelerate fulfillment speed.",
                    },
                    {
                      icon: Eye,
                      title: "Real-Time Tracking",
                      description: "Live WhatsApp milestone alerts keep buyers updated every step of the way.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "45% RTO Reduction",
                      description: "AI address correction and pre-dispatch COD verification stop bad orders.",
                    },
                    {
                      icon: TrendingUp,
                      title: "Multi-Carrier Scale",
                      description: "Orchestrate 25+ national and hyper-local couriers on one platform.",
                    },
                  ]}
                />
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
              <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight mt-3">
                Cognitive Shipping: AI That Solves Bottlenecks Before They Happen
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-3 mb-6 max-w-xl">
                Real-time telemetry and autonomous exception routing that catch delivery failures, predict transit delays, and shield your bottom line before packages depart.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex shrink-0 size-10 items-center justify-center rounded-xl bg-linear-to-br from-brand-600 to-teal-500 text-white font-mono text-sm font-extrabold">
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
                  <span className="flex shrink-0 size-10 items-center justify-center rounded-xl bg-linear-to-br from-brand-600 to-teal-500 text-white font-mono text-sm font-extrabold">
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
                  <span className="flex shrink-0 size-10 items-center justify-center rounded-xl bg-linear-to-br from-brand-600 to-teal-500 text-white font-mono text-sm font-extrabold">
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
              <div className="relative overflow-hidden rounded-2xl border border-slate-300 bg-white flex flex-col h-[480px]">
                {/* Header */}
                <div className="bg-slate-950 text-white px-5 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex size-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold font-mono tracking-wider">Courier Express AI Copilot</span>
                  </div>
                  <Terminal className="size-4 text-teal-400" />
                </div>

                {/* Chat feed */}
                <div className="flex-1 p-5 overflow-y-auto font-mono text-xs space-y-4 bg-slate-900 text-slate-100">
                  <div className="text-teal-400">&gt; Prompt: {COURIER_CHAT_PROMPTS[chatIndex].question}</div>
                  <div className="border-t border-slate-800 pt-3 text-slate-300 leading-relaxed whitespace-pre-wrap">
                    {displayedAnswer}
                    {typing && <span className="inline-block w-1.5 h-3.5 bg-teal-400 ml-1" />}
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
      <ProductStandardsIntegrations
        id="enterprise-integrations"
        eyebrow="ECOSYSTEM & CONNECTIVITY"
        title="Built for Industry Standards."
        highlightTitle="Plug-and-Play E-Commerce Stack."
        description="Native, one-click plug-and-play integrations for every major e-commerce store, marketplace, regional carrier, and enterprise ERP system."
        pills={[
          "Shopify Plus",
          "WooCommerce",
          "Magento",
          "Amazon Seller",
          "FedEx",
          "DHL Express",
          "Delhivery",
          "BlueDart",
        ]}
        features={[
          {
            icon: Globe,
            iconBg: "bg-teal-50 text-teal-600 border border-teal-200/80",
            title: "Instant Storefront Connectors",
            description:
              "One-click native integrations automatically ingest orders from Shopify, WooCommerce, Magento, and marketplace channels.",
          },
          {
            icon: Truck,
            iconBg: "bg-amber-50 text-amber-600 border border-amber-200/80",
            title: "Carrier Rate Orchestration",
            description:
              "Pre-routed APIs with leading express couriers for automatic rate comparison, label generation, and dispatch handover.",
          },
          {
            icon: Code,
            iconBg: "bg-indigo-50 text-indigo-600 border border-indigo-200/80",
            title: "Developer & Enterprise APIs",
            description:
              "RESTful APIs, webhooks for live status telemetry, and automated NDR workflows for high-volume enterprise brands.",
          },
        ]}
        visualImage="/assets/laptop_integration_visual.png"
        visualAlt="Courier Express E-Commerce Ecosystem and Dashboards"
      />

      {/* ── 7. Enterprise Security & Infrastructure (Referred from WMS/Freight) ── */}
      <Section tone="sunken" spacing="lg" className="border-t border-hairline">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <Eyebrow tone="brand">DATA GOVERNANCE & COMPLIANCE</Eyebrow>
            <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight mt-3">
              Enterprise-Grade Infrastructure & ISO 9001 Quality
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-normal">
              Established protocols to protect all operational, buyer, and shipping telemetry logs.
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
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-teal-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
