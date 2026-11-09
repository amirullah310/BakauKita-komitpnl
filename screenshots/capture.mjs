import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(here, '2026-11-09-desktop');
// Gunakan Playwright yang terpasang, atau tentukan lokasi modul lewat environment.
const playwrightModule = process.env.SCREENSHOT_PLAYWRIGHT
  ? pathToFileURL(process.env.SCREENSHOT_PLAYWRIGHT).href
  : 'playwright';
const { chromium } = await import(playwrightModule);
const { ARTIKEL } = await import('../webdesign_komitpnl_technoversary_vol.II/src/data/artikel.js');
const base = process.env.SCREENSHOT_URL || 'http://127.0.0.1:5173/';
const width = 1440;
const height = 1000;
const items = [];
const errors = [];
await mkdir(output, { recursive: true });

console.log('Menyiapkan browser screenshot...');
const browser = await chromium.launch({
  headless: true,
  timeout: 20000,
  ...(process.env.SCREENSHOT_BROWSER ? { executablePath: process.env.SCREENSHOT_BROWSER } : {}),
});
const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1, reducedMotion: 'reduce', locale: 'id-ID' });
const page = await context.newPage();
page.setDefaultTimeout(20000);
page.on('pageerror', error => errors.push(error.message));

const sections = {
  beranda: [
    ['01-hero', 'Pembuka beranda', 'section[aria-labelledby="judul-hero"]'],
    ['02-pasang-surut', 'Perbandingan pantai dan pasang surut', '#beranda-pasang'],
    ['03-peran-bakau', 'Tiga perlindungan bakau', 'section[aria-labelledby="judul-peran"]'],
    ['04-statistik-pesisir', 'Mangrove Lhokseumawe', 'section[aria-labelledby="judul-lokal"]'],
    ['05-simulasi-tanam', 'Simulasi dampak penanaman', '#beranda-simulasi'],
    ['06-cara-ikut', 'Empat langkah ikut menanam', 'section[aria-labelledby="judul-langkah"]'],
    ['07-aksi-dari-rumah', 'Aksi dari rumah', '#beranda-aksi'],
    ['08-kuis', 'Kuis pengetahuan bakau', '#beranda-kuis'],
    ['09-bacaan-terbaru', 'Artikel terbaru', 'section[aria-labelledby="judul-bacaan"]'],
    ['10-ajakan-relawan', 'Ajakan menjadi relawan', 'section[aria-labelledby="judul-ajakan"]'],
  ],
  tentang: [
    ['01-pengantar', 'Tentang BakauKita', 'main > header'],
    ['02-ilustrasi-laguna', 'Ilustrasi laguna', 'main > figure'],
    ['03-kondisi-dan-grafik', 'Kondisi mangrove dan grafik luas', 'section[aria-labelledby="judul-masalah"]'],
    ['04-misi', 'Edukasi, aksi, dan kolaborasi', 'section[aria-labelledby="judul-misi"]'],
    ['05-tim', 'Tim komitpnl', 'section[aria-labelledby="judul-tim"]'],
    ['06-sumber-data', 'Seluruh sumber data', 'section[aria-labelledby="judul-sumber"]'],
  ],
  artikel: [
    ['01-pengantar', 'Pengantar artikel', 'section[aria-labelledby="judul-artikel"] > header'],
    ['02-filter-kategori', 'Filter kategori artikel', '[role="group"][aria-label="Saring artikel menurut kategori"]'],
    ['03-pilihan-redaksi', 'Artikel pilihan redaksi', 'section[aria-labelledby="judul-artikel"] > div > a'],
    ['04-daftar-artikel', 'Seluruh kartu artikel', 'section[aria-labelledby="judul-artikel"] > div > div.grid'],
    ['05-glosarium', 'Glosarium mangrove', 'section[aria-labelledby="judul-glosarium"]'],
  ],
  galeri: [
    ['01-pengantar', 'Pengantar galeri', 'section[aria-labelledby="judul-galeri"] > header'],
    ['02-filter-dan-koleksi', 'Filter dan koleksi tumbuhan serta satwa', 'section[aria-labelledby="judul-galeri"] > div.wadah'],
  ],
  kontak: [
    ['01-pengantar', 'Ajakan ikut menanam dan merawat', 'section[aria-labelledby="judul-kontak"] > header'],
    ['02-formulir-kontak-dan-faq', 'Formulir, informasi kontak, dan tanya jawab', 'section[aria-labelledby="judul-kontak"] > div.wadah'],
  ],
};

async function settleImages() {
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.race([
      Promise.all([...document.images].map(image => image.decode().catch(() => {}))),
      new Promise(resolve => setTimeout(resolve, 10000)),
    ]);
  });
  await page.waitForTimeout(120);
}

async function openRoute(route) {
  console.log(`Membuka ${route}...`);
  await page.goto(`${base}#${route}`, { waitUntil: 'networkidle' });
  await page.locator('main h1').waitFor();
  await page.waitForFunction(() => document.querySelectorAll('.pemuat').length === 0);
  await page.evaluate(async () => {
    await document.fonts.ready;
    for (const image of document.images) image.loading = 'eager';
    window.scrollTo(0, 0);
  });
  await settleImages();
  const broken = await page.evaluate(() => [...document.images].filter(image => !image.complete || !image.naturalWidth).map(image => image.currentSrc));
  if (broken.length) throw new Error(`${route}: gambar gagal dimuat: ${broken.join(', ')}`);
}

async function save(group, name, label, options) {
  const relative = `${group}/${name}.png`;
  const target = path.join(output, relative);
  await mkdir(path.dirname(target), { recursive: true });
  await page.screenshot({ path: target, animations: 'disabled', fullPage: Boolean(options.clip), ...options });
  items.push({ group, file: relative, label, route: new URL(page.url()).hash, width: options.clip?.width ?? width, height: options.clip?.height ?? (options.fullPage ? await page.evaluate(() => document.documentElement.scrollHeight) : height) });
  console.log(`OK ${relative}`);
}

async function crop(group, name, label, selector, extraTop = 0) {
  const locator = page.locator(selector);
  if (await locator.count() !== 1) throw new Error(`Selector tidak tunggal: ${selector}`);
  const clip = await locator.evaluate((element, extra) => {
    const rect = element.getBoundingClientRect();
    const padding = parseFloat(getComputedStyle(element).paddingTop) || 0;
    const top = Math.max(0, Math.floor(rect.top + scrollY + Math.max(0, padding - 32) - extra));
    const bottom = Math.min(document.documentElement.scrollHeight, Math.ceil(rect.bottom + scrollY + 24));
    return { x: 0, y: top, width: innerWidth, height: bottom - top };
  }, extraTop);
  await save(group, name, label, { clip });
}

try {
  for (const [route, list] of Object.entries(sections)) {
    await openRoute(route);
    await save('halaman-utuh', route, `${route.charAt(0).toUpperCase() + route.slice(1)} — halaman lengkap`, { fullPage: true });
    if (route === 'beranda') {
      await crop('komponen-umum', '01-navigasi', 'Navigasi utama', '#root > header');
      await crop('komponen-umum', '02-footer', 'Footer dan informasi situs', 'footer', 64);
    }
    for (const [name, label, selector] of list) await crop(route, name, label, selector);

    if (route === 'artikel') {
      const grid = page.locator('section[aria-labelledby="judul-artikel"] > div > div.grid');
      const boxes = await grid.locator(':scope > div').evaluateAll(elements => elements.map(element => {
        const rect = element.getBoundingClientRect();
        return { top: rect.top + scrollY, bottom: rect.bottom + scrollY };
      }));
      const rows = [];
      for (const box of boxes) {
        let row = rows.find(row => Math.abs(row.top - box.top) < 5);
        if (row) row.bottom = Math.max(row.bottom, box.bottom);
        else rows.push({ ...box });
      }
      for (const [index, row] of rows.entries()) {
        const top = Math.max(0, Math.floor(row.top - 20));
        await save('artikel', `06-daftar-baris-${index + 1}`, `Kartu artikel — baris ${index + 1}`, { clip: { x: 0, y: top, width, height: Math.ceil(row.bottom + 20) - top } });
      }
    }

    if (route === 'galeri') {
      const cards = page.locator('section[aria-labelledby="judul-galeri"] ul > li > button');
      for (let index = 0; index < await cards.count(); index++) {
        await cards.nth(index).click();
        await page.locator('dialog[open]').waitFor();
        await settleImages();
        const label = await page.locator('#judul-dialog').innerText();
        const slug = label.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        await save('galeri-detail', `${String(index + 1).padStart(2, '0')}-${slug}`, `Detail galeri: ${label}`, {});
        await page.getByRole('button', { name: 'Tutup', exact: true }).click();
      }
    }

    if (route === 'kontak') {
      const summaries = page.locator('main details > summary');
      for (let index = 0; index < await summaries.count(); index++) await summaries.nth(index).click();
      await page.evaluate(() => window.scrollTo(0, 0));
      await crop('kontak', '03-semua-jawaban-faq', 'Informasi kontak dan seluruh jawaban FAQ', 'section[aria-labelledby="judul-kontak"] > div.wadah > div');
    }
  }

  for (const [index, article] of ARTIKEL.entries()) {
    await openRoute(`artikel-${article.slug}`);
    await save('artikel-lengkap', `${String(index + 1).padStart(2, '0')}-${article.slug}`, article.judul, { fullPage: true });
  }

  if (errors.length) throw new Error(`Galat JavaScript: ${errors.join('\n')}`);
  const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const groups = [...new Set(items.map(item => item.group))];
  const names = { 'halaman-utuh': 'Halaman utuh', 'komponen-umum': 'Navigasi dan footer', beranda: 'Bagian beranda', tentang: 'Bagian tentang', artikel: 'Bagian daftar artikel', galeri: 'Bagian galeri', kontak: 'Bagian kontak', 'galeri-detail': 'Detail tumbuhan dan satwa', 'artikel-lengkap': '15 artikel lengkap' };
  const html = `<!doctype html><html lang="id"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Screenshot BakauKita</title>
<style>body{margin:0;background:#f4f7f2;color:#173c31;font:16px/1.6 system-ui,sans-serif}main{max-width:1200px;margin:auto;padding:40px 24px}h1{font-size:36px;margin-bottom:8px}p{color:#52625b}nav{display:flex;gap:10px;flex-wrap:wrap;margin:28px 0}nav a{background:white;border:1px solid #d4dfd7;border-radius:30px;padding:8px 14px}a{color:inherit}section{margin:48px 0;scroll-margin-top:24px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px}.card{display:block;background:white;border:1px solid #d4dfd7;border-radius:16px;overflow:hidden;text-decoration:none}.card img{display:block;width:100%;height:240px;object-fit:contain;object-position:top;background:#edf1ec}.card div{padding:16px}.card strong{display:block}.card small{color:#52625b;overflow-wrap:anywhere}.card:hover{border-color:#173c31}footer{margin-top:50px}</style>
<main><h1>Screenshot BakauKita</h1><p>${items.length} screenshot PNG · Desktop ${width} × ${height} · 9 November 2026</p><p>Klik gambar untuk membuka PNG ukuran penuh. Tinggi gambar utuh dan potongan bagian mengikuti panjang konten. Seluruh tangkapan menggunakan versi lokal dengan 15 artikel; preferensi kurangi gerakan diaktifkan agar animasi tidak menyembunyikan konten.</p><nav>${groups.map(group => `<a href="#${group}">${names[group]}</a>`).join('')}</nav>${groups.map(group => `<section id="${group}"><h2>${names[group]}</h2><div class="grid">${items.filter(item => item.group === group).map(item => `<a class="card" href="${item.file}" target="_blank" rel="noreferrer"><img src="${item.file}" loading="lazy" alt="${escape(item.label)}"><div><strong>${escape(item.label)}</strong><small>${escape(item.file)}</small></div></a>`).join('')}</div></section>`).join('')}<footer>Formulir kontak tidak dikirim. <a href="manifest.json">Manifest screenshot</a></footer></main></html>`;
  await writeFile(path.join(output, 'index.html'), html, 'utf8');
  await writeFile(path.join(output, 'manifest.json'), JSON.stringify({ capturedAt: new Date().toISOString(), viewport: { width, height }, reducedMotion: true, total: items.length, errors, items }, null, 2), 'utf8');
  console.log(`SELESAI ${items.length} screenshot: ${output}`);
} finally {
  await browser.close();
}
