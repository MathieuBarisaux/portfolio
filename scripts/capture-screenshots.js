/**
 * Capture les screenshots des sites listés dans asset/content/realisations.json
 * et les enregistre dans public/realisations/<slug>.png.
 *
 * Utilisation :  npm run screenshots
 */

const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "realisations");
const REALISATIONS = require(path.join(
  ROOT,
  "asset",
  "content",
  "realisations.json"
));

const VIEWPORT = { width: 1440, height: 900, deviceScaleFactor: 1 };
const DEFAULT_WAIT_AFTER_LOAD_MS = 2500;
const NAV_TIMEOUT_MS = 45000;

// Optional CLI filter: `npm run screenshots -- mida pauline-menard`
const FILTER = process.argv.slice(2).filter((a) => !a.startsWith("-"));

function slugify(title) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function capture(browser, item) {
  const slug = slugify(item.title);
  const outPath = path.join(OUT_DIR, `${slug}.png`);
  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);
  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
  );

  console.log(`→ ${item.title}  (${item.address})`);
  try {
    await page.goto(item.address, {
      waitUntil: "networkidle2",
      timeout: NAV_TIMEOUT_MS,
    });
  } catch (err) {
    console.warn(`   navigation warning: ${err.message}`);
  }

  const waitMs = item.waitMs ?? DEFAULT_WAIT_AFTER_LOAD_MS;
  await new Promise((r) => setTimeout(r, waitMs));

  await page.screenshot({
    path: outPath,
    type: "png",
    fullPage: false,
    clip: { x: 0, y: 0, width: VIEWPORT.width, height: VIEWPORT.height },
  });

  await page.close();
  console.log(`   ✓ ${path.relative(ROOT, outPath)}`);
  return { slug, outPath };
}

(async () => {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const targets = FILTER.length
      ? REALISATIONS.filter((it) => FILTER.includes(slugify(it.title)))
      : REALISATIONS.filter((it) => !it.manual);

    const skipped = REALISATIONS.filter(
      (it) => it.manual && !FILTER.includes(slugify(it.title))
    );
    if (skipped.length) {
      console.log(
        `Skipping manual screenshots: ${skipped.map((s) => s.title).join(", ")}`
      );
    }

    if (FILTER.length && targets.length === 0) {
      console.warn(`No realisation matched filter: ${FILTER.join(", ")}`);
    }

    for (const item of targets) {
      try {
        await capture(browser, item);
      } catch (err) {
        console.error(`   ✗ ${item.title}: ${err.message}`);
      }
    }
  } finally {
    await browser.close();
  }

  console.log("\nDone.");
})();
