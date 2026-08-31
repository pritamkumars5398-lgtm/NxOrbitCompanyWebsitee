import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check } from "lucide-react";

import { INDUSTRIES_DATA } from "@/app/core/data/industries";
import { INDUSTRY_LINKS } from "@/app/core/data/navigation";
import { DotField, Grain } from "@/app/shared/backdrop/Backdrops";
import { Reveal, Stagger, StaggerItem } from "@/app/shared/motion/Reveal";
import { CallToAction } from "@/app/shared/sections/CallToAction";
import { Breadcrumb } from "@/app/shared/ui/Breadcrumb";
import { Button } from "@/app/shared/ui/Button";
import { Card } from "@/app/shared/ui/Card";
import { Container, Eyebrow, Section, SectionHeading } from "@/app/shared/ui/Layout";
import { Stats } from "@/app/shared/ui/Stats";
import { SubNav } from "@/app/shared/ui/SubNav";
import { TrustAndFaqSection } from "@/app/shared/sections/TrustAndFaqSection";
import { ProcessArcLayout } from "@/app/shared/sections/ProcessArcLayout";

export async function generateStaticParams() {
  return Object.keys(INDUSTRIES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = INDUSTRIES_DATA[slug];
  if (!data) return { title: "Not Found" };
  return { title: data.metaTitle, description: data.metaDescription };
}

const INDUSTRY_HERO_BG_IMAGES: Record<string, string> = {
  healthcare: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
  fintech: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
  education: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  ecommerce: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  logistics: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  entertainment: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
};

const FEATURE_IMAGES: Record<string, string> = {
  // Healthcare
  "Telemedicine Platforms": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop",
  "Electronic Health Records": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop",
  "Remote Patient Monitoring": "https://images.unsplash.com/photo-1510017808632-95f08e030633?q=80&w=600&auto=format&fit=crop",
  "AI Diagnostics": "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?q=80&w=600&auto=format&fit=crop",
  "Hospital Management Systems": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop",
  "Health & Wellness Apps": "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=600&auto=format&fit=crop",

  // Fintech
  "Digital Banking": "https://images.unsplash.com/photo-1563013544-824ae1d704d3?q=80&w=600&auto=format&fit=crop",
  "Payment Gateways": "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop",
  "Lending & Credit": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop",
  "Wealth Management": "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600&auto=format&fit=crop",
  "KYC & Compliance": "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600&auto=format&fit=crop",
  "Crypto & DeFi": "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=600&auto=format&fit=crop",

  // Edtech
  "Learning Management Systems": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
  "Live & Recorded Video": "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=600&auto=format&fit=crop",
  "AI-Powered Learning": "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
  "Gamification": "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop",
  "Assessment & Proctoring": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
  "Mobile Learning": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",

  // E-commerce
  "Headless Commerce": "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop",
  "Multi-Vendor Marketplace": "https://images.unsplash.com/photo-1472851294608-062f824d296e?q=80&w=600&auto=format&fit=crop",
  "Mobile Shopping Apps": "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=600&auto=format&fit=crop",
  "Checkout Optimization": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
  "Inventory & Order Management": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
  "Personalization & AI": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",

  // Logistics
  "Fleet Management": "https://images.unsplash.com/photo-1516575150278-77136aed6920?q=80&w=600&auto=format&fit=crop",
  "Last-Mile Delivery": "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=600&auto=format&fit=crop",
  "Warehouse Management": "https://images.unsplash.com/photo-1553413719-875871274712?q=80&w=600&auto=format&fit=crop",
  "Supply Chain Visibility": "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=600&auto=format&fit=crop",
  "Route Optimization": "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop",
  "Customer Tracking Portal": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",

  // Entertainment
  "Video Streaming Platforms": "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=600&auto=format&fit=crop",
  "Live Streaming": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop",
  "Creator & Fan Platforms": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
  "Social Entertainment": "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?q=80&w=600&auto=format&fit=crop",
  "Music & Podcast Apps": "https://images.unsplash.com/photo-1484755560695-a4c74891d06e?q=80&w=600&auto=format&fit=crop",
  "Gaming Backends": "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=600&auto=format&fit=crop",
};


/**
 * Industry detail page.
 *
 * Layout signature: a **centred, tinted** hero with no artwork — the evidence
 * (stats, use cases) carries the page instead. Third distinct template after
 * the light-editorial service page and the dark-documentation technology page.
 */
export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = INDUSTRIES_DATA[slug];
  if (!data) notFound();

  return (
    <>
      <SubNav links={INDUSTRY_LINKS} label="Industries" />

      {/* ── Hero: centred, tinted, evidence-led ── */}
      <section className="relative isolate overflow-hidden bg-brand-50/60 pt-8 pb-12 sm:pt-10 sm:pb-12 lg:pt-10 lg:pb-14">
        {/* Professional industry-specific background image watermark */}
        <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
          <img
            src={INDUSTRY_HERO_BG_IMAGES[data.slug] || INDUSTRY_HERO_BG_IMAGES["healthcare"]}
            alt=""
            className="w-full h-full object-cover opacity-[0.15]"
            suppressHydrationWarning
          />
          {/* Subtle gradient overlay to blend borders naturally */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-50/10 via-transparent to-brand-50/30" />
        </div>

        <DotField className="opacity-40" />
        <Grain />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[56rem] -translate-x-1/2 rounded-full bg-brand-200/25 blur-[120px]"
        />

        <Container className="relative">
          <div className="flex flex-col items-center text-center">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Industries", href: "/industries/healthcare" },
                { label: data.title },
              ]}
            />

            <Reveal from="up" className="mt-4">
              <Eyebrow>{data.category}</Eyebrow>
            </Reveal>

            <Reveal from="up" delay={0.06} className="mt-2">
              <h1 className="max-w-4xl text-display-lg sm:text-display-xl font-serif font-medium tracking-tight bg-gradient-to-r from-brand-950 via-brand-900 to-brand-800 bg-clip-text text-transparent">
                {data.tagline}
              </h1>
            </Reveal>

            <Reveal from="up" delay={0.14} className="mt-4">
              <p className="max-w-2xl text-lead text-ink-600">{data.description}</p>
            </Reveal>

            <Reveal from="up" delay={0.22} className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href="/contact" size="lg" variant="primary" withArrow magnetic>
                {data.ctaText}
              </Button>
              <Button href="/contact" size="lg" variant="outline" withArrow>
                Talk to an Expert
              </Button>
            </Reveal>
          </div>

          {/* Boxed stat cells — the tinted hero needs the contrast of solid cards. */}
          <Reveal from="up" delay={0.1} className="mt-16">
            <Stats items={[...data.heroStats]} layout="grid" columns={4} />
          </Reveal>
        </Container>
      </section>

      {/* ── Use cases: two-column checklist ── */}
      <Section tone="white" spacing="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
            <Reveal className="flex flex-col gap-5 lg:sticky lg:top-36 lg:self-start">
              <Eyebrow>Where we help</Eyebrow>
              <h2 className="text-display-md sm:text-display-lg">
                Problems we have already solved in {data.title.toLowerCase()}.
              </h2>
              <p className="text-lead text-ink-600">
                Not a wish list — every item here is something we have built, shipped, and
                supported for a client in this sector.
              </p>
              <Button href="/contact" variant="primary" withArrow className="mt-2 self-start">
                Discuss your case
              </Button>
            </Reveal>

            <Stagger stagger={0.05} className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
              {data.useCases.map((useCase) => (
                <StaggerItem
                  key={useCase}
                  from="up"
                  className="group flex items-start gap-3 rounded-xl px-3 py-3.5 transition-colors duration-300 hover:bg-brand-50/60"
                >
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600 transition-colors duration-300 group-hover:bg-brand-300 group-hover:text-white">
                    <Check aria-hidden className="size-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-ink-700">{useCase}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </Section>

      {/* ── Capabilities: card grid on a sunken surface ── */}
      <Section tone="sunken" spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title={`What we build for ${data.title.toLowerCase()} teams`}
            description="Systems designed around the constraints this sector actually operates under."
            align="center"
            className="mx-auto mb-14"
          />

          <Stagger stagger={0.07} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.features.map((feature, index) => (
              <StaggerItem key={feature.title} from="up" scale={0.97}>
                <Card tone="plain" padding="none" interactive spotlight className="group flex h-full flex-col">
                  {/* Aspect-ratio Image Header */}
                  <div className="relative h-44 w-full overflow-hidden border-b border-hairline bg-slate-100">
                    <img
                      src={FEATURE_IMAGES[feature.title] || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop"}
                      alt={feature.title}
                      className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      suppressHydrationWarning
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Card Content with padded container */}
                  <div className="p-6 sm:p-7 flex flex-1 flex-col gap-3">
                    <span className="font-mono text-xs text-brand-400 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-semibold text-ink-900 transition-colors duration-300 group-hover:text-brand-500">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-600">{feature.description}</p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* ── Process: Arc Track Layout ── */}
      <ProcessArcLayout
        eyebrow="Engagement"
        title="How a project runs, start to finish."
        subtitle="End-to-end industry software delivery shaped around your sector requirements."
        steps={data.process}
      />

      <TrustAndFaqSection />

      <CallToAction />
    </>
  );
}
