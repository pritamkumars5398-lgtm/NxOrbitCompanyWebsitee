import Image from "next/image";
import { cn } from "@/app/core/lib/cn";

/* The supplied PNG is a 1051×601 design canvas: the wordmark sits in the
   middle with large white margins and a decorative gradient bar across the
   bottom that is not part of the mark. These constants describe the region of
   that canvas the logo actually occupies, so the component can crop to it at
   any height. If the asset is ever re-exported tightly, set CROP to the full
   canvas and everything below still works. */
const SOURCE = { width: 1051, height: 601 };
const CROP = { x: 310, y: 193, width: 437, height: 192 };

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
  const scale = height / CROP.height;
  const width = Math.round(CROP.width * scale);

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="remove-white" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                -2 -2 -2 5 -0.1
              "
            />
          </filter>
          <filter id="remove-white-light" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                -2 -2 -2 5 -0.1
              "
              result="sans-white"
            />
            <feColorMatrix
              in="sans-white"
              type="matrix"
              values="
                0 -1.2  0   0  1.0
                0  0.3  0   0  0.7
                0  0    0.3 0  0.7
                0  0    0   1  0
              "
            />
          </filter>
        </defs>
      </svg>

      <span
        className={cn("relative block shrink-0 overflow-hidden", className)}
        style={{ width, height }}
      >
        <Image
          src="/nxtorbit-logo.png"
          alt="NXTorbit"
          width={SOURCE.width}
          height={SOURCE.height}
          priority={priority}
          className="absolute max-w-none"
          style={{
            width: SOURCE.width * scale,
            height: SOURCE.height * scale,
            left: -CROP.x * scale,
            top: -CROP.y * scale,
            filter: light ? "url(#remove-white-light)" : "url(#remove-white)",
          }}
        />
      </span>
    </>
  );
}
