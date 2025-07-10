// Generated from: tests\features\cliotasks.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('Contacts', () => {

  test('create a new task', { tag: ['@tasks'] }, async ({ Given, page, And, helpPage, When, clioTaskPage, Then }) => { 
    await Given('I am logged in', null, { page }); 
    await And('I navigate to the "tasks" submenu', null, { helpPage }); 
    await When('I start creating a new task', null, { clioTaskPage }); 
    await And('I fill in the task details', null, { clioTaskPage }); 
    await And('I submit the task form', null, { clioTaskPage }); 
    await Then('the new task should be created successfully', null, { clioTaskPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\cliotasks.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":["@tasks"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am logged in","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I navigate to the \"tasks\" submenu","stepMatchArguments":[{"group":{"start":18,"value":"\"tasks\"","children":[{"start":19,"value":"tasks","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I start creating a new task","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And I fill in the task details","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I submit the task form","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the new task should be created successfully","stepMatchArguments":[]}]},
]; // bdd-data-end