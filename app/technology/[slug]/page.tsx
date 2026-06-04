import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import { AppButton } from "../../shared/components/AppButton";
import { TECHNOLOGY_DATA } from "../../core/data/technology";

export async function generateStaticParams() {
  return Object.keys(TECHNOLOGY_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = TECHNOLOGY_DATA[slug];
  if (!data) return { title: "Not Found" };
  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function TechnologyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = TECHNOLOGY_DATA[slug];
  if (!data) notFound();

  return (
    <div className="min-h-screen bg-white text-nyt-charcoal font-sans antialiased">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-nyt-dark via-slate-900 to-slate-800 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nyt-green/10 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-nyt-lime/5 rounded-full -translate-x-1/2 translate-y-1/2" />
          {/* Grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-nyt-green mb-4">
              <span className="w-6 h-px bg-nyt-green" />
              {data.category}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              {data.tagline}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {data.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <AppButton variant="primary" size="large" href="/contact">
                {data.ctaText}
              </AppButton>
              <AppButton
                variant="ghost"
                size="large"
                href="/#work"
                className="text-white border border-white/20 hover:bg-white/10 hover:text-white"
              >
                View Portfolio
              </AppButton>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {data.heroStats.map((stat) => (
              <div key={stat.label} className="bg-white/5 backdrop-blur-sm px-6 py-5 text-center">
                <p className="text-2xl md:text-3xl font-extrabold text-nyt-green">{stat.value}</p>
                <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-3">Expertise</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Our {data.title} Capabilities
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              Deep expertise, proven patterns, and a track record that speaks for itself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feature, i) => (
              <div
                key={feature.title}
                className="group bg-slate-50 hover:bg-white border border-slate-100 hover:border-nyt-green/30
                  hover:shadow-xl hover:shadow-nyt-green/5 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-nyt-green/10 flex items-center justify-center mb-4 group-hover:bg-nyt-green group-hover:scale-110 transition-all duration-300">
                  <span className="text-sm font-black text-nyt-green group-hover:text-white transition-colors">
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

      {/* ── HOW WE WORK ── */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              From Kickoff to Launch
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              A structured, transparent process that keeps you informed at every stage.
            </p>
          </div>

          <div className="relative">
            {/* Connector line — desktop only */}
            <div className="hidden lg:block absolute top-8 left-[calc(16.67%+16px)] right-[calc(16.67%+16px)] h-px bg-gradient-to-r from-nyt-green/20 via-nyt-green/40 to-nyt-green/20" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.process.map((step) => (
                <div key={step.step} className="relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-nyt-green to-nyt-lime flex items-center justify-center shadow-md shadow-nyt-green/30">
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
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-3">Stack</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8">
            Tools & Libraries We Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {data.techStack.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm font-semibold text-slate-700
                  hover:border-nyt-green hover:text-nyt-green hover:bg-nyt-green/5 transition-colors duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NXTORBIT ── */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-3">Why NXTorbit</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5">
                The Right Partner for Your {data.title} Project
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                We've spent 10+ years refining what it means to be a great engineering partner. Our teams are senior, our processes are proven, and our commitment to quality is non-negotiable.
              </p>
              <ul className="space-y-3">
                {[
                  "Senior engineers with 5–15 years of experience",
                  "Agile sprints with weekly demos and full transparency",
                  "Dedicated project manager and tech lead on every engagement",
                  "Post-launch support and SLA-backed maintenance",
                  "Fixed-price or time-and-materials engagement models",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-1 w-4 h-4 rounded-full bg-nyt-green/15 flex items-center justify-center shrink-0">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 4L3 6L7 2" stroke="#6cb790" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "1400+", label: "Projects Delivered", sub: "across all technologies" },
                { value: "35+", label: "Countries", sub: "global client base" },
                { value: "10+", label: "Years in Business", sub: "founded in 2011" },
                { value: "200+", label: "Engineers", sub: "on staff globally" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center">
                  <p className="text-2xl font-extrabold text-nyt-green">{stat.value}</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">{stat.label}</p>
                  <p className="text-xs text-slate-400 mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-br from-nyt-dark via-slate-900 to-slate-800">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-4">Get Started</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
            Ready to Build with {data.title}?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Talk to our engineers about your project. We'll scope it, price it, and tell you exactly how we'd approach it — for free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AppButton variant="primary" size="large" href="/contact">
              {data.ctaText}
            </AppButton>
            <AppButton variant="outline" size="large" href="/contact">
              Schedule a Call
            </AppButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
