import { FAQS } from "@/app/core/constants/app.constant";
import { Accordion } from "@/app/shared/ui/Accordion";
import { Button } from "@/app/shared/ui/Button";
import { Container, Eyebrow, Section } from "@/app/shared/ui/Layout";
import { Reveal } from "@/app/shared/motion/Reveal";

/**
 * FAQ. Split layout: the question set carries the width while the heading and
 * escape hatch stay pinned in a narrow left column.
 */
export function Faq() {
  const items = FAQS.map((faq) => ({
    question: faq.q,
    answer: faq.a,
    points: faq.bulletPoints,
  }));

  return (
    <Section tone="muted" spacing="lg" id="faq">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
          <Reveal className="flex flex-col gap-5 lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="text-display-md sm:text-display-lg">
              The things people ask before signing.
            </h2>
            <p className="text-lead text-ink-600">
              Straight answers. If yours isn&apos;t here, an engineer will answer it on the call —
              not a salesperson.
            </p>
            <Button href="/contact" variant="outline" withArrow className="mt-2 self-start">
              Ask us directly
            </Button>
          </Reveal>

          <Reveal from="up" delay={0.1}>
            <Accordion items={items} defaultOpen={0} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
