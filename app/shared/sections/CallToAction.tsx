"use client";

import { Button } from "@/app/shared/ui/Button";
import { Container, Eyebrow } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";
import { RealPhoneImage } from "@/app/shared/ui/RealPhoneImage";
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
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#01141b] via-[#01242e] to-[#003844] py-20 lg:py-28 text-white">
      {/* Ambient Radial Spotlight Mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(0,210,196,0.18),transparent_65%)]"
      />

      {/* Decorative Orbs & Structural Lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 size-[36rem] rounded-full bg-[#00d2c4]/15 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-0 size-[42rem] rounded-full bg-[#00a896]/20 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-10 size-[28rem] -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & CTA Buttons */}
          <Reveal className="lg:col-span-7 flex flex-col items-start gap-6">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-950/40 px-3.5 py-1 text-[11px] font-bold tracking-widest text-[#00d2c4] uppercase backdrop-blur-md">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                {eyebrow}
              </div>
            )}

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight max-w-2xl">
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

            <p className="max-w-xl text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal">
              {description}
            </p>

            {/* Equal Sized Buttons Container */}
            <div className="mt-4 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                href={primary.href}
                size="lg"
                className="w-full sm:w-auto sm:min-w-[250px] justify-center text-center rounded-full bg-[#0a2432] hover:bg-[#061924] text-white font-bold px-7 py-3.5 shadow-lg shadow-black/40 border border-teal-500/30 transition-all"
              >
                {primary.label}
              </Button>

              <Button
                href={secondary.href}
                size="lg"
                className="w-full sm:w-auto sm:min-w-[250px] justify-center text-center rounded-full bg-transparent hover:bg-teal-500/10 text-white font-semibold px-7 py-3.5 border-2 border-[#00d2c4] transition-all"
              >
                {secondary.label}
              </Button>
            </div>
          </Reveal>

          {/* Right Column: 3D Realistic Smartphone Mockups */}
          <Reveal from="right" delay={0.15} className="lg:col-span-5 flex justify-center lg:justify-end">
            <RealPhoneImage variant="cta" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}


