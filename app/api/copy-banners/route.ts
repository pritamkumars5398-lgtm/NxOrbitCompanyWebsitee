import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const brainDir = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\6c9286e3-d3c6-4a06-9620-41d07453a5ca";
    const assetsDir = path.join(process.cwd(), "public", "assets");

    const filesToCopy = [
      {
        src: path.join(brainDir, "orbit_freight_real_1790671472547.jpg"),
        dest: path.join(assetsDir, "orbit_freight_banner.jpg"),
      },
      {
        src: path.join(brainDir, "wms_real_banner_1790671493166.jpg"),
        dest: path.join(assetsDir, "wms_real_banner.jpg"),
      },
      {
        src: path.join(brainDir, "courier_real_banner_1790671518593.jpg"),
        dest: path.join(assetsDir, "courier_real_banner.jpg"),
      },
      {
        src: path.join(brainDir, "finance_real_banner_1790671542102.jpg"),
        dest: path.join(assetsDir, "finance_real_banner.jpg"),
      },
    ];

    const results = [];
    for (const item of filesToCopy) {
      if (fs.existsSync(item.src)) {
        fs.copyFileSync(item.src, item.dest);
        results.push({ dest: path.basename(item.dest), copied: true, size: fs.statSync(item.dest).size });
      } else {
        results.push({ dest: path.basename(item.dest), copied: false, error: "Source not found" });
      }
    }

    return NextResponse.json({ success: true, results });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
