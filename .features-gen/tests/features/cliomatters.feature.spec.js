// Generated from: tests\features\cliomatters.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('Matters', () => {

  test('create a new matter', { tag: ['@matters'] }, async ({ Given, page, And, helpPage, When, clioMatterPage, Then }) => { 
    await Given('I am logged in', null, { page }); 
    await And('I navigate to the "matters" submenu', null, { helpPage }); 
    await When('I start creating a new matter', null, { clioMatterPage }); 
    await And('I fill in the matter details', null, { clioMatterPage }); 
    await And('I submit the matter form', null, { clioMatterPage }); 
    await Then('the new matter should be created successfully', null, { clioMatterPage }); 
  });

  test('Record a time entry for a matter', { tag: ['@matters'] }, async ({ Given, page, And, helpPage, When, clioMatterPage, Then }) => { 
    await Given('I am logged in', null, { page }); 
    await And('I navigate to the "matters" submenu', null, { helpPage }); 
    await When('I open a matter', null, { clioMatterPage }); 
    await And('I go to the "Activities" tab', null, { clioMatterPage }); 
    await And('I create a new time entry', null, { clioMatterPage }); 
    await And('I enter time entry details', null, { clioMatterPage }); 
    await And('I submit the time entry', null, { clioMatterPage }); 
    await Then('the time entry should be saved under the matter', null, { clioMatterPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\cliomatters.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":["@matters"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am logged in","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I navigate to the \"matters\" submenu","stepMatchArguments":[{"group":{"start":18,"value":"\"matters\"","children":[{"start":19,"value":"matters","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I start creating a new matter","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And I fill in the matter details","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I submit the matter form","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the new matter should be created successfully","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":14,"tags":["@matters"],"steps":[{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given I am logged in","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And I navigate to the \"matters\" submenu","stepMatchArguments":[{"group":{"start":18,"value":"\"matters\"","children":[{"start":19,"value":"matters","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I open a matter","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And I go to the \"Activities\" tab","stepMatchArguments":[{"group":{"start":12,"value":"\"Activities\"","children":[{"start":13,"value":"Activities","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"And I create a new time entry","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"And I enter time entry details","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And I submit the time entry","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then the time entry should be saved under the matter","stepMatchArguments":[]}]},
]; // bdd-data-end