import { expect } from '@playwright/test';

export class ClioHomePage {
  constructor(page) {
    this.page = page;
    this.btnLogin = page.locator('');

  }

  async goto(url) {
    await this.page.goto(url);
  }

  async clickLogin() {
    await this.btnLogin.click();
  }
}