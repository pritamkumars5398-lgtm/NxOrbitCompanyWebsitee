import { cn } from "@/app/core/lib/cn";

/* Layout primitives. Every page composes from these so horizontal rhythm and
   vertical spacing stay identical across routes. */

type ContainerWidth = "narrow" | "content" | "wide" | "full";

const WIDTHS: Record<ContainerWidth, string> = {
  narrow: "max-w-3xl",
  content: "max-w-6xl",
  wide: "max-w-7xl",
  full: "max-w-[96rem]",
};

export function Container({
  children,
  className,
  width = "wide",
}: {
  children: React.ReactNode;
  className?: string;
  width?: ContainerWidth;
}) {
  return (
    <div className={cn("mx-auto w-full px-6 sm:px-8 lg:px-10", WIDTHS[width], className)}>
      {children}
    </div>
  );
}

type SectionTone = "white" | "muted" | "sunken" | "ink" | "brand" | "none";

const TONES: Record<SectionTone, string> = {
  white: "bg-surface",
  muted: "bg-surface-muted",
  sunken: "bg-surface-sunken",
  ink: "bg-brand-950 text-ink-200",
  brand: "bg-brand-800 text-ink-100",
  none: "",
};

type SectionSpacing = "sm" | "md" | "lg" | "none";

const SPACING: Record<SectionSpacing, string> = {
  none: "",
  sm: "py-8 sm:py-10 lg:py-12",
  md: "py-12 sm:py-14 lg:py-16",
  lg: "py-14 sm:py-16 lg:py-20",
};


export function Section({
  children,
  className,
  tone = "white",
  spacing = "md",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: SectionTone;
  spacing?: SectionSpacing;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative isolate", TONES[tone], SPACING[spacing], className)}
      // Anchored sections must clear the sticky header when jumped to.
      style={id ? { scrollMarginTop: "6rem" } : undefined}
    >
      {children}
    </section>
  );
}

/** Small uppercase label that sits above a heading. */
export function Eyebrow({
  children,
  className,
  tone = "brand",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "brand" | "light" | "muted";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-eyebrow uppercase",
        tone === "brand" && "text-brand-500",
        tone === "light" && "text-brand-200",
        tone === "muted" && "text-ink-400",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-px w-6",
          tone === "light" ? "bg-brand-200/60" : "bg-current opacity-40",
        )}
      />
      {children}
    </span>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  /** Right-hand slot for a CTA on split headers. */
  action?: React.ReactNode;
}

/**
 * The one heading block used at the top of every section. Keeping this in a
 * single component is what stops each page from inventing its own type scale.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
  action,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        action && "lg:flex-row lg:items-end lg:justify-between lg:gap-12",
        className,
      )}
    >
      <div className={cn("flex flex-col gap-4", align === "center" ? "max-w-2xl" : "max-w-2xl")}>
        {eyebrow && <Eyebrow tone={tone === "light" ? "light" : "brand"}>{eyebrow}</Eyebrow>}
        <h2
          className={cn(
            "text-display-md sm:text-display-lg",
            tone === "light" && "text-white",
          )}
        >
          {title}
        </h2>
        {description && (
          <p className={cn("text-lead", tone === "light" ? "text-ink-300" : "text-ink-600")}>
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

/** Thin hairline divider with an optional gradient wash. */
export function Divider({ className, gradient }: { className?: string; gradient?: boolean }) {
  return (
    <div
      aria-hidden
      className={cn(
        "h-px w-full",
        gradient
          ? "bg-[linear-gradient(to_right,transparent,rgb(0_187_169/0.35),transparent)]"
          : "bg-hairline",
        className,
      )}
    />
  );
}
