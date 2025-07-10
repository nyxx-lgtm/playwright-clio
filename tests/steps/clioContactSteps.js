import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixture";
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd(test);
const companyData = require("../data/company.json");

When("I start creating a new company", async ({ clioContactPage }) => {
  await clioContactPage.clickNewCompany();
});

When("I fill in the company details", async ({ clioContactPage }) => {
  await clioContactPage.fillNewContactForm(
    companyData.fullName,
    companyData.email,
    companyData.phoneNumber,
    companyData.website
  );
});

When("I submit the contact form", async ({ clioContactPage }) => {
  await clioContactPage.clickSaveContact()
});

Then("the new company should be created successfully", async ({ clioContactPage }) => {
  await clioContactPage.assertCompanyCreated(companyData.fullName)
});
