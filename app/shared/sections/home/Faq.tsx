"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Award, Compass, LifeBuoy, Plus, PlugZap, ShieldCheck, Timer, Wrench, type LucideIcon } from "lucide-react";
import { FAQS } from "@/app/core/constants/app.constant";
import { EASE } from "@/app/core/motion/tokens";
import { cn } from "@/app/core/lib/cn";
import { Button } from "@/app/shared/ui/Button";
import { Container, Eyebrow } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";

const FAQ_IMAGE =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop";

/** One topic icon per FAQ, in FAQS order: timeline, existing systems, support, compliance, custom build, discovery. */
const FAQ_ICONS: LucideIcon[] = [Timer, PlugZap, LifeBuoy, ShieldCheck, Wrench, Compass];

/** Single-open FAQ list, each question led by a topic icon. */
function FaqList() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <ol className="border-t border-slate-200">
      {FAQS.map((faq, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        const Icon = FAQ_ICONS[index % FAQ_ICONS.length];

        return (
          <li key={faq.q} className="relative border-b border-slate-200">
            {/* Active marker */}
            <span
              aria-hidden
              className={cn(
                "absolute left-0 top-0 h-full w-0.5 origin-top bg-[#008c83] transition-transform duration-300",
                isOpen ? "scale-y-100" : "scale-y-0",
              )}
            />

            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="group grid w-full grid-cols-[2.25rem_1fr_auto] items-center gap-3 py-5 pl-4 pr-1 text-left sm:grid-cols-[2.5rem_1fr_auto] sm:gap-4 sm:py-6 sm:pl-6"
              >
                <span
                  aria-hidden
                  className={cn(
                    "flex size-9 items-center justify-center rounded-xl border transition-colors duration-200 sm:size-10",
                    isOpen
                      ? "border-teal-200 bg-teal-50 text-[#008c83]"
                      : "border-slate-200 bg-slate-50 text-slate-500 group-hover:text-[#008c83]",
                  )}
                >
                  <Icon className="size-4.5 sm:size-5" />
                </span>
                <span
                  className={cn(
                    "text-base sm:text-lg font-semibold transition-colors duration-200",
                    isOpen ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900",
                  )}
                >
                  {faq.q}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300",
                    isOpen
                      ? "rotate-45 border-[#008c83] bg-[#008c83] text-white"
                      : "border-slate-200 bg-white text-slate-500 group-hover:border-slate-300",
                  )}
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE.outExpo }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pl-[calc(1rem+2.25rem+0.75rem)] pr-12 text-sm sm:text-base leading-relaxed text-slate-600 sm:pl-[calc(1.5rem+2.5rem+1rem)]">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ol>
  );
}

/**
 * FAQ & Trust Assurance.
 * - FAQ: heading, CTA and a team photo on the left; icon-led question list on the right.
 * - Trust band: ISO 9001 certification as its own dark full-width strip below.
 */
export function Faq() {
  return (
    <section className="relative isolate border-t border-slate-200/90 bg-white py-20 sm:py-24" id="faq">
      <Container>
        {/* ── FAQ ── */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="flex flex-col gap-5 lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <Eyebrow tone="brand">QUESTIONS & ANSWERS</Eyebrow>
            <h2 className="text-display-md sm:text-display-lg text-slate-900 font-extrabold">
              The things people ask before signing.
            </h2>
            <p className="text-lead text-slate-600">
              Straight answers. If yours isn&apos;t here, an engineer will answer it on the call —
              not a salesperson.
            </p>
            <div className="pt-1">
              <Button href="/contact" variant="primary" withArrow className="rounded-full">
                Ask us directly
              </Button>
            </div>

            <div className="mt-4 hidden overflow-hidden rounded-2xl border border-slate-200 sm:block">
              <img
                src={FAQ_IMAGE}
                alt="NXTorbit engineers working at their desks"
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal from="up" delay={0.1} className="lg:col-span-7">
            <FaqList />
          </Reveal>
        </div>

        {/* ── Trust Certification Band ── */}
        <Reveal from="up" className="mt-16 sm:mt-20">
          <div className="grid gap-8 overflow-hidden rounded-3xl bg-[#0a2328] p-6 sm:p-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="flex items-center gap-5 sm:gap-6 lg:col-span-6">
              {/* Certification seal */}
              <div className="relative flex size-20 shrink-0 items-center justify-center rounded-full border border-dashed border-teal-400/60 sm:size-24">
                <div className="flex size-14 items-center justify-center rounded-full bg-teal-500 text-white sm:size-17">
                  <ShieldCheck className="size-7 sm:size-8" />
                </div>
              </div>

              <div className="flex min-w-0 flex-col gap-1.5">
                <span className="text-2xs font-bold uppercase tracking-widest text-teal-300">
                  Trust Certifications
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-display-sm font-bold text-white">ISO 9001:2015</h3>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-0.5 text-2xs font-bold text-emerald-300">
                    <Award className="size-3" /> Certified
                  </span>
                </div>
                <span className="text-sm text-slate-300">Quality Management System Guaranteed</span>
              </div>
            </div>

            <p className="border-t border-white/10 pt-6 text-sm sm:text-base leading-relaxed text-slate-300 lg:col-span-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              NXTorbit operates under strict international quality guidelines. Our products undergo rigorous functional testing, stress auditing, and regular third-party security audits to ensure enterprise compliance globally.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
