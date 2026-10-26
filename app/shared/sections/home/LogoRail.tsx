"use client";

import { Timer } from "lucide-react";
import { Container, Eyebrow } from "@/app/shared/ui/Layout";
import { Marquee } from "@/app/shared/ui/Marquee";
import { Reveal } from "@/app/shared/motion/Reveal";

/** Real Enterprise & Client Partner Logos - Crisp Vector Assets */
const REAL_LOGOS = [
  {
    name: "Kisan Konnect",
    image: "/assets/clients/kisan-konnect.svg",
    alt: "Kisan Konnect Logo",
  },
  {
    name: "Zurich Kotak General Insurance",
    image: "/assets/clients/zurich-kotak.svg",
    alt: "Zurich Kotak General Insurance Logo",
  },
  {
    name: "Godrej Körber",
    image: "/assets/clients/godrej-korber.svg",
    alt: "Godrej Körber Logo",
  },
  {
    name: "Rudra Finance",
    image: "/assets/clients/rudra-finance.svg",
    alt: "Rudra Finance Logo",
  },
  {
    name: "Will View Legal Services",
    image: "/assets/clients/will-view.svg",
    alt: "Will View Logo",
  },
  {
    name: "e-Obituary",
    image: "/assets/clients/e-obituary.svg",
    alt: "e-Obituary Logo",
  },
  {
    name: "Vastra",
    image: "/assets/clients/vastra.svg",
    alt: "Vastra Logo",
  },
  {
    name: "Chanakya Learning System",
    image: "/assets/clients/chanakya.svg",
    alt: "Chanakya Learning System Logo",
  },
  {
    name: "Chaitanya Social Welfare",
    image: "/assets/clients/chaitanya.svg",
    alt: "Chaitanya Social Welfare Logo",
  },
  {
    name: "BlokOn",
    image: "/assets/clients/blokon.svg",
    alt: "BlokOn Logo",
  },
  {
    name: "India House Path Lab",
    image: "/assets/clients/india-house-path-lab.svg",
    alt: "India House Path Lab Logo",
  },
  {
    name: "MottoFlip",
    image: "/assets/clients/mottoflip.svg",
    alt: "MottoFlip Logo",
  },
];

const ROW_A = REAL_LOGOS.slice(0, 6);
const ROW_B = REAL_LOGOS.slice(6);

function LogoTile({ client }: { client: (typeof REAL_LOGOS)[number] }) {
  return (
    <div
      className="group flex h-16 w-40 sm:w-44 shrink-0 items-center justify-center rounded-xl border border-slate-200/90 bg-white px-5 transition-colors duration-300 hover:border-teal-400"
      title={client.name}
    >
      <img
        src={client.image}
        alt={client.alt}
        className="h-7 sm:h-8 w-auto max-w-[120px] object-contain transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );
}

/**
 * Trust section: headline + client spotlight on the left, a two-row logo
 * rail (opposite directions) on the right.
 */
export function LogoRail() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200/90 bg-slate-50/70 pt-6 sm:pt-8 pb-10 sm:pb-12" id="trust">
      {/* Subtle dot grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.07)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left: headline + client spotlight */}
          <Reveal from="up" className="flex flex-col gap-5 lg:col-span-5">
            <Eyebrow tone="brand">TRUST & RELIABILITY</Eyebrow>
            <h2 className="text-display-md sm:text-display-lg font-extrabold text-slate-900">
              Trusted by teams who can&apos;t afford downtime.
            </h2>

            {/* Real confirmed client outcome */}
            <div className="flex items-start gap-4 rounded-2xl border border-teal-200/80 bg-white p-4 sm:p-5">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white">
                <Timer className="size-5" />
              </div>
              <div className="flex min-w-0 flex-col gap-1">
                <span className="text-2xs font-bold uppercase tracking-widest text-teal-700">
                  Client spotlight
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Alisped</h3>
                <p className="text-sm text-slate-600">Reduced warehouse processing time.</p>
              </div>
            </div>
          </Reveal>

          {/* Right: two-row logo rail */}
          <Reveal from="up" delay={0.1} className="lg:col-span-7">
            <div className="flex flex-col gap-4 rounded-3xl border border-slate-200/90 bg-white/80 py-6 sm:py-8 backdrop-blur-sm">
              <Marquee duration={30} gap="1rem">
                {ROW_A.map((client) => (
                  <LogoTile key={client.name} client={client} />
                ))}
              </Marquee>
              <Marquee duration={30} gap="1rem" reverse>
                {ROW_B.map((client) => (
                  <LogoTile key={client.name} client={client} />
                ))}
              </Marquee>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
