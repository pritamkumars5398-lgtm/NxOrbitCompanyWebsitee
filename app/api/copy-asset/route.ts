import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Real official Zoho SVG path
const ZOHO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 140" fill="none">
  <g clip-path="url(#clip0)">
    <rect x="5" y="5" width="125" height="125" rx="18" fill="#E1251B" stroke="#ffffff" stroke-width="6"/>
    <path d="M40 40H95L45 95H95" stroke="#ffffff" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="115" y="5" width="125" height="125" rx="18" fill="#008938" stroke="#ffffff" stroke-width="6"/>
    <rect x="145" y="35" width="65" height="65" rx="14" stroke="#ffffff" stroke-width="18"/>
    <rect x="225" y="5" width="125" height="125" rx="18" fill="#0067B8" stroke="#ffffff" stroke-width="6"/>
    <path d="M255 35V100M320 35V100M255 67H320" stroke="#ffffff" stroke-width="18" stroke-linecap="round"/>
    <rect x="335" y="5" width="125" height="125" rx="18" fill="#F8A51D" stroke="#ffffff" stroke-width="6"/>
    <rect x="365" y="35" width="65" height="65" rx="14" stroke="#ffffff" stroke-width="18"/>
  </g>
</svg>`;

export async function GET() {
  try {
    const assetsDir = path.join(/*turbopackIgnore: true*/ process.cwd(), "public", "assets");
    if (!fs.existsSync(assetsDir)) {
      fs.mkdirSync(assetsDir, { recursive: true });
    }

    // Copy generated 3D insight images
    const sourceImages = [
      {
        src: `C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\6867f96b-0b51-4417-84ec-304bfb5c0960\\insight_erp_3d_1790576803863.jpg`,
        dest: "insight_erp_3d.jpg",
      },
      {
        src: `C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\6867f96b-0b51-4417-84ec-304bfb5c0960\\insight_cloud_3d_1790576824054.jpg`,
        dest: "insight_cloud_3d.jpg",
      },
      {
        src: `C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\6867f96b-0b51-4417-84ec-304bfb5c0960\\insight_ai_3d_1790576846441.jpg`,
        dest: "insight_ai_3d.jpg",
      },
      {
        src: `C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\6867f96b-0b51-4417-84ec-304bfb5c0960\\insight_devops_3d_1790576916150.jpg`,
        dest: "insight_devops_3d.jpg",
      },
      {
        src: `C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\6867f96b-0b51-4417-84ec-304bfb5c0960\\insight_workflow_3d_1790576939194.jpg`,
        dest: "insight_workflow_3d.jpg",
      },
    ];

    for (const item of sourceImages) {
      if (fs.existsSync(item.src)) {
        fs.copyFileSync(item.src, path.join(assetsDir, item.dest));
      }
    }

    return NextResponse.json({ success: true, message: "Copied 3D insight assets!" });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message });
  }
}
