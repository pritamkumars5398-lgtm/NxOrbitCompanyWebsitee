"use client";

import { useState, useEffect } from "react";
import { 
  ArrowRight, Shield, ShieldCheck, Database, Navigation, MessageSquarePlus, 
  Terminal, Sparkles, Code, Cpu, DatabaseZap, Users, FileText, CheckCircle2,
  Lock, Globe, Cloud, Key, Check, Layers, BarChart3, Workflow, Landmark, Scale
} from "lucide-react";
import { cn } from "@/app/core/lib/cn";
import { Breadcrumb } from "@/app/shared/ui/Breadcrumb";
import { Button } from "@/app/shared/ui/Button";
import { Card } from "@/app/shared/ui/Card";
import { Container, Eyebrow, Section } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";
import { GradientMesh, Grain } from "@/app/shared/backdrop/Backdrops";
import { CallToAction } from "@/app/shared/sections/CallToAction";

/* ── Financial AI Chat Simulator Prompts & Responses ───────────────────── */
const FINANCE_CHAT_PROMPTS = [
  {
    question: "Compare profitability between Air Import and Sea Export for Q2",
    answer: "Calculating Q2 trade margins...\n• Air Import: Avg. Margin 19.4% (driven by express electronics and perishables)\n• Sea Export: Avg. Margin 26.2% (driven by volume contracts on FCL lanes)\nAI Suggestion: Leverage Sea Export lanes for upcoming manufacturing contracts to maximize revenue velocity."
  },
  {
    question: "Show outstanding invoices over 60 days for Client X",
    answer: "Retrieving aging logs for Client X...\nFound 2 outstanding invoices:\n• INV-2026-084: Value ₹1,24,000 (68 days aging) - Status: Pending processing at client finance portal.\n• INV-2026-092: Value ₹84,500 (61 days aging) - Status: Awaiting bank confirmation.\nAction: Automatic payment reminder sent via WhatsApp to Client X account team."
  }
];

/* ── 4 Core Strategic Pillars ────────────────────────────────────────────── */
const FINANCE_PILLARS = [
  {
    id: "pillar1",
    label: "Pillar 1: Sales Engine & Pipeline",
    icon: Workflow,
    intro: "Empower sales managers and representatives with a CRM built specifically for freight movement, not generic SaaS deals.",
    points: [
      { title: "Pipeline to Enquiry Management", desc: "Assign clients to salespeople, track pipeline stages, log call entries, and record detailed customer inquiries in one central hub." },
      { title: "Instant Quotation Generation", desc: "Create precise, professional quotations directly from customer inquiries with built-in preview modes, custom margin rules, and one-click quote sending." },
      { title: "Sales Intelligence & Follow-up Reminders", desc: "Automated task reminders ensure no warm lead drops off, while sales dashboards provide complete visibility into representative activity and close rates." }
    ]
  },
  {
    id: "pillar2",
    label: "Pillar 2: Pure Logistics Accounting",
    icon: Layers,
    intro: "A pure accounting engine engineered to process complex, multi-modal freight billing without revenue leakage.",
    points: [
      { title: "Flexible Invoicing & Common Invoices", desc: "Generate single-shipment invoices or consolidate multiple jobs into a single Common Invoice for high-volume enterprise clients." },
      { title: "Comprehensive GL & Journal Management", desc: "Full General Ledger (GL) account list management, journal entries, debit/credit notes, and automated receipt/payment logging." },
      { title: "Multi-Currency & Bank Master", desc: "Configure multiple bank accounts, trade partner financial terms, and automated exchange-rate adjustments across global branches." }
    ]
  },
  {
    id: "pillar3",
    label: "Pillar 3: Partner & Credit Risk Governance",
    icon: Scale,
    intro: "Protect your business cash flow from bad debt and delayed collections with automated compliance checks.",
    points: [
      { title: "Automated Credit Limit Enforcement", desc: "Submit, approve, and enforce customer credit requests. The system automatically alerts or blocks sales reps if a customer attempts to book past their approved credit limit." },
      { title: "Trade Partner & Employee Master", desc: "Centralize trade partner profiles, vendor payment terms, credit histories, and internal employee access rights in a single secure environment." },
      { title: "Multi-Branch & Company Settings", desc: "Scale globally with company master and branch master configurations—allowing admins to set specific document layouts, tax settings, and billing defaults per office." }
    ]
  },
  {
    id: "pillar4",
    label: "Pillar 4: AI Financial Intelligence",
    icon: BarChart3,
    intro: "Turn financial data from a static accounting record into a proactive profit-generating asset.",
    points: [
      { title: "Job-Level Margin Analytics", desc: "Real-time variance tracking comparing quoted rates against final carrier invoices to flag 'Silent Profit Leaks' before closing a job." },
      { title: "AI-Powered Cash Flow & Aging Forecasts", desc: "Machine learning algorithms predict payment dates based on historical client settlement speed, highlighting high-risk receivables early." },
      { title: "Conversational Financial Assistant", desc: "Query your financial engine in plain language ('Show outstanding invoices over 60 days for Client X' or 'Compare profitability between Air Import and Sea Export for Q2')." }
    ]
  }
];

/* ── 3 System Deep-Dive Tabs ────────────────────────────────────────────── */
const DEEP_DIVE_TABS = [
  {
    id: "sales-crm",
    label: "1. Sales & CRM Engine",
    icon: Users,
    points: [
      { title: "Sales Representative Portal", desc: "Call entry logs, automated follow-up reminders, assigned customer lists, and personal sales performance dashboards." },
      { title: "Manager Oversight", desc: "Assign sales managers to allocate leads, monitor pipeline health, and track rep conversion benchmarks." },
      { title: "Enquiry & Quotation Lifecycle", desc: "Record raw inquiries, generate multi-option quotes with preview modes, and convert approved quotes directly into active bookings with zero data re-entry." }
    ]
  },
  {
    id: "accounting-billing",
    label: "2. Pure Accounting & Billing",
    icon: DatabaseZap,
    points: [
      { title: "Complete Ledger Controls", desc: "Manage GL Account Lists, Journal Entries, Bank Master Settings, and Company Branch Financial Defaults." },
      { title: "Invoicing Engine", desc: "Create custom job invoices, common consolidated invoices, payment receipts, and settlement vouchers." },
      { title: "Financial Reporting Suite", desc: "Real-time balance sheets, trial balances, profit & loss reports, customer aging analysis, and branch-wise profit reports downloadable in PDF/Excel format." }
    ]
  },
  {
    id: "governance-admin",
    label: "3. Governance & Admin",
    icon: ShieldCheck,
    points: [
      { title: "Credit Request Approvals", desc: "Workflows for customer credit line evaluation, approval matrices, and threshold limits." },
      { title: "Trade Partner Master", desc: "Global database of carriers, overseas agents, vendors, and direct customers with individualized tax/billing configurations." },
      { title: "Role-Based Security", desc: "Granular access permissions controlling who can view margins, approve discounts, edit GL entries, or export financial reports." }
    ]
  }
];

/* ── Advantage Table Data ────────────────────────────────────────────────── */
const ADVANTAGE_ROWS = [
  {
    capability: "Data Flow",
    oldWay: "Sales, Operations, and Finance manually re-key the same invoice data.",
    newWay: "Unified Single Ledger: Sales quotes autopopulate operational bookings and financial invoices."
  },
  {
    capability: "Margin Control",
    oldWay: "Margins are calculated weeks after the shipment closes.",
    newWay: "Live Job-Costing: See exact margins per trade lane, customer, and shipment before billing."
  },
  {
    capability: "Credit Governance",
    oldWay: "Sales reps take orders without knowing if a client has exceeded their credit limit.",
    newWay: "Automated Credit Gates: Real-time credit holds lock new quotes/bookings if aging thresholds are breached."
  },
  {
    capability: "Branch Reconciliation",
    oldWay: "Fragmented accounting tools per office with manual month-end consolidation.",
    newWay: "Multi-Branch Multi-Entity Master: Consolidated group financials with localized branch isolation."
  }
];

/* ── Integrations ────────────────────────────────────────────────────────── */
const INTEGRATIONS = [
  { name: "SAP Enterprise", type: "ERP Integration" },
  { name: "Oracle NetSuite", type: "ERP Sync" },
  { name: "Tally Prime", type: "Accounting Link" },
  { name: "Zoho Books", type: "Ledger Sync" },
  { name: "Microsoft Dynamics", type: "Finance Operations" },
  { name: "Banking Gateways", type: "Direct API Pay" }
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

export default function NextOrbitSalesFinancePage() {
  const [activePillarTab, setActivePillarTab] = useState("pillar1");
  const [activeDeepDiveTab, setActiveDeepDiveTab] = useState("sales-crm");
  const [chatIndex, setChatIndex] = useState(0);
  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const [typing, setTyping] = useState(false);

  // Trigger modal drawer
  const handleRequestDemo = () => {
    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
  };

  // Scroll to AI Margin Analytics section
  const handleScrollToAI = () => {
    document.getElementById("finance-ai-showcase")?.scrollIntoView({ behavior: "smooth" });
  };

  // Typing effect simulation for chatbot mockup
  useEffect(() => {
    setTyping(true);
    setDisplayedAnswer("");
    const fullText = FINANCE_CHAT_PROMPTS[chatIndex].answer;
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
                  { label: "Products", href: "/products/nxt-sales-finance" },
                  { label: "NXT Sales & Finance" },
                ]}
              />

              <Reveal from="up" className="mt-4">
                <Eyebrow>STRATEGIC TRANSFORMATION</Eyebrow>
              </Reveal>

              <Reveal from="up" delay={0.06} className="mt-2">
                <h1 className="max-w-2xl text-display-lg sm:text-display-xl text-ink-900 leading-[1.05]">
                  From Lead to Ledger: <br />
                  <span className="bg-gradient-to-r from-[#006B7D] to-[#00d2c4] bg-clip-text text-transparent">
                    The Financial Engine Built for Global Logistics.
                  </span>
                </h1>
              </Reveal>

              <Reveal from="up" delay={0.14} className="mt-4">
                <p className="max-w-xl text-lead text-ink-600">
                  Unify your sales pipeline, automated quoting, multi-branch accounting, and real-time margin control into one AI-native financial operating system. Eliminate revenue leaks and reconcile every shipment in real time.
                </p>
              </Reveal>

              <Reveal from="up" delay={0.22} className="mt-6 flex flex-wrap gap-3">
                <Button onClick={handleRequestDemo} size="lg" variant="primary" withArrow magnetic>
                  Request Financial Demo
                </Button>
                <Button onClick={handleScrollToAI} size="lg" variant="outline" withArrow>
                  See AI Margin Analytics
                </Button>
              </Reveal>
            </div>

            {/* Hero Visual Concept Card */}
            <div className="relative flex justify-center">
              <Reveal from="up" scale={0.97} className="relative w-full max-w-[540px]">
                {/* Modern visual card simulating billing & funnel sync */}
                <div className="relative overflow-hidden rounded-3xl border border-slate-300 bg-white p-5 transition-transform duration-500 hover:scale-[1.01]">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="flex size-3.5 rounded-full bg-teal-500 animate-pulse" />
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Financial Engine Terminal</span>
                    </div>
                    <span className="text-[10px] font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md">Ledger Synced</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="rounded-xl bg-slate-900 text-white p-4 font-mono text-xs">
                      <div className="text-teal-400">$ nxt-finance --audit-margins --active</div>
                      <div className="text-slate-400 mt-2">Auditing active shipments & general ledger...</div>
                      <div className="text-emerald-400 mt-1">✓ Automated invoice generated (INV-2026-084)</div>
                      <div className="text-emerald-400 mt-1">✓ Single Ledger active across 6 branches</div>
                      <div className="text-amber-400 mt-1">! Credit limit warning: Client Y (90% threshold)</div>
                      <div className="text-teal-400 mt-2">$ nxt-finance --enforce-rules</div>
                      <div className="text-teal-300 mt-1">&gt; Rule enforced. Job-level profitability secured.</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-slate-100 p-3 bg-slate-50/50">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Unbilled Shipments</span>
                        <div className="text-xl font-extrabold text-teal-600 mt-1">0 Pending</div>
                      </div>
                      <div className="rounded-xl border border-slate-100 p-3 bg-slate-50/50">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Margin Audit</span>
                        <div className="text-xl font-extrabold text-slate-900 mt-1">100% Trans.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Executive Impact Metrics ── */}
      <Section tone="sunken" spacing="md" className="border-y border-hairline relative">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-display-sm text-slate-900 font-extrabold tracking-tight">
              Financial Accuracy at Enterprise Scale
            </h2>
            <p className="text-sm text-ink-600 mt-2">Anchor value in numbers before diving into technology details.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer">
              <span className="text-display-md text-teal-600 font-black">0</span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Unbilled Shipments</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Automated invoice generation triggered directly from operational bookings.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer">
              <span className="text-display-md text-brand-600 font-black">2x Faster</span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Quote-to-Invoice Cycles</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Seamless flow from sales enquiry → quotation → booking → common invoice.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer">
              <span className="text-display-md text-slate-900 font-black">100%</span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Margin Transparency</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Job-level profitability tracking with real-time credit risk enforcement before booking confirmation.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 3. The Enterprise Advantage: Why Purpose-Built Logistics Accounting? ── */}
      <Section tone="white" spacing="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight">
              The Enterprise Advantage: Why Purpose-Built Logistics Accounting?
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Generic accounting tools like QuickBooks or off-the-shelf software were never built to handle job-costing, carrier debit notes, or multi-branch freight reconciliation. NXT bridges the gap between sales activity and financial accounting.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-300 bg-white">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-300">
                <tr>
                  <th className="p-4 font-bold text-slate-900">Financial Capability</th>
                  <th className="p-4 font-bold text-slate-500">Traditional Generic Accounting (The Bottleneck)</th>
                  <th className="p-4 font-bold text-teal-600">NXT Sales & Pure Accounting (The Enterprise Way)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ADVANTAGE_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 font-bold text-slate-950">{row.capability}</td>
                    <td className="p-4 text-slate-500">{row.oldWay}</td>
                    <td className="p-4 font-medium text-slate-800 bg-teal-50/10">{row.newWay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* ── 4. Strategic Pillars ── */}
      <Section tone="white" spacing="lg" className="border-t border-hairline">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Eyebrow tone="brand">STRATEGIC TRANSFORMATION</Eyebrow>
            <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight mt-3">
              Four Pillars of Profit Protection & Pipeline Control
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Unifying CRM, accounting, and compliance under a single system of action.
            </p>
          </div>

          {/* Pillar Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {FINANCE_PILLARS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activePillarTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActivePillarTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all duration-300 cursor-pointer shadow-xs",
                    isActive
                      ? "bg-brand-950 border-brand-950 text-white shadow-md scale-[1.02]"
                      : "bg-surface border-hairline text-ink-700 hover:border-brand-300 hover:text-brand-500 hover:bg-brand-50/50"
                  )}
                >
                  <Icon className={cn("size-4 transition-colors", isActive ? "text-brand-300" : "text-ink-500")} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Active Pillar Panel */}
          <Card tone="plain" padding="lg" className="border-hairline shadow-md">
            <div className="mb-6 pb-4 border-b border-hairline">
              <p className="text-sm text-ink-700 font-medium leading-relaxed">
                {FINANCE_PILLARS.find((t) => t.id === activePillarTab)?.intro}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 text-left">
              {FINANCE_PILLARS.find((t) => t.id === activePillarTab)?.points.map((point, index) => (
                <div key={index} className="flex gap-3.5 items-start">
                  <span className="flex shrink-0 size-6 items-center justify-center rounded-full bg-brand-50 text-brand-600 font-bold mt-0.5">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-ink-900">{point.title}</h4>
                    <p className="text-xs text-ink-600 mt-1 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </Section>

      {/* ── 5. System Deep-Dive: Interactive Capabilities ── */}
      <Section tone="white" spacing="lg" className="border-t border-hairline">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-sm sm:text-display-md text-ink-900 font-extrabold tracking-tight">
              System Deep-Dive: Interactive Capabilities
            </h2>
            <p className="text-sm text-ink-600 mt-2">
              Explore the functional components of the Sales and Financial Suite.
            </p>
          </div>

          {/* Deep Dive Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {DEEP_DIVE_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeDeepDiveTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveDeepDiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all duration-300 cursor-pointer shadow-xs",
                    isActive
                      ? "bg-brand-950 border-brand-950 text-white shadow-md scale-[1.02]"
                      : "bg-surface border-hairline text-ink-700 hover:border-brand-300 hover:text-brand-500 hover:bg-brand-50/50"
                  )}
                >
                  <Icon className={cn("size-4 transition-colors", isActive ? "text-brand-300" : "text-ink-500")} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Active Deep Dive Panel */}
          <Card tone="plain" padding="lg" className="border-hairline shadow-md">
            <div className="grid gap-6 md:grid-cols-3">
              {DEEP_DIVE_TABS.find((t) => t.id === activeDeepDiveTab)?.points.map((point, index) => (
                <div key={index} className="flex gap-3 items-start flex-col">
                  <span className="flex shrink-0 size-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-2">
                    <Check className="size-4 text-brand-600" strokeWidth={3} />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-ink-900">{point.title}</h4>
                    <p className="text-xs text-ink-600 mt-1 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </Section>

      {/* ── 6. The AI Intelligence Core (Cognitive Showcase) ── */}
      <Section id="finance-ai-showcase" tone="sunken" spacing="lg" className="border-t border-hairline">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
            {/* Left side details */}
            <div className="flex flex-col justify-center">
              <Eyebrow tone="brand">AI FINANCIAL COGNITION</Eyebrow>
              <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight mt-3 mb-6">
                Cognitive Accounting: Stop Profit Leaks Instantly
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex shrink-0 size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-teal-500 text-white font-mono text-sm font-extrabold">
                    1
                  </span>
                  <div className="flex-1 pt-0.5">
                    <h4 className="text-base font-bold text-slate-900">Job-Level Margin Analytics</h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Real-time variance tracking comparing quoted rates against final carrier invoices to flag "Silent Profit Leaks" before closing a job.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex shrink-0 size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-teal-500 text-white font-mono text-sm font-extrabold">
                    2
                  </span>
                  <div className="flex-1 pt-0.5">
                    <h4 className="text-base font-bold text-slate-900">AI-Powered Cash Flow & Aging Forecasts</h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Machine learning algorithms predict payment dates based on historical client settlement speed, highlighting high-risk receivables early.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex shrink-0 size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-teal-500 text-white font-mono text-sm font-extrabold">
                    3
                  </span>
                  <div className="flex-1 pt-0.5">
                    <h4 className="text-base font-bold text-slate-900">Conversational Financial Assistant</h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Query your financial engine in plain language ("Show outstanding invoices over 60 days for Client X" or "Compare profitability between Air Import and Sea Export for Q2") for instant visualization.
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
                    <span className="text-xs font-bold font-mono tracking-wider">NXT Fin AI Copilot</span>
                  </div>
                  <Terminal className="size-4 text-teal-400" />
                </div>

                {/* Chat feed */}
                <div className="flex-1 p-5 overflow-y-auto font-mono text-xs space-y-4 bg-slate-900 text-slate-100">
                  <div className="text-teal-400">&gt; Prompt: {FINANCE_CHAT_PROMPTS[chatIndex].question}</div>
                  <div className="border-t border-slate-800 pt-3 text-slate-300 leading-relaxed whitespace-pre-wrap">
                    {displayedAnswer}
                    {typing && <span className="inline-block w-1.5 h-3.5 bg-teal-400 ml-1 animate-pulse" />}
                  </div>
                </div>

                {/* Prompt clickers */}
                <div className="bg-slate-950 border-t border-slate-800 p-4">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-2 font-mono">Suggested Financial Queries:</span>
                  <div className="flex flex-col gap-2">
                    {FINANCE_CHAT_PROMPTS.map((prompt, idx) => (
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

      {/* ── 7. Tailored Enterprise Integrations & Compliance ── */}
      <Section tone="white" spacing="lg" className="border-t border-hairline">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight">
              Built for Industry Standards.
            </h2>
            <p className="text-sm text-brand-600 font-semibold mt-2">Tailored to Your Enterprise.</p>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              The NXT Sales & Accounting module operates seamlessly as a standalone financial powerhouse or as a fully integrated layer within your existing ERP ecosystem.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Universal Financial Connectors */}
            <div className="rounded-2xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-600 cursor-pointer">
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-4">
                <Database className="size-5" />
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-3">Universal Connectors</h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Bi-directional open APIs for seamless data sync with SAP, Oracle NetSuite, Tally, Zoho Books, and Microsoft Dynamics.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {INTEGRATIONS.map((integ, idx) => (
                  <span key={idx} className="text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md font-medium">
                    {integ.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Banking & Payment Gateways */}
            <div className="rounded-2xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400 hover:shadow-md hover:shadow-teal-500/10 cursor-pointer">
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-4">
                <Landmark className="size-5" />
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-3">Banking & Payment Gateways</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct integration with corporate banking APIs for automated payment reconciliation and electronic fund transfers.
              </p>
            </div>

            {/* Audit-Ready Compliance */}
            <div className="rounded-2xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400 hover:shadow-md hover:shadow-teal-500/10 cursor-pointer">
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-4">
                <ShieldCheck className="size-5" />
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-3">Audit-Ready Compliance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bank-grade cloud security (AES-256 encryption), role-based access control (RBAC), and immutable transaction audit trails for global tax and regulatory compliance.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 8. Enterprise Security & Infrastructure (Referred from WMS/Freight) ── */}
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

      {/* ── 8.5. ISO Certificates & Global FAQ Section ── */}
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

      {/* ── 9. Bottom CTA Section ── */}
      <CallToAction
        eyebrow="REVENUE PROTECTION"
        title="Ready to Lock in Profitability on Every Shipment?"
        description="Speak with an enterprise finance architect to see how NXT Sales & Accounting eliminates manual data entry, prevents revenue leakage, and accelerates cash flow."
        primary={{ label: "Schedule a Financial Demo", href: "/contact" }}
        secondary={{ label: "Talk to a Specialist", href: "/contact" }}
      />
    </>
  );
}
