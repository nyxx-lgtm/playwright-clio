import { expect } from '@playwright/test';

/**
 * @typedef { import('@playwright/test').Page } Page
 */
export class ClioContactPage {

  /**
   * @param {Page} page
   */
  constructor(page) {
    this.page = page;
    this.btnNewCompany = page.locator(`button[aria-label="New company"]`)
    this.iptName = page.locator(`input[aria-label="Name"]`)
    this.iptEmailAddress = page.locator(`input[aria-label="Email address"]`)
    this.iptPhoneNumber = page.locator(`input[aria-label="Phone number"]`)
    this.iptWebsite = page.locator(`input[aria-label="Web address"]`)
    this.btnSaveContact = page.locator(`button[aria-label="Save contact"]`)
  }

  async clickNewCompany() {
    await this.btnNewCompany.click()
  }

  async fillNewContactForm(fullName, email, phoneNumber, website) {
    await this.iptName.fill(fullName)
    await this.iptEmailAddress.fill(email)
    await this.iptPhoneNumber.fill(phoneNumber)
    await this.iptWebsite.fill(website)
  }

  async clickSaveContact() {
    await this.btnSaveContact.click()
  }

  async assertCompanyCreated(companyName) {
    await expect(this.page.locator(`h1[title="${companyName}"]`)).toHaveText(`${companyName}`, {timeout: 30000})
  }

}