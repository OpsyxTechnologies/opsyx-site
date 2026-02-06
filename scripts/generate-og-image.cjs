const sharp = require("sharp");
const path = require("path");

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121212"/>
      <stop offset="100%" style="stop-color:#1a1a1a"/>
    </linearGradient>
    <linearGradient id="alert" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#c41919"/>
      <stop offset="100%" style="stop-color:#e02020"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <g opacity="0.05">
    ${Array.from({length: 30}, (_, i) => `<line x1="${i * 40}" y1="0" x2="${i * 40}" y2="${height}" stroke="#e02020" stroke-width="0.5"/>`).join("")}
    ${Array.from({length: 16}, (_, i) => `<line x1="0" y1="${i * 40}" x2="${width}" y2="${i * 40}" stroke="#e02020" stroke-width="0.5"/>`).join("")}
  </g>
  <rect x="0" y="0" width="${width}" height="4" fill="url(#alert)"/>
  <g stroke="#e02020" stroke-width="2" fill="none" opacity="0.3">
    <path d="M 40,40 L 40,80 M 40,40 L 80,40"/>
    <path d="M ${width-40},40 L ${width-40},80 M ${width-40},40 L ${width-80},40"/>
    <path d="M 40,${height-40} L 40,${height-80} M 40,${height-40} L 80,${height-40}"/>
    <path d="M ${width-40},${height-40} L ${width-40},${height-80} M ${width-40},${height-40} L ${width-80},${height-40}"/>
  </g>
  <text x="${width/2}" y="240" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-weight="900" font-size="72" fill="#f2f2f2" letter-spacing="12">OPSYX</text>
  <text x="${width/2}" y="320" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-weight="900" font-size="72" fill="#e02020" letter-spacing="12">TECHNOLOGIES</text>
  <rect x="${width/2 - 60}" y="355" width="120" height="2" fill="#e02020" opacity="0.6"/>
  <text x="${width/2}" y="405" text-anchor="middle" font-family="Arial, sans-serif" font-weight="400" font-size="22" fill="#999999" letter-spacing="4">MISSION-CRITICAL CYBERSECURITY</text>
  <text x="${width/2}" y="440" text-anchor="middle" font-family="Arial, sans-serif" font-weight="400" font-size="22" fill="#999999" letter-spacing="4">AT THE SPEED OF RELEVANCE</text>
  <rect x="${width/2 - 55}" y="475" width="110" height="28" rx="3" fill="none" stroke="#5a6b47" stroke-width="1.5" opacity="0.8"/>
  <text x="${width/2}" y="495" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="14" fill="#5a6b47" letter-spacing="3">SDVOSB</text>
  <rect x="0" y="${height-4}" width="${width}" height="4" fill="url(#alert)"/>
</svg>`;

sharp(Buffer.from(svg))
  .png()
  .toFile(path.join(__dirname, "..", "public", "assets", "og-image.png"))
  .then(() => console.log("OG image created with correct site colors"))
  .catch(err => console.error("Error:", err));
