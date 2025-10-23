import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// List your routes here
const routes = [
  '/',
  '/about',
  '/contact',
  '/projects',
];

async function prerender() {
  const distPath = path.resolve(__dirname, '../dist');
  
  // Start a simple local server for the built files
  const { preview } = await import('vite');
  const server = await preview({
    preview: { port: 4173 }
  });

  const browser = await puppeteer.launch();
  
  for (const route of routes) {
    const page = await browser.newPage();
    const url = `http://localhost:4173${route}`;
    
    console.log(`Pre-rendering: ${route}`);
    await page.goto(url, { waitUntil: 'networkidle0' });
    
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
  server.httpServer.close();
  console.log('Pre-rendering complete!');
}

prerender().catch(console.error);