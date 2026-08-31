"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { Check } from "lucide-react";
import { PROCESS } from "@/app/core/data/home";
import { Button } from "@/app/shared/ui/Button";
import { Container, Eyebrow, Section } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";

/**
 * Delivery process.
 *
 * A sticky heading on the left with the steps scrolling past on the right.
 * The vertical rule between them fills as you scroll, so progress through the
 * section maps onto progress through the process — the layout is doing the
 * explaining, not a caption.
 */
export function Process() {
  const trackRef = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 65%", "end 65%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <Section tone="muted" spacing="none" className="pt-4 pb-16 sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          {/* Sticky rail */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal className="flex flex-col gap-5">
              <Eyebrow>How we work</Eyebrow>
              <h2 className="text-display-md sm:text-display-lg">
                A process you can see through.
              </h2>
              <p className="max-w-md text-lead text-ink-600">
                Four phases, each with a defined output you can hold us to. No black-box quarters,
                no status decks standing in for working software.
              </p>
              <Button href="/contact" variant="primary" withArrow className="mt-2 self-start">
                Start with discovery
              </Button>
            </Reveal>
          </div>

          {/* Steps */}
          <ol ref={trackRef} className="relative flex flex-col">
            {/* Track + scroll-driven fill */}
            <span
              aria-hidden
              className="absolute top-2 bottom-2 left-[1.4375rem] w-px bg-hairline-strong"
            />
            <motion.span
              aria-hidden
              style={reduced ? { scaleY: 1 } : { scaleY: fill }}
              className="absolute top-2 bottom-2 left-[1.4375rem] w-px origin-top bg-[linear-gradient(to_bottom,var(--color-brand-400),var(--color-brand-200))]"
            />

            {PROCESS.map((phase) => (
              <motion.li
                key={phase.step}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-hairline bg-white font-mono text-sm font-semibold text-brand-500 shadow-sm">
                  {phase.step}
                </span>

                <div className="flex flex-col gap-3 pt-1.5">
                  <h3 className="text-display-sm text-ink-900">{phase.title}</h3>
                  <p className="max-w-lg text-sm leading-relaxed text-ink-600">
                    {phase.description}
                  </p>
                  <ul className="mt-1 flex flex-wrap gap-x-5 gap-y-2">
                    {phase.outputs.map((output) => (
                      <li
                        key={output}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-700"
                      >
                        <Check aria-hidden className="size-3.5 text-brand-400" strokeWidth={2.5} />
                        {output}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
