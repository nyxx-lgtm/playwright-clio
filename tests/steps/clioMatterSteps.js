import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixture";
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd(test);
const matterData = require("../data/matter.json");

When("I start creating a new matter", async ({ clioMatterPage }) => {
  await clioMatterPage.clickNewMatter();
});

When("I fill in the matter details", async ({ clioMatterPage }) => {
  await clioMatterPage.fillMatterForm(
    matterData.clientName,
    matterData.matterDesc,
    matterData.access
  );
});

When("I submit the matter form", async ({ clioMatterPage }) => {
  await clioMatterPage.clickSaveMatter();
});

Then(
  "the new matter should be created successfully",
  async ({ clioMatterPage }) => {
    await clioMatterPage.assertMatterCreated(matterData.clientName);
  }
);

const matterData2 = require("../data/matter2.json");
When("I open a matter", async ({ clioMatterPage }) => {
  await clioMatterPage.openMatterDetail(matterData2.matterName);
});

When("I go to the {string} tab", async ({ clioMatterPage }, arg) => {
  await clioMatterPage.clickTabOnMatterDetail(arg);
});

When("I create a new time entry", async ({ clioMatterPage }) => {
  await clioMatterPage.clickNewTimeEntry()
});

When("I enter time entry details", async ({ clioMatterPage }) => {
  await clioMatterPage.fillTimeEntry(matterData2.duration, matterData2.rate)
});

When("I submit the time entry", async ({ clioMatterPage }) => {
  await clioMatterPage.clickSaveEntry()
});

Then("the time entry should be saved under the matter", async ({clioMatterPage}) => {
  await clioMatterPage.assertTimeEntryCreated()
});
