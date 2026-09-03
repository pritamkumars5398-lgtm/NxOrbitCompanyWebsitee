"use client";

import { useState, useEffect } from "react";
import { 
  ArrowRight, Shield, ShieldCheck, Database, Navigation, MessageSquarePlus, 
  Terminal, Sparkles, Code, Cpu, DatabaseZap, Users, FileText, CheckCircle2,
  Lock, Globe, Cloud, Key, Check, Layers, BarChart3, Workflow, Landmark, Scale,
  PlayCircle, Eye, Clock, Activity, Bell, Box, Gauge, TrendingUp, DollarSign, Target,
  LayoutGrid, Package, Settings, ChevronDown, Truck
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
    ],
    dashboardTitle: "CRM Pipeline & Enquiry Matrix",
    metrics: [
      { label: "Active Inquiries", val: "148 Leads", change: "100% Representative Assigned" },
      { label: "Quote Conversion", val: "68.4%", change: "↑ 14% vs last month" },
      { label: "Avg Quote SLA", val: "12 Mins", change: "Instant Preview Mode" },
      { label: "Follow-up Compliance", val: "99.1%", change: "Zero Drop-off Rate" }
    ],
    widget1Title: "Sales Pipeline Stage Map",
    widget2Title: "Quotation Conversion Trend"
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
    ],
    dashboardTitle: "Pure Accounting & Common Invoice Console",
    metrics: [
      { label: "Reconciled Invoices", val: "1,420 Jobs", change: "Zero Leakage" },
      { label: "Common Invoices", val: "38 Enterprise", change: "Multi-Job Consolidated" },
      { label: "GL Journal Accuracy", val: "100%", change: "Audit Approved" },
      { label: "Multi-Currency Sync", val: "Live Rates", change: "Global FX Synced" }
    ],
    widget1Title: "Multi-Branch Ledger Heatmap",
    widget2Title: "Monthly Invoicing Velocity"
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
    ],
    dashboardTitle: "Credit Risk & Trade Partner Governance",
    metrics: [
      { label: "Credit Limit Enforcement", val: "Automated", change: "Hard Cap Enforced" },
      { label: "Blocked Over-Limit Bookings", val: "12 Attempts", change: "Risk Shield Active" },
      { label: "Trade Partner Masters", val: "420 Profiles", change: "Centralized Audit" },
      { label: "Multi-Branch Tax Defaults", val: "14 Offices", change: "Bank-Grade Compliance" }
    ],
    widget1Title: "Partner Credit Risk Map",
    widget2Title: "Credit Overdue Protection"
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
    ],
    dashboardTitle: "Job Margin Analytics & Cash Flow AI",
    metrics: [
      { label: "Profit Leak Detection", val: "0.00%", change: "Carrier Invoices Audited" },
      { label: "Predicted Cash Flow", val: "₹48.2L", change: "↑ 18% Accuracy Forecast" },
      { label: "Receivables Aging", val: "24.2 Days", change: "↓ 12 Days vs industry" },
      { label: "AI Conversational Query", val: "< 1 Sec", change: "Plain Language Assistant" }
    ],
    widget1Title: "Job Margin Variance Map",
    widget2Title: "Cash Flow Forecast Trend"
  }
];

/* ── 3 System Deep-Dive Tabs ────────────────────────────────────────────── */
const DEEP_DIVE_TABS = [
  {
    id: "sales-crm",
    label: "1. Sales & CRM Engine",
    icon: Users,
    bannerTitle: "Power your entire sales cycle",
    bannerDesc: "From lead capture to customer management, empower your team to build stronger relationships, pipeline visibility, and close more deals.",
    bgImage: "/assets/cta1.jpg",
    metrics: [
      { label: "New Leads", val: "128", change: "▲ 12% vs last week" },
      { label: "Active Opportunities", val: "42", change: "▲ 8% vs last week" },
      { label: "Quotes Sent", val: "96", change: "▲ 18% vs last week" },
      { label: "Conversion Rate", val: "24%", change: "▲ 5% vs last week" }
    ],
    funnel: [
      { label: "128 Leads", pct: "100%" },
      { label: "98 Qualified", pct: "76%" },
      { label: "56 Proposal", pct: "44%" },
      { label: "32 Negotiation", pct: "25%" },
      { label: "18 Closed", pct: "14%" }
    ],
    activities: [
      { title: "New inquiry received", sub: "ABC Logistics Pvt. Ltd.", time: "10:30 AM" },
      { title: "Quotation approved", sub: "Freight to New York", time: "09:15 AM" },
      { title: "Deal closed", sub: "Global Retail Corp.", time: "Yesterday" }
    ],
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
    bannerTitle: "Master multi-branch freight accounting",
    bannerDesc: "Eliminate manual data re-entry, automate common invoices, manage GL journals, and achieve 100% audit compliance.",
    bgImage: "/assets/analytics_3d.jpg",
    metrics: [
      { label: "Reconciled Invoices", val: "1,420", change: "▲ 99.8% Accuracy" },
      { label: "Common Invoices", val: "38", change: "Multi-Job Synced" },
      { label: "GL Journal Sync", val: "100%", change: "Audit Approved" },
      { label: "Unbilled Jobs", val: "0", change: "Zero Revenue Leak" }
    ],
    funnel: [
      { label: "1,420 Invoices", pct: "100%" },
      { label: "1,280 Verified", pct: "90%" },
      { label: "980 Remitted", pct: "69%" },
      { label: "420 Common Inv", pct: "30%" },
      { label: "0 Unbilled", pct: "0%" }
    ],
    activities: [
      { title: "Common Invoice generated", sub: "INV-2026-084 for Enterprise Client", time: "11:45 AM" },
      { title: "GL Journal Entry logged", sub: "Air Import Freight Charge", time: "10:10 AM" },
      { title: "Bank Remittance received", sub: "₹1,24,000 cleared", time: "08:30 AM" }
    ],
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
    bannerTitle: "Bank-grade governance & risk controls",
    bannerDesc: "Enforce strict credit limits, manage global trade partners, control branch settings, and set granular role-based security permissions.",
    bgImage: "/assets/fintech_3d.jpg",
    metrics: [
      { label: "Credit Shield Active", val: "100%", change: "Hard Cap Enforced" },
      { label: "Trade Partner Masters", val: "420", change: "Centralized Database" },
      { label: "Role Permissions", val: "Strict", change: "Audit Trail Logged" },
      { label: "Branch Offices", val: "14", change: "Global FX Synced" }
    ],
    funnel: [
      { label: "420 Trade Partners", pct: "100%" },
      { label: "380 Approved Credit", pct: "90%" },
      { label: "280 Active Contracts", pct: "66%" },
      { label: "12 Blocked Risk", pct: "3%" },
      { label: "100% Compliant", pct: "100%" }
    ],
    activities: [
      { title: "Credit limit approved", sub: "₹50,000,000 for Apex Global", time: "01:20 PM" },
      { title: "Role permission modified", sub: "Finance Manager GL Access", time: "11:05 AM" },
      { title: "Branch Settings updated", sub: "Mumbai Head Office Tax Default", time: "09:40 AM" }
    ],
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

            {/* Hero Visual Concept Image */}
            <div className="relative flex justify-center">
              <Reveal from="up" scale={0.97} className="relative w-full max-w-[540px]">
                <ServiceHeroImage
                  src="/assets/cta1.jpg"
                  alt="From Lead to Ledger: Financial Engine Built for Global Logistics - NXT Sales & Finance"
                  categoryText="From Lead to Ledger"
                  badgeText="Logistics Financial Engine"
                  statBadge={{
                    label: "Ledger Audit",
                    value: "0 Unbilled | 100% Synced"
                  }}
                />
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

      {/* ── 4. Strategic Pillars (Redesigned to Match Exact Parity) ── */}
      <Section tone="sunken" spacing="lg" className="relative overflow-hidden border-t border-slate-200/80 bg-[#f8fafc] py-20 sm:py-28">
        <Container>
          {(() => {
            const currentTab = FINANCE_PILLARS.find((t) => t.id === activePillarTab) || FINANCE_PILLARS[0];
            const pillarIndex = FINANCE_PILLARS.findIndex((t) => t.id === activePillarTab) + 1;
            return (
              <>
                {/* Top Section Header: Left Info + Value Rail & Right Isometric 3D Fintech Image */}
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
                      Four Pillars of Profit Protection & Pipeline Control
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                      Unifying CRM, accounting, and compliance under a single system of action.
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

                  {/* Right 3D Isometric Fintech Illustration Container */}
                  <div className="lg:col-span-6 relative flex items-center justify-center min-h-[320px] sm:min-h-[360px]">
                    {/* Concentric Circular Radar Target Rings Background */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-35">
                      <div className="size-[360px] rounded-full border border-teal-300/40 flex items-center justify-center">
                        <div className="size-[260px] rounded-full border border-teal-300/40 flex items-center justify-center">
                          <div className="size-[160px] rounded-full border border-teal-300/40" />
                        </div>
                      </div>
                    </div>

                    {/* 3D Fintech Image - 100% Seamless Blend, Zero Box Border, No Hover */}
                    <div className="relative z-10 size-full flex items-center justify-center pointer-events-none select-none">
                      <img
                        src="/assets/fintech_3d.jpg"
                        alt="3D Financial Engine & Logistics Accounting"
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
                  {FINANCE_PILLARS.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activePillarTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActivePillarTab(tab.id)}
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

                      {/* Right Sub-Column: Dynamic Financial Interactive Dashboard UI Mockup */}
                      <div className="lg:col-span-7 bg-[#f8fafc] border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex gap-4 shadow-2xs overflow-hidden">
                        {/* Left Dark Teal Vertical App Menu Bar */}
                        <div className="w-12 sm:w-14 bg-[#082025] rounded-xl p-3 flex flex-col items-center justify-between text-teal-400 shrink-0">
                          <div className="flex flex-col gap-5 items-center">
                            <div className="size-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-300">
                              <LayoutGrid className="size-4" />
                            </div>
                            <Landmark className="size-4 text-slate-400 hover:text-teal-300 transition-colors cursor-pointer" />
                            <DollarSign className="size-4 text-slate-400 hover:text-teal-300 transition-colors cursor-pointer" />
                            <Activity className="size-4 text-slate-400 hover:text-teal-300 transition-colors cursor-pointer" />
                            <BarChart3 className="size-4 text-slate-400 hover:text-teal-300 transition-colors cursor-pointer" />
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
                                <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-sky-600" />Enquiry</span>
                                <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-teal-600" />Quotation</span>
                                <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-green-600" />Common Invoice</span>
                                <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-orange-600" />Audited</span>
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
                                  <text x="220" y="32" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">{pillarIndex * 180 + 540}</text>
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

      {/* ── 5. System Deep-Dive: Interactive Capabilities (Redesigned to Match Exact Mockup) ── */}
      <Section tone="white" spacing="lg" className="relative overflow-hidden border-t border-slate-200/80 bg-white py-20 sm:py-28">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-600">
              SYSTEM DEEP-DIVE
            </span>
            <h2 className="text-display-md sm:text-display-lg text-slate-900 font-extrabold tracking-tight mt-2">
              Interactive Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Explore the functional components of the Sales and Financial Suite
            </p>
          </div>

          {/* Deep Dive Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {DEEP_DIVE_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeDeepDiveTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveDeepDiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs font-extrabold transition-all duration-300 cursor-pointer shadow-2xs border",
                    isActive
                      ? "bg-[#0a2328] border-[#0a2328] text-white shadow-md scale-[1.02]"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:border-teal-400 hover:text-teal-700 hover:bg-teal-50/50"
                  )}
                >
                  <div className={cn("flex size-6 items-center justify-center rounded-lg transition-colors", isActive ? "bg-teal-500/20 text-teal-300" : "bg-white text-slate-500")}>
                    <Icon className="size-3.5" />
                  </div>
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Active Deep Dive Panel Container */}
          {(() => {
            const currentTab = DEEP_DIVE_TABS.find((t) => t.id === activeDeepDiveTab) || DEEP_DIVE_TABS[0];
            const tabIdx = DEEP_DIVE_TABS.findIndex((t) => t.id === activeDeepDiveTab) + 1;
            return (
              <div className="space-y-6">
                {/* Main Showcase Card Grid */}
                <div className="bg-[#f8fafc] rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-md">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    
                    {/* 1. Left Dark Hero Banner Card */}
                    <div className="lg:col-span-3 bg-[#04191d] rounded-2xl p-6 text-white relative overflow-hidden flex flex-col justify-between min-h-[320px] sm:min-h-[360px] shadow-sm group">
                      {/* High-res background image */}
                      <img 
                        src={currentTab.bgImage} 
                        alt={currentTab.label} 
                        className="absolute inset-0 w-full h-full object-cover object-center opacity-55 transition-transform duration-700 group-hover:scale-105" 
                      />
                      {/* Rich dark teal gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#031518] via-[#031518]/75 to-[#042429]/50 z-10" />

                      <div className="relative z-20 flex flex-col gap-3">
                        <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-md border border-teal-400/30 px-2.5 py-1 rounded-md w-fit">
                          <span className="size-1.5 rounded-full bg-teal-400 animate-pulse" />
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-teal-300">
                            0{tabIdx} {currentTab.label.replace(/^\d+\.\s*/, "").toUpperCase()}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug mt-2 drop-shadow-sm">
                          {currentTab.bannerTitle}
                        </h3>
                      </div>

                      <div className="relative z-20 mt-4">
                        <p className="text-xs text-slate-200 leading-relaxed font-normal opacity-90 drop-shadow-xs">
                          {currentTab.bannerDesc}
                        </p>
                      </div>
                    </div>

                    {/* 2. Middle 3 Feature Points Column */}
                    <div className="lg:col-span-4 flex flex-col justify-center gap-6 p-2">
                      {currentTab.points.map((point, index) => (
                        <div key={index} className="flex gap-4 items-start p-2 rounded-xl transition-all hover:bg-slate-50">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 border border-teal-100/80 shadow-2xs mt-0.5">
                            {index === 0 ? <Users className="size-5" /> : index === 1 ? <Eye className="size-5" /> : <DatabaseZap className="size-5" />}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 leading-tight">{point.title}</h4>
                            <p className="text-xs text-slate-500 leading-relaxed mt-1">{point.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* 3. Right Interactive App Dashboard UI Mockup */}
                    <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-4 flex flex-col gap-4 shadow-2xs overflow-hidden">
                      {/* Top Header Bar */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black text-slate-900 tracking-tight">NXT<span className="text-teal-600">orbit</span></span>
                          <span className="text-[10px] text-slate-400 font-bold">|</span>
                          <span className="text-[11px] font-extrabold text-slate-700">Dashboard</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Eye className="size-3.5 text-slate-400" />
                          <Bell className="size-3.5 text-slate-400" />
                          <div className="flex items-center gap-1.5 pl-2 border-l border-slate-100">
                            <div className="size-5 rounded-full bg-teal-600 text-white text-[9px] font-bold flex items-center justify-center">JD</div>
                          </div>
                        </div>
                      </div>

                      {/* 4 KPI Metrics Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {currentTab.metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-100">
                            <span className="text-[9px] text-slate-400 font-bold block truncate">{metric.label}</span>
                            <span className="text-sm font-black text-slate-900 mt-0.5 block">{metric.val}</span>
                            <span className="text-[9px] text-teal-600 font-bold block mt-0.5">{metric.change}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bottom Split: Funnel Chart + Recent Activities */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                        {/* Left Funnel Widget */}
                        <div className="bg-slate-50/60 rounded-xl p-3 border border-slate-100 flex flex-col justify-between">
                          <span className="text-[10px] font-extrabold text-slate-900 block mb-2">Pipeline Overview</span>
                          <div className="space-y-1.5 my-auto">
                            {currentTab.funnel.map((fn, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-2">
                                <div className="flex-1 bg-slate-200/80 h-3.5 rounded-md overflow-hidden relative">
                                  <div 
                                    className="bg-teal-500 h-full rounded-md transition-all duration-500" 
                                    style={{ width: fn.pct }} 
                                  />
                                </div>
                                <span className="text-[9px] font-bold text-slate-600 w-16 text-right truncate">{fn.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right Recent Activities Widget */}
                        <div className="bg-slate-50/60 rounded-xl p-3 border border-slate-100 flex flex-col justify-between">
                          <span className="text-[10px] font-extrabold text-slate-900 block mb-2">Recent Activities</span>
                          <div className="space-y-2 my-auto">
                            {currentTab.activities.map((act, aIdx) => (
                              <div key={aIdx} className="flex items-start justify-between text-[9px] border-b border-slate-100 pb-1.5 last:border-0 last:pb-0">
                                <div>
                                  <p className="font-bold text-slate-800 leading-tight">{act.title}</p>
                                  <p className="text-slate-400 mt-0.5">{act.sub}</p>
                                </div>
                                <span className="text-[8px] text-slate-400 font-mono shrink-0">{act.time}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Value Rail (4 Proof Cards - Dark Blue/Teal Theme) */}
                <div className="bg-[#061e23] rounded-2xl border border-teal-900/60 p-4 sm:p-6 shadow-md grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-start text-white">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5">
                    <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-400/30">
                      <Target className="size-4 sm:size-5" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-extrabold text-white leading-tight">Improve Productivity</h5>
                      <p className="text-[11px] text-slate-300 leading-normal mt-0.5">Automate routine tasks and save hours of manual work.</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5">
                    <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-400/30">
                      <TrendingUp className="size-4 sm:size-5" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-extrabold text-white leading-tight">Real-Time Visibility</h5>
                      <p className="text-[11px] text-slate-300 leading-normal mt-0.5">Get a 360° view of pipeline, performance and customer interactions.</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5">
                    <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-400/30">
                      <CheckCircle2 className="size-4 sm:size-5" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-extrabold text-white leading-tight">Better Decision Making</h5>
                      <p className="text-[11px] text-slate-300 leading-normal mt-0.5">Use real-time data and insights to make confident decisions.</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5">
                    <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-400/30">
                      <Users className="size-4 sm:size-5" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-extrabold text-white leading-tight">Stronger Relationships</h5>
                      <p className="text-[11px] text-slate-300 leading-normal mt-0.5">Engage better, respond faster and build lasting customer trust.</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
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

      {/* ── 8.5. Trust Certifications & FAQ ── */}
      <TrustAndFaqSection />

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
