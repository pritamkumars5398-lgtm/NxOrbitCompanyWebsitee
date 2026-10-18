import type { Metadata } from "next";
import Link from "next/link";
import {
  FileCode,
  ShieldAlert,
  Scale,
  Award,
  CreditCard,
  FileCheck2,
  Lock,
  RefreshCw,
  Building,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { GradientMesh, Grain } from "@/app/shared/backdrop/Backdrops";
import { Container, Eyebrow, Section } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";
import { Breadcrumb } from "@/app/shared/ui/Breadcrumb";
import { CallToAction } from "@/app/shared/sections/CallToAction";

export const metadata: Metadata = {
  title: "Terms of Service | NXT Orbit IT Solutions",
  description:
    "Master services agreement terms, intellectual property assignment, SLAs, and commercial governance for NXT Orbit IT Solutions Pvt. Ltd.",
};

const SECTIONS = [
  { id: "acceptance", label: "1. Acceptance & Engagement Scope" },
  { id: "sla", label: "2. Service Levels & SLAs" },
  { id: "ip-rights", label: "3. IP & Work Product Ownership" },
  { id: "client-obligations", label: "4. Client Responsibilities" },
  { id: "confidentiality", label: "5. Mutual Confidentiality" },
  { id: "fees-payment", label: "6. Fees, Billing & Invoicing" },
  { id: "warranties", label: "7. Warranties & Liability" },
  { id: "termination", label: "8. Term & Termination" },
  { id: "governing-law", label: "9. Governing Law & Jurisdiction" },
  { id: "notices", label: "10. Notices & Contact" },
];

export default function TermsOfServicePage() {
  return (
    <>
      {/* ── Standard Site Hero ── */}
      <section className="relative isolate overflow-hidden pt-24 pb-12 lg:pt-28 lg:pb-12">
        <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
            alt="NXT Orbit Commercial Terms & Master Service Agreement"
            className="w-full h-full object-cover object-center lg:object-right opacity-80"
            suppressHydrationWarning
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.7)_40%,transparent_80%)] lg:bg-[linear-gradient(90deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.8)_30%,rgba(255,255,255,0.25)_60%,transparent_85%)]" />
        </div>

        <GradientMesh />
        <Grain />

        <Container className="relative">
          <div className="flex flex-col gap-5">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Legal" },
                { label: "Terms of Service" },
              ]}
            />

            <Reveal from="up">
              <Eyebrow>Legal & Governance</Eyebrow>
            </Reveal>

            <Reveal from="up" delay={0.06}>
              <h1 className="max-w-3xl text-display-lg sm:text-display-xl font-extrabold text-slate-900">
                Terms of Service &amp; <br />
                <span className="bg-linear-to-r from-[#006B7D] to-[#00d2c4] bg-clip-text text-transparent">
                  Master Services Agreement.
                </span>
              </h1>
            </Reveal>

            <Reveal from="up" delay={0.12}>
              <p className="max-w-2xl text-lead text-ink-600">
                Commercial agreements, intellectual property ownership guarantees, service availability commitments, and mutual liabilities between NXT Orbit IT Solutions Pvt. Ltd. and our clients.
              </p>
            </Reveal>

            <Reveal from="up" delay={0.18}>
              <div className="inline-flex items-center gap-3 rounded-full border border-hairline bg-white/90 px-4 py-2 text-xs font-mono text-ink-600 backdrop-blur-md shadow-2xs">
                <span className="size-2 rounded-full bg-brand-500 animate-pulse" />
                <span>Effective Date: October 2026</span>
                <span className="text-ink-300">•</span>
                <span>Commercial Standard v3.1</span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Main Legal Body Section ── */}
      <Section tone="white" spacing="lg" className="border-t border-hairline">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[16rem_1fr] items-start">
            {/* Sticky Table of Contents sidebar */}
            <aside className="sticky top-28 hidden lg:block rounded-2xl border border-hairline bg-surface-muted p-5">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 mb-4 flex items-center gap-1.5">
                <FileCode className="size-3.5" />
                Agreement Clauses
              </div>
              <nav className="flex flex-col gap-1.5 text-xs font-medium text-ink-600">
                {SECTIONS.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="rounded-lg px-2.5 py-1.5 transition-colors hover:bg-white hover:text-brand-600"
                  >
                    {sec.label}
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-5 border-t border-hairline">
                <div className="text-2xs font-mono uppercase text-ink-400 mb-1">Commercial Desk</div>
                <p className="text-xs text-ink-600 mb-2">Need a custom enterprise MSA or SLA schedule?</p>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-brand-600 hover:text-brand-700 underline underline-offset-4"
                >
                  Contact Legal Counsel →
                </Link>
              </div>
            </aside>

            {/* Document Clauses Content */}
            <div className="space-y-12 max-w-3xl">
              {/* Clause 1 */}
              <div id="acceptance" className="scroll-mt-28">
                <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold text-brand-500 uppercase tracking-wider mb-2">
                  <Scale className="size-4" />
                  Clause 01
                </div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4">Acceptance &amp; Engagement Scope</h2>
                <div className="space-y-4 text-sm leading-relaxed text-ink-700">
                  <p>
                    These Terms of Service, together with any executed Statement of Work (&ldquo;SOW&rdquo;), Service Order, or Service Level Agreement, govern all software engineering, system architecture, advisory, and SaaS subscription deliverables provided by <strong>NXT Orbit IT Solutions Pvt. Ltd.</strong> (&ldquo;NXT Orbit&rdquo;).
                  </p>
                  <p>
                    By executing a SOW, accessing NXT Orbit platforms, or issuing a purchase order, the Client entity agrees to be legally bound by these terms. In the event of an explicit conflict between these Terms and a customized SOW signed by authorized officers of both parties, the SOW will prevail.
                  </p>
                </div>
              </div>

              {/* Clause 2 */}
              <div id="sla" className="scroll-mt-28 border-t border-hairline pt-8">
                <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold text-brand-500 uppercase tracking-wider mb-2">
                  <Award className="size-4" />
                  Clause 02
                </div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4">Service Levels, Availability &amp; Maintenance</h2>
                <div className="space-y-4 text-sm leading-relaxed text-ink-700">
                  <p>
                    NXT Orbit commits to high-availability engineering standards for managed platform instances and cloud deployments:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 mt-2">
                    <div className="rounded-xl border border-hairline bg-surface-muted p-4">
                      <div className="text-xs font-mono uppercase text-brand-600 font-bold mb-1">Production Uptime</div>
                      <div className="text-lg font-bold text-ink-900 mb-1">99.9% Availability SLA</div>
                      <p className="text-xs text-ink-600">Calculated over calendar quarters, excluding scheduled maintenance windows.</p>
                    </div>
                    <div className="rounded-xl border border-hairline bg-surface-muted p-4">
                      <div className="text-xs font-mono uppercase text-brand-600 font-bold mb-1">Incident Response</div>
                      <div className="text-lg font-bold text-ink-900 mb-1">&lt; 30 Minute Severity 1</div>
                      <p className="text-xs text-ink-600">Rapid triaging and engineer escalation for mission-critical production blockers.</p>
                    </div>
                  </div>
                  <p className="text-xs text-ink-500">
                    Scheduled maintenance is conducted during predetermined off-peak hours with at least 48 hours prior electronic notice to Client technical coordinators.
                  </p>
                </div>
              </div>

              {/* Clause 3 */}
              <div id="ip-rights" className="scroll-mt-28 border-t border-hairline pt-8">
                <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold text-brand-500 uppercase tracking-wider mb-2">
                  <FileCheck2 className="size-4" />
                  Clause 03
                </div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4">Intellectual Property &amp; Source Code Ownership</h2>
                <div className="space-y-4 text-sm leading-relaxed text-ink-700">
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 text-ink-800 text-xs leading-relaxed">
                    <strong>100% Client Ownership of Custom Code:</strong> Upon complete receipt of agreed milestone payments, NXT Orbit transfers and assigns all right, title, and intellectual property ownership in custom bespoke source code, architectures, database schemas, and documentation engineered specifically for the Client under the applicable SOW.
                  </div>
                  <p>
                    <strong>Background Tools &amp; Frameworks:</strong> NXT Orbit retains ownership in pre-existing developer scaffolding, generic libraries, and proprietary software kernels (e.g. NXT WMS core libraries). The Client receives an irrevocable, perpetual, royalty-free, non-exclusive license to utilize, modify, and build upon such components as embedded within their delivered application.
                  </p>
                </div>
              </div>

              {/* Clause 4 */}
              <div id="client-obligations" className="scroll-mt-28 border-t border-hairline pt-8">
                <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold text-brand-500 uppercase tracking-wider mb-2">
                  <Building className="size-4" />
                  Clause 04
                </div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4">Client Responsibilities &amp; Acceptable Use</h2>
                <div className="space-y-3 text-sm leading-relaxed text-ink-700">
                  <p>To guarantee timely engineering delivery, Client agrees to:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-700">
                    <li>Provide reasonable access to technical documentation, legacy APIs, and subject matter experts.</li>
                    <li>Conduct User Acceptance Testing (UAT) within designated review periods specified in the project sprint schedule.</li>
                    <li>Not use platforms to reverse engineer, decompile, or create unauthorized derivative benchmarks of NXT Orbit core modules.</li>
                  </ul>
                </div>
              </div>

              {/* Clause 5 */}
              <div id="confidentiality" className="scroll-mt-28 border-t border-hairline pt-8">
                <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold text-brand-500 uppercase tracking-wider mb-2">
                  <Lock className="size-4" />
                  Clause 05
                </div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4">Mutual Confidentiality &amp; Non-Disclosure</h2>
                <div className="space-y-3 text-sm leading-relaxed text-ink-700">
                  <p>
                    Both parties acknowledge that during an engagement, each may receive proprietary trade secrets, business roadmaps, financial data, and technical schematics (&ldquo;Confidential Information&rdquo;).
                  </p>
                  <p>
                    Each party agrees to safeguard Confidential Information with the same degree of care it exercises with its own high-value trade secrets (and in no event less than reasonable care), and shall not disclose such information to any third party except to employees, contractors, and legal counsel with a need to know under equivalent NDA terms.
                  </p>
                </div>
              </div>

              {/* Clause 6 */}
              <div id="fees-payment" className="scroll-mt-28 border-t border-hairline pt-8">
                <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold text-brand-500 uppercase tracking-wider mb-2">
                  <CreditCard className="size-4" />
                  Clause 06
                </div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4">Fees, Invoicing &amp; Commercial Terms</h2>
                <div className="space-y-4 text-sm leading-relaxed text-ink-700">
                  <p>
                    Engineering deliverables are invoiced on milestone delivery, sprint-based retainers, or time-and-materials basis as established in the SOW.
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-700">
                    <li>Payment terms are strictly Net 15 or Net 30 from invoice issuance date unless specified otherwise.</li>
                    <li>All fees are exclusive of applicable GST, VAT, or withholding taxes, which shall be itemized in accordance with statutory regulations.</li>
                  </ul>
                </div>
              </div>

              {/* Clause 7 */}
              <div id="warranties" className="scroll-mt-28 border-t border-hairline pt-8">
                <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold text-brand-500 uppercase tracking-wider mb-2">
                  <ShieldAlert className="size-4" />
                  Clause 07
                </div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4">Warranties &amp; Limitation of Liability</h2>
                <div className="space-y-3 text-sm leading-relaxed text-ink-700">
                  <p>
                    <strong>Warranty:</strong> NXT Orbit warrants that custom software will materially conform to the specifications documented in the SOW for a period of 90 days following final production deployment (&ldquo;Warranty Period&rdquo;). Any verified functional defects reported during this window will be rectified without additional professional fees.
                  </p>
                  <p>
                    <strong>Limitation of Liability:</strong> To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, special, or consequential damages (including loss of profits or business interruption). NXT Orbit&apos;s aggregate liability arising out of an engagement shall not exceed the total fees paid by Client to NXT Orbit under the specific SOW in the preceding twelve (12) month period.
                  </p>
                </div>
              </div>

              {/* Clause 8 */}
              <div id="termination" className="scroll-mt-28 border-t border-hairline pt-8">
                <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold text-brand-500 uppercase tracking-wider mb-2">
                  <RefreshCw className="size-4" />
                  Clause 08
                </div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4">Term, Termination &amp; Transition</h2>
                <div className="space-y-3 text-sm leading-relaxed text-ink-700">
                  <p>
                    Either party may terminate an engagement for material breach upon thirty (30) days prior written notice if such breach remains uncured. In the event of early termination for convenience by Client, Client shall pay for all work completed and non-recoverable resource allocations through the termination effective date.
                  </p>
                  <p>
                    Upon contract termination, NXT Orbit will execute an orderly transition, handing over all completed source repositories, build pipelines, and documentation.
                  </p>
                </div>
              </div>

              {/* Clause 9 */}
              <div id="governing-law" className="scroll-mt-28 border-t border-hairline pt-8">
                <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold text-brand-500 uppercase tracking-wider mb-2">
                  <Scale className="size-4" />
                  Clause 09
                </div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4">Governing Law &amp; Dispute Resolution</h2>
                <div className="space-y-3 text-sm leading-relaxed text-ink-700">
                  <p>
                    These Terms of Service and any contractual disputes shall be governed by and construed in accordance with the laws of <strong>India</strong>.
                  </p>
                  <p>
                    Any dispute, controversy, or claim arising out of or relating to this contract shall be submitted to binding arbitration in <strong>Mumbai, Maharashtra, India</strong> under the Arbitration and Conciliation Act, 1996, with courts in Mumbai possessing exclusive territorial jurisdiction.
                  </p>
                </div>
              </div>

              {/* Clause 10 */}
              <div id="notices" className="scroll-mt-28 border-t border-hairline pt-8">
                <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold text-brand-500 uppercase tracking-wider mb-2">
                  <Mail className="size-4" />
                  Clause 10
                </div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4">Notices &amp; Contact</h2>
                <div className="rounded-2xl border border-hairline bg-surface-muted p-6">
                  <p className="text-sm text-ink-700 mb-4">
                    Formal legal notices, commercial communications, and escalation correspondence must be delivered to:
                  </p>
                  <div className="space-y-2 text-xs font-medium text-ink-800">
                    <div><strong>Legal Entity:</strong> NXT Orbit IT Solutions Pvt. Ltd.</div>
                    <div><strong>Corporate Counsel:</strong> <a href="mailto:info@nxt-orbit.com" className="text-brand-600 underline">info@nxt-orbit.com</a></div>
                    <div><strong>Headquarters:</strong> Office No. 903, Kamdhenu 23 West, TTC Industrial Area, MIDC, Pawne, Navi Mumbai 400705, India.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Call To Action ── */}
      <CallToAction
        eyebrow="ENTERPRISE PARTNERSHIP"
        title="Ready to build your next enterprise milestone?"
        description="Connect with our technical leadership team to structure your software development agreement and architecture roadmap."
        primary={{ label: "Book a Consultation", href: "/contact" }}
        secondary={{ label: "Talk to Our Team", href: "/contact" }}
      />
    </>
  );
}
