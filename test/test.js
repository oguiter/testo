const puppeteer = require('puppeteer');

headerHtml = `
<div style="font-size: 10px; padding-right: 1em; text-align: right; width: 100%;">
    <span>TheTitle</span>  <span class="pageNumber"></span> / <span class="totalPages"></span>
</div>`;

footerHtml = ` `;

(async () => {
  const browser = await puppeteer.launch({headless: true,
        executablePath: process.env.CHROME_BIN || null,
      args: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-dev-shm-usage']});

  const page = await browser.newPage();
  await page.goto('https://ioterop.github.io/IOWA/print_page.html', {
    waitUntil: 'networkidle2',
  });

  await page.pdf({ path: 'test.pdf', format: 'a4',displayHeaderFooter: true, // display header and footer (in this example, required!)
  printBackground: true, // print background
  landscape: false, // use horizontal page layout
  headerTemplate: headerHtml, // indicate html template for header
  footerTemplate: footerHtml,
  scale: 1, //Scale amount must be between 0.1 and 2
  margin: { // increase margins (in this example, required!)
      top: 80,
      bottom: 80,
      left: 30,
      right: 30 }});

  await browser.close();
})();
