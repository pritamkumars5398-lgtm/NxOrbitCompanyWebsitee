import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Server,
  UserCheck,
  Globe2,
  Bell,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { GradientMesh, Grain } from "@/app/shared/backdrop/Backdrops";
import { Container, Eyebrow, Section } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";
import { Breadcrumb } from "@/app/shared/ui/Breadcrumb";
import { CallToAction } from "@/app/shared/sections/CallToAction";

export const metadata: Metadata = {
  title: "Privacy Policy | NXT Orbit IT Solutions",
  description:
    "Enterprise data protection policies, governance principles, and compliance commitments of NXT Orbit IT Solutions Pvt. Ltd.",
};

const SECTIONS = [
  { id: "overview", label: "1. Overview & Scope" },
  { id: "data-collection", label: "2. Information We Collect" },
  { id: "data-use", label: "3. How We Use Data" },
  { id: "sovereignty", label: "4. Data Sovereignty & Storage" },
  { id: "security", label: "5. Cryptographic Security" },
  { id: "subprocessors", label: "6. Sub-processors" },
  { id: "user-rights", label: "7. Your Rights (GDPR / DPDP)" },
  { id: "cookies", label: "8. Cookies & Telemetry" },
  { id: "dpo-contact", label: "9. Contact our DPO" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ── Standard Site Hero ── */}
      <section className="relative isolate overflow-hidden pt-24 pb-12 lg:pt-28 lg:pb-12">
        <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop"
            alt="NXT Orbit Data Governance & Security"
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
                { label: "Privacy Policy" },
              ]}
            />

            <Reveal from="up">
              <Eyebrow>Legal & Compliance</Eyebrow>
            </Reveal>

            <Reveal from="up" delay={0.06}>
              <h1 className="max-w-3xl text-display-lg sm:text-display-xl font-extrabold text-slate-900">
                Privacy Policy &amp; <br />
                <span className="bg-linear-to-r from-[#006B7D] to-[#00d2c4] bg-clip-text text-transparent">
                  Enterprise Data Governance.
                </span>
              </h1>
            </Reveal>

            <Reveal from="up" delay={0.12}>
              <p className="max-w-2xl text-lead text-ink-600">
                We believe enterprise privacy is a fundamental engineering requirement. This document outlines how NXT Orbit IT Solutions Pvt. Ltd. collects, protects, isolates, and processes customer information.
              </p>
            </Reveal>

            <Reveal from="up" delay={0.18}>
              <div className="inline-flex items-center gap-3 rounded-full border border-hairline bg-white/90 px-4 py-2 text-xs font-mono text-ink-600 backdrop-blur-md shadow-2xs">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Effective Date: October 2026</span>
                <span className="text-ink-300">•</span>
                <span>Version 2.4</span>
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
                <FileText className="size-3.5" />
                Table of Contents
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
                <div className="text-2xs font-mono uppercase text-ink-400 mb-1">Questions?</div>
                <p className="text-xs text-ink-600 mb-2">Speak directly with our legal & compliance officer.</p>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-brand-600 hover:text-brand-700 underline underline-offset-4"
                >
                  Contact Compliance →
                </Link>
              </div>
            </aside>

            {/* Document Clauses Content */}
            <div className="space-y-12 max-w-3xl">
              {/* Section 1 */}
              <div id="overview" className="scroll-mt-28">
                <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold text-brand-500 uppercase tracking-wider mb-2">
                  <ShieldCheck className="size-4" />
                  Section 01
                </div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4">Overview & Scope</h2>
                <div className="space-y-4 text-sm leading-relaxed text-ink-700">
                  <p>
                    This Privacy Policy applies to all digital platforms, cloud services, software development engagements, and websites operated by <strong>NXT Orbit IT Solutions Pvt. Ltd.</strong> (&ldquo;NXT Orbit&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), registered at Office No. 903, Kamdhenu 23 West, TTC Industrial Area, MIDC, Pawne, Navi Mumbai 400705, India.
                  </p>
                  <p>
                    We operate primarily as a business-to-business enterprise technology engineering partner. Our services are tailored to enterprise clients, startups, and institutions. We never sell, monetize, broker, or trade client data or end-user records to third-party advertising networks.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div id="data-collection" className="scroll-mt-28 border-t border-hairline pt-8">
                <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold text-brand-500 uppercase tracking-wider mb-2">
                  <Eye className="size-4" />
                  Section 02
                </div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4">Information We Collect</h2>
                <div className="space-y-4 text-sm leading-relaxed text-ink-700">
                  <p>We classify information collected into three distinct categories:</p>
                  <div className="grid gap-4 sm:grid-cols-2 mt-4">
                    <div className="rounded-xl border border-hairline bg-surface-muted p-4">
                      <h3 className="text-sm font-bold text-ink-900 mb-1.5 flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-brand-500" />
                        Account & Engagement Data
                      </h3>
                      <p className="text-xs text-ink-600 leading-relaxed">
                        Names, corporate email addresses, phone numbers, billing details, and contract records provided during consultation or onboarding.
                      </p>
                    </div>
                    <div className="rounded-xl border border-hairline bg-surface-muted p-4">
                      <h3 className="text-sm font-bold text-ink-900 mb-1.5 flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-brand-500" />
                        Technical Telemetry
                      </h3>
                      <p className="text-xs text-ink-600 leading-relaxed">
                        IP addresses, browser signatures, API performance metrics, latency benchmarks, and error diagnostics collected to uphold system SLA guarantees.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-ink-500 italic mt-2">
                    Client application data processed through custom software engineered by NXT Orbit remains the exclusive, intellectual property and confidential material of the respective client.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div id="data-use" className="scroll-mt-28 border-t border-hairline pt-8">
                <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold text-brand-500 uppercase tracking-wider mb-2">
                  <FileText className="size-4" />
                  Section 03
                </div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4">How We Use Enterprise Data</h2>
                <div className="space-y-3 text-sm leading-relaxed text-ink-700">
                  <p>Collected information is processed solely for lawful business and engineering objectives:</p>
                  <ul className="list-disc pl-5 space-y-2 text-ink-700">
                    <li>Executing contracted software engineering, system integration, and support milestones.</li>
                    <li>Provisioning and maintaining development, staging, and live production environments.</li>
                    <li>Auditing system security, preventing unauthorized intrusion, and ensuring continuous disaster recovery readiness.</li>
                    <li>Complying with statutory accounting, taxation, and regulatory mandates in jurisdictions where we operate.</li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div id="sovereignty" className="scroll-mt-28 border-t border-hairline pt-8">
                <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold text-brand-500 uppercase tracking-wider mb-2">
                  <Globe2 className="size-4" />
                  Section 04
                </div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4">Data Sovereignty & Geographic Storage</h2>
                <div className="space-y-4 text-sm leading-relaxed text-ink-700">
                  <p>
                    We respect national and regional data sovereignty regulations. In accordance with client specifications, infrastructure instances and databases can be geographically pinned to localized availability zones (e.g., AWS Mumbai / ap-south-1, EU Frankfurt, US East).
                  </p>
                  <div className="rounded-xl border border-brand-200 bg-brand-50/50 p-4 text-ink-800 text-xs leading-relaxed">
                    <strong>Zero Cross-Border Spillover:</strong> Under multi-tenant enterprise configurations, database tenants are strictly partitioned logically and cryptographically to prevent cross-jurisdictional data contamination.
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div id="security" className="scroll-mt-28 border-t border-hairline pt-8">
                <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold text-brand-500 uppercase tracking-wider mb-2">
                  <Lock className="size-4" />
                  Section 05
                </div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4">Cryptographic Security Standards</h2>
                <div className="space-y-4 text-sm leading-relaxed text-ink-700">
                  <p>
                    We apply enterprise-grade defense-in-depth principles across all codebases, cloud configurations, and developer workstations:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 text-xs">
                    <div className="rounded-lg border border-hairline p-3 bg-white">
                      <div className="font-bold text-ink-900 mb-1">Encryption In Transit</div>
                      <p className="text-ink-600">All network traffic enforced via TLS 1.3 with modern cipher suites and HSTS preloading.</p>
                    </div>
                    <div className="rounded-lg border border-hairline p-3 bg-white">
                      <div className="font-bold text-ink-900 mb-1">Encryption At Rest</div>
                      <p className="text-ink-600">Databases, volumes, and backups encrypted with AES-256 with rotating KMS keys.</p>
                    </div>
                    <div className="rounded-lg border border-hairline p-3 bg-white">
                      <div className="font-bold text-ink-900 mb-1">Access Control & RBAC</div>
                      <p className="text-ink-600">Hardware-backed Multi-Factor Authentication (MFA) and least-privilege role boundaries.</p>
                    </div>
                    <div className="rounded-lg border border-hairline p-3 bg-white">
                      <div className="font-bold text-ink-900 mb-1">Automated Auditing</div>
                      <p className="text-ink-600">Immutable audit logs, continuous vulnerability scanning, and automated SAST/DAST pipelines.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div id="subprocessors" className="scroll-mt-28 border-t border-hairline pt-8">
                <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold text-brand-500 uppercase tracking-wider mb-2">
                  <Server className="size-4" />
                  Section 06
                </div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4">Authorized Sub-processors</h2>
                <div className="space-y-3 text-sm leading-relaxed text-ink-700">
                  <p>
                    We work with industry-standard, compliance-certified cloud hosting providers and tooling vendors under rigorous Data Processing Agreements (DPAs):
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-600">
                    <li><strong>Amazon Web Services (AWS)</strong> &amp; <strong>Google Cloud Platform (GCP)</strong> — Cloud Infrastructure &amp; Databases.</li>
                    <li><strong>GitHub Enterprise</strong> — Version Control &amp; Secure CI/CD Automation.</li>
                    <li><strong>Stripe / Razorpay</strong> — PCI-DSS Level 1 compliant billing engines (we never store card numbers).</li>
                  </ul>
                </div>
              </div>

              {/* Section 7 */}
              <div id="user-rights" className="scroll-mt-28 border-t border-hairline pt-8">
                <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold text-brand-500 uppercase tracking-wider mb-2">
                  <UserCheck className="size-4" />
                  Section 07
                </div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4">Your Statutory Rights (GDPR &amp; DPDP Act 2023)</h2>
                <div className="space-y-4 text-sm leading-relaxed text-ink-700">
                  <p>
                    Under applicable data protection laws including the European Union General Data Protection Regulation (GDPR) and the Digital Personal Data Protection (DPDP) Act of India, you possess the right to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-700">
                    <li>Request confirmation and access to personal data processed by NXT Orbit.</li>
                    <li>Obtain rectification of inaccurate or incomplete records.</li>
                    <li>Demand erasure (&ldquo;Right to be Forgotten&rdquo;) where statutory retention is not required.</li>
                    <li>Export data in a structured, machine-readable format (&ldquo;Data Portability&rdquo;).</li>
                    <li>Withdraw consent at any time without retroactive penalty.</li>
                  </ul>
                </div>
              </div>

              {/* Section 8 */}
              <div id="cookies" className="scroll-mt-28 border-t border-hairline pt-8">
                <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold text-brand-500 uppercase tracking-wider mb-2">
                  <Bell className="size-4" />
                  Section 08
                </div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4">Cookies &amp; Telemetry</h2>
                <p className="text-sm leading-relaxed text-ink-700 mb-3">
                  We use strictly essential cookies to retain session state and manage security tokens. Anonymous aggregated analytics help us understand platform throughput. You can manage or revoke cookie preferences at any time via our persistent Cookie Consent preferences drawer.
                </p>
              </div>

              {/* Section 9 */}
              <div id="dpo-contact" className="scroll-mt-28 border-t border-hairline pt-8">
                <div className="inline-flex items-center gap-2 text-2xs font-mono font-bold text-brand-500 uppercase tracking-wider mb-2">
                  <Mail className="size-4" />
                  Section 09
                </div>
                <h2 className="text-2xl font-bold text-ink-900 mb-4">Contact our Data Protection Officer</h2>
                <div className="rounded-2xl border border-hairline bg-surface-muted p-6">
                  <p className="text-sm text-ink-700 mb-4">
                    For privacy inquiries, audit records, or to exercise statutory rights, please contact our Data Governance desk:
                  </p>
                  <div className="space-y-2 text-xs font-medium text-ink-800">
                    <div><strong>Attention:</strong> Data Protection &amp; Compliance Office</div>
                    <div><strong>Email:</strong> <a href="mailto:info@nxt-orbit.com" className="text-brand-600 underline">info@nxt-orbit.com</a></div>
                    <div><strong>Telephone:</strong> +91 9763804442</div>
                    <div><strong>Address:</strong> Office No. 903, Kamdhenu 23 West, TTC Industrial Area, MIDC, Pawne, Navi Mumbai 400705, India.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Call To Action ── */}
      <CallToAction
        eyebrow="ENTERPRISE STANDARDS"
        title="Ready to engineer secure, compliant software?"
        description="Schedule a technical consultation with an enterprise solutions architect to discuss your platform security and data governance requirements."
        primary={{ label: "Book a Consultation", href: "/contact" }}
        secondary={{ label: "Talk to Our Team", href: "/contact" }}
      />
    </>
  );
}
