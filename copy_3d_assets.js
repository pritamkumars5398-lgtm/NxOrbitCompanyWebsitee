const fs = require('fs');
const path = require('path');

const brainDir = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\d7538071-8803-4a17-b9d4-5d4b4cf9119f";
const targetDir = path.join(__dirname, "public", "assets");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const assets = [
  { src: "fleet_tracking_3d_1788346586976.jpg", dest: "fleet_tracking_3d.jpg" },
  { src: "last_mile_3d_1788346606027.jpg", dest: "last_mile_3d.jpg" },
  { src: "warehouse_wms_3d_1788346790897.jpg", dest: "warehouse_wms_3d.jpg" },
  { src: "on_demand_3d_1788346833084.jpg", dest: "on_demand_3d.jpg" },
  { src: "cargo_ship_3d_1788346813435.jpg", dest: "cargo_ship_3d.jpg" },
  { src: "cold_chain_3d_1788346852231.jpg", dest: "cold_chain_3d.jpg" },
  { src: "returns_3d_1788346871612.jpg", dest: "returns_3d.jpg" },
  { src: "analytics_3d_1788346890363.jpg", dest: "analytics_3d.jpg" },
  { src: "logistics_map_truck_1788344749023.jpg", dest: "logistics_map_truck.jpg" }
];

let copied = 0;
for (const item of assets) {
  const srcPath = path.join(brainDir, item.src);
  const destPath = path.join(targetDir, item.dest);
  try {
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✓ Copied ${item.dest}`);
      copied++;
    } else {
      console.error(`X Source file not found: ${srcPath}`);
    }
  } catch (err) {
    console.error(`X Error copying ${item.dest}:`, err.message);
  }
}

console.log(`Total copied: ${copied}/${assets.length}`);
