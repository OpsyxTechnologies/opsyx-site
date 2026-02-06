const sharp = require("sharp");
const path = require("path");

const width = 1200;
const height = 630;

const overlay = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" style="stop-color:#121212;stop-opacity:0.80"/>
      <stop offset="50%" style="stop-color:#121212;stop-opacity:0.90"/>
      <stop offset="100%" style="stop-color:#121212;stop-opacity:1.0"/>
    </linearGradient>
  </defs>

  <!-- Gradient overlay matching from-background/80 via-background/90 to-background -->
  <rect width="${width}" height="${height}" fill="url(#heroGrad)"/>

  <!-- Faint OFFENSIVE / DEFENSIVE split -->
  <line x1="${width/2}" y1="0" x2="${width/2}" y2="${height}" stroke="#e02020" stroke-width="1" opacity="0.06"/>
  <text x="160" y="${height/2 + 10}" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-weight="900" font-size="36" fill="#e02020" opacity="0.08" letter-spacing="6" transform="rotate(-90, 160, ${height/2})">OFFENSIVE</text>
  <text x="${width - 160}" y="${height/2 - 10}" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-weight="900" font-size="36" fill="#5a6b47" opacity="0.08" letter-spacing="6" transform="rotate(90, ${width - 160}, ${height/2})">DEFENSIVE</text>

  <!-- Red scan line at top -->
  <rect x="0" y="0" width="${width}" height="1" fill="#e02020" opacity="0.4"/>

  <!-- SDVOSB // MISSION READY badge -->
  <rect x="${width/2 - 105}" y="105" width="210" height="32" rx="4" fill="#e02020"/>
  <text x="${width/2}" y="127" text-anchor="middle" font-family="Arial Black, sans-serif" font-weight="900" font-size="13" fill="#ffffff" letter-spacing="3">SDVOSB // MISSION READY</text>

  <!-- OPSYX TECHNOLOGIES -->
  <text x="${width/2}" y="215" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-weight="900" font-size="90" fill="#f2f2f2" letter-spacing="10">OPSYX</text>
  <text x="${width/2}" y="300" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-weight="900" font-size="90" fill="#e02020" letter-spacing="10">TECHNOLOGIES</text>

  <!-- defend forward and operate resilient -->
  <text x="${width/2}" y="345" text-anchor="middle" font-family="Courier New, monospace" font-style="italic" font-size="18" fill="#e02020" letter-spacing="3">defend forward and operate resilient</text>

  <!-- Mission-Critical IT and Cybersecurity Solutions -->
  <text x="${width/2}" y="385" text-anchor="middle" font-family="Arial, sans-serif" font-weight="400" font-size="22" fill="#999999" letter-spacing="1">Mission-Critical IT &amp; Cybersecurity Solutions</text>

  <!-- Three service pillars -->
  <!-- Shield icon (simplified) -->
  <path d="M ${width/2 - 250},430 l 8,-10 l 8,10 l 0,8 l-4,4 l-4,4 l-4,-4 l-4,-4 z" fill="none" stroke="#e02020" stroke-width="1.5"/>
  <text x="${width/2 - 220}" y="440" font-family="Arial, sans-serif" font-weight="600" font-size="16" fill="#f2f2f2">Cybersecurity</text>

  <!-- Divider -->
  <rect x="${width/2 - 105}" y="425" width="1" height="20" fill="#333333"/>

  <!-- Server icon (simplified) -->
  <rect x="${width/2 - 80}" y="426" width="16" height="6" rx="1" fill="none" stroke="#5a6b47" stroke-width="1.5"/>
  <rect x="${width/2 - 80}" y="434" width="16" height="6" rx="1" fill="none" stroke="#5a6b47" stroke-width="1.5"/>
  <text x="${width/2 - 55}" y="440" font-family="Arial, sans-serif" font-weight="600" font-size="16" fill="#f2f2f2">IT Infrastructure</text>

  <!-- Divider -->
  <rect x="${width/2 + 95}" y="425" width="1" height="20" fill="#333333"/>

  <!-- Globe icon (simplified) -->
  <circle cx="${width/2 + 122}" cy="434" r="8" fill="none" stroke="#404040" stroke-width="1.5"/>
  <ellipse cx="${width/2 + 122}" cy="434" rx="4" ry="8" fill="none" stroke="#404040" stroke-width="1"/>
  <line x1="${width/2 + 114}" y1="434" x2="${width/2 + 130}" y2="434" stroke="#404040" stroke-width="1"/>
  <text x="${width/2 + 140}" y="440" font-family="Arial, sans-serif" font-weight="600" font-size="16" fill="#f2f2f2">Digital Solutions</text>

  <!-- LEARN MORE button -->
  <rect x="${width/2 - 85}" y="480" width="170" height="45" rx="3" fill="#e02020"/>
  <text x="${width/2 - 10}" y="508" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-weight="900" font-size="15" fill="#ffffff" letter-spacing="4">LEARN MORE</text>
  <!-- Arrow -->
  <path d="M ${width/2 + 52},500 l 10,0 l -4,-4 M ${width/2 + 62},500 l -4,4" fill="none" stroke="#ffffff" stroke-width="2"/>
</svg>`;

sharp(path.join(__dirname, "..", "src", "assets", "hero-command-center.jpg"))
  .resize(width, height, { fit: "cover" })
  .composite([{
    input: Buffer.from(overlay),
    top: 0,
    left: 0
  }])
  .png()
  .toFile(path.join(__dirname, "..", "public", "assets", "og-image.png"))
  .then(() => console.log("OG image created matching hero section exactly"))
  .catch(err => console.error("Error:", err));
