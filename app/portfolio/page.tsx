import type { Metadata } from "next";
import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer";
import { AppButton } from "../shared/components/AppButton";
import { WORK_ITEMS, TESTIMONIALS } from "../core/constants/app.constant";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | NXTorbit",
  description:
    "Explore NXTorbit's portfolio of 1400+ mobile apps, web platforms, and digital products across fintech, healthcare, entertainment, and more.",
};

const PORTFOLIO_META = [
  { id: "daylyy",      industry: "Social",        platform: "iOS & Android", result: "89% User Retention" },
  { id: "alba",        industry: "Automotive",     platform: "iOS & Android", result: "$120M+ Transactions" },
  { id: "truefan",     industry: "Entertainment",  platform: "iOS & Android", result: "4.4M Active Users" },
  { id: "joshcam",     industry: "Creator Tools",  platform: "iOS & Android", result: "50M+ Creators" },
  { id: "airtel",      industry: "Telecom",        platform: "iOS & Android", result: "12M+ Concurrent Users" },
  { id: "motherdairy", industry: "FMCG/Logistics", platform: "iOS & Android", result: "100k Daily Deliveries" },
  { id: "nikbakers",   industry: "Retail",         platform: "iOS & Android", result: "Real-time Sync" },
];

const INDUSTRIES = ["All", "Social", "Automotive", "Entertainment", "Creator Tools", "Telecom", "FMCG/Logistics", "Retail"];

const STATS = [
  { value: "1400+", label: "Apps & Platforms Delivered" },
  { value: "35+", label: "Countries Reached" },
  { value: "50+", label: "Industries Served" },
  { value: "100M+", label: "End Users Impacted" },
];

export default function PortfolioPage() {
  const enriched = WORK_ITEMS.map((item) => ({
    ...item,
    ...(PORTFOLIO_META.find((m) => m.id === item.id) || {}),
  }));

  return (
    <div className="min-h-screen bg-white text-nyt-charcoal font-sans antialiased">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-[#0A2E4D] via-[#006B7D] to-[#0A2E4D] py-20 lg:py-28 overflow-hidden text-white">
        <div className="relative mx-auto max-w-7xl px-6 z-10">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3CCFC7] mb-4 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#3CCFC7]/30">
              <span className="w-2 h-2 rounded-full bg-[#82C458] animate-pulse" />
              Our Portfolio & Case Studies
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              Products That Perform<br />
              <span className="text-[#3CCFC7]">At Any Scale</span>
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl">
              From apps serving millions of daily users to enterprise platforms processing billions in transactions — here's a snapshot of what we've built.
            </p>
            <div className="flex flex-row items-center gap-3 flex-wrap sm:flex-nowrap">
              <AppButton variant="primary" size="large" href="/contact" className="min-w-[200px] sm:min-w-[220px]">
                Start Your Project
              </AppButton>
              <AppButton
                variant="outline"
                size="large"
                href="#case-studies"
                className="min-w-[200px] sm:min-w-[220px] !text-white !border-[#3CCFC7] hover:!bg-[#3CCFC7] hover:!text-[#0A2E4D]"
              >
                View Case Studies
              </AppButton>
            </div>
          </div>

          {/* Stats row with Frosted Glass Cards */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "1400+", label: "Apps Deployed" },
              { value: "99.9%", label: "Client Satisfaction" },
              { value: "25+", label: "Countries Served" },
              { value: "13+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="glass-panel-dark rounded-2xl px-6 py-6 text-center glass-card-hover">
                <p className="text-3xl md:text-4xl font-extrabold text-[#3CCFC7]">{stat.value}</p>
                <p className="text-xs font-semibold text-slate-300 mt-1 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <section className="sticky top-16 z-40 bg-white border-b border-slate-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-3">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest shrink-0 mr-2">Filter:</span>
            {INDUSTRIES.map((industry) => (
              <button
                key={industry}
                className={`shrink-0 text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-colors duration-150
                  ${industry === "All"
                    ? "bg-nyt-green text-white border-nyt-green"
                    : "text-slate-600 border-slate-200 hover:border-nyt-green hover:text-nyt-green"
                  }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES GRID ── */}
      <section id="case-studies" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-2">Case Studies</p>
            <h2 className="text-3xl font-extrabold text-slate-900">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enriched.map((item) => (
              <article
                key={item.id}
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-nyt-green/20
                  hover:shadow-xl hover:shadow-nyt-green/5 transition-all duration-300"
              >
                {/* Card header with gradient */}
                <div className={`relative h-44 bg-gradient-to-br ${item.accent} p-6 flex flex-col justify-between overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full translate-x-8 -translate-y-8" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -translate-x-6 translate-y-6" />
                  </div>
                  <div className="relative flex items-center justify-between">
                    <span className="text-xs font-bold text-white/80 uppercase tracking-widest">
                      {"industry" in item ? (item as { industry?: string }).industry || "" : ""}
                    </span>
                    <span className="text-xs font-semibold text-white/60">
                      {"platform" in item ? (item as { platform?: string }).platform || "" : ""}
                    </span>
                  </div>
                  <div className="relative">
                    <h3 className="text-2xl font-extrabold text-white">{item.name}</h3>
                    <p className="text-white/70 text-sm mt-1">{item.tagline}</p>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-3">{item.desc}</p>

                  {/* Result highlight */}
                  <div className="bg-nyt-green/5 border border-nyt-green/15 rounded-xl px-4 py-3 mb-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-nyt-green mb-0.5">Key Result</p>
                    <p className="text-sm font-bold text-slate-900">
                      {"result" in item ? (item as { result?: string }).result || item.highlight : item.highlight}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.highlightSub}</p>
                  </div>

                  <a
                    href="/contact"
                    className="flex items-center gap-1.5 text-sm font-semibold text-nyt-green hover:gap-2.5 transition-all duration-200 group"
                  >
                    Discuss Similar Project
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-white" id="testimonials">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-3">Client Voices</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:border-nyt-green/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#6cb790">
                      <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.3l-3.7 1.9.7-4.1-3-2.9 4.2-.7L7 1z"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm text-slate-600 leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full ${t.avatarBg} flex items-center justify-center text-sm font-bold text-slate-600`}>
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES SERVED ── */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-3">Expertise</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8">Industries We've Shipped For</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Healthcare", "Fintech", "E-Commerce", "Entertainment", "Logistics",
              "Education", "Automotive", "Real Estate", "Social", "Travel & Hospitality",
              "On-Demand Services", "SaaS", "Retail", "Media", "Gaming",
            ].map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-700
                  hover:border-nyt-green hover:text-nyt-green hover:bg-nyt-green/5 transition-colors duration-200 cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-br from-nyt-dark to-slate-900">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-4">Start Building</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
            Ready to Add Your Project to This List?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Every great product started with a conversation. Let's have yours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AppButton variant="primary" size="large" href="/contact">
              Start Your Project
            </AppButton>
            <AppButton variant="outline" size="large" href="tel:+919763804442">
              Call +91 9763804442
            </AppButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
