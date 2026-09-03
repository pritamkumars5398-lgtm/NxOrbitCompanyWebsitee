import type { Metadata } from "next";
import { Building2, Clock, Mail, MapPin, Phone } from "lucide-react";

import { CONTACT_DETAILS } from "@/app/core/data/navigation";
import { Grain, GridField } from "@/app/shared/backdrop/Backdrops";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";
import { Breadcrumb } from "@/app/shared/ui/Breadcrumb";
import { Container, Eyebrow, Section } from "@/app/shared/ui/Layout";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact NXTorbit",
  description: "Talk to an engineer about your project. We reply within one working day.",
};

const CHANNELS = [
  { Icon: Mail, label: "Email", value: CONTACT_DETAILS.email, href: CONTACT_DETAILS.emailHref },
  { Icon: Phone, label: "Phone", value: CONTACT_DETAILS.phone, href: CONTACT_DETAILS.phoneHref },
  { Icon: Clock, label: "Hours", value: CONTACT_DETAILS.hours },
  { Icon: MapPin, label: "Studio", value: CONTACT_DETAILS.address },
];

const PROMISES = [
  "A reply from an engineer, not a sales inbox",
  "One working day, usually the same afternoon",
  "A rough architecture and number on the first call",
  "No retainer required to start a conversation",
];

/**
 * Contact page.
 *
 * Layout signature: a **console split** — a dark contact rail pinned on the
 * left against a full-height white form on the right. No hero band at all,
 * which is what makes this page feel unlike every other route in the site.
 */
export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-20">
        {/* Full-width hero background image container */}
        <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=1600&auto=format&fit=crop"
            alt="NXTorbit Engineering Consultation & Client Workspace"
            className="w-full h-full object-cover object-right opacity-100"
            suppressHydrationWarning
          />
          {/* Horizontal fade gradient: solid white behind text on the left, fading to transparent on the right */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_20%,rgba(255,255,255,0.7)_35%,transparent_55%)]" />
          {/* Vertical fade to blend smoothly */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/90" />
        </div>

        <Grain />

        <Container className="relative">
          <div className="mb-12 flex flex-col gap-5">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
            <Reveal from="up">
              <Eyebrow>Get in touch</Eyebrow>
            </Reveal>
            <Reveal from="up" delay={0.06}>
              <h1 className="max-w-3xl text-display-lg sm:text-display-xl text-slate-900 leading-[1.05]">
                Tell us what <br />
                <span className="bg-gradient-to-r from-[#006B7D] to-[#00d2c4] bg-clip-text text-transparent">
                  you&apos;re building.
                </span>
              </h1>
            </Reveal>
            <Reveal from="up" delay={0.12}>
              <p className="max-w-xl text-lead text-ink-600">
                Every enquiry lands with an engineer who has shipped something like it before.
                You&apos;ll hear back within one working day.
              </p>
            </Reveal>
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-8">
            {/* ── Dark contact rail ── */}
            <Reveal from="right" className="lg:sticky lg:top-28">
              <div className="relative isolate overflow-hidden rounded-3xl bg-brand-950 p-8 sm:p-9">
                <GridField tone="dark" className="opacity-60" />
                <Grain />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-20 -right-16 size-56 rounded-full bg-brand-400/20 blur-3xl"
                />

                <div className="relative flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <Eyebrow tone="light">Direct line</Eyebrow>
                    <p className="text-lg leading-relaxed font-medium text-white">
                      Prefer to skip the form? Call or email and you&apos;ll reach the same people.
                    </p>
                  </div>

                  <dl className="flex flex-col gap-5 border-t border-white/10 pt-7">
                    {CHANNELS.map(({ Icon, label, value, href }) => (
                      <div key={label} className="flex gap-3.5">
                        <Icon
                          aria-hidden
                          className="mt-0.5 size-4 shrink-0 text-brand-300"
                          strokeWidth={1.7}
                        />
                        <div className="flex flex-col gap-0.5">
                          <dt className="text-xs font-semibold text-ink-400">{label}</dt>
                          <dd className="text-sm text-ink-200">
                            {href ? (
                              <a href={href} className="link-underline hover:text-white">
                                {value}
                              </a>
                            ) : (
                              value
                            )}
                          </dd>
                        </div>
                      </div>
                    ))}
                  </dl>

                  <div className="flex flex-col gap-3 border-t border-white/10 pt-7">
                    <span className="text-eyebrow uppercase text-brand-200">What to expect</span>
                    <ul className="flex flex-col gap-2.5">
                      {PROMISES.map((promise) => (
                        <li key={promise} className="flex gap-2.5 text-sm text-ink-300">
                          <span
                            aria-hidden
                            className="mt-2 size-1 shrink-0 rounded-full bg-brand-300"
                          />
                          {promise}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ── Form ── */}
            <Reveal from="left" delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Office ── */}
      <Section tone="muted" spacing="md" id="offices">
        <Container>
          <Stagger className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-20">
            <StaggerItem from="up" className="flex flex-col gap-5">
              <Eyebrow>Where we are</Eyebrow>
              <h2 className="text-display-md sm:text-display-lg">One studio, one time zone.</h2>
              <p className="max-w-md text-lead text-ink-600">
                Our whole team sits in Navi Mumbai. No offshore hand-off at 6pm, no work waking up
                in a different country overnight.
              </p>
            </StaggerItem>

            <StaggerItem from="up">
              <div className="flex flex-col gap-5 rounded-3xl border border-hairline bg-white p-8">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                  <Building2 aria-hidden className="size-5" strokeWidth={1.6} />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-semibold text-ink-900">Navi Mumbai, India</h3>
                  <p className="text-sm leading-relaxed text-ink-600">{CONTACT_DETAILS.address}</p>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-hairline pt-5 text-sm">
                  <a
                    href={CONTACT_DETAILS.phoneHref}
                    className="link-underline font-semibold text-brand-500"
                  >
                    {CONTACT_DETAILS.phone}
                  </a>
                  <a
                    href={CONTACT_DETAILS.emailHref}
                    className="link-underline font-semibold text-brand-500"
                  >
                    {CONTACT_DETAILS.email}
                  </a>
                </div>
              </div>
            </StaggerItem>
          </Stagger>
        </Container>
      </Section>
    </>
  );
}
