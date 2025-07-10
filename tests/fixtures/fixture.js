import { test as base } from "playwright-bdd";
import { ClioContactPage } from "../pages/clioContactObj";
import { HelpPage } from "../pages/helpObj";
import { ClioMatterPage } from "../pages/clioMatterObj";
import { ClioTaskPage } from "../pages/clioTaskObj";

const createFixture = (PageObject) => async ({ page }, use) => {
  const po = new PageObject(page);
  await use(po);
};

export const test = base.extend({
  clioContactPage: createFixture(ClioContactPage),
  helpPage: createFixture(HelpPage),
  clioMatterPage: createFixture(ClioMatterPage),
  clioTaskPage: createFixture(ClioTaskPage),
});
