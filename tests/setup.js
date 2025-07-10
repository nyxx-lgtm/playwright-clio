import { chromium, expect } from '@playwright/test';

module.exports = async () => {
  const browser = await chromium.launch({headless: false, slowMo: 1000});
  const page = await browser.newPage();

  await page.goto("https://account.clio.com/")
  await page.locator(`a[aria-describedby="manage-text"]`).click()
  await page.locator("#email").fill("alkhawarismi989@gmail.com")
  await page.locator("#next").click()
  await page.locator("#password").fill("P@ssw0rd123")
  await page.locator("#signin").click()
  await expect(page.locator('body')).toHaveText(/Welcome to Clio!/, { timeout: 9999999 })

  await page.context().storageState({ path: 'storageState.json' });

  await browser.close();
};
