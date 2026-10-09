"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight, Shield, ShieldCheck, Database, Navigation, MessageSquarePlus,
  Terminal, Sparkles, Code, Cpu, DatabaseZap, Users, FileText, CheckCircle2,
  Lock, Globe, Cloud, Key, Check, Eye, Clock, TrendingUp, TrendingDown, Gauge, Zap, Puzzle, Plug
} from "lucide-react";
import { cn } from "@/app/core/lib/cn";
import { Breadcrumb } from "@/app/shared/ui/Breadcrumb";
import { Button } from "@/app/shared/ui/Button";
import { Card } from "@/app/shared/ui/Card";
import { Container, Eyebrow, Section, SectionHeading } from "@/app/shared/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";
import { GradientMesh, Grain } from "@/app/shared/backdrop/Backdrops";
import { CallToAction } from "@/app/shared/sections/CallToAction";
import { TrustAndFaqSection } from "@/app/shared/sections/TrustAndFaqSection";
import { ServiceHeroImage } from "@/app/shared/ui/ServiceHeroImage";
import { ProductRoiMetrics, type RoiMetricItem } from "@/app/products/components/ProductRoiMetrics";
import { ProductStandardsIntegrations } from "@/app/products/components/ProductStandardsIntegrations";
import { ProductResultBanner } from "@/app/products/components/ProductResultBanner";

/* ── AI Chat Simulator Prompts & Responses ───────────────────────────────── */
const CHAT_PROMPTS = [
  {
    question: "What are my top 3 delayed shipments by value?",
    answer: "Analyzing global freight lanes... Found 3 high-value delays:\n1. Hapag-Lloyd (Hamburg -> New York) - Value: $340k. Port congestion at NY terminal. Delay: 2 days.\n2. MSC (Shanghai -> Rotterdam) - Value: $280k. Vessel delay at Suez. Delay: 3.5 days.\n3. Maersk (Mumbai -> Genoa) - Value: $190k. Customs paperwork discrepancy. Auto-drafting carrier email..."
  },
  {
    question: "Compare margins for Air vs Sea Export",
    answer: "Calculating Q2 trade margins... \n• Air Export: Avg. Margin 18.2% (driven by express electronics and pharma)\n• Sea Export: Avg. Margin 24.5% (driven by contract rates on FCL lanes)\nRecommendation: Shift non-critical Hamburg freight from Air to LCL Sea to save $22k in margin leaks."
  },
  {
    question: "Show custom clearance status for IGM-8820",
    answer: "Checking IGM status at Mumbai Customs Terminal...\nIGM-8820: Status 'Pending Agent Upload'.\nMissing document: Verified Gross Mass (VGM) certificate.\nAction: Custom AI agent has queried the terminal VGM server and fetched the file. Ready for autonomous submission. Approve upload?"
  }
];

/* ── Deep Dive Roles and Data ────────────────────────────────────────────── */
const ROLE_TABS = [
  {
    id: "sales",
    label: "Sales & CRM",
    icon: Users,
    heroTitle: "Build stronger client relationships and drive more sales.",
    heroDesc: "Manage leads, track customer interactions and streamline the sales process from inquiry to booking.",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    points: [
      { title: "Pipeline Tracking", desc: "Track every lead and customer interaction from initial email contact to booked shipment." },
      { title: "Call Entries & Logging", desc: "Automate call notes and contact history syncing directly into the freight ledger." },
      { title: "Automated Enquiry Recording", desc: "Extract cargo volume, origin, destination, and SLA requirements from emails automatically." },
      { title: "One-Click Quote Generation", desc: "Calculate instant shipping estimates combining spot rates, margins, and custom duties." }
    ]
  },
  {
    id: "operations",
    label: "Operations & CS",
    icon: FileText,
    heroTitle: "Execute multi-modal cargo transit with zero friction.",
    heroDesc: "Automate customs filings, track shipments in real-time, and empower customers with self-service tracking portals.",
    heroImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop",
    points: [
      { title: "Air/Sea Import & Export", desc: "End-to-end execution workflows for air waybills, bills of lading, and multi-modal transit." },
      { title: "Customs Filings (VGM/IGM/CGM)", desc: "Direct electronic filing endpoints for customs clearing without manual portal data-entry." },
      { title: "Roadways Tracking", desc: "Real-time dispatch management and GPS tracking integration for last-mile freight delivery." },
      { title: "Customer Status Portals", desc: "Branded self-service portals where clients can view live cargo coordinates and documents." }
    ]
  },
  {
    id: "finance",
    label: "Finance & Accounting",
    icon: DatabaseZap,
    heroTitle: "Unify invoicing, ledgers, and profit margin control.",
    heroDesc: "Automate double-entry bookkeeping, credit limit enforcement, and real-time margin audits for every shipment.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    points: [
      { title: "Single & Common Invoicing", desc: "Generate compliant tax invoices combining freight charges, local clearing, and customs duties." },
      { title: "GL Account Management", desc: "Automate ledger entries for receivables, payables, agent payouts, and carrier disbursements." },
      { title: "Journal Entries & Credit Limits", desc: "Double-entry bookkeeping automation and real-time credit limit enforcement for accounts." },
      { title: "Real-Time Margin Tracking", desc: "Real-time cost audits for every container to isolate profit leaks and identify cost savings." }
    ]
  },
  {
    id: "admin",
    label: "Role-Based Admin",
    icon: ShieldCheck,
    heroTitle: "Control multi-branch operations with granular governance.",
    heroDesc: "Manage global agent partnerships, custom document security rules, and employee performance SLAs.",
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    points: [
      { title: "Multi-Branch Assignment", desc: "Configure global operations across multiple ports, regional offices, and agent partnerships." },
      { title: "Custom Document Visibility", desc: "Define granular document access rules based on user role, branch location, or client tier." },
      { title: "Employee Masters", desc: "Track performance metrics, task execution speeds, and SLA compliance per operator." },
      { title: "Trade Partner Controls", desc: "Securely collaborate with external custom brokers, field agents, and warehouse operators." }
    ]
  }
];

/* ── Pre-built Integrations ──────────────────────────────────────────────── */
const INTEGRATIONS = [
  {
    id: "sap",
    name: "SAP Enterprise",
    type: "ERP Integration",
    desc: "Seamless integration with SAP modules and real-time data sync.",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
    bg: "bg-slate-50/80 border-slate-100",
  },
  {
    id: "zoho",
    name: "Zoho Suite",
    type: "CRM Sync",
    desc: "Connect and synchronize your CRM data effortlessly.",
    logoUrl: "/assets/logo_zoho.svg",
    bg: "bg-slate-50/80 border-slate-100",
  },
  {
    id: "oracle",
    name: "Oracle Logistics",
    type: "Supply Chain",
    desc: "Streamline logistics and supply chain operations.",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    bg: "bg-slate-50/80 border-slate-100",
  },
  {
    id: "custom",
    name: "Custom ERPs",
    type: "REST Webhooks",
    desc: "Integrate with any custom ERP using secure REST webhooks.",
    isCode: true,
    bg: "bg-teal-50/60 border-teal-100/80 text-teal-600",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    type: "Client Data",
    desc: "Bi-directional sync for accounts, leads and opportunities.",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    bg: "bg-slate-50/80 border-slate-100",
  },
  {
    id: "ms",
    name: "Microsoft Dynamics",
    type: "Operations",
    desc: "Integrate operations and finance data with Microsoft Dynamics.",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    bg: "bg-slate-50/80 border-slate-100",
  },
  {
    id: "icegate",
    name: "ICEGATE Customs",
    type: "Regulatory Link",
    desc: "Automate customs clearance and regulatory workflows.",
    isIcegate: true,
    bg: "bg-[#0b2447]/10 border-[#0b2447]/20 text-[#0b2447]",
  },
  {
    id: "aws",
    name: "AWS Cloud",
    type: "Secure Storage",
    desc: "Scalable cloud storage and infrastructure on AWS.",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    bg: "bg-slate-50/80 border-slate-100",
  },
];

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
    desc: "Enterprise-grade security protocols protecting all sensitive operational and financial records—both in-transit across networks and at-rest in the cloud."
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

export default function NextOrbitFreightPage() {
  const [activeTab, setActiveTab] = useState("sales");
  const [chatIndex, setChatIndex] = useState(0);
  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const [typing, setTyping] = useState(false);

  // Open consultation modal with product preselected
  const handleRequestDemo = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-consultation-modal", { detail: { service: "nxt-orbit-freight" } })
      );
    }
  };

  // Scroll to Cognitive Showcase section
  const handleScrollToAI = () => {
    document.getElementById("ai-showcase")?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to Enterprise Integrations section
  const handleScrollToIntegrations = () => {
    document.getElementById("enterprise-integrations")?.scrollIntoView({ behavior: "smooth" });
  };

  // Typing effect simulation for chatbot mockup
  useEffect(() => {
    setTyping(true);
    setDisplayedAnswer("");
    const fullText = CHAT_PROMPTS[chatIndex].answer;
    let currentLength = 0;

    const interval = setInterval(() => {
      if (currentLength < fullText.length) {
        setDisplayedAnswer(fullText.slice(0, currentLength + 1));
        currentLength++;
      } else {
        setTyping(false);
        clearInterval(interval);
      }
    }, 6); // Very fast typing

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
                  { label: "Products", href: "/products/nxt-orbit-freight" },
                  { label: "NXT Orbit Freight" },
                ]}
              />

              <Reveal from="up" className="mt-4">
                <Eyebrow>NEXT-GEN FREIGHT OS</Eyebrow>
              </Reveal>

              <Reveal from="up" delay={0.06} className="mt-2">
                <h1 className="max-w-2xl text-display-lg sm:text-display-xl text-ink-900 leading-[1.05]">
                  Stop Managing Logistics. <br />
                  <span className="bg-linear-to-r from-[#006B7D] to-[#00d2c4] bg-clip-text text-transparent">
                    Start Orchestrating Growth.
                  </span>
                </h1>
              </Reveal>

              <Reveal from="up" delay={0.14} className="mt-4">
                <p className="max-w-xl text-lead text-ink-600">
                  The world's first AI-native Operating System for Global Freight. Unify CRM, Operations, Finance, and Customs into one intelligent system of action.
                </p>
              </Reveal>

              <Reveal from="up" delay={0.22} className="mt-6 flex flex-wrap gap-3">
                <Button
                  href="/contact"
                  size="lg"
                  variant="primary"
                  icon={<Sparkles className="size-4 text-teal-300" />}
                  withArrow
                  magnetic
                  className="min-w-[210px] justify-center"
                >
                  Request a Live Demo
                </Button>
                <Button
                  onClick={handleScrollToAI}
                  size="lg"
                  variant="outline"
                  icon={<Terminal className="size-4 text-teal-600" />}
                  withArrow
                  magnetic
                  className="min-w-[210px] justify-center"
                >
                  See the AI in Action
                </Button>
              </Reveal>
            </div>

            {/* Hero Visualization Image */}
            <div className="relative flex justify-center">
              <Reveal from="up" scale={0.97} className="relative w-full max-w-[540px]">
                <ServiceHeroImage
                  src="/assets/hero_slider_1.webp"
                  alt="Stop Managing Logistics. Start Orchestrating Growth - NXT Orbit Freight OS"
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Business Impact (ROI Metrics Redesigned) ── */}
      <ProductRoiMetrics
        title="Engineered for Measurable ROI"
        subtitle="Anchor value in verified operational numbers before diving into technology details."
        metrics={[
          {
            value: "-40%",
            badge: "Cost Reduction",
            title: "Operational Overhead",
            description: "Cut manual processing costs by automating repetitive data entry, email drafting, and customs filings.",
            progressLabel: "Workflow Automation Index",
            progressPercent: 94,
            benchmark: "94% Touchless",
            icon: TrendingDown,
          },
          {
            value: "2x Faster",
            badge: "Pipeline Velocity",
            title: "Quote Conversion",
            description: "Move from inquiry to booked shipment in minutes with AI-assisted pricing and carrier allocation pipelines.",
            progressLabel: "Quote Turnaround Time",
            progressPercent: 88,
            benchmark: "Sub-12 Min SLA",
            icon: Zap,
          },
          {
            value: "60%",
            badge: "Execution Speed",
            title: "Cycle Time Reduction",
            description: "Reduce 'Booking-to-Execution' delays using self-healing automated workflows and predictive port risk systems.",
            progressLabel: "Delay Mitigation Rate",
            progressPercent: 78,
            benchmark: "60% Faster Delivery",
            icon: Gauge,
          },
        ]}
      />

      {/* ── 2.5 Infinite Possibilities Platform Banner ── */}
      <section className="relative isolate overflow-hidden bg-slate-50/70 py-6 sm:py-8 border-b border-hairline">
        <Container>
          <div className="bg-[#04191d] rounded-2xl border border-teal-900/60 p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-white">
            <div className="flex items-center gap-4">
              <div className="size-11 sm:size-12 rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-400/30 flex items-center justify-center shrink-0">
                <Sparkles className="size-5 sm:size-6 text-teal-300" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                  One Platform. <span className="bg-linear-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">Infinite Possibilities.</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-0.5 max-w-xl">
                  NXT Orbit connects your systems, applications, and data—so you can focus on what matters most.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-end">
              <Button
                onClick={handleScrollToIntegrations}
                variant="primary"
                size="md"
                icon={<Plug className="size-4 text-teal-300" />}
                withArrow
                magnetic
                className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold border-0 min-w-[210px] justify-center"
              >
                Explore Integrations
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. Strategic Transformation (Core Pillars) ── */}
      <Section tone="white" spacing="md" className="relative isolate overflow-hidden bg-white py-12 lg:py-16">
        {/* Abstract Flowing Cyan Wave Background Graphic (Matches Image 1) */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute bottom-0 left-1/4 w-[650px] h-[300px] rounded-full bg-teal-300/15 blur-[90px]" />
          <div className="absolute top-1/4 right-1/4 w-[550px] h-[250px] rounded-full bg-cyan-300/10 blur-[80px]" />

          <svg
            className="absolute inset-0 size-full"
            viewBox="0 0 1440 440"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Wave Fill Gradients */}
              <linearGradient id="waveGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#006B7D" stopOpacity="0.15" />
                <stop offset="45%" stopColor="#00A896" stopOpacity="0.18" />
                <stop offset="80%" stopColor="#4DD0E1" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#E0F7FA" stopOpacity="0.0" />
              </linearGradient>

              <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4DD0E1" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#00A896" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#005B66" stopOpacity="0.08" />
              </linearGradient>
            </defs>

            {/* Layer 1: Broad soft ambient fluid fill wave */}
            <path
              d="M -100 300 C 200 200, 480 360, 820 260 C 1120 180, 1380 280, 1540 220 L 1540 440 L -100 440 Z"
              fill="url(#waveGrad1)"
            />

            {/* Layer 2: Secondary overlapping cyan ribbon wave */}
            <path
              d="M -100 240 C 180 340, 520 180, 880 300 C 1180 380, 1380 240, 1540 270 L 1540 440 L -100 440 Z"
              fill="url(#waveGrad2)"
              opacity="0.6"
            />
          </svg>
        </div>

        <Container className="relative z-10">
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col items-center">
            <Eyebrow tone="brand">STRATEGIC TRANSFORMATION</Eyebrow>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b2447] tracking-tight leading-[1.18] text-center">
              Turn Supply Chain Complexity <br className="hidden sm:block" />
              <span className="text-[#00A896]">into Competitive Advantage</span>
            </h2>

            {/* Title Accent Bar */}
            <div className="w-9 h-[2px] bg-[#00A896] rounded-full my-3" />

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed text-center font-normal">
              We help logistics and supply chain businesses move from fragmented operations to intelligent, connected and future-ready networks.
            </p>
          </div>

          {/* 3 Core Pillars Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
            {/* Pillar 1 */}
            <div className="flex flex-col items-center text-center group">
              {/* Circular Icon with stem & dot */}
              <div className="flex flex-col items-center">
                <div className="flex size-16 items-center justify-center rounded-full border border-slate-200 bg-white transition-all duration-300 group-hover:border-[#00A896]">
                  <Database className="size-7 text-[#00A896]" />
                </div>
                <div className="w-[1.5px] h-3.5 bg-teal-200" />
                <div className="size-1.5 rounded-full bg-[#00A896]" />
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-[#0b2447] mt-3 leading-snug">
                Data Capital <br />
                <span className="font-semibold text-slate-800">(Unified Operations)</span>
              </h3>

              {/* Accent Divider Bar */}
              <div className="w-7 h-[1.5px] bg-[#00A896] rounded-full my-2" />

              {/* Description */}
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs font-normal">
                Eliminate swivel-chair work. Connect CRM, freight tracking, customs filings (VGM, IGM, CGM), and accounting under a single login.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col items-center text-center group">
              {/* Circular Icon with stem & dot */}
              <div className="flex flex-col items-center">
                <div className="flex size-16 items-center justify-center rounded-full border border-slate-200 bg-white transition-all duration-300 group-hover:border-[#00A896]">
                  <Navigation className="size-7 text-[#00A896]" />
                </div>
                <div className="w-[1.5px] h-3.5 bg-teal-200" />
                <div className="size-1.5 rounded-full bg-[#00A896]" />
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-[#0b2447] mt-3 leading-snug">
                Predictive Agility <br />
                <span className="font-semibold text-slate-800">(Route & Cost Optimization)</span>
              </h3>

              {/* Accent Divider Bar */}
              <div className="w-7 h-[1.5px] bg-[#00A896] rounded-full my-2" />

              {/* Description */}
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs font-normal">
                Move from reactive problem-solving to proactive decision-making. Predict port congestion, route bottlenecks, and carrier risks before you book.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col items-center text-center group">
              {/* Circular Icon with stem & dot */}
              <div className="flex flex-col items-center">
                <div className="flex size-16 items-center justify-center rounded-full border border-slate-200 bg-white transition-all duration-300 group-hover:border-[#00A896]">
                  <MessageSquarePlus className="size-7 text-[#00A896]" />
                </div>
                <div className="w-[1.5px] h-3.5 bg-teal-200" />
                <div className="size-1.5 rounded-full bg-[#00A896]" />
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-[#0b2447] mt-3 leading-snug">
                Autonomous Collaboration <br />
                <span className="font-semibold text-slate-800">(Context-First Communication)</span>
              </h3>

              {/* Accent Divider Bar */}
              <div className="w-7 h-[1.5px] bg-[#00A896] rounded-full my-2" />

              {/* Description */}
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs font-normal">
                Keep communication tied directly to shipments. Built-in ChatApp, media sharing, and automated triggers keep teams and partners aligned without messy email chains.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 4. The AI Intelligence Core (Cognitive Showcase) ── */}
      <Section id="ai-showcase" tone="sunken" spacing="lg" className="border-t border-hairline">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
            {/* Left side details */}
            <div className="flex flex-col justify-center">
              <Eyebrow tone="brand">COGNITIVE SHOWCASE</Eyebrow>
              <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight mt-3 mb-6">
                Cognitive Logistics: AI That Thinks Ahead of You
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex shrink-0 size-10 items-center justify-center rounded-xl bg-linear-to-br from-brand-600 to-teal-500 text-white font-mono text-sm font-extrabold">
                    1
                  </span>
                  <div className="flex-1 pt-0.5">
                    <h4 className="text-base font-bold text-slate-900">Autonomous Workflow Orchestration</h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Self-healing workflows that detect missing documents or vessel delays and auto-draft inquiry emails to carriers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex shrink-0 size-10 items-center justify-center rounded-xl bg-linear-to-br from-brand-600 to-teal-500 text-white font-mono text-sm font-extrabold">
                    2
                  </span>
                  <div className="flex-1 pt-0.5">
                    <h4 className="text-base font-bold text-slate-900">Conversational Operations</h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Type natural queries like "What are my top 3 delayed shipments by value?" or "Compare Q2 margins for Air vs. Sea Export" for instant answers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex shrink-0 size-10 items-center justify-center rounded-xl bg-linear-to-br from-brand-600 to-teal-500 text-white font-mono text-sm font-extrabold">
                    3
                  </span>
                  <div className="flex-1 pt-0.5">
                    <h4 className="text-base font-bold text-slate-900">Strategic Business Insights</h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Daily AI Command Briefs surfacing "Silent Profit Leaks" and trend analysis across trade lanes.
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
                    <span className="text-xs font-bold font-mono tracking-wider">NXTorbit AI Copilot</span>
                  </div>
                  <Terminal className="size-4 text-teal-400" />
                </div>

                {/* Chat feed */}
                <div className="flex-1 p-5 overflow-y-auto font-mono text-xs space-y-4 bg-slate-900 text-slate-100">
                  <div className="text-teal-400">&gt; Prompt: {CHAT_PROMPTS[chatIndex].question}</div>
                  <div className="border-t border-slate-800 pt-3 text-slate-300 leading-relaxed whitespace-pre-wrap">
                    {displayedAnswer}
                    {typing && <span className="inline-block w-1.5 h-3.5 bg-teal-400 ml-1" />}
                  </div>
                </div>

                {/* Prompt clickers */}
                <div className="bg-slate-950 border-t border-slate-800 p-4">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-2 font-mono">Suggested Prompts:</span>
                  <div className="flex flex-col gap-2">
                    {CHAT_PROMPTS.map((prompt, idx) => (
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

      {/* ── 5. Product Deep Dive (Tabbed menu by role) ── */}
      <Section tone="sunken" spacing="none" className="relative overflow-hidden border-t border-slate-200/80 bg-[#f8fafc] py-8 sm:py-10 lg:py-12">
        <Container>
          {/* Top Header: Title, Description & World Map Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-6 sm:mb-8">
            {/* Left Header Info */}
            <div className="lg:col-span-6 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-teal-600">
                  PRODUCT DEEP DIVE
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                NXT Orbit Freight
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                An intelligent, scalable freight management solution that connects shipper, carrier and customer — delivering real-time visibility, operational efficiency and seamless logistics.
              </p>
            </div>

            {/* Vertical Divider Line */}
            <div className="hidden lg:block lg:col-span-1 flex justify-center">
              <div className="h-16 w-px bg-slate-200/90 mx-auto" />
            </div>

            {/* Right Subtitle & World Map Card */}
            <div className="lg:col-span-5 relative bg-white/70 backdrop-blur-md rounded-xl border border-slate-200/80 p-3.5 sm:p-4 overflow-hidden">
              {/* World Map Vector Watermark */}
              <div className="absolute inset-0 select-none pointer-events-none opacity-[0.18] flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop"
                  alt="Global Freight Network Map"
                  className="w-full h-full object-cover mix-blend-multiply"
                  suppressHydrationWarning
                />
              </div>

              <div className="relative z-10 flex flex-col gap-2">
                <div className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-700 px-2.5 py-0.5 rounded-full text-[11px] font-bold border border-teal-200/70 w-fit">
                  <Sparkles className="size-3 text-teal-600" />
                  Smarter Freight. Stronger Supply Chains.
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  From booking to delivery, NXT Orbit Freight simplifies logistics with technology, automation and real-time insights.
                </p>
              </div>
            </div>
          </div>

          {/* Role Tabs Pill Bar */}
          <div 
            data-lenis-prevent="true"
            className="flex items-center md:justify-center gap-2 overflow-x-auto overscroll-x-contain touch-pan-x scrollbar-none pb-1.5 mb-4 sm:mb-5 px-1"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {ROLE_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex shrink-0 whitespace-nowrap items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer border",
                    isActive
                      ? "bg-[#0d2a30] border-[#0d2a30] text-white scale-[1.02]"
                      : "bg-white border-slate-200/90 text-slate-700 hover:border-teal-400 hover:text-teal-700 hover:bg-teal-50/50"
                  )}
                >
                  <div className={cn("flex size-5 items-center justify-center rounded-full transition-colors", isActive ? "bg-teal-500/20 text-teal-300" : "bg-slate-100 text-slate-500")}>
                    <Icon className="size-3" />
                  </div>
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel Card Layout (Mockup Parity) */}
          {(() => {
            const currentTab = ROLE_TABS.find((t) => t.id === activeTab) || ROLE_TABS[0];
            return (
              <div className="space-y-4">
                {/* 2-Column Showcase Container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
                  {/* Left Hero Image Card */}
                  <div className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[290px] sm:min-h-[320px] lg:min-h-[340px] flex flex-col justify-end p-5 sm:p-6 border border-slate-200/80 group">
                    <img
                      src={currentTab.heroImage}
                      alt={currentTab.heroTitle}
                      className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      suppressHydrationWarning
                    />
                    {/* Dark Mask Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/95 via-slate-950/60 to-transparent pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-start gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-teal-300">
                          {currentTab.label}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-white leading-snug tracking-tight">
                        {currentTab.heroTitle}
                      </h3>
                      <p className="text-xs text-slate-200/90 leading-relaxed font-normal max-w-md line-clamp-3 mt-0.5">
                        {currentTab.heroDesc}
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
                        <p className="mt-1.5 text-xs text-slate-600 leading-relaxed font-normal">
                          {point.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Result Rail ("THE RESULT" Banner) */}
                <ProductResultBanner />
              </div>
            );
          })()}
        </Container>
      </Section>

      {/* ── 6. Integration Layer Visual (ENTERPRISE INTEGRATIONS) ── */}
      <ProductStandardsIntegrations
        id="enterprise-integrations"
        eyebrow="ENTERPRISE INTEGRATIONS"
        title="Built for Industry Standards."
        highlightTitle="Connected to Your Tech Stack."
        description="NXT Orbit Freight bridges sea, air, rail, and customs platforms into a unified single pane of glass, synchronizing seamlessly with your existing enterprise systems."
        pills={[
          "SAP S/4HANA",
          "Oracle NetSuite",
          "ICEGATE Customs",
          "Tally Prime",
          "Major Shipping Lines",
          "Airway EDI",
        ]}
        features={[
          {
            icon: Database,
            iconBg: "bg-teal-50 text-teal-600 border border-teal-200/80",
            title: "ERP & Customs Webhooks",
            description:
              "Real-time bidirectional synchronization with SAP, Oracle, and national customs EDI portals like ICEGATE.",
          },
          {
            icon: Navigation,
            iconBg: "bg-amber-50 text-amber-600 border border-amber-200/80",
            title: "Multi-Modal Visibility APIs",
            description:
              "Live telemetry and event feeds connecting 100+ ocean carriers, airlines, rail logistics, and GPS tracking nodes.",
          },
          {
            icon: ShieldCheck,
            iconBg: "bg-indigo-50 text-indigo-600 border border-indigo-200/80",
            title: "Carrier & Trade Compliance",
            description:
              "Automated Bill of Lading verification, digital IGM/EGM filing, and audit-proof compliance workflows.",
          },
        ]}
        visualImage="/assets/laptop_integration_visual.png"
        visualAlt="NXT Orbit Freight Enterprise Integrations"
      />

      {/* ── 7. Enterprise Security & Infrastructure ── */}
      <Section tone="white" spacing="lg" className="border-t border-hairline">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow tone="brand">DATA GOVERNANCE & COMPLIANCE</Eyebrow>
            <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight mt-3">
              Enterprise-Grade Infrastructure & ISO 9001 Quality
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Crucial section to establish trust with enterprise clients.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SECURITY_POINTS.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  onClick={handleRequestDemo}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-300 cursor-pointer overflow-hidden"
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

      {/* ── 8 & 9. Trust Certifications & FAQ ── */}
      <TrustAndFaqSection />

      {/* ── 10. Bottom CTA Section ── */}
      <CallToAction
        eyebrow="READY TO ORCHESTRATE?"
        title="Ready to Build an Intelligent Logistics Enterprise?"
        description="Schedule a private custom demo showing the platform operating on your actual sample cargo documents."
        primary={{ label: "Schedule Your Custom Demo", href: "/contact" }}
        secondary={{ label: "Call +91 9763804442", href: "tel:+919763804442" }}
      />
    </>
  );
}
