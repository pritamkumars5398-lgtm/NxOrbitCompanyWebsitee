"use client";

import { useState, useEffect } from "react";
import { 
  ArrowRight, Shield, ShieldCheck, Database, Navigation, MessageSquarePlus, 
  Terminal, Sparkles, Code, Cpu, DatabaseZap, Users, FileText, CheckCircle2,
  Lock, Globe, Cloud, Key, Check, Layers, BarChart3, Workflow, Truck, AlertTriangle
} from "lucide-react";
import { cn } from "@/app/core/lib/cn";
import { Breadcrumb } from "@/app/shared/ui/Breadcrumb";
import { Button } from "@/app/shared/ui/Button";
import { Container, Eyebrow, Section } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";
import { GradientMesh, Grain } from "@/app/shared/backdrop/Backdrops";
import { CallToAction } from "@/app/shared/sections/CallToAction";

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
    ]
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
    ]
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
    ]
  },
  {
    id: "pillar4",
    label: "Pillar 4: Post-Purchase Experience",
    icon: Globe,
    intro: "Turn order tracking into your highest-converting marketing channel.",
    points: [
      { title: "Custom Tracking Pages", desc: "Replace generic courier tracking screens with a fully branded tracking portal featuring live map visualization, product recommendations, and promotional banners." },
      { title: "Proactive Status Notifications", desc: "Send automated, branded updates via WhatsApp, SMS, and Email at every milestone: Dispatched, Out for Delivery, Delayed, or Delivered." }
    ]
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
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-20">
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
                  Intelligent Shipping Engine <br />
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
                <Button onClick={handleScrollToAI} size="lg" variant="outline">
                  Schedule AI Demo
                </Button>
              </Reveal>
            </div>

            {/* Hero Visualization Mockup */}
            <div className="relative flex justify-center lg:-mt-6">
              <Reveal from="up" scale={0.97} className="relative w-full max-w-[540px]">
                {/* Glow backdrop */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,187,169,0.22)_0%,rgba(10,46,77,0.08)_50%,transparent_75%)] blur-[50px]" />
                
                {/* Modern visual card simulating multi-carrier dispatch and AI re-routing */}
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="flex size-3.5 rounded-full bg-teal-500 animate-pulse" />
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Multi-Carrier Engine</span>
                    </div>
                    <span className="text-[10px] font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md">AI Auto-Routing</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="rounded-xl bg-slate-900 text-white p-4 font-mono text-xs shadow-inner">
                      <div className="text-teal-400">$ courier-express --analyze --shipment-id EX-9920</div>
                      <div className="text-slate-400 mt-2">Checking carrier SLAs for destination pin-code 400070...</div>
                      <div className="text-emerald-400 mt-1">✓ Verified address coordinates via AI</div>
                      <div className="text-emerald-400 mt-1">✓ Running COD fraud verification check</div>
                      <div className="text-amber-400 mt-1">! High-Risk RTO detected. Triggering WhatsApp flow...</div>
                      <div className="text-teal-400 mt-2">$ courier-express --optimize-route</div>
                      <div className="text-teal-300 mt-1">&gt; Customer confirmed buyer intent. Re-routed to Courier A.</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-slate-100 p-3 bg-slate-50/50">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Carrier Partners</span>
                        <div className="text-xl font-extrabold text-slate-900 mt-1">25+ Networks</div>
                      </div>
                      <div className="rounded-xl border border-slate-100 p-3 bg-slate-50/50">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">RTO Defense</span>
                        <div className="text-xl font-extrabold text-teal-600 mt-1">-45% RTO</div>
                      </div>
                    </div>
                  </div>
                </div>
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
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-display-md text-teal-600 font-black">-45%</span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Return-To-Origin (RTO)</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Pre-dispatch AI address validation and automated WhatsApp buyer confirmation.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-display-md text-brand-600 font-black">18%</span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Lower Logistics Cost</h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Dynamic real-time carrier allocation engine picking the best rate and SLA balance.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
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

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
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

      {/* ── 4. The Four Core Value Pillars ── */}
      <Section tone="white" spacing="lg" className="border-t border-hairline">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Eyebrow tone="brand">STRATEGIC TRANSFORMATION</Eyebrow>
            <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight mt-3">
              Four Pillars of Autonomous E-Commerce Fulfillment
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Explore Courier Express capabilities engineered for high-growth operations.
            </p>
          </div>

          {/* Role / Pillar Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {COURIER_ROLE_TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-3 rounded-xl border text-xs font-semibold transition-all duration-300 cursor-pointer",
                    activeTab === tab.id
                      ? "bg-brand-950 border-brand-950 text-white shadow-md shadow-brand-950/10"
                      : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                  )}
                >
                  <Icon className="size-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="mb-6 pb-4 border-b border-slate-100">
              <p className="text-sm text-slate-700 font-medium">
                {COURIER_ROLE_TABS.find((t) => t.id === activeTab)?.intro}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {COURIER_ROLE_TABS.find((t) => t.id === activeTab)?.points.map((point, index) => (
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
                <div className="flex gap-4">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-brand-600 text-white font-mono text-sm font-bold">1</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Predictive ETA Engine</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Calculates pin-code specific delivery timelines based on live carrier performance data, setting realistic customer expectations and reducing "Where Is My Order?" (WISMO) support calls by up to 60%.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-brand-600 text-white font-mono text-sm font-bold">2</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Conversational AI Logistics Assistant</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Type natural queries into your dashboard like: "Which pin-codes had the highest RTO rate this week?" or "Compare shipping costs between Courier A and Courier B for South Region," and get instant visual analytics.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-brand-600 text-white font-mono text-sm font-bold">3</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Automated Claim Settlement</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      AI automatically detects lost, damaged, or delayed shipments exceeding SLA limits and drafts insurance/reimbursement claims instantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side interactive AI Chatbot Mockup */}
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-500 to-brand-500 opacity-20 blur-xl" />
              
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl flex flex-col h-[480px]">
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
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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
                <div key={index} className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex flex-col">
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

      {/* ── 7.5. ISO Certificates & Global FAQ Section ── */}
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
              <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-sm">
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
