import fs from "fs";
import path from "path";
import sharp from "sharp";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const images = [
      "corp_building_3d",
      "corp_briefcase_3d",
      "corp_location_3d",
      "laptop_integration_visual",
    ];

    const results = [];

    for (const name of images) {
      const inputPath = path.join(/*turbopackIgnore: true*/ process.cwd(), "public", "assets", `${name}.jpg`);
      const outputPath = path.join(/*turbopackIgnore: true*/ process.cwd(), "public", "assets", `${name}.png`);

      // Read image with sharp
      const { data, info } = await sharp(inputPath)
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });

      const channels = info.channels; // 4 (RGBA)
      const len = data.length;

      const width = info.width;
      const height = info.height;
      const cx = width / 2;
      const cy = height / 2;

      for (let i = 0; i < len; i += channels) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        if (name === "laptop_integration_visual") {
          const pixelIdx = i / channels;
          const x = pixelIdx % width;
          const y = Math.floor(pixelIdx / width);

          // Normalized coordinates (-1 to 1)
          const nx = (x - cx) / cx;
          const ny = (y - cy) / cy;
          // Elliptical distance from center
          const dist = Math.sqrt(nx * nx * 1.05 + ny * ny * 1.15);

          // If near edges, fade smoothly to 0
          let alphaFactor = 1;
          if (dist > 0.58) {
            const t = Math.min(1, (dist - 0.58) / 0.28);
            // Smooth easing curve
            alphaFactor = Math.cos((t * Math.PI) / 2);
            if (dist >= 0.86) {
              alphaFactor = 0;
            }
          }

          // Also check for light teal/white background tint
          const isLightBg = r > 215 && g > 230 && b > 230;
          if (isLightBg && dist > 0.45) {
            const bgFade = Math.max(0, 1 - (dist - 0.45) / 0.35);
            alphaFactor = Math.min(alphaFactor, bgFade);
          }

          data[i + 3] = Math.round(data[i + 3] * Math.max(0, Math.min(1, alphaFactor)));
        } else {
          // Threshold: if a pixel is near-white (R>242, G>242, B>242), make it transparent
          const minVal = Math.min(r, g, b);
          if (minVal > 240) {
            data[i + 3] = 0;
          } else if (minVal > 225) {
            const factor = (240 - minVal) / 15;
            data[i + 3] = Math.round(data[i + 3] * factor);
          }
        }
      }

      await sharp(data, {
        raw: {
          width: info.width,
          height: info.height,
          channels: 4,
        },
      })
        .png()
        .toFile(outputPath);

      results.push({ name, outputPath, exists: fs.existsSync(outputPath) });
    }

    return NextResponse.json({ success: true, results });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
