import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import handler from 'serve-handler';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.VERCEL || process.env.NODE_ENV === 'production';

const routes = [
  '/',
  '/about',
  '/contact',
  '/projects',
];

async function prerender() {
  const distPath = path.resolve(__dirname, '../dist');
  
  // Create a simple static file server with SPA fallback
  const server = createServer((request, response) => {
    return handler(request, response, {
      public: distPath,
      rewrites: [
        { source: "**", destination: "/index.html" }
      ]
    });
  });

  await new Promise((resolve) => {
    server.listen(4173, () => {
      console.log('Server running on port 4173');
      resolve();
    });
  });

  let browser;
  
  if (isProduction) {
    const puppeteerCore = await import('puppeteer-core');
    const chromium = await import('@sparticuz/chromium');
    
    browser = await puppeteerCore.default.launch({
      args: [...chromium.default.args, '--no-sandbox', '--disable-setuid-sandbox'],
      defaultViewport: chromium.default.defaultViewport,
      executablePath: await chromium.default.executablePath(),
      headless: chromium.default.headless,
    });
  } else {
    const puppeteer = await import('puppeteer');
    browser = await puppeteer.default.launch({
      headless: true
    });
  }
  
  for (const route of routes) {
    const page = await browser.newPage();
    const url = `http://localhost:4173${route}`;
    
    console.log(`Pre-rendering: ${route}`);
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    
    const html = await page.content();
    
    // Save HTML file
    const filePath = route === '/' 
      ? path.join(distPath, 'index.html')
      : path.join(distPath, route, 'index.html');
    
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, html);
    await page.close();
  }
  
  await browser.close();
  server.close();
  console.log('Pre-rendering complete!');
}

prerender().catch(console.error);