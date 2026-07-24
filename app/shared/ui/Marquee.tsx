import { cn } from "@/app/core/lib/cn";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  /** Seconds for one full pass. Longer = calmer. */
  duration?: number;
  reverse?: boolean;
  /** Pause when the pointer is over the rail. */
  pauseOnHover?: boolean;
  gap?: string;
}

/**
 * Infinite horizontal rail. The children are rendered twice and the track
 * translates -50%, so the loop is seamless without measuring anything. The
 * duplicate is hidden from assistive tech.
 */
export function Marquee({
  children,
  className,
  duration = 40,
  reverse = false,
  pauseOnHover = true,
  gap = "3rem",
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "mask-fade-x relative flex w-full overflow-hidden",
        pauseOnHover && "marquee-paused",
        className,
      )}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      <div
        className={cn("flex w-max shrink-0", reverse ? "animate-marquee-reverse" : "animate-marquee")}
        style={{ gap }}
      >
        <div className="flex shrink-0 items-center" style={{ gap }}>
          {children}
        </div>
        <div aria-hidden className="flex shrink-0 items-center" style={{ gap }}>
          {children}
        </div>
      </div>
    </div>
  );
}
