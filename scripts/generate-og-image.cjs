const sharp = require("sharp");
const path = require("path");

const width = 1200;
const height = 630;

const textOverlay = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <!-- Dark overlay -->
  <rect width="${width}" height="${height}" fill="rgba(0,0,0,0.55)"/>
  
  <!-- Red gradient overlay from bottom -->
  <rect width="${width}" height="${height}" fill="url(#redGrad)"/>
  <defs>
    <linearGradient id="redGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" style="stop-color:rgba(139,0,0,0.0)"/>
      <stop offset="100%" style="stop-color:rgba(139,0,0,0.3)"/>
    </linearGradient>
  </defs>

  <!-- SDVOSB badge -->
  <rect x="${width/2 - 95}" y="120" width="190" height="30" rx="3" fill="#e02020"/>
  <text x="${width/2}" y="141" text-anchor="middle" font-family="Arial Black, sans-serif" font-weight="900" font-size="13" fill="#ffffff" letter-spacing="3">SDVOSB // MISSION READY</text>

  <!-- Company name -->
  <text x="${width/2}" y="240" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-weight="900" font-size="80" fill="#ffffff" letter-spacing="8">OPSYX</text>
  <text x="${width/2 + 10}" y="240" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-weight="900" font-size="80" fill="#e02020" letter-spacing="8"> TECHNOLOGIES</text>

  <!-- Motto -->
  <text x="${width/2}" y="300" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="22" fill="#e02020" letter-spacing="2">defend forward and operate resilient</text>

  <!-- Subtitle -->
  <text x="${width/2}" y="345" text-anchor="middle" font-family="Arial, sans-serif" font-weight="400" font-size="24" fill="#dddddd" letter-spacing="1">Mission-Critical IT &amp; Cybersecurity Solutions</text>
</svg>`;

sharp(path.join(__dirname, "..", "src", "assets", "hero-command-center.jpg"))
  .resize(width, height, { fit: "cover" })
  .composite([{
    input: Buffer.from(textOverlay),
    top: 0,
    left: 0
  }])
  .png()
  .toFile(path.join(__dirname, "..", "public", "assets", "og-image.png"))
  .then(() => console.log("OG image created matching hero section"))
  .catch(err => console.error("Error:", err));
