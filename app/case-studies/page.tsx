import type { Metadata } from "next";
import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer";
import { AppButton } from "../shared/components/AppButton";
import { WORK_ITEMS, TESTIMONIALS } from "../core/constants/app.constant";

export const metadata: Metadata = {
  title: "Case Studies | NXTorbit",
  description:
    "Explore NXTorbit's case studies detailing our most impactful projects across mobile apps, web platforms, and digital products.",
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

export default function CaseStudiesPage() {
  const enriched = WORK_ITEMS.map((item) => ({
    ...item,
    ...(PORTFOLIO_META.find((m) => m.id === item.id) || {}),
  }));

  return (
    <div className="min-h-screen bg-white text-nyt-charcoal font-sans antialiased">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-nyt-dark via-slate-900 to-slate-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-nyt-green/10 rounded-full translate-x-1/2 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-nyt-lime/5 rounded-full -translate-x-1/3 translate-y-1/3" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-nyt-green mb-4">
              <span className="w-6 h-px bg-nyt-green" />
              Case Studies
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              Deep Dives Into Our<br />
              <span className="text-nyt-green">Impactful Projects</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Explore in-depth case studies detailing how we've helped businesses achieve their goals through innovative technology solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              <AppButton variant="primary" size="large" href="/contact">
                Start Your Project
              </AppButton>
            </div>
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
