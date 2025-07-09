import { test as base } from 'playwright-bdd';
import * as Pages from './pages.js';

const { ClioHomePage } = Pages;

const createTestFunction = (PageClass) => async ({page}, use) =>{
    await use(new PageClass(page));
}

export const test = base.extend({
    clioHomePage: createTestFunction(ClioHomePage)
});