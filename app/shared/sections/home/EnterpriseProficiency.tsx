"use client";

import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { Container, Section } from "@/app/shared/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";

interface AccordionItem {
  id: string;
  title: string;
  description: string;
  pills: string[];
}

const ACCORDION_ITEMS: AccordionItem[] = [
  {
    id: "privacy",
    title: "Data Privacy & Architecture Audit",
    description:
      "Comprehensive auditing of data flows, encryption standards at rest and in transit, and zero-trust architectural validations for high-security enterprise environments.",
    pills: ["ISO 27001", "Zero-Trust Architecture", "End-to-End Encryption", "Data Anonymization"],
  },
  {
    id: "risk",
    title: "Enterprise Risk Management",
    description:
      "Proactive threat modeling, continuous vulnerability scanning, and automated fallback protocol design to guarantee operational resilience and zero-day protection.",
    pills: ["Threat Modeling", "Penetration Testing", "Disaster Recovery", "SLA Assurance"],
  },
  {
    id: "governance",
    title: "Responsible AI & Model Governance",
    description:
      "Ensuring deep compliance for automated decision systems. We align intelligence engines with current federal regulations, model lineage tracking, and bias-checking frameworks.",
    pills: ["DPDP Act", "RBI Tech Directives", "EU AI Act Compliance", "FTC Guidelines"],
  },
  {
    id: "regulatory",
    title: "Industry Regulatory Alignments",
    description:
      "Tailored compliance engines pre-built for FinTech, Healthcare, and Defense sectors, ensuring instant audit readiness and seamless certification.",
    pills: ["HIPAA Compliance", "PCI DSS v4.0", "FINRA Directives", "FedRAMP"],
  },
  {
    id: "global",
    title: "Global Compliance Engineering",
    description:
      "Cross-border data sovereignty mapping and localized regulatory frameworks engineered for multi-region cloud deployments and global operations.",
    pills: ["GDPR Compliance", "CCPA / CPRA", "Cross-Border Data", "Sovereign Cloud"],
  },
];

const INDUSTRY_RECOGNITIONS = [
  {
    name: "Clutch",
    year: "2024",
    role: "Top App Dev Company",
    rating: "4.9",
    dotColor: "bg-red-500",
  },
  {
    name: "GoodFirms",
    year: "2024",
    role: "Top Mobile Developer",
    rating: "4.8",
    dotColor: "bg-cyan-500",
  },
  {
    name: "AppFutura",
    year: "2023",
    role: "Top Development Firm",
    rating: "4.8",
    dotColor: "bg-orange-500",
  },
  {
    name: "Manifest",
    year: "2024",
    role: "Most Reviewed Company",
    rating: "4.9",
    dotColor: "bg-purple-500",
  },
];

const CERTIFICATIONS = [
  { title: "ISO 27001", subtitle: "Information Security", dotColor: "bg-blue-500" },
  { title: "SOC 2", subtitle: "Type II Certified", dotColor: "bg-emerald-500" },
  { title: "CMMI", subtitle: "Level 3", dotColor: "bg-amber-500" },
  { title: "GDPR", subtitle: "Compliant", dotColor: "bg-teal-500" },
  { title: "HIPAA", subtitle: "Secure Systems", dotColor: "bg-purple-500" },
  { title: "PCI DSS", subtitle: "Payments Ready", dotColor: "bg-pink-500" },
];

/**
 * Enterprise Proficiency section with compliance accordion, industry recognition, and certifications.
 */
export function EnterpriseProficiency() {
  const [openAccordion, setOpenAccordion] = useState<string>("governance");

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? "" : id));
  };

  return (
    <Section tone="none" spacing="none" id="enterprise-proficiency" className="overflow-hidden pt-2 pb-4 sm:pt-4 sm:pb-6 lg:pt-6 lg:pb-8 bg-transparent">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#070D1B] p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Subtle background glow effect */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 -left-40 size-96 rounded-full bg-teal-500/10 blur-[120px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -right-40 size-96 rounded-full bg-brand-500/10 blur-[120px]"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">
            {/* Left Column: Heading, Accordion, Stats */}
            <div className="flex flex-col">
              <Reveal from="up">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-teal-400">
                  ENTERPRISE GRADE
                </span>
              </Reveal>

              <Reveal from="up" delay={0.06}>
                <h2 className="mt-3 text-display-md sm:text-display-lg font-bold text-white leading-tight">
                  Enterprise Proficiency with{" "}
                  <span className="text-teal-400">Absolute Precision</span>
                </h2>
              </Reveal>

              <Reveal from="up" delay={0.12}>
                <p className="mt-4 text-base leading-relaxed text-ink-300 max-w-xl">
                  We design and ship software that meets the toughest enterprise standards — from SOC 2 audits to GDPR compliance — giving your stakeholders full confidence from day one.
                </p>
              </Reveal>

              {/* Accordion List */}
              <div className="mt-8 flex flex-col divide-y divide-white/10 border-t border-b border-white/10">
                {ACCORDION_ITEMS.map((item) => {
                  const isOpen = openAccordion === item.id;
                  return (
                    <div key={item.id} className="py-4">
                      <button
                        type="button"
                        onClick={() => toggleAccordion(item.id)}
                        className="flex w-full items-center justify-between text-left transition-colors"
                      >
                        <span
                          className={`text-base font-semibold transition-colors ${
                            isOpen ? "text-teal-400" : "text-white hover:text-teal-300"
                          }`}
                        >
                          • {item.title}
                        </span>
                        <ChevronDown
                          className={`size-5 text-ink-400 transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-teal-400" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="mt-3 pl-4">
                          <p className="text-sm leading-relaxed text-ink-300">
                            {item.description}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.pills.map((pill) => (
                              <span
                                key={pill}
                                className="inline-flex items-center rounded-full bg-teal-950/80 border border-teal-500/40 px-3 py-1 text-xs font-medium text-teal-300 shadow-sm"
                              >
                                {pill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Industry Recognition & Certifications */}
            <div className="flex flex-col gap-10">
              {/* Industry Recognition */}
              <div>
                <h3 className="text-xs font-semibold tracking-widest text-ink-400 uppercase mb-4">
                  INDUSTRY RECOGNITION
                </h3>
                <Stagger stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {INDUSTRY_RECOGNITIONS.map((item) => (
                    <StaggerItem
                      key={item.name}
                      from="up"
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-brand-300/40 hover:bg-white/[0.07] hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 font-semibold text-white text-sm">
                          <span className={`size-2.5 rounded-full ${item.dotColor}`} />
                          {item.name}
                        </div>
                        <span className="text-xs text-ink-400 font-mono">{item.year}</span>
                      </div>
                      <p className="mt-1.5 text-xs text-ink-300">{item.role}</p>
                      <div className="mt-4 flex items-center gap-1 text-amber-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="ml-1 text-xs font-bold text-white">{item.rating}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>

              {/* Certifications & Compliance */}
              <div>
                <h3 className="text-xs font-semibold tracking-widest text-ink-400 uppercase mb-4">
                  CERTIFICATIONS & COMPLIANCE
                </h3>
                <Stagger stagger={0.06} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {CERTIFICATIONS.map((cert) => (
                    <StaggerItem
                      key={cert.title}
                      from="up"
                      className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center transition-all duration-300 hover:border-brand-300/40 hover:bg-white/[0.07] hover:-translate-y-1 hover:shadow-md"
                    >
                      <span className={`size-2.5 rounded-full ${cert.dotColor} mb-2.5`} />
                      <span className="text-sm font-bold text-white">{cert.title}</span>
                      <span className="mt-1 text-[11px] leading-tight text-ink-300">
                        {cert.subtitle}
                      </span>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
