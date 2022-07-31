import puppeteer from 'puppeteer';

export async function ssr(url) {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    const page.goto(url, {
        waitUntil: 'networkidle0'
    });
    const html = await page.content();
    await browser.close()
    return html;
}