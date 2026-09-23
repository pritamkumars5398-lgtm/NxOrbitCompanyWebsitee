"use client";

import { useEffect, useState } from "react";
import { cn } from "@/app/core/lib/cn";

/* The supplied PNG is a 1051×601 canvas. CROP describes the exact region
   occupied by the NXTorbit logo. */
const SOURCE = { width: 1051, height: 601 };
const CROP = { x: 310, y: 193, width: 437, height: 192 };

// Module-level cache so the high-res transparent image is only processed once per session
let cachedNormalSrc: string | null = null;
let cachedLightSrc: string | null = null;

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

  const [logoSrc, setLogoSrc] = useState<string | null>(
    light ? cachedLightSrc : cachedNormalSrc
  );

  useEffect(() => {
    if (light && cachedLightSrc) {
      setLogoSrc(cachedLightSrc);
      return;
    }
    if (!light && cachedNormalSrc) {
      setLogoSrc(cachedNormalSrc);
      return;
    }

    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = "/nxtorbit-logo.png";

    img.onload = () => {
      // Process at source crop resolution (437x192) for maximum sharpness on all displays
      const canvas = document.createElement("canvas");
      canvas.width = CROP.width;
      canvas.height = CROP.height;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      // Draw the exact crop region from the source image
      ctx.drawImage(
        img,
        CROP.x, CROP.y, CROP.width, CROP.height,
        0, 0, CROP.width, CROP.height
      );

      const imgData = ctx.getImageData(0, 0, CROP.width, CROP.height);
      const data = imgData.data;

      // Cleanly remove white background with smooth alpha antialiasing (no SVG filter blur)
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const minVal = Math.min(r, g, b);

        if (minVal > 215) {
          // Smoothly taper alpha to zero for white/near-white background
          const alphaRatio = (255 - minVal) / (255 - 215);
          data[i + 3] = Math.round(data[i + 3] * Math.max(0, Math.min(1, alphaRatio)));
        }

        if (light) {
          // Convert dark charcoal letters to clean white for dark footer
          if (r < 95 && g < 95 && b < 95) {
            data[i] = 255;
            data[i + 1] = 255;
            data[i + 2] = 255;
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);

      const dataUrl = canvas.toDataURL("image/png");
      if (light) {
        cachedLightSrc = dataUrl;
      } else {
        cachedNormalSrc = dataUrl;
      }
      setLogoSrc(dataUrl);
    };
  }, [light]);

  return (
    <span
      className={cn("relative block shrink-0 overflow-hidden select-none", className)}
      style={{ width, height }}
    >
      {logoSrc ? (
        <img
          src={logoSrc}
          alt="NXTorbit"
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-contain"
          style={{
            imageRendering: "auto",
          }}
        />
      ) : (
        /* Instant SSR / Hydration Fallback: Crisp cropped image with multiply blend mode */
        <img
          src="/nxtorbit-logo.png"
          alt="NXTorbit"
          loading={priority ? "eager" : "lazy"}
          className="absolute max-w-none"
          style={{
            width: SOURCE.width * scale,
            height: SOURCE.height * scale,
            left: -Math.round(CROP.x * scale),
            top: -Math.round(CROP.y * scale),
            mixBlendMode: light ? "screen" : "multiply",
            filter: light ? "invert(1) hue-rotate(180deg)" : "none",
          }}
        />
      )}
    </span>
  );
}
