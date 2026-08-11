"use client";

import { Button } from "@/app/shared/ui/Button";
import { Container, Eyebrow } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";
import { ArrowRight } from "lucide-react";

interface CallToActionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}

/**
 * Closing CTA matching reference structure with deep dark-teal background and photorealistic 3D phone mockups.
 */
export function CallToAction({
  eyebrow = "READY TO START?",
  title = "Let's Build Something Exceptional Together",
  description = "Get a free 30-minute consultation with one of our mobile app development experts. No commitment required.",
  primary = { label: "Schedule a Free Consultation", href: "/contact" },
  secondary = { label: "Call +91 9763804442", href: "tel:+919763804442" },
}: CallToActionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-transparent pt-2 pb-10 sm:pt-3 sm:pb-12 lg:pt-4 lg:pb-16 text-white">
      {/* Ambient background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 size-[36rem] rounded-full bg-[#00d2c4]/5 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-0 size-[42rem] rounded-full bg-[#00a896]/10 blur-[150px]"
      />

      <Container className="relative z-10">
        <div 
          className="relative overflow-hidden rounded-[2.5rem] border-2 border-white/12 bg-[#070D1B] py-8 px-6 sm:px-10 lg:py-10 lg:px-12 shadow-2xl"
        >
          {/* Subtle background glow effect */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 -left-40 size-96 rounded-full bg-teal-500/10 blur-[120px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -right-40 size-96 rounded-full bg-brand-500/10 blur-[120px]"
          />

          {/* Dotted Grid Accents in Corners */}
          <div className="absolute left-8 top-8 grid grid-cols-5 gap-2.5 opacity-20">
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={i} className="size-1 rounded-full bg-[#00d2c4]" />
            ))}
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center">
            {/* Left Column: Heading & CTA Buttons */}
            <Reveal className="lg:col-span-7 flex flex-col items-start text-left gap-6">
              {eyebrow && (
                <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-950/40 px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#00d2c4] uppercase backdrop-blur-md">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  {eyebrow}
                </div>
              )}

              <h2 className="text-display-md sm:text-display-lg lg:text-display-xl text-white max-w-2xl">
                {title.includes("Exceptional Together") ? (
                  <>
                    Let's Build Something{" "}
                    <span className="text-[#00d2c4]">Exceptional Together</span>
                  </>
                ) : title.includes("actually love?") ? (
                  <>
                    Ready to build an app your users will{" "}
                    <span className="text-[#00d2c4]">actually love?</span>
                  </>
                ) : (
                  title
                )}
              </h2>

              <p className="max-w-xl text-base sm:text-lg text-slate-200/90 leading-relaxed font-normal">
                {description}
              </p>

              {/* Equal Sized Buttons Container */}
              <div className="mt-4 flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Button
                  href={primary.href}
                  size="lg"
                  variant="accent"
                  className="w-full sm:w-auto sm:min-w-[220px] justify-center"
                >
                  {primary.label}
                </Button>

                <Button
                  href={secondary.href}
                  size="lg"
                  variant="outline-light"
                  className="w-full sm:w-auto sm:min-w-[220px] justify-center"
                >
                  {secondary.label}
                </Button>
              </div>
            </Reveal>

            {/* Right Column: 3D CTA Illustration */}
            <Reveal from="right" delay={0.15} className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative max-w-full sm:max-w-md [mask-image:radial-gradient(circle_at_center,white_65%,transparent_100%)]">
                <img
                  src="/assets/cta-strategy.png"
                  alt="Strategy Consultation"
                  className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(0,210,196,0.15)] select-none pointer-events-none"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}


