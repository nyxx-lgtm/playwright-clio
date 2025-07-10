import { expect } from "@playwright/test";

/**
 * @typedef { import('@playwright/test').Page } Page
 */
export class ClioMatterPage {
  /**
   * @param {Page} page
   */
  constructor(page) {
    this.page = page;
    this.btnNewMatter = page.locator(`button[aria-label="New matter"]`);
    this.iptClient = page.locator(`input[name="client_input"]`);
    this.iptMatterDesc = page.locator(`textarea[placeholder="Enter matter description"]`);
    this.btnSaveMatter = page.locator(`button[aria-label="Save matter"]`);
    this.btnNewTimeEntry = page.locator(`button[aria-label="New time entry"]`)
    this.iptDuration = page.locator(`input[name="durationInput"]`)
    this.iptRate = page.locator(`input[name="rateField"]`)
    this.btnSaveEntry = page.locator(`button[aria-label="Save entry"]`)
  }

  rdMatterPermission(access) {
    return this.page.getByRole("radio", { name: access });
  }

  txtMatterDynamic(matterName) {
    return this.page.getByText(matterName)
  }

  btnTabMatterDetails(tabName) {
    return this.page.locator(`span[data-text="${tabName}"]`)
  }

  async clickNewMatter() {
    await this.btnNewMatter.click();
  }

  async fillMatterForm(clientName, matterDesc, access) {
    await this.iptClient.fill(clientName);
    await this.iptClient.press("Enter");
    await this.iptMatterDesc.fill(matterDesc);
    const radio = this.rdMatterPermission(access);
    await radio.click();
    await expect(radio).toHaveAttribute("aria-checked", "true");
  }

  async clickSaveMatter() {
    await this.btnSaveMatter.click();
  }

  async assertMatterCreated(clientName) {
    // await expect(this.page.getByText(clientName)).toBeVisible();
  }

  async openMatterDetail(matterName) {
    await this.txtMatterDynamic(matterName).click()
  }

  async clickTabOnMatterDetail(tabName) {
    await this.btnTabMatterDetails(tabName).click()
  }

  async clickNewTimeEntry() {
    await this.btnNewTimeEntry.click()
  }

  async fillTimeEntry(duration, rate) {
    await this.iptDuration.fill(duration)
    await this.iptRate.fill(rate)
  }

  async clickSaveEntry() {
    await this.btnSaveEntry.click()
  }

  async assertTimeEntryCreated() {
    
  }
}
