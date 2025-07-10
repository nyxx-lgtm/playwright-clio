import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixture";
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd(test);
const taskData = require("../data/task.json");

When("I start creating a new task", async ({ clioTaskPage }) => {
  await clioTaskPage.clickNewTask();
});

When("I fill in the task details", async ({ clioTaskPage }) => {
  await clioTaskPage.fillTaskDetail(taskData.taskName);
});

When("I submit the task form", async ({ clioTaskPage }) => {
  await clioTaskPage.clickSaveTask()
});

Then(
  "the new task should be created successfully",
  async ({ clioTaskPage }) => {
    await clioTaskPage.assertTaskCreated()
  }
);
