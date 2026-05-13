/**
 * Génère l'image Open Graph 1200x630 (public/og-image.png).
 * Utilisation : node scripts/generate-og.js  ou  npm run og
 */

const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

const OUT_PATH = path.resolve(__dirname, "..", "public", "og-image.png");

const HTML = `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1200px;
      height: 630px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      color: #fff;
      background: #010100;
      background-image:
        radial-gradient(circle at 12% 10%, rgba(113,41,251,0.32) 0%, transparent 38%),
        radial-gradient(circle at 88% 88%, rgba(155,92,255,0.22) 0%, transparent 42%);
      position: relative;
      overflow: hidden;
    }
    .container {
      position: absolute;
      inset: 0;
      padding: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 22px;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 8px 18px;
      border-radius: 999px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.1);
      font-size: 18px;
      color: #d8d9de;
      width: fit-content;
      font-weight: 500;
    }
    .dot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: #5fe28b;
      box-shadow: 0 0 0 6px rgba(95,226,139,0.18);
    }
    .name {
      font-size: 20px;
      color: #95949a;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: 600;
    }
    h1 {
      font-size: 100px;
      line-height: 0.98;
      letter-spacing: -0.03em;
      font-weight: 800;
      max-width: 1000px;
    }
    h1 span {
      background: linear-gradient(135deg, #9b5cff 0%, #6d27f5 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .lead {
      font-size: 28px;
      color: #b8b9be;
      line-height: 1.45;
      max-width: 800px;
    }
    .footer {
      position: absolute;
      bottom: 70px;
      left: 80px;
      right: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .footer .stack {
      display: flex;
      gap: 14px;
      font-size: 20px;
      color: #b8a4ff;
      font-weight: 600;
    }
    .footer .stack span:not(:last-child)::after {
      content: " ·";
      margin-left: 14px;
      color: #6d27f5;
    }
    .footer .url {
      font-size: 20px;
      color: #95949a;
    }
    .glow {
      position: absolute;
      width: 540px;
      height: 540px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(113,41,251,0.55) 0%, transparent 70%);
      filter: blur(40px);
      right: -180px;
      top: -180px;
      pointer-events: none;
    }
  </style>
</head>
<body>
  <div class="glow"></div>
  <div class="container">
    <span class="badge"><span class="dot"></span>Disponible pour vos projets</span>
    <p class="name">Mathieu Barisaux</p>
    <h1>Freelance front-end <span>React & Next.js</span></h1>
    <p class="lead">Sites vitrines, SaaS et applications web sur-mesure.<br/>À Reims ou à distance.</p>
  </div>
  <div class="footer">
    <div class="stack"><span>React</span><span>Next.js</span><span>TypeScript</span><span>SCSS</span></div>
    <div class="url">mathieu-barisaux.fr</div>
  </div>
</body>
</html>`;

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  await page.setContent(HTML, { waitUntil: "networkidle0" });
  await page.screenshot({ path: OUT_PATH, type: "png" });
  await browser.close();
  console.log(`✓ ${path.relative(path.resolve(__dirname, ".."), OUT_PATH)}`);
})();
