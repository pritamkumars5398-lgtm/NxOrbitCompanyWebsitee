"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CAPABILITIES } from "@/app/core/data/home";
import { cn } from "@/app/core/lib/cn";
import { DotField } from "@/app/shared/backdrop/Backdrops";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";
import { Container, Section, SectionHeading } from "@/app/shared/ui/Layout";
import { NavIcon } from "@/app/shared/ui/NavIcon";
import { Button, TextLink } from "@/app/shared/ui/Button";

const CAPABILITY_IMAGES: Record<string, string> = {
  "Mobile App Development": "/assets/service-hero-mobile.jpg",
  "AI & ML Solutions": "/assets/service-hero-ai.jpg",
  "Web App Development": "/assets/service-hero-web.jpg",
  "DevOps & Cloud": "/assets/service-hero-devops.jpg",
  "UI/UX Design": "/assets/service-hero-design.jpg",
};

/**
 * Capability grid redesigned as alternating visual rows with illustrative screenshots.
 */
export function Capabilities() {
  return (
    <Section tone="white" spacing="lg" id="services">
      <DotField className="opacity-50" />

      <Container className="relative">
        <SectionHeading
          eyebrow="What we do"
          title="Four disciplines, one delivery team."
          description="Design, engineering, data, and infrastructure sit in the same room and ship on the same board — which is why the hand-offs that usually cost you a quarter don't happen here."
          action={<TextLink href="/contact">Discuss your project</TextLink>}
          className="mb-14"
        />

        <div className="flex flex-col gap-12 lg:gap-20 mt-10">
          {CAPABILITIES.map((item, index) => {
            const isEven = index % 2 === 0;
            const imgPath = CAPABILITY_IMAGES[item.title] || "/assets/service-hero-web.jpg";
            return (
              <div
                key={item.href}
                className="group/row grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center py-6 lg:py-12 border-b border-hairline last:border-b-0"
              >
                {/* Content Column */}
                <Reveal
                  from={isEven ? "left" : "right"}
                  className={cn(
                    "flex flex-col gap-5 lg:col-span-6",
                    isEven ? "lg:order-first" : "lg:order-last"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-linear-to-br from-brand-500 to-teal-400 text-white">
                      <NavIcon name={item.icon} className="size-5" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                      {String(index + 1).padStart(2, "0")} / {item.title}
                    </span>
                  </div>

                  <h3 className="text-display-xs sm:text-display-sm lg:text-display-md text-ink-900 group-hover/row:text-brand-600 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-base text-ink-600 leading-relaxed max-w-xl">
                    {item.description}
                  </p>

                  <ul className="flex flex-wrap gap-2 pt-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-full border border-hairline bg-slate-50 px-3.5 py-1 text-xs font-semibold text-ink-600 transition-colors duration-300 group-hover/row:border-teal-100 group-hover/row:bg-teal-50/30 group-hover/row:text-teal-600"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3">
                    <Button href={item.href} variant="primary" withArrow className="self-start">
                      Explore {item.title.split(" ")[0]}
                    </Button>
                  </div>
                </Reveal>

                {/* Image Column */}
                <Reveal
                  from={isEven ? "right" : "left"}
                  className={cn(
                    "relative lg:col-span-6 flex justify-center w-full",
                    isEven ? "lg:order-last" : "lg:order-first"
                  )}
                >
                  {/* Decorative background glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-4 -z-10 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.08)_0%,transparent_70%)] opacity-0 blur-2xl transition-opacity duration-500 group-hover/row:opacity-100"
                  />

                  {/* Premium Image Frame */}
                  <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-md shadow-slate-200/50 w-full max-w-[500px] aspect-[4/3] group-hover/row:shadow-xl group-hover/row:shadow-teal-500/5 transition-all duration-500">
                    <img
                      src={imgPath}
                      alt={item.title}
                      className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/row:scale-105"
                      suppressHydrationWarning
                    />
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
