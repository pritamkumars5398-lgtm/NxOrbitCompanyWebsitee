"use client";

import { CheckCircle2, Activity, Cpu, Server, Warehouse } from "lucide-react";
import { Container, Section } from "@/app/shared/ui/Layout";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";
import { Button } from "@/app/shared/ui/Button";

interface ProofCard {
  id: string;
  title: string;
  icon: React.ElementType;
  context: string;
  solution: string;
  result: string;
}

const PROOF_CARDS: ProofCard[] = [
  {
    id: "wms",
    title: "Integrated ERP & Warehouse Management System (WMS)",
    icon: Warehouse,
    context: "Complex multi-facility warehouse operations requiring sub-second inventory accuracy.",
    solution: "Enterprise WMS featuring direct bi-directional synchronization with SAP and Tally systems.",
    result: "Removed manual inventory reconciliations, automated GRN and picking, and enabled real-time stock visibility.",
  },
  {
    id: "freight",
    title: "End-to-End Freight Execution & Tracking Platform",
    icon: Activity,
    context: "Fragmented freight operations spanning quotes, dispatch, and transit.",
    solution: "Unified cloud platform connecting sales pipelines, operational manifests, and live shipment tracking.",
    result: "Centralized shipment execution workflows with live milestone visibility for shippers and operators.",
  },
  {
    id: "financial",
    title: "Decoupled Core Financial & Accounts Module",
    icon: Server,
    context: "Legacy enterprise environment needing upgraded billing capabilities without risking core system downtime.",
    solution: "Standalone financial microservice integrated with live transactional databases via secure REST APIs.",
    result: "Delivered modern financial reporting and automated accounting without disturbing legacy core operations.",
  },
  {
    id: "ai-support",
    title: "Enterprise Conversational AI Support Platform",
    icon: Cpu,
    context: "Internal and customer teams losing hours retrieving technical information from fragmented documentation.",
    solution: "AI-powered conversational engine querying internal knowledge bases in real time.",
    result: "Enabled instant query resolution while maintaining strict data governance and access control.",
  },
];

/**
 * Section 6 — Our Solutions in Action
 * 4 proof cards (Context / Solution / Result structure) as per designer specification.
 */
export function SolutionsInAction() {
  return (
    <Section tone="white" spacing="lg" id="solutions-in-action" className="relative isolate overflow-hidden bg-slate-50/50 py-16 sm:py-20">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal className="flex flex-col items-start gap-3 max-w-2xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#008c83]">
              OUR SOLUTIONS IN ACTION
            </span>
            <h2 className="text-display-sm sm:text-display-md lg:text-display-lg text-slate-900 font-bold leading-tight">
              Proven Capability in Mission-Critical Environments
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/contact" variant="primary" withArrow className="self-start">
              Discuss Your Architecture
            </Button>
          </Reveal>
        </div>

        <Stagger stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROOF_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <StaggerItem
                key={card.id}
                from="up"
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:border-[#00d2c4] hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex flex-col gap-5">
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-teal-50 text-[#008c83] group-hover:bg-[#00d2c4] group-hover:text-[#01141b] transition-colors">
                      <Icon className="size-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      CASE 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-[#008c83] transition-colors">
                    {card.title}
                  </h3>

                  {/* 3 Proof Layers */}
                  <div className="flex flex-col gap-3.5 pt-2 border-t border-slate-100">
                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Operational Context
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {card.context}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
                        Engineered Solution
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        {card.solution}
                      </p>
                    </div>

                    <div className="rounded-xl bg-teal-50/70 border border-teal-100 p-3.5 flex flex-col gap-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#008c83] flex items-center gap-1.5">
                        <CheckCircle2 className="size-3.5 text-[#00a896]" />
                        Business Result
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
                        {card.result}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
