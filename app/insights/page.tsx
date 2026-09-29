import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Cpu, Cloud, Warehouse, Workflow } from "lucide-react";
import { INSIGHTS_DATA } from "@/app/core/data/insights";
import { Container, Eyebrow } from "@/app/shared/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";
import { CallToAction } from "@/app/shared/sections/CallToAction";
import { Breadcrumb } from "@/app/shared/ui/Breadcrumb";
import { cn } from "@/app/core/lib/cn";

export const metadata: Metadata = {
  title: "Executive Insights & Engineering Perspectives | NXT Orbit",
  description: "Proven strategies, architectural patterns, and actionable analysis for enterprise technology and operations leaders.",
};

const ICONS_MAP: Record<string, React.ElementType> = {
  "erp-implementation": Layers,
  "modernizing-legacy-systems": BookOpen,
  "ai-in-enterprise": Cpu,
  "cloud-devops": Cloud,
  "warehouse-digital-transformation": Warehouse,
  "business-process-automation": Workflow,
};

export default function InsightsIndexPage() {
  const insights = Object.values(INSIGHTS_DATA);

  return (
    <div className="relative isolate overflow-hidden bg-white text-slate-900">
      {/* ── Breadcrumb Bar ── */}
      <div className="border-b border-slate-200/80 bg-slate-50/60 py-3.5">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Insights" }]} />
        </Container>
      </div>

      {/* ── Hero ── */}
      <section className="relative pt-16 pb-20 sm:pt-20 sm:pb-24 bg-[#06131F] text-white overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-40 size-[36rem] rounded-full bg-teal-500/10 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 right-0 size-[40rem] rounded-full bg-blue-500/10 blur-[150px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl flex flex-col items-start gap-5">
            <Reveal from="up">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-teal-400/30 bg-teal-950/60 px-4 py-1.5 backdrop-blur-md">
                <span className="size-2 rounded-full bg-teal-400 animate-pulse" />
                <Eyebrow tone="light">EXECUTIVE PERSPECTIVES</Eyebrow>
              </div>
            </Reveal>

            <Reveal from="up" delay={0.06}>
              <h1 className="text-display-md sm:text-display-lg lg:text-display-xl font-extrabold text-white tracking-tight leading-[1.12]">
                Insights for Business & Technology Leaders
              </h1>
            </Reveal>

            <Reveal from="up" delay={0.12}>
              <p className="text-lead text-slate-300 leading-relaxed font-normal">
                Pragmatic architectural patterns, deployment playbooks, and battle-tested guidance from enterprise software engineers who build mission-critical systems.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Insights Cards Directory ── */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <Container>
          <Stagger stagger={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((item) => {
              const Icon = ICONS_MAP[item.slug] || Layers;
              return (
                <StaggerItem key={item.slug} from="up">
                  <Link
                    href={`/insights/${item.slug}`}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-teal-500 hover:-translate-y-1.5 h-full"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1 rounded-lg bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs font-mono uppercase tracking-wider">
                          <Icon className="size-3.5 text-teal-400" />
                          <span>{item.readTime}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#008c83] block mb-2">
                          {item.category}
                        </span>
                        <h2 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-[#008c83] transition-colors mb-2.5">
                          {item.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                          {item.executiveSummary}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100 text-xs font-bold text-[#008c83] group-hover:text-[#005e70]">
                      <span>Read Perspective</span>
                      <span className="size-8 rounded-full bg-teal-50 flex items-center justify-center group-hover:bg-[#008c83] group-hover:text-white transition-all">
                        <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* ── Call To Action ── */}
      <CallToAction
        eyebrow="READY TO BUILD?"
        title="Let's build technology that moves your business forward."
        description="Whether you're modernizing legacy systems, implementing enterprise applications, building digital platforms, or planning your next transformation initiative."
        primary={{ label: "Book a Consultation", href: "/contact" }}
        secondary={{ label: "Talk to Our Team", href: "/contact" }}
      />
    </div>
  );
}
