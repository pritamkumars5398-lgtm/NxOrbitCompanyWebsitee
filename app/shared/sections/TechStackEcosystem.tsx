"use client";

import React from "react";
import { 
  Atom, Zap, Code, Layers, Workflow, Sparkles, Terminal, ShieldCheck, 
  Globe, Server, Cpu, Database, Cloud, FileCode, Cpu as CpuIcon, 
  GitBranch, Box, Lock, Smartphone, RefreshCw, CheckCircle2, ChevronRight,
  Flame, HardDrive, Layers3, Activity, Command
} from "lucide-react";
import { cn } from "@/app/core/lib/cn";
import { Container, Section } from "@/app/shared/ui/Layout";
import { Stagger, StaggerItem } from "@/app/shared/motion/Reveal";

interface TechStackEcosystemProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  techStack: string[];
}

/** Meta category and icon resolver for any technology string */
function getTechItemMeta(techName: string) {
  const name = techName.toLowerCase();
  
  if (name.includes("react") || name.includes("flutter") || name.includes("swift") || name.includes("kotlin") || name.includes("next")) {
    return {
      category: "Frontend",
      icon: Atom,
    };
  }
  
  if (name.includes("node") || name.includes("express") || name.includes("nest") || name.includes("dart") || name.includes("coroutines")) {
    return {
      category: "Backend",
      icon: Server,
    };
  }

  if (name.includes("postgre") || name.includes("mongo") || name.includes("redis") || name.includes("prisma") || name.includes("room") || name.includes("hive")) {
    return {
      category: "Database",
      icon: Database,
    };
  }

  if (name.includes("docker") || name.includes("fastlane") || name.includes("aws") || name.includes("vercel") || name.includes("app store") || name.includes("play console")) {
    return {
      category: "Cloud & Tools",
      icon: Cloud,
    };
  }

  if (name.includes("expo") || name.includes("redux") || name.includes("query") || name.includes("reanimated") || name.includes("bloc") || name.includes("hilt")) {
    return {
      category: "Frontend",
      icon: Zap,
    };
  }

  return {
    category: "Cloud & Tools",
    icon: Code,
  };
}

export function TechStackEcosystem({
  eyebrow = "ECOSYSTEM",
  title = "Libraries and services we run in production.",
  description = "Tested, scalable building blocks selected for performance and long-term stability.",
  techStack,
}: TechStackEcosystemProps) {
  // Build items with category and icon
  const items = techStack.map((name) => {
    const meta = getTechItemMeta(name);
    return {
      name,
      category: meta.category,
      icon: meta.icon,
    };
  });

  return (
    <Section tone="none" spacing="lg" className="relative overflow-hidden py-8 sm:py-12 lg:py-14 bg-[#f8fafc] border-t border-b border-slate-200/80">
      <Container>
        {/* Header Row: Title */}
        <div className="mb-5 sm:mb-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#008c83] bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/80 mb-2 inline-block shadow-xs">
            {eyebrow}
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1.5 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* ── Dark Slate Center Contrast Box with 3D White Cards Grid (Reference Image Parity) ── */}
        <div className="relative rounded-2xl bg-[#07121B] p-4 sm:p-6 md:p-7 shadow-xl shadow-slate-950/20 border border-slate-800/80 overflow-hidden">
          {/* Ambient high-tech background glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -left-32 size-80 rounded-full bg-teal-500/10 blur-[100px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -right-32 size-80 rounded-full bg-cyan-500/10 blur-[100px]"
          />

          <Stagger stagger={0.05} className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {items.map((item) => {
              const IconComponent = item.icon;

              return (
                <StaggerItem
                  key={item.name}
                  from="up"
                  distance={15}
                  className="group relative flex items-center gap-3.5 rounded-xl bg-white p-3.5 sm:p-4 shadow-sm shadow-slate-950/20 border border-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-teal-400"
                >
                  {/* Left Circular Icon Badge */}
                  <div className="flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-800 border border-slate-200/80 shadow-xs transition-colors duration-300 group-hover:bg-teal-50 group-hover:text-[#008c83] group-hover:border-teal-200">
                    <IconComponent className="size-5 stroke-[1.8]" />
                  </div>

                  {/* Right Title & Category Badge */}
                  <div className="flex flex-col min-w-0 pr-1">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-tight group-hover:text-[#006B7D] transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[11px] font-semibold text-slate-400 mt-0.5">
                      {item.category}
                    </span>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
