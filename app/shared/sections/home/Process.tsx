"use client";

import { Code2, PencilRuler, Rocket, Search } from "lucide-react";
import { PROCESS } from "@/app/core/data/home";
import { ProcessArcLayout } from "@/app/shared/sections/ProcessArcLayout";

/** One icon per delivery phase, in PROCESS order. */
const PHASE_ICONS = [Search, PencilRuler, Code2, Rocket];

/**
 * Delivery Process section, built on the same circular-hub + curved-arc
 * layout used by the industry, service and technology pages.
 */
export function Process() {
  return (
    <ProcessArcLayout
      id="process"
      eyebrow="DELIVERY PROCESS"
      title={
        <>
          How We Work
          <br />
          A process you can see through.
        </>
      }
      subtitle="Four phases, each with a defined output you can hold us to — not a status deck standing in for working software."
      steps={PROCESS.map((phase, idx) => ({ ...phase, icon: PHASE_ICONS[idx] }))}
      rowHeight={150}
      hubClassName="lg:max-w-[440px] xl:max-w-[480px]"
    />
  );
}
