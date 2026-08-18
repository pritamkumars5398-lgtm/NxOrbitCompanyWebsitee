"use client";

import { useState, useEffect } from "react";
import { 
  ArrowRight, Shield, ShieldCheck, Database, Navigation, MessageSquarePlus, 
  Terminal, Sparkles, Code, Cpu, DatabaseZap, Users, FileText, CheckCircle2,
  Lock, Globe, Cloud, Key, Check
} from "lucide-react";
import { cn } from "@/app/core/lib/cn";
import { Breadcrumb } from "@/app/shared/ui/Breadcrumb";
import { Button } from "@/app/shared/ui/Button";
import { Container, Eyebrow, Section, SectionHeading } from "@/app/shared/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";
import { GradientMesh, Grain } from "@/app/shared/backdrop/Backdrops";
import { CallToAction } from "@/app/shared/sections/CallToAction";

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
  { name: "SAP Enterprise", type: "ERP Integration" },
  { name: "Zoho Suite", type: "CRM Sync" },
  { name: "Oracle Logistics", type: "Supply Chain" },
  { name: "Custom ERPs", type: "REST Webhooks" },
  { name: "Salesforce", type: "Client Data" },
  { name: "Microsoft Dynamics", type: "Operations" },
  { name: "ICEGATE Customs", type: "Regulatory Link" },
  { name: "AWS Cloud", type: "Secure Storage" }
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

  // Trigger modal drawer
  const handleRequestDemo = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  // Scroll to Cognitive Showcase section
  const handleScrollToAI = () => {
    document.getElementById("ai-showcase")?.scrollIntoView({ behavior: "smooth" });
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
                  <span className="bg-gradient-to-r from-[#006B7D] to-[#00d2c4] bg-clip-text text-transparent">
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
                <Button onClick={handleRequestDemo} size="lg" variant="primary" withArrow magnetic>
                  Request a Live Demo
                </Button>
                <Button onClick={handleScrollToAI} size="lg" variant="outline">
                  See the AI in Action
                </Button>
              </Reveal>
            </div>

            {/* Hero Visualization Mockup */}
            <div className="relative flex justify-center">
              <Reveal from="up" scale={0.97} className="relative w-full max-w-[540px]">
                {/* Modern visual card simulating freight workflows */}
                <div className="relative overflow-hidden rounded-3xl border border-slate-300 bg-white p-5 transition-transform duration-500 hover:scale-[1.01]">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="flex size-3.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Live System Terminal</span>
                    </div>
                    <span className="text-[10px] font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md">V1.4 Active</span>
                  </div>
                  
                  {/* Fictional Dashboard Mockup */}
                  <div className="space-y-4">
                    <div className="rounded-xl bg-slate-900 text-white p-4 font-mono text-xs">
                      <div className="text-teal-400">$ nxt-freight --diagnose --active</div>
                      <div className="text-slate-400 mt-2">Checking operations, custom clearings & bills...</div>
                      <div className="text-emerald-400 mt-1">✓ CRM databases synchronized</div>
                      <div className="text-emerald-400 mt-1">✓ Automated custom clearance agent listening</div>
                      <div className="text-amber-400 mt-1">! Missing VGM certificate at Terminal 3 (IGM-8820)</div>
                      <div className="text-teal-400 mt-2">$ nxt-freight --auto-clear IGM-8820</div>
                      <div className="text-teal-300 mt-1">&gt; Agent fetched VGM. Customs cleared autonomously.</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-slate-100 p-3 bg-slate-50/50">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Active Shipments</span>
                        <div className="text-xl font-extrabold text-slate-900 mt-1">1,482 TEU</div>
                      </div>
                      <div className="rounded-xl border border-slate-100 p-3 bg-slate-50/50">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Custom Clearance</span>
                        <div className="text-xl font-extrabold text-teal-600 mt-1">99.8% Auto</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Business Impact (ROI Metrics) ── */}
      <Section tone="sunken" spacing="md" className="border-y border-hairline relative">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-display-sm text-slate-900 font-extrabold tracking-tight">
              Engineered for Measurable ROI
            </h2>
            <p className="text-sm text-ink-600 mt-2">Anchor value in numbers before diving into technology details.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-600 cursor-pointer">
              <span className="text-display-md text-teal-600 font-black">-40%</span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Operational Overhead</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Cut manual processing costs by automating repetitive data entry, email drafting, and customs filings.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-600 cursor-pointer">
              <span className="text-display-md text-brand-600 font-black">2x Faster</span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Quote Conversion</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Move from inquiry to booked shipment in minutes with AI-assisted pricing and carrier allocation pipelines.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-600 cursor-pointer">
              <span className="text-display-md text-slate-900 font-black">60%</span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Cycle Time Reduction</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Reduce "Booking-to-Execution" delays using self-healing automated workflows and predictive port risk systems.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 3. Strategic Transformation (Core Pillars) ── */}
      <Section tone="white" spacing="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Eyebrow tone="brand">STRATEGIC TRANSFORMATION</Eyebrow>
            <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight mt-3">
              Turn Supply Chain Complexity into Competitive Advantage
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Use this section to tell the "Business Transformation" story instead of comparing features.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Pillar 1 */}
            <div className="flex gap-4">
              <span className="flex shrink-0 size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Database className="size-5.5" />
              </span>
              <div className="flex flex-col">
                <h3 className="text-base font-bold text-slate-900">Data Capital (Unified Operations)</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Eliminate swivel-chair work. Connect CRM, freight tracking, customs filings (VGM, IGM, CGM), and accounting under a single login.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex gap-4">
              <span className="flex shrink-0 size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Navigation className="size-5.5" />
              </span>
              <div className="flex flex-col">
                <h3 className="text-base font-bold text-slate-900">Pillar 2: Predictive Agility (Route & Cost Optimization)</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Move from reactive problem-solving to proactive decision-making. Predict port congestion, route bottlenecks, and carrier risks before you book.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex gap-4">
              <span className="flex shrink-0 size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <MessageSquarePlus className="size-5.5" />
              </span>
              <div className="flex flex-col">
                <h3 className="text-base font-bold text-slate-900">Pillar 3: Autonomous Collaboration (Context-First Communication)</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Keep communication tied directly to shipments. Built-in ChatApp, media sharing, and automated triggers keep teams and partners aligned without messy email chains.
                </p>
              </div>
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
                  <span className="flex shrink-0 size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-teal-500 text-white font-mono text-sm font-extrabold">
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
                  <span className="flex shrink-0 size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-teal-500 text-white font-mono text-sm font-extrabold">
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
                  <span className="flex shrink-0 size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-teal-500 text-white font-mono text-sm font-extrabold">
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
              <div className="relative overflow-hidden rounded-3xl border border-slate-300 bg-white flex flex-col h-[480px]">
                {/* Header */}
                <div className="bg-slate-950 text-white px-5 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold font-mono tracking-wider">NXTorbit AI Copilot</span>
                  </div>
                  <Terminal className="size-4 text-teal-400" />
                </div>

                {/* Chat feed */}
                <div className="flex-1 p-5 overflow-y-auto font-mono text-xs space-y-4 bg-slate-900 text-slate-100">
                  <div className="text-teal-400">&gt; Prompt: {CHAT_PROMPTS[chatIndex].question}</div>
                  <div className="border-t border-slate-800 pt-3 text-slate-300 leading-relaxed whitespace-pre-wrap">
                    {displayedAnswer}
                    {typing && <span className="inline-block w-1.5 h-3.5 bg-teal-400 ml-1 animate-pulse" />}
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
      <Section tone="white" spacing="lg" className="border-t border-hairline">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight">
              Product Deep Dive: NXT Orbit Freight
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Use an interactive "Tabbed" menu where visitors can click their job role to see their tailored view.
            </p>
          </div>

          {/* Role Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {ROLE_TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-semibold transition-all duration-300 cursor-pointer",
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
            <div className="grid gap-6 md:grid-cols-2">
              {ROLE_TABS.find((t) => t.id === activeTab)?.points.map((point, index) => (
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

      {/* ── 6. Integration Layer Visual ── */}
      <Section tone="sunken" spacing="lg" className="border-t border-hairline">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow tone="brand">ENTERPRISE INTEGRATIONS</Eyebrow>
            <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight mt-3">
              Connected to Your Existing Tech Stack
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              A clean logo grid showing pre-built API connectivity to SAP, Zoho, Oracle, and custom ERPs.
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
                <div key={index} className="rounded-2xl border border-slate-300 bg-white p-6 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-600 cursor-pointer">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-slate-50 text-slate-600 mb-4 self-start">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">{point.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── 8 & 9. ISO Certificates & Global FAQ Section ── */}
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
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <h4 className="text-xs font-bold text-slate-900">How long does integration take?</h4>
                  <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                    Pre-built integrations for SAP, Oracle, and Zoho take less than 2 weeks. Custom ERPs can be bound via our secure REST webhooks within 4 weeks.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
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
