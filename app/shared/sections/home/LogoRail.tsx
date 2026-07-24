import { CLIENT_LOGOS } from "@/app/core/data/home";
import { Container } from "@/app/shared/ui/Layout";
import { Marquee } from "@/app/shared/ui/Marquee";
import { Reveal } from "@/app/shared/motion/Reveal";

/**
 * Client rail. Set as wordmarks rather than logo images — a row of mismatched
 * client logos is the single fastest way to make an otherwise clean page look
 * cluttered, and typography keeps it on-brand.
 */
export function LogoRail() {
  return (
    <section className="relative border-y border-hairline bg-surface-muted py-10">
      <Container>
        <Reveal className="flex flex-col items-center gap-7">
          <p className="text-eyebrow uppercase text-ink-400">
            Trusted by teams shipping at scale
          </p>

          <Marquee duration={46} gap="4rem" className="w-full">
            {CLIENT_LOGOS.map((name) => (
              <span
                key={name}
                className="text-lg font-semibold whitespace-nowrap text-ink-400 transition-colors duration-300 hover:text-brand-500 sm:text-xl"
              >
                {name}
              </span>
            ))}
          </Marquee>
        </Reveal>
      </Container>
    </section>
  );
}
