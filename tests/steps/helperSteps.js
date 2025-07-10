import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixture";
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd(test);

Given("I am logged in", async ({ page }) => {
  await page.goto("https://app.clio.com/nc/#/");
  await expect(page.locator("body")).toHaveText(/Welcome to Clio!/);
});

When("I navigate to the {string} submenu", async ({ helpPage }, submenu) => {
  await helpPage.clickSubmenu(submenu);
});
