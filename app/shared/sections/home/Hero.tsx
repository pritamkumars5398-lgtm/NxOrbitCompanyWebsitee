"use client";

import { motion } from "motion/react";
import { EASE } from "@/app/core/motion/tokens";
import { HERO } from "@/app/core/data/home";
import { Aurora, Grain } from "@/app/shared/backdrop/Backdrops";
import { Particles } from "@/app/shared/backdrop/Particles";
import { Button } from "@/app/shared/ui/Button";
import { Container, Eyebrow } from "@/app/shared/ui/Layout";
import { CountUp } from "@/app/shared/motion/CountUp";
import { TextReveal } from "@/app/shared/motion/TextReveal";
import { HeroVisual } from "./HeroVisual";

/**
 * Homepage hero.
 *
 * Asymmetric two-column split — the type column is deliberately narrower than
 * the visual so the headline breaks into short, readable lines instead of
 * running the full width of the viewport.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-50/40 pt-24 pb-16 lg:pt-28 lg:pb-20">


      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
          {/* ── Type column ── */}
          <div className="flex flex-col items-start gap-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE.outExpo }}
            >
              <Eyebrow>{HERO.eyebrow}</Eyebrow>
            </motion.div>

            <TextReveal
              as="h1"
              text={HERO.headline}
              gradientFrom={HERO.gradientFrom}
              className="text-display-lg sm:text-display-xl text-slate-900"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE.outExpo, delay: 0.45 }}
              className="max-w-xl text-lead text-ink-600"
            >
              {HERO.lead}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE.outExpo, delay: 0.58 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button 
                href={HERO.primaryCta.href} 
                size="lg" 
                variant="primary"
                withArrow
                magnetic
              >
                {HERO.primaryCta.label}
              </Button>
              <Button 
                href={HERO.secondaryCta.href} 
                size="lg"
                variant="accent"
                magnetic
              >
                {HERO.secondaryCta.label}
              </Button>
            </motion.div>

            {/* Stat rail — hairline-separated rather than boxed, so it reads as
                part of the type column rather than as a card. */}
            <motion.dl
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.09, delayChildren: 0.7 } } }}
              className="mt-4 grid w-full grid-cols-2 gap-x-6 gap-y-6 border-t border-hairline pt-8 sm:grid-cols-4"
            >
              {HERO.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.55, ease: EASE.outExpo },
                    },
                  }}
                  // Reversed so the value reads first while the DOM keeps the
                  // required <dt> before <dd> order.
                  className="flex flex-col-reverse gap-1"
                >
                  <dt className="text-xs font-medium text-ink-500">{stat.label}</dt>
                  <dd className="text-2xl font-bold tabular-nums text-brand-800">
                    <CountUp value={stat.value} />
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>

          {/* ── Visual column ── */}
          <div className="relative lg:pl-4">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
