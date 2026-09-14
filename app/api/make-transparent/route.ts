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
    ];

    const results = [];

    for (const name of images) {
      const inputPath = path.join(process.cwd(), "public", "assets", `${name}.jpg`);
      const outputPath = path.join(process.cwd(), "public", "assets", `${name}.png`);

      // Read image with sharp
      const { data, info } = await sharp(inputPath)
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });

      const channels = info.channels; // 4 (RGBA)
      const len = data.length;

      // Threshold: if a pixel is near-white (R>242, G>242, B>242), make it transparent
      for (let i = 0; i < len; i += channels) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Soft alpha transition for edges
        const minVal = Math.min(r, g, b);
        if (minVal > 240) {
          data[i + 3] = 0; // completely transparent
        } else if (minVal > 225) {
          // smooth fade on borders
          const factor = (240 - minVal) / 15;
          data[i + 3] = Math.round(data[i + 3] * factor);
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
