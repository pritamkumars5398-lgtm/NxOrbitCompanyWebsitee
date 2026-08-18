"use client";

import { useState, useEffect } from "react";
import { 
  ArrowRight, Shield, ShieldCheck, Database, Navigation, MessageSquarePlus, 
  Terminal, Sparkles, Code, Cpu, DatabaseZap, Users, FileText, CheckCircle2,
  Lock, Globe, Cloud, Key, Check, Layers, BarChart3, Workflow
} from "lucide-react";
import { cn } from "@/app/core/lib/cn";
import { Breadcrumb } from "@/app/shared/ui/Breadcrumb";
import { Button } from "@/app/shared/ui/Button";
import { Container, Eyebrow, Section } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";
import { GradientMesh, Grain } from "@/app/shared/backdrop/Backdrops";
import { CallToAction } from "@/app/shared/sections/CallToAction";

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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
                <Button onClick={handleScrollToAI} size="lg" variant="outline">
                  Explore AI Yield Analytics
                </Button>
              </Reveal>
            </div>

            {/* Hero Visualization Mockup */}
            <div className="relative flex justify-center">
              <Reveal from="up" scale={0.97} className="relative w-full max-w-[540px]">
                {/* 3D Spatial Twin Mockup */}
                <div className="relative overflow-hidden rounded-3xl border border-slate-300 bg-white p-5 transition-transform duration-500 hover:scale-[1.01]">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="flex size-3.5 rounded-full bg-teal-500 animate-pulse" />
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">3D Spatial Twin Engine</span>
                    </div>
                    <span className="text-[10px] font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md">Real-Time Yield</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="rounded-xl bg-slate-900 text-white p-4 font-mono text-xs">
                      <div className="text-teal-400">$ nxt-wms --spatial-scan --live</div>
                      <div className="text-slate-400 mt-2">Scanning rack configurations...</div>
                      <div className="text-emerald-400 mt-1">✓ 3D Spatial Grid synchronized</div>
                      <div className="text-emerald-400 mt-1">✓ Yield Optimization engine running</div>
                      <div className="text-amber-400 mt-1">! Detected 24% underutilized volume in Zone B</div>
                      <div className="text-teal-400 mt-2">$ nxt-wms --optimize-slotting</div>
                      <div className="text-teal-300 mt-1">&gt; 3D slotting optimized. Storage density +18%.</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-slate-100 p-3 bg-slate-50/50">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Dock Occupancy</span>
                        <div className="text-xl font-extrabold text-slate-900 mt-1">84% Capacity</div>
                      </div>
                      <div className="rounded-xl border border-slate-100 p-3 bg-slate-50/50">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Space Yield</span>
                        <div className="text-xl font-extrabold text-teal-600 mt-1">+25% Mon.</div>
                      </div>
                    </div>
                  </div>
                </div>
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
            <div className="rounded-2xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-600 cursor-pointer">
              <span className="text-display-md text-teal-600 font-black">100%</span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Flow Traceability</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Complete visibility from supplier origin to end-customer delivery with real-time velocity metrics.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-600 cursor-pointer">
              <span className="text-display-md text-brand-600 font-black">+25%</span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Capacity Monetization</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                AI-driven peak/downtime analysis revealing exact idle capacity available to onboard new customers.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-600 cursor-pointer">
              <span className="text-display-md text-slate-900 font-black">Full</span>
              <h3 className="text-base font-bold text-slate-900 mt-2">System Telemetry</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Granular analytics on system usage, staff efficiency, and process turnaround times.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 3. Core Enterprise Pillars ── */}
      <Section tone="white" spacing="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Eyebrow tone="brand">STRATEGIC TRANSFORMATION</Eyebrow>
            <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight mt-3">
              Five Pillars of Autonomous Warehouse Operations
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Deep dive into WMS utilities designed for end-to-end optimization.
            </p>
          </div>

          {/* Role / Pillar Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {WMS_ROLE_TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-3 rounded-xl border text-xs font-semibold transition-all duration-300 cursor-pointer",
                    activeTab === tab.id
                      ? "bg-brand-950 border-brand-950 text-white"
                      : "border-slate-300 text-slate-600 hover:border-slate-600 hover:bg-slate-50"
                  )}
                >
                  <Icon className="size-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel */}
          <div className="rounded-3xl border border-slate-300 bg-white p-6 md:p-8">
            <div className="mb-6 pb-4 border-b border-slate-100">
              <p className="text-sm text-slate-700 font-medium">
                {WMS_ROLE_TABS.find((t) => t.id === activeTab)?.intro}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {WMS_ROLE_TABS.find((t) => t.id === activeTab)?.points.map((point, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <span className="flex shrink-0 size-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{point.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                className="rounded-2xl border border-slate-300 bg-white p-5 text-center flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-600 cursor-pointer"
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

      {/* ── 5.5. ISO Certificates & Global FAQ Section ── */}
      <Section tone="sunken" spacing="lg" className="border-t border-hairline">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow tone="brand">TRUST CERTIFICATIONS</Eyebrow>
              <h2 className="text-display-sm text-slate-900 font-extrabold tracking-tight mt-2 mb-4">
                ISO 9001 Quality Guaranteed
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                NXTorbit operates under strict international quality guidelines. Our products undergo rigorous functional testing, stress auditing, and regular third-party security audits to ensure compliance with enterprise parameters globally.
              </p>
              <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl border border-slate-300 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 cursor-pointer">
                <ShieldCheck className="size-8 text-teal-500 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-slate-800 block">ISO 9001:2015</span>
                  <span className="text-[10px] text-slate-400">Quality Management System Certified</span>
                </div>
              </div>
            </div>
            
            {/* Global FAQ Details */}
            <div>
              <Eyebrow tone="brand">QUESTIONS & ANSWERS</Eyebrow>
              <h2 className="text-display-sm text-slate-900 font-extrabold tracking-tight mt-2 mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <div className="rounded-xl border border-slate-300 bg-white p-4 transition-all duration-300 hover:border-slate-500">
                  <h4 className="text-xs font-bold text-slate-900">How long does integration take?</h4>
                  <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                    Pre-built integrations for SAP, Oracle, and Zoho take less than 2 weeks. Custom ERPs can be bound via our secure REST webhooks within 4 weeks.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-300 bg-white p-4 transition-all duration-300 hover:border-slate-500">
                  <h4 className="text-xs font-bold text-slate-900">Is data storage isolated per tenant?</h4>
                  <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                    Yes, we use strict logical separation (multi-tenant branch isolation) to ensure zero data leakage between different regional branches or shipping operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

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
