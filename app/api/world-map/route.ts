import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const SOURCE_PATH = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\7377900b-cad4-44a8-94c0-f53c58e63f04\\world_network_map_1790763432511.jpg";

export async function GET() {
  try {
    if (fs.existsSync(SOURCE_PATH)) {
      const buffer = fs.readFileSync(SOURCE_PATH);

      // Also persist to public/assets for permanent direct static serving
      try {
        const destDir = path.join(/*turbopackIgnore: true*/ process.cwd(), "public", "assets");
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true });
        }
        const destPath = path.join(destDir, "world_network_map.jpg");
        fs.writeFileSync(destPath, buffer);
      } catch (err) {
        console.error("Failed to copy asset to public:", err);
      }

      return new NextResponse(buffer, {
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }
  } catch (error) {
    console.error("Error reading world map image:", error);
  }

  return new NextResponse(null, { status: 404 });
}
