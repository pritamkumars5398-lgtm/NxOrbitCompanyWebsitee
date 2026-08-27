"use client";

import { useState } from "react";
import { ShieldCheck, ChevronDown, Award, HelpCircle } from "lucide-react";
import { Container, Eyebrow, Section } from "@/app/shared/ui/Layout";

export interface FaqItem {
  question: string;
  answer: string;
}

const DEFAULT_FAQS: FaqItem[] = [
  {
    question: "How long does integration take?",
    answer:
      "Pre-built integrations for SAP, Oracle, and Zoho take less than 2 weeks. Custom ERPs can be bound via our secure REST webhooks within 4 weeks.",
  },
  {
    question: "Is data storage isolated per tenant?",
    answer:
      "Yes, we use strict logical separation (multi-tenant branch isolation) to ensure zero data leakage between different regional branches or shipping operations.",
  },
  {
    question: "What SLA and security compliance do you offer?",
    answer:
      "We guarantee 99.9% uptime with SOC-2 compliant infrastructure, end-to-end data encryption, and regular third-party vulnerability assessments.",
  },
  {
    question: "Can we request custom feature developments?",
    answer:
      "Yes, our product engineering teams work closely with enterprise clients to scope, build, and deploy specialized modules tailored to your workflow.",
  },
];

interface TrustAndFaqSectionProps {
  faqs?: FaqItem[];
  className?: string;
}

/**
 * Reusable Trust Certifications & Frequently Asked Questions section.
 * Clean minimal light surface with crisp white cards and interactive FAQ accordions.
 */
export function TrustAndFaqSection({ faqs = DEFAULT_FAQS, className }: TrustAndFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Section
      tone="sunken"
      spacing="lg"
      className={`border-t border-hairline bg-slate-100/70 ${className || ""}`}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">

          {/* ── Left Column: Trust Certifications ── */}
          <div className="flex flex-col items-start">
            <Eyebrow tone="brand">TRUST CERTIFICATIONS</Eyebrow>

            <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight mt-3 mb-4">
              ISO 9001 Quality Guaranteed
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-lg">
              NXTorbit operates under strict international quality guidelines. Our products undergo rigorous functional testing, stress auditing, and regular third-party security audits to ensure compliance with enterprise parameters globally.
            </p>

            {/* ISO Certification Badge Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-300 bg-white p-5.5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-md">
              <div className="relative flex items-center gap-4">
                <div className="flex size-13 shrink-0 items-center justify-center rounded-xl bg-teal-50/80 border border-teal-200 text-teal-600 shadow-xs transition-transform duration-300 group-hover:scale-105">
                  <ShieldCheck className="size-7" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-extrabold text-slate-900 tracking-wide">ISO 9001:2015</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                      <Award className="size-3" /> Certified
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 mt-0.5 font-medium">
                    Quality Management System Certified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Questions & Answers ── */}
          <div className="flex flex-col">
            <Eyebrow tone="brand">QUESTIONS & ANSWERS</Eyebrow>

            <h2 className="text-display-sm sm:text-display-md text-slate-900 font-extrabold tracking-tight mt-3 mb-6">
              Frequently Asked Questions
            </h2>

            {/* FAQ Accordion Module List */}
            <div className="space-y-3.5">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-white border-teal-500 shadow-md shadow-teal-500/10 ring-1 ring-teal-500/20"
                        : "bg-white border-slate-300/80 shadow-xs hover:border-slate-400 hover:shadow-xs"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-4 sm:p-4.5 text-left focus:outline-none"
                    >
                      <span className="flex items-center gap-3 pr-2">
                        <HelpCircle
                          className={`size-4 shrink-0 transition-colors duration-200 ${
                            isOpen ? "text-teal-600" : "text-slate-400"
                          }`}
                        />
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                          {faq.question}
                        </h4>
                      </span>
                      <span
                        className={`flex size-7 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
                          isOpen ? "bg-teal-50 text-teal-600 border border-teal-200" : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        <ChevronDown
                          className={`size-4 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4.5 pt-0 sm:px-4.5 sm:pb-4.5">
                        <div className="border-t border-slate-100 pt-3 ml-7">
                          <p className="text-xs sm:text-[0.8125rem] text-slate-600 leading-relaxed font-normal">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
