import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
import { AppButton } from "../../shared/components/AppButton";
import { SERVICES_DATA } from "../../core/data/services";

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = SERVICES_DATA[slug];
  if (!data) return { title: "Not Found" };
  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = SERVICES_DATA[slug];
  if (!data) notFound();

  return (
    <div className="min-h-screen bg-white text-nyt-charcoal font-sans antialiased">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-[#0A2E4D] via-[#0A2E4D] to-[#006B7D] py-20 lg:py-28 overflow-hidden text-white">
        <div className="relative mx-auto max-w-7xl px-6 z-10">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3CCFC7] mb-4 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#3CCFC7]/30">
              <span className="w-2 h-2 rounded-full bg-[#82C458] animate-pulse" />
              {data.category}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              {data.tagline}
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl">
              {data.description}
            </p>
            <div className="flex flex-row items-center gap-3 flex-wrap sm:flex-nowrap">
              <AppButton variant="primary" size="large" href="/contact" className="min-w-[200px] sm:min-w-[220px]">
                {data.ctaText}
              </AppButton>
              <AppButton variant="outline" size="large" href="/portfolio" className="min-w-[200px] sm:min-w-[220px] !text-white !border-[#3CCFC7] hover:!bg-[#3CCFC7] hover:!text-[#0A2E4D]">
                View Our Work
              </AppButton>
            </div>
          </div>

          {/* Stats row with Dark Glassmorphism */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.heroStats.map((stat) => (
              <div key={stat.label} className="glass-panel-dark rounded-2xl px-6 py-6 text-center glass-card-hover">
                <p className="text-3xl md:text-4xl font-extrabold text-[#3CCFC7]">{stat.value}</p>
                <p className="text-xs font-semibold text-slate-300 mt-1 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-3">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              What We Deliver in {data.title}
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              Every engagement is shaped around your goals — not a template. Here's what our team brings to the table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feature, i) => (
              <div
                key={feature.title}
                className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-nyt-green/30
                  hover:shadow-lg hover:shadow-nyt-green/5 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-nyt-green/10 flex items-center justify-center mb-4">
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

      {/* ── PROCESS ── */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-3">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Our Delivery Process</h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              A clear, collaborative process from first conversation to live product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.process.map((step) => (
              <div key={step.step} className="relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-nyt-green to-nyt-lime flex items-center justify-center">
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

      {/* ── TECH STACK ── */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-3">Technology Stack</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Tools & Technologies We Use</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {data.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-semibold text-slate-700
                  hover:border-nyt-green hover:text-nyt-green hover:bg-nyt-green/5 transition-colors duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-gradient-to-br from-nyt-dark to-slate-900">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-nyt-green mb-4">Ready to Start?</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
            Let's Build Something Exceptional Together
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Get a free 30-minute consultation with one of our {data.title.toLowerCase()} experts. No commitment required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AppButton variant="primary" size="large" href="/contact">
              Schedule a Free Consultation
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
