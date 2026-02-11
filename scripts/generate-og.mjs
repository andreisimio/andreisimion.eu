import sharp from "sharp";

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="50%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <rect x="80" y="520" width="120" height="4" rx="2" fill="url(#accent)"/>
  <text x="80" y="240" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="72" fill="white">Andrei Simion</text>
  <text x="80" y="320" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="72" fill="url(#accent)">Structure.</text>
  <text x="470" y="320" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="72" fill="white"> Automate. Scale.</text>
  <text x="80" y="400" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="28" fill="#94a3b8">Enterprise Architecture · Data · Automation</text>
  <text x="80" y="560" font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="24" fill="#64748b">www.andreisimion.eu</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og-default.png");
console.log("Generated public/og-default.png (1200x630)");
