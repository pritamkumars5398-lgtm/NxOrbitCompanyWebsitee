import { Container } from "@/app/shared/ui/Layout";
import { Marquee } from "@/app/shared/ui/Marquee";
import { Reveal } from "@/app/shared/motion/Reveal";

/** Real Enterprise & Global Brand Logo Images (Uniform Size) */
const REAL_LOGOS = [
  {
    name: "SAP Enterprise",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
    alt: "SAP Logo",
  },
  {
    name: "Oracle Cloud",
    image: "https://api.iconify.design/logos:oracle.svg",
    alt: "Oracle Logo",
  },
  {
    name: "DHL Express",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/DHL_Logo.svg",
    alt: "DHL Logo",
  },
  {
    name: "FedEx Logistics",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg",
    alt: "FedEx Logo",
  },
  {
    name: "TATA Group",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
    alt: "TATA Logo",
  },
  {
    name: "Google Cloud",
    image: "https://api.iconify.design/logos:google.svg",
    alt: "Google Cloud Logo",
  },
  {
    name: "AWS Enterprise",
    image: "https://api.iconify.design/logos:aws.svg",
    alt: "AWS Logo",
  },
  {
    name: "Salesforce",
    image: "https://api.iconify.design/logos:salesforce.svg",
    alt: "Salesforce Logo",
  },
];

/**
 * Enterprise client & partner logo rail displaying authentic brand logos in uniform size.
 */
export function LogoRail() {
  return (
    <section className="relative border-y border-hairline bg-surface-muted py-8 sm:py-10">
      <Container>
        <Reveal className="flex flex-col items-center gap-5">
          <p className="text-eyebrow uppercase text-ink-500 font-bold tracking-widest text-center">
            Trusted by Enterprise Logistics & Shipping Leaders
          </p>

          <Marquee duration={35} gap="2.5rem" className="w-full py-2">
            {REAL_LOGOS.map((client) => (
              <div
                key={client.name}
                className="group flex h-13 w-40 items-center justify-center rounded-xl border border-hairline bg-white/80 px-4 py-2 opacity-85 shadow-xs transition-all duration-300 hover:opacity-100 hover:scale-[1.04] hover:bg-white hover:shadow-md hover:border-brand-300/40 cursor-pointer"
                title={client.name}
              >
                <img
                  src={client.image}
                  alt={client.alt}
                  className="h-7 max-h-7 w-auto max-w-[120px] object-contain transition-all duration-300 filter grayscale contrast-125 group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            ))}
          </Marquee>
        </Reveal>
      </Container>
    </section>
  );
}



