import { cn } from "@/app/core/lib/cn";

// Exact aspect ratio of the tightly cropped transparent logo: 409 / 163 = 2.509
const LOGO_ASPECT_RATIO = 2.509;

export function Logo({
  height = 44,
  priority = false,
  className,
  light = false,
}: {
  /** Rendered height of the wordmark in pixels. */
  height?: number;
  priority?: boolean;
  className?: string;
  light?: boolean;
}) {
  const width = Math.round(height * LOGO_ASPECT_RATIO);
  const src = light ? "/nxtorbit-logo-light.png" : "/nxtorbit-logo-dark.png";

  return (
    <span
      className={cn("relative inline-block shrink-0 select-none bg-transparent", className)}
      style={{ width, height }}
    >
      <img
        src={src}
        alt="NXTorbit"
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-contain bg-transparent"
        style={{
          backgroundColor: "transparent",
        }}
      />
    </span>
  );
}
