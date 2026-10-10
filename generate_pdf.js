import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDF() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const htmlPath = 'file:///' + path.join(__dirname, 'doc_printable.html').replace(/\\/g, '/');
  const outputPath = path.join(__dirname, 'Yukti_Software_Project_Documentation.pdf');

  console.log('Launching browser with Chrome at:', chromePath);
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  console.log('Loading HTML file:', htmlPath);
  await page.goto(htmlPath, { waitUntil: 'networkidle0' });

  console.log('Rendering PDF...');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '15mm',
      bottom: '15mm',
      left: '12mm',
      right: '12mm'
    }
  });

  await browser.close();
  console.log('PDF successfully generated at:', outputPath);
}

generatePDF().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
