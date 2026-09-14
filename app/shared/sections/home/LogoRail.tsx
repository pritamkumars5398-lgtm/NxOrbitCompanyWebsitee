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
    <section className="relative border-y border-hairline bg-surface-muted py-10 sm:py-12" id="trust">
      <Container>
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col items-center gap-2 max-w-2xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#008c83]">
              TRUST & RELIABILITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Trusted by teams who can&apos;t afford downtime.
            </h2>
            {/* Real confirmed client outcome as requested in designer note */}
            <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-1.5 shadow-xs">
              <span className="font-bold text-slate-900 text-xs sm:text-sm">Alisped</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs sm:text-sm text-teal-700 font-medium">Reduced warehouse processing time</span>
            </div>
          </div>

          <Marquee duration={35} gap="2.5rem" className="w-full pt-4 pb-2">
            {REAL_LOGOS.map((client) => (
              <div
                key={client.name}
                className="group flex h-13 w-40 items-center justify-center rounded-xl border border-hairline bg-white/80 px-4 py-2 opacity-85 shadow-xs transition-all duration-300 hover:opacity-100 hover:scale-[1.04] hover:bg-white hover:shadow-md hover:border-brand-300/40 cursor-pointer"
                title={client.name}
              >
                <img
                  src={client.image}
                  alt={client.alt}
                  className="h-7 max-h-7 w-auto max-w-[120px] object-contain transition-all duration-300"
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



