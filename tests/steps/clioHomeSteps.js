import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

Given('I Navigate to {string}', async ({ clioHomePage }, url) => {
  await clioHomePage.goto(url);
});
