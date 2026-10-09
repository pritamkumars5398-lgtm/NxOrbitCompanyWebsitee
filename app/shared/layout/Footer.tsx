import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import {
  COMPANY_LINKS,
  CONTACT_DETAILS,
  INDUSTRY_LINKS,
  PRODUCT_LINKS,
  SERVICE_LINKS,
  TECHNOLOGY_LINKS,
} from "@/app/core/data/navigation";
import { Container } from "@/app/shared/ui/Layout";
import { Logo } from "@/app/shared/ui/Logo";
import { Grain, GridField } from "@/app/shared/backdrop/Backdrops";

const COLUMNS = [
  { title: "Services", links: SERVICE_LINKS },
  { title: "Technology", links: TECHNOLOGY_LINKS },
  { title: "Industries", links: INDUSTRY_LINKS },
  { title: "Company", links: COMPANY_LINKS },
  { title: "Products", links: PRODUCT_LINKS },
];

/* Lucide dropped brand marks in v1, so the two social glyphs are inlined. */
function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-4">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.71h.05a4.17 4.17 0 0 1 3.75-2.06c4.01 0 4.75 2.64 4.75 6.07V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4V9Z" />
    </svg>
  );
}

function XMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-3.5">
      <path d="M17.53 3h3.02l-6.6 7.54L21.75 21h-5.9l-4.62-6.04L5.94 21H2.92l7.06-8.07L2.5 3h6.05l4.18 5.52L17.53 3Zm-1.06 16.2h1.67L7.6 4.71H5.8l10.67 14.49Z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", Mark: LinkedInMark },
  { label: "X", href: "https://x.com/", Mark: XMark },
];

/**
 * Footer. High-contrast, crystal-clear typography with seamlessly blended logo
 * and offset social icons ensuring Twitter/X is never obscured by floating action buttons.
 */
export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-brand-950 text-slate-300">
      <GridField tone="dark" className="opacity-60" />
      <Grain />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-400/10 blur-[120px]"
      />

      <Container className="relative py-10 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_2.6fr]">
          {/* Brand + contact */}
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              aria-label="NXTorbit — home"
              className="w-fit p-0 bg-transparent inline-block"
            >
              <Logo height={42} light />
            </Link>

            <div className="flex flex-col gap-1.5">
              <span className="text-base font-bold text-white tracking-wide">
                NXT Orbit IT Solutions Pvt. Ltd.
              </span>
              <span className="text-xs font-mono tracking-widest text-teal-400 font-bold uppercase">
                Keep It Simple.
              </span>
            </div>

            <p className="max-w-md text-xs sm:text-sm leading-relaxed text-slate-300 font-normal">
              Enterprise Applications · Digital Platforms · Mobile Solutions · Cloud & DevOps · AI & Automation · Technology Partnerships
            </p>

            <dl className="flex flex-col gap-3.5 text-sm mt-1">
              <ContactRow Icon={MapPin} label="Navi Mumbai, India">
                {CONTACT_DETAILS.address}
              </ContactRow>

              {/* Inline Phone and Email for optimal space efficiency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <ContactRow Icon={Phone} label="Phone">
                  <a href={CONTACT_DETAILS.phoneHref} className="hover:text-teal-300 transition-colors">
                    {CONTACT_DETAILS.phone}
                  </a>
                </ContactRow>
                <ContactRow Icon={Mail} label="Email">
                  <a href={CONTACT_DETAILS.emailHref} className="hover:text-teal-300 transition-colors">
                    {CONTACT_DETAILS.email}
                  </a>
                </ContactRow>
              </div>

              <ContactRow Icon={Clock} label="Hours">
                {CONTACT_DETAILS.hours}
              </ContactRow>
            </dl>

            {/* Sister Company */}
            <div className="pt-5 border-t border-white/10 flex flex-col items-start gap-2.5">
              <span className="text-2xs font-mono tracking-widest text-teal-300 font-bold uppercase">
                Sister Company
              </span>
              <div className="group relative inline-flex items-center rounded-none bg-white px-4 py-2.5 sm:px-5 sm:py-3 shadow-md border border-white/20 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <Image
                  src="/assets/IT_Next_Solutions_Logo.png"
                  alt="ITNext Solutions — Sister Company"
                  width={240}
                  height={100}
                  quality={100}
                  priority
                  className="h-11 sm:h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
            {COLUMNS.map((column) => (
              <nav key={column.title} aria-label={column.title} className="flex flex-col gap-4">
                <h2 className="text-eyebrow uppercase text-teal-300 font-extrabold tracking-wider">
                  {column.title}
                </h2>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-start gap-1 text-xs sm:text-sm text-slate-300 transition-colors duration-200 hover:text-white"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight
                          aria-hidden
                          className="mt-0.5 size-3 shrink-0 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 text-teal-400"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Subfooter with extra right-padding to guarantee Twitter/X is never obscured by floating action buttons */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between sm:pr-24 lg:pr-28">
          <p className="text-xs text-slate-400 font-medium">
            © 2026 NXT Orbit IT Solutions Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-xs text-slate-400 font-medium transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-xs text-slate-400 font-medium transition-colors hover:text-white">
              Terms of Service
            </Link>
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ label, href, Mark }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-white/20 text-slate-300 transition-all duration-300 hover:border-teal-400 hover:text-teal-300 hover:bg-white/5 shadow-xs"
                >
                  <Mark />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function ContactRow({
  Icon,
  label,
  children,
}: {
  Icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <Icon aria-hidden className="mt-0.5 size-4 shrink-0 text-teal-400" strokeWidth={1.8} />
      <div className="flex flex-col gap-0.5">
        <dt className="text-xs font-semibold text-slate-200">{label}</dt>
        <dd className="text-xs leading-relaxed text-slate-300">{children}</dd>
      </div>
    </div>
  );
}
