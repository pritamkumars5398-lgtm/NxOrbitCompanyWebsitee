import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import { AppButton } from "../../shared/components/AppButton";
import { INDUSTRIES_DATA } from "../../core/data/industries";

export async function generateStaticParams() {
  return Object.keys(INDUSTRIES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = INDUSTRIES_DATA[slug];
  if (!data) return { title: "Not Found" };
  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = INDUSTRIES_DATA[slug];
  if (!data) notFound();

  return (
    <div className="min-h-screen bg-white text-nyt-charcoal font-sans antialiased">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute right-0 top-0 h-full opacity-[0.04]" viewBox="0 0 400 600" fill="none">
            <circle cx="300" cy="150" r="200" stroke="#6cb790" strokeWidth="60" />
            <circle cx="300" cy="450" r="120" stroke="#a5d088" strokeWidth="40" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-nyt-green mb-4">
              <span className="w-6 h-px bg-nyt-green" />
              {data.category}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-5">
              {data.tagline}
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-2xl">
              {data.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <AppButton variant="primary" size="large" href="/contact">
                {data.ctaText}
              </AppButton>
              <AppButton variant="outline" size="large" href="/portfolio">
                See Our Work
              </AppButton>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden shadow-sm">
            {data.heroStats.map((stat) => (
              <div key={stat.label} className="bg-white px-6 py-5 text-center">
                <p className="text-2xl md:text-3xl font-extrabold text-nyt-green">{stat.value}</p>
                <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-3">Solutions</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              What We Build for {data.title}
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              Domain knowledge meets engineering excellence. We understand your industry's unique challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feature, i) => (
              <div
                key={feature.title}
                className="group bg-slate-50 hover:bg-white border border-slate-100 hover:border-nyt-green/30
                  hover:shadow-lg hover:shadow-nyt-green/5 rounded-2xl p-6 transition-all duration-300"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `hsl(${(i * 47) % 360}, 60%, 95%)` }}
                >
                  <span className="text-sm font-black text-nyt-green">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-nyt-green transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="py-20 bg-gradient-to-br from-nyt-dark to-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-3">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              What We've Built for {data.title} Companies
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.useCases.map((useCase, i) => (
              <div
                key={useCase}
                className="flex items-start gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-colors duration-200"
              >
                <div className="w-6 h-6 rounded-full bg-nyt-green/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5L4 7L8 3" stroke="#6cb790" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-300">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-3">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Our {data.title} Project Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.process.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-nyt-green to-nyt-lime flex items-center justify-center shadow-sm shadow-nyt-green/20">
                    <span className="text-xs font-black text-white">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS ── */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "1400+", label: "Apps Delivered" },
              { value: "35+", label: "Countries Served" },
              { value: "200+", label: "Engineers On-Staff" },
              { value: "10+", label: "Years in Business" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-nyt-green">{stat.value}</p>
                <p className="text-sm font-semibold text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-br from-nyt-green/10 via-white to-nyt-lime/10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-4">Let's Talk</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5">
            Ready to Transform Your {data.title} Business?
          </h2>
          <p className="text-slate-500 text-lg mb-8 max-w-xl mx-auto">
            Get a free consultation with an engineer who understands your industry. No generic pitches — just real technical guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AppButton variant="primary" size="large" href="/contact">
              {data.ctaText}
            </AppButton>
            <AppButton variant="outline" size="large" href="tel:+919870140055">
              Call +91 987-014-0055
            </AppButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
