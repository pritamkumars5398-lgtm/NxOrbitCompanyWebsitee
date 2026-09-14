import fs from 'fs';
import path from 'path';

const src = 'C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\50a05a75-37f4-4046-b8f9-832699f78338\\handshake_technology_overlay_1789382469709.jpg';
const dest = path.join(process.cwd(), 'public', 'assets', 'technology-partnership.jpg');

try {
  fs.copyFileSync(src, dest);
  console.log('SUCCESS: Copied', src, 'to', dest);
} catch (err) {
  console.error('ERROR copying file:', err);
}
