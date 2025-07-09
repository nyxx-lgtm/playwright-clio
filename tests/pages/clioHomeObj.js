import { expect } from '@playwright/test';

/**
 * @typedef { import('@playwright/test').Page } Page
 */
export class ClioHomePage {
  /**
   * @param {Page} page
   */
  constructor(page) {
    this.page = page;
    this.btnLogin = page
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async clickLogin() {
    await this.btnLogin.click();
  }
}