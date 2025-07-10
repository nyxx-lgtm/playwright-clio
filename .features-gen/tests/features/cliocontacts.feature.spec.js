// Generated from: tests\features\cliocontacts.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('Contacts', () => {

  test('create a new company', { tag: ['@contacts'] }, async ({ Given, page, And, helpPage, When, clioContactPage, Then }) => { 
    await Given('I am logged in', null, { page }); 
    await And('I navigate to the "contacts" submenu', null, { helpPage }); 
    await When('I start creating a new company', null, { clioContactPage }); 
    await And('I fill in the company details', null, { clioContactPage }); 
    await And('I submit the contact form', null, { clioContactPage }); 
    await Then('the new company should be created successfully', null, { clioContactPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\cliocontacts.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":["@contacts"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am logged in","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I navigate to the \"contacts\" submenu","stepMatchArguments":[{"group":{"start":18,"value":"\"contacts\"","children":[{"start":19,"value":"contacts","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I start creating a new company","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And I fill in the company details","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I submit the contact form","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the new company should be created successfully","stepMatchArguments":[]}]},
]; // bdd-data-end