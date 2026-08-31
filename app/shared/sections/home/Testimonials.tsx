"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/app/core/constants/app.constant";
import { cn } from "@/app/core/lib/cn";
import { EASE } from "@/app/core/motion/tokens";
import { Container, Eyebrow, Section } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";

/**
 * Testimonial showcase.
 *
 * One quote at a time at display size. A row of three testimonial cards
 * flattens every quote into the same visual weight; this gives the words
 * enough room that someone might actually read one.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const active = TESTIMONIALS[index];

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Autoplay functionality: slides every 5 seconds, pauses when user hovers
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <Section tone="white" spacing="sm" id="testimonials" className="relative isolate overflow-hidden">
      {/* Executive Client Team Background Image & High-Tech Layer */}
      <div
        aria-hidden
        className="absolute inset-0 size-full z-0 bg-cover bg-center bg-no-repeat opacity-85 pointer-events-none"
        style={{
          backgroundImage: "url('/assets/consulting-team.png')",
        }}
      />
      <div 
        aria-hidden
        className="absolute inset-0 size-full z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1.5px 1.5px, rgba(0, 187, 169, 0.4) 1.5px, transparent 0)",
          backgroundSize: "28px 28px"
        }}
      />
      {/* Directional Asymmetric Overlay: Crisp Left Text (92%), Clear Middle details (40%), Vivid Right (5%) */}
      <div
        aria-hidden
        className="absolute inset-0 size-full z-0 bg-gradient-to-r from-white/92 via-white/40 to-white/5 pointer-events-none"
      />

      <Container className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-12">
          <Reveal className="flex flex-col gap-4 lg:pt-2">
            <Eyebrow>Client words</Eyebrow>
            <h2 className="text-display-sm sm:text-display-md">
              What it&apos;s like on the other side of the contract.
            </h2>

            <div className="mt-2 flex items-center gap-3">
              <NavButton label="Previous testimonial" onClick={() => go(index - 1)}>
                <ArrowLeft aria-hidden className="size-4" />
              </NavButton>
              <NavButton label="Next testimonial" onClick={() => go(index + 1)}>
                <ArrowRight aria-hidden className="size-4" />
              </NavButton>
              <span className="ml-2 font-mono text-xs text-ink-400 tabular-nums">
                {String(index + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
              </span>
            </div>
          </Reveal>

          <div className="relative min-h-[16rem]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={active.name}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: direction * -40, filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease: EASE.outExpo }}
                className="relative flex flex-col gap-5 rounded-3xl border border-hairline bg-surface-muted p-6 sm:p-8"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span
                  aria-hidden
                  className="font-serif text-6xl leading-none text-brand-200 select-none"
                >
                  &ldquo;
                </span>

                <blockquote className="-mt-4 text-lg leading-relaxed font-medium text-ink-800 sm:text-xl">
                  {active.quote}
                </blockquote>

                <figcaption className="mt-auto flex items-center gap-4 border-t border-hairline pt-4">
                  <span
                    aria-hidden
                    className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-800 text-xs font-semibold text-white"
                  >
                    {active.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-ink-900">{active.name}</span>
                    <span className="text-xs text-ink-500">
                      {active.role}, {active.company}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="mt-6 flex items-center gap-2">
              {TESTIMONIALS.map((testimonial, dotIndex) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => go(dotIndex)}
                  aria-label={`Show testimonial from ${testimonial.name}`}
                  aria-current={dotIndex === index}
                  className={cn(
                    "h-1 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    dotIndex === index ? "w-10 bg-brand-400" : "w-4 bg-ink-200 hover:bg-ink-300",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function NavButton({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex size-11 items-center justify-center rounded-full border border-hairline-strong text-ink-600 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-500 hover:shadow-sm"
    >
      {children}
    </button>
  );
}
