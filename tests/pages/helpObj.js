import { expect } from '@playwright/test';

/**
 * @typedef { import('@playwright/test').Page } Page
 */
export class HelpPage {
  /**
   * @param {Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async clickSubmenu(testId) {
    await this.page.getByTestId(testId).click()
  }
}