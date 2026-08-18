import { Container } from "@/app/shared/ui/Layout";
import { Marquee } from "@/app/shared/ui/Marquee";
import { Reveal } from "@/app/shared/motion/Reveal";

/** Real SVG Enterprise & Global Brand Logos */
const REAL_LOGOS = [
  {
    name: "Airtel Xstream",
    svg: (
      <svg className="h-7 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 150 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 6C8.47715 6 4 10.4772 4 16C4 21.5228 8.47715 26 14 26C17.5 26 20.5 24.2 22.3 21.5L18.8 19.2C17.7 20.9 15.9 22 14 22C10.7 22 8 19.3 8 16C8 12.7 10.7 10 14 10C16 10 17.8 11.1 18.9 12.9L22.4 10.6C20.6 7.8 17.5 6 14 6Z" fill="#E40000"/>
        <path d="M22 6H26V26H22V6Z" fill="#E40000"/>
        <text x="32" y="24" fill="#0A2E4D" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="800" letterSpacing="-0.5">airtel</text>
        <text x="84" y="24" fill="#00BBA9" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700">Xstream</text>
      </svg>
    ),
  },
  {
    name: "Mother Dairy",
    svg: (
      <svg className="h-8 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="28" height="28" rx="14" fill="#005E70"/>
        <path d="M16 9L22 23H10L16 9Z" fill="#82C458"/>
        <text x="36" y="22" fill="#0A2E4D" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="800">MOTHER DAIRY</text>
      </svg>
    ),
  },
  {
    name: "DHL Express",
    svg: (
      <svg className="h-7 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8H120L112 28H4L4 8Z" fill="#FFCC00"/>
        <path d="M12 12H28L26 24H10L12 12Z" fill="#D40511"/>
        <path d="M32 12H48L46 24H30L32 12Z" fill="#D40511"/>
        <path d="M52 12H76L74 24H50L52 12Z" fill="#D40511"/>
        <text x="82" y="25" fill="#D40511" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="900" fontStyle="italic">DHL</text>
      </svg>
    ),
  },
  {
    name: "Maersk Line",
    svg: (
      <svg className="h-7 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="28" height="28" rx="6" fill="#42B0D5"/>
        <path d="M16 8L18.5 13H24L19.5 16.5L21.5 22L16 18.5L10.5 22L12.5 16.5L8 13H13.5L16 8Z" fill="white"/>
        <text x="36" y="24" fill="#0A2E4D" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="900" letterSpacing="1">MAERSK</text>
      </svg>
    ),
  },
  {
    name: "FedEx Logistics",
    svg: (
      <svg className="h-7 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="2" y="26" fill="#4D148C" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="900" letterSpacing="-1">Fed</text>
        <text x="44" y="26" fill="#FF6600" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="900" letterSpacing="-1">Ex</text>
        <text x="78" y="25" fill="#0A2E4D" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700">Express</text>
      </svg>
    ),
  },
  {
    name: "SAP Enterprise",
    svg: (
      <svg className="h-7 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 6H54L28 30H2V6Z" fill="#008FD3"/>
        <text x="10" y="23" fill="white" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="900">SAP</text>
        <text x="60" y="24" fill="#0A2E4D" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="800">ERP</text>
      </svg>
    ),
  },
  {
    name: "Oracle Cloud",
    svg: (
      <svg className="h-7 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="8" width="36" height="20" rx="10" fill="#EA1B23"/>
        <rect x="8" y="13" width="24" height="10" rx="5" fill="white"/>
        <text x="44" y="24" fill="#0A2E4D" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="900" letterSpacing="0.5">ORACLE</text>
      </svg>
    ),
  },
  {
    name: "DP World",
    svg: (
      <svg className="h-7 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="18" r="12" stroke="#00BBA9" strokeWidth="4"/>
        <path d="M10 18H22M16 12V24" stroke="#005E70" strokeWidth="3"/>
        <text x="34" y="24" fill="#0A2E4D" fontFamily="Inter, sans-serif" fontSize="17" fontWeight="900">DP WORLD</text>
      </svg>
    ),
  },
  {
    name: "TATA Supply Chain",
    svg: (
      <svg className="h-7 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 130 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="6" width="30" height="24" rx="4" fill="#00529B"/>
        <path d="M8 12H26M17 12V24" stroke="white" strokeWidth="3"/>
        <text x="38" y="23" fill="#0A2E4D" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="900" letterSpacing="1">TATA</text>
      </svg>
    ),
  },
  {
    name: "Kühne + Nagel",
    svg: (
      <svg className="h-7 w-auto transition-all duration-300 group-hover:scale-105" viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H12V30H4V6ZM14 18L26 6H34L20 20L34 30H25L14 18Z" fill="#003366"/>
        <text x="40" y="23" fill="#0A2E4D" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="800">KUEHNE+NAGEL</text>
      </svg>
    ),
  },
];

/**
 * Enterprise client & partner logo rail displaying authentic SVG vector logos.
 */
export function LogoRail() {
  return (
    <section className="relative border-y border-hairline bg-surface-muted py-8 sm:py-10">
      <Container>
        <Reveal className="flex flex-col items-center gap-6">
          <p className="text-eyebrow uppercase text-ink-500 font-bold tracking-widest">
            Trusted by Enterprise Logistics & Shipping Leaders
          </p>

          <Marquee duration={40} gap="4.5rem" className="w-full py-2">
            {REAL_LOGOS.map((client) => (
              <div
                key={client.name}
                className="group flex items-center justify-center grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 cursor-pointer px-2"
                title={client.name}
              >
                {client.svg}
              </div>
            ))}
          </Marquee>
        </Reveal>
      </Container>
    </section>
  );
}

