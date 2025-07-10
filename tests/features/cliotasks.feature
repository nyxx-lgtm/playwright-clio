@tasks
Feature: Contacts

    Clio Manage Dashboard of Tasks

    Scenario: create a new task
        Given I am logged in
        And I navigate to the "tasks" submenu
        When I start creating a new task
        And I fill in the task details
        And I submit the task form
        Then the new task should be created successfully