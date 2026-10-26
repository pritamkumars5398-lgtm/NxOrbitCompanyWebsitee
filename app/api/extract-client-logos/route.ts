import fs from "fs";
import path from "path";
import sharp from "sharp";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const inputImagePath = "C:/Users/UPL/.gemini/antigravity-ide/brain/67adffef-71eb-4cdc-a981-6f1d7d475132/.user_uploaded/media_1793017019446.png";
    const outputDir = path.join(process.cwd(), "public", "assets", "clients");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const { data, info } = await sharp(inputImagePath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const w = info.width;
    const h = info.height;
    const channels = info.channels;

    const colRanges = [
      { col: 0, x0: 10, x1: 165 },
      { col: 1, x0: 170, x1: 330 },
      { col: 2, x0: 335, x1: 495 },
      { col: 3, x0: 500, x1: 660 },
      { col: 4, x0: 665, x1: 825 },
      { col: 5, x0: 830, x1: 990 },
    ];

    const rowRanges = [
      { row: 0, y0: 20, y1: 120 },
      { row: 1, y0: 130, y1: 230 },
    ];

    const logoDefs = [
      // Row 0
      { name: "kisan-konnect", title: "Kisan Konnect", r: 0, c: 0, solidBadge: false },
      { name: "zurich-kotak", title: "Zurich Kotak General Insurance", r: 0, c: 1, solidBadge: false },
      { name: "godrej-korber", title: "Godrej Körber", r: 0, c: 2, solidBadge: true, badgeType: "godrej" },
      { name: "rudra-finance", title: "Rudra Finance", r: 0, c: 3, solidBadge: false },
      { name: "will-view", title: "Will View Legal Services", r: 0, c: 4, solidBadge: false },
      { name: "e-obituary", title: "e-Obituary", r: 0, c: 5, solidBadge: false },
      // Row 1
      { name: "vastra", title: "Vastra", r: 1, c: 0, solidBadge: false },
      { name: "chanakya", title: "Chanakya Learning System", r: 1, c: 1, solidBadge: false },
      { name: "chaitanya", title: "Chaitanya Social Welfare", r: 1, c: 2, solidBadge: false },
      { name: "blokon", title: "BlokOn", r: 1, c: 3, solidBadge: false },
      { name: "india-house-path-lab", title: "India House Path Lab", r: 1, c: 4, solidBadge: true, badgeType: "indiahouse" },
      { name: "mottoflip", title: "MottoFlip", r: 1, c: 5, solidBadge: false },
    ];

    const results = [];

    for (const def of logoDefs) {
      const col = colRanges[def.c];
      const row = rowRanges[def.r];

      let minX = col.x1, maxX = col.x0;
      let minY = row.y1, maxY = row.y0;

      for (let y = row.y0; y < row.y1; y++) {
        for (let x = col.x0; x < col.x1; x++) {
          const idx = (y * w + x) * channels;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];

          let isMatch = false;

          if (def.badgeType === "godrej") {
            // Find the solid blue square
            isMatch = b > 200 && r < 50 && g < 150;
          } else if (def.badgeType === "indiahouse") {
            // Find the blue banner
            isMatch = b > 110 && (b - r > 30);
          } else {
            // Logo pixel (dark or colored, excluding near-white or grey border)
            isMatch = Math.min(r, g, b) < 210 || (Math.max(r, g, b) - Math.min(r, g, b) > 25);
          }

          if (isMatch) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }
      }

      const padX = def.solidBadge ? 0 : 4;
      const padY = def.solidBadge ? 0 : 4;
      const left = Math.max(0, minX - padX);
      const top = Math.max(0, minY - padY);
      const right = Math.min(w, maxX + padX);
      const bottom = Math.min(h, maxY + padY);

      const cropW = right - left;
      const cropH = bottom - top;

      const destFile = path.join(outputDir, `${def.name}.png`);

      // Extract raw image chunk
      const croppedBuffer = await sharp(inputImagePath)
        .extract({ left, top, width: cropW, height: cropH })
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });

      const cData = croppedBuffer.data;
      const cInfo = croppedBuffer.info;
      const cChannels = cInfo.channels;

      if (!def.solidBadge) {
        // Convert white / off-white pixels to transparent
        for (let i = 0; i < cData.length; i += cChannels) {
          const r = cData[i];
          const g = cData[i + 1];
          const b = cData[i + 2];

          if (r > 248 && g > 248 && b > 248) {
            cData[i + 3] = 0;
          } else if (r > 230 && g > 230 && b > 230) {
            const factor = Math.max(0, 1 - (Math.min(r, g, b) - 230) / 18);
            cData[i + 3] = Math.round(cData[i + 3] * factor);
          }
        }
      }

      // Save refined PNG
      await sharp(cData, {
        raw: {
          width: cInfo.width,
          height: cInfo.height,
          channels: cChannels,
        },
      })
        .png()
        .toFile(destFile);

      results.push({
        name: def.name,
        title: def.title,
        bbox: { left, top, cropW, cropH },
        url: `/assets/clients/${def.name}.png`,
      });
    }

    return NextResponse.json({ success: true, results });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message, stack: err.stack });
  }
}
