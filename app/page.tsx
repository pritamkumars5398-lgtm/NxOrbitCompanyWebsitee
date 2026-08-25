import { CallToAction } from "@/app/shared/sections/CallToAction";
import { Capabilities } from "@/app/shared/sections/home/Capabilities";
import { EnterpriseProficiency } from "@/app/shared/sections/home/EnterpriseProficiency";
import { WhyChooseUs } from "@/app/shared/sections/home/WhyChooseUs";
import { Faq } from "@/app/shared/sections/home/Faq";
import { Hero } from "@/app/shared/sections/home/Hero";
import { TechStack } from "@/app/shared/sections/home/TechStack";
import { LogoRail } from "@/app/shared/sections/home/LogoRail";
import { Process } from "@/app/shared/sections/home/Process";
import { Testimonials } from "@/app/shared/sections/home/Testimonials";

/**
 * Homepage.
 *
 * Section order alternates surface tone (white → muted → dark) and layout
 * language (bento → timeline → tabs → matrix → editorial list) so the page
 * never repeats a rhythm the visitor has already scrolled past.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoRail />
      <EnterpriseProficiency />
      <WhyChooseUs />
      <Process />
      <Capabilities />
      <TechStack />
      <Testimonials />
      
      <Faq />
      <CallToAction
        eyebrow="READY TO START?"
        title="Let's Build Something Exceptional Together"
        description="Get a free 30-minute consultation with one of our mobile app development experts. No commitment required."
        primary={{ label: "Schedule a Free Consultation", href: "/contact" }}
        secondary={{ label: "Call +91 9763804442", href: "tel:+919763804442" }}
      />
    </>
  );
}


