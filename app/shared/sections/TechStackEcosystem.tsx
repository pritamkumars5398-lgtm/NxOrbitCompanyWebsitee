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
    <Section tone="none" spacing="lg" className="relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-[#f8fafc] border-t border-b border-slate-200/80">
      <Container>
        {/* Header Row: Title */}
        <div className="mb-8 sm:mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#008c83] bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200/80 mb-3 inline-block shadow-xs">
            {eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="text-sm sm:text-base text-slate-600 font-normal mt-2 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* ── Dark Slate Center Contrast Box with 3D White Cards Grid (Reference Image Parity) ── */}
        <div className="relative rounded-[2rem] bg-[#07121B] p-6 sm:p-8 md:p-10 shadow-2xl shadow-slate-950/20 border border-slate-800/80 overflow-hidden">
          {/* Ambient high-tech background glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -left-32 size-80 rounded-full bg-teal-500/10 blur-[100px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -right-32 size-80 rounded-full bg-cyan-500/10 blur-[100px]"
          />

          <Stagger stagger={0.06} className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {items.map((item) => {
              const IconComponent = item.icon;

              return (
                <StaggerItem
                  key={item.name}
                  from="up"
                  distance={20}
                  className="group relative flex items-center gap-4 rounded-2xl bg-white p-4.5 sm:p-5 shadow-md shadow-slate-950/20 border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-teal-400"
                >
                  {/* Left Circular Icon Badge */}
                  <div className="flex size-12 sm:size-13 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-800 border border-slate-200/80 shadow-xs transition-colors duration-300 group-hover:bg-teal-50 group-hover:text-[#008c83] group-hover:border-teal-200">
                    <IconComponent className="size-6 stroke-[1.8]" />
                  </div>

                  {/* Right Title & Category Badge */}
                  <div className="flex flex-col min-w-0 pr-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-tight group-hover:text-[#006B7D] transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xs font-semibold text-slate-400 mt-1">
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
