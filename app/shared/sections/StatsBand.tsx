"use client";

import { cn } from "@/app/core/lib/cn";
import { CountUp } from "@/app/shared/motion/CountUp";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";
import { Container } from "@/app/shared/ui/Layout";
import type { StatItem } from "@/app/shared/ui/Stats";

/** Real team photo (Unsplash) — candid, not staged or generated. */
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop";

interface StatsBandProps {
  items: readonly StatItem[];
  image?: string;
  imageAlt?: string;
  className?: string;
}

const COLUMNS: Record<number, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

/** Values the counter can animate — drops text-only stats like "Black Friday". */
const isNumeric = (value: string) => /^\D*[\d.,]+/.test(value);

/**
 * Compact proof band — a photo on the left and the counters on the right in a
 * slim dark panel. Sits just above the FAQ on every page that used to carry
 * stats in its hero.
 */
export function StatsBand({
  items,
  image = DEFAULT_IMAGE,
  imageAlt = "NXT Orbit team collaborating around laptops",
  className,
}: StatsBandProps) {
  const stats = items.filter((item) => isNumeric(item.value));
  if (stats.length === 0) return null;

  return (
    <section className={cn("relative bg-white py-6 sm:py-8", className)}>
      <Container>
        <Reveal from="up">
          <div className="relative grid overflow-hidden rounded-2xl bg-linear-to-r from-[#0a2328] via-[#0c3236] to-[#0b4a47] sm:grid-cols-[14rem_1fr] lg:grid-cols-[18rem_1fr]">
            {/* Photo — fades into the panel on its inner edge */}
            <div className="relative h-36 sm:h-auto">
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-[#0a2328] via-[#0a2328]/30 to-transparent sm:bg-linear-to-l"
              />
            </div>

            {/* Ambient glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 right-10 size-56 rounded-full bg-teal-400/20 blur-3xl"
            />

            <Stagger
              as="dl"
              stagger={0.08}
              className={cn(
                "relative grid grid-cols-2 items-center gap-x-4 gap-y-5 px-5 py-6 sm:px-8 sm:py-8",
                COLUMNS[stats.length] ?? "lg:grid-cols-4",
              )}
            >
              {stats.map((item, index) => (
                <StaggerItem
                  key={item.label}
                  as="div"
                  // Reversed so the value reads first while the DOM keeps <dt> before <dd>.
                  className={cn(
                    "flex min-w-0 flex-col-reverse gap-1",
                    index > 0 && "lg:border-l lg:border-white/10 lg:pl-6",
                  )}
                >
                  <dt className="text-xs sm:text-sm font-medium leading-snug text-slate-300 line-clamp-2">
                    {item.label}
                  </dt>
                  <dd className="bg-linear-to-br from-white to-teal-200 bg-clip-text text-2xl sm:text-3xl font-extrabold leading-none tabular-nums tracking-tight text-transparent">
                    <CountUp value={item.value} />
                  </dd>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
