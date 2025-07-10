import { expect } from "@playwright/test";

/**
 * @typedef { import('@playwright/test').Page } Page
 */
export class ClioTaskPage {
  /**
   * @param {Page} page
   */
  constructor(page) {
    this.page = page;
    this.btnNewTask = page.locator(`button[aria-label="New task"]`)
    this.iptTaskName = page.locator(`input[placeholder="Enter task name..."]`)
    this.btnSaveTask = page.locator(`button[aria-label="Save task"]`)
  }

  async clickNewTask() {
    await this.btnNewTask.click()
  }

  async fillTaskDetail(taskName) {
    await this.iptTaskName.fill(taskName)
  }

  async clickSaveTask() {
    await this.btnSaveTask.click()
  }

  async assertTaskCreated() {
    
  }
}
