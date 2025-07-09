import { test as base } from '@playwright/test';
import { ClioHomePage } from '../pages/clioHomeObj';

/**
 * Extend base test with clioHomePage fixture
 */
export const test = base.extend({
  clioHomePage: async ({ page }, use) => {
    const clioHomePage = new ClioHomePage(page);
    await use(clioHomePage);
  },
});