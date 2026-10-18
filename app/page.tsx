import { CallToAction } from "@/app/shared/sections/CallToAction";
import { Hero } from "@/app/shared/sections/home/Hero";
import { TheChallenge } from "@/app/shared/sections/home/TheChallenge";
import { WhyChooseUs } from "@/app/shared/sections/home/WhyChooseUs";
import { Industries } from "@/app/shared/sections/home/Industries";
import { Process } from "@/app/shared/sections/home/Process";
import { SolutionsInAction } from "@/app/shared/sections/home/SolutionsInAction";
import { LogoRail } from "@/app/shared/sections/home/LogoRail";
import { InsightsStrip } from "@/app/shared/sections/home/InsightsStrip";
import { Faq } from "@/app/shared/sections/home/Faq";
import { StatsBand } from "@/app/shared/sections/StatsBand";
import { IMPACT_STATS } from "@/app/core/data/home";

/**
 * Homepage.
 *
 * Structured strictly according to the designer specifications and document sections:
 * Section 1 — Hero
 * Section 2 — Business Challenge
 * Section 3 — Our Solutions in Action
 * Section 4 — Industries
 * Section 5 — Delivery Process
 * Section 6 — Our Business Approach
 * Section 7 — Trust
 * Section 8 — Insights
 * Section 9 — Impact Metrics
 * Section 10 — FAQ
 * Section 11 — Final CTA
 */
export default function HomePage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <Hero />

      {/* Section 2 — Business Challenge */}
      <TheChallenge />

      {/* Section 3 — Our Solutions in Action */}
      <SolutionsInAction />

      {/* Section 4 — Industries */}
      <Industries />

      {/* Section 5 — Delivery Process */}
      <Process />

      {/* Section 6 — Our Business Approach */}
      <WhyChooseUs />

      {/* Section 7 — Trust */}
      <LogoRail />

      {/* Section 8 — Insights */}
      <InsightsStrip />

      {/* Section 9 — Impact Metrics */}
      <StatsBand items={IMPACT_STATS} />

      {/* Section 10 — FAQ */}
      <Faq />

      {/* Section 11 — Final CTA */}
      <CallToAction
        eyebrow="READY TO START?"
        title="Let's build technology that moves your business forward."
        description="Whether you're modernizing legacy systems, implementing enterprise applications, building digital platforms, or planning your next transformation initiative, we'll help you choose the right approach and deliver technology that supports your business for years to come."
        primary={{ label: "Book a Consultation", href: "/contact" }}
        secondary={{ label: "Talk to Our Team", href: "/contact" }}
      />
    </>
  );
}


