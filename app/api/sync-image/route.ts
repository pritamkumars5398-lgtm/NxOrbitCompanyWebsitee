import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const src1 = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\50a05a75-37f4-4046-b8f9-832699f78338\\handshake_technology_overlay_1789382469709.jpg";
    const dest1 = path.join(process.cwd(), "public", "assets", "technology-partnership.jpg");
    fs.copyFileSync(src1, dest1);

    const src2 = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\50a05a75-37f4-4046-b8f9-832699f78338\\modern_tech_laptop_globe_1789384973353.jpg";
    const dest2 = path.join(process.cwd(), "public", "assets", "our-story-tech.jpg");
    fs.copyFileSync(src2, dest2);

    const src3 = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\50a05a75-37f4-4046-b8f9-832699f78338\\corp_building_3d_1789388038246.jpg";
    const dest3 = path.join(process.cwd(), "public", "assets", "corp_building_3d.jpg");
    fs.copyFileSync(src3, dest3);

    const src4 = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\50a05a75-37f4-4046-b8f9-832699f78338\\corp_briefcase_3d_1789388066144.jpg";
    const dest4 = path.join(process.cwd(), "public", "assets", "corp_briefcase_3d.jpg");
    fs.copyFileSync(src4, dest4);

    const src5 = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\50a05a75-37f4-4046-b8f9-832699f78338\\corp_location_3d_1789388085605.jpg";
    const dest5 = path.join(process.cwd(), "public", "assets", "corp_location_3d.jpg");
    fs.copyFileSync(src5, dest5);

    const src6 = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\50a05a75-37f4-4046-b8f9-832699f78338\\prof_services_3d_1789390368381.jpg";
    const dest6 = path.join(process.cwd(), "public", "assets", "prof_services_3d.jpg");
    fs.copyFileSync(src6, dest6);

    return NextResponse.json({ success: true, count: 6 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
