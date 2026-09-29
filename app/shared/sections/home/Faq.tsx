"use client";

import { ShieldCheck, Award } from "lucide-react";
import { FAQS } from "@/app/core/constants/app.constant";
import { Accordion } from "@/app/shared/ui/Accordion";
import { Button } from "@/app/shared/ui/Button";
import { Container, Eyebrow } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";

/**
 * FAQ & Trust Assurance.
 * Split layout: Left column carries consultation heading, direct contact action,
 * and official ISO 9001 quality certification assurance.
 * Right column carries interactive question accordions.
 */
export function Faq() {
  const items = FAQS.map((faq) => ({
    question: faq.q,
    answer: faq.a,
  }));

  return (
    <section
      className="relative isolate overflow-hidden border-t border-slate-200/90 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F1F5F9] py-20 sm:py-24"
      id="faq"
    >
      {/* Ambient background soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 size-96 rounded-full bg-teal-500/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-0 size-96 rounded-full bg-slate-300/20 blur-3xl"
      />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16 items-start">
          <Reveal className="flex flex-col gap-5 lg:sticky lg:top-32 lg:self-start">
            <Eyebrow tone="brand">QUESTIONS & ANSWERS</Eyebrow>
            <h2 className="text-display-md sm:text-display-lg text-slate-900 font-extrabold tracking-tight">
              The things people ask before signing.
            </h2>
            <p className="text-lead text-slate-600 font-normal">
              Straight answers. If yours isn&apos;t here, an engineer will answer it on the call —
              not a salesperson.
            </p>
            <div className="pt-1">
              <Button href="/contact" variant="primary" withArrow className="self-start rounded-full">
                Ask us directly
              </Button>
            </div>

            {/* ISO 9001 Quality Guaranteed & Certified Trust Card */}
            <div className="mt-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-300 hover:border-teal-500/50 hover:shadow-md">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
                  Trust Certifications
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 border border-teal-200 text-teal-600 shadow-xs">
                  <ShieldCheck className="size-6 text-teal-600" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-extrabold text-slate-900 tracking-wide">
                      ISO 9001:2015
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                      <Award className="size-3" /> Certified
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 mt-0.5 font-medium">
                    Quality Management System Guaranteed
                  </span>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                NXTorbit operates under strict international quality guidelines. Our products undergo rigorous functional testing, stress auditing, and regular third-party security audits to ensure enterprise compliance globally.
              </p>
            </div>
          </Reveal>

          <Reveal from="up" delay={0.1}>
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">
              <Accordion items={items} defaultOpen={0} />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
