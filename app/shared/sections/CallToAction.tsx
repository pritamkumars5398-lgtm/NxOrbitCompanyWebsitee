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
    <section className="relative isolate overflow-hidden bg-transparent pt-2 pb-16 sm:pt-4 sm:pb-20 lg:pt-6 lg:pb-24 text-white">
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
          className="relative overflow-hidden rounded-[2.5rem] border-2 border-white/12 bg-slate-950 bg-cover bg-center py-10 px-6 sm:px-12 lg:py-14 shadow-2xl"
          style={{ backgroundImage: `url('/assets/cta-strategy.png')` }}
        >
          <div 
            aria-hidden 
            className="absolute inset-0 bg-gradient-to-br from-[#021820]/65 via-[#011118]/45 to-[#002b35]/65"
          />

          {/* Dotted Grid Accents in Corners */}
          <div className="absolute left-8 top-8 grid grid-cols-5 gap-2.5 opacity-20">
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={i} className="size-1 rounded-full bg-[#00d2c4]" />
            ))}
          </div>
          <div className="absolute right-8 bottom-8 grid grid-cols-5 gap-2.5 opacity-20">
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={i} className="size-1 rounded-full bg-[#00d2c4]" />
            ))}
          </div>

          {/* Tech Orbit Ring */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-400/10 border-dashed animate-[spin_120s_linear_infinite]"
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
            <Reveal className="flex flex-col items-center text-center gap-6">
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

              <p className="max-w-2xl text-base sm:text-lg text-slate-200/90 leading-relaxed font-normal">
                {description}
              </p>

              {/* Equal Sized Buttons Container */}
              <div className="mt-4 flex flex-wrap justify-center items-center gap-4 w-full sm:w-auto">
                <Button
                  href={primary.href}
                  size="lg"
                  className="w-full sm:w-auto sm:min-w-[240px] justify-center text-center rounded-full bg-[#0a2432] hover:bg-[#061924] text-white font-bold px-7 py-3.5 shadow-lg shadow-black/40 border border-teal-500/30 transition-all"
                >
                  {primary.label}
                </Button>

                <Button
                  href={secondary.href}
                  size="lg"
                  className="w-full sm:w-auto sm:min-w-[240px] justify-center text-center rounded-full bg-transparent hover:bg-teal-500/10 text-white font-semibold px-7 py-3.5 border-2 border-[#00d2c4] transition-all"
                >
                  {secondary.label}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}


