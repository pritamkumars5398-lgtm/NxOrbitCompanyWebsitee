import { cn } from "@/app/core/lib/cn";

/**
 * Decorative backdrops. All of these are purely presentational, sit behind
 * content with `pointer-events-none`, and are hidden from assistive tech.
 * They are server components — no interactivity, no client bundle cost.
 */

/**
 * Slow-drifting colour fields. Hero and CTA bands only.
 *
 * On light surfaces the blobs are kept small and very low opacity, and the
 * whole layer fades out toward the bottom — white has to stay the dominant
 * surface, so this reads as a tint at the edges rather than a coloured page.
 * The dark variant can be far more assertive because it is lighting a navy
 * slab rather than washing out white.
 */
export function Aurora({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const light = tone === "light";

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        light && "mask-fade-b",
        className,
      )}
    >
      <div
        className={cn(
          "animate-aurora-a absolute rounded-full",
          light
            ? "-top-1/4 -left-[12%] h-[38vw] w-[38vw] bg-brand-200/16 blur-[130px]"
            : "-top-1/3 -left-1/4 h-[70vw] w-[70vw] bg-brand-400/25 blur-[120px]",
        )}
      />
      <div
        className={cn(
          "animate-aurora-b absolute rounded-full",
          light
            ? "-top-[8%] right-[4%] h-[30vw] w-[30vw] bg-brand-100/20 blur-[120px]"
            : "-right-1/4 -bottom-1/3 h-[60vw] w-[60vw] bg-brand-500/30 blur-[130px]",
        )}
      />
      {!light && (
        <div
          className="animate-aurora-a absolute top-1/4 left-1/3 h-[38vw] w-[38vw] rounded-full bg-brand-300/12 blur-[110px]"
          style={{ animationDelay: "-8s" }}
        />
      )}
    </div>
  );
}

/**
 * Soft multi-stop mesh — quieter than Aurora, safe under body content.
 * Weighted toward the top and faded out downward so the section resolves to
 * plain white before the content ends.
 */
export function GradientMesh({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("mask-fade-b pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: `
          radial-gradient(at 8% 2%, rgb(0 187 169 / 0.07) 0px, transparent 42%),
          radial-gradient(at 88% 0%, rgb(60 207 199 / 0.07) 0px, transparent 38%),
          radial-gradient(at 62% 30%, rgb(150 231 225 / 0.06) 0px, transparent 40%)
        `,
      }}
    />
  );
}

/** Blueprint grid, faded at the edges. For engineering-flavoured sections. */
export function GridField({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "mask-radial-fade pointer-events-none absolute inset-0",
        tone === "light" ? "backdrop-grid" : "backdrop-grid-dark",
        className,
      )}
    />
  );
}

/** Dot field. Pairs with white sections that need texture but not structure. */
export function DotField({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("backdrop-dots mask-radial-fade pointer-events-none absolute inset-0", className)}
    />
  );
}

/** Film grain. Layers over any of the above to kill gradient banding. */
export function Grain({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("backdrop-noise pointer-events-none absolute inset-0", className)}
    />
  );
}
