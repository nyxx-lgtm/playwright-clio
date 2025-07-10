@matters
Feature: Matters

    Clio Manage Dashboard of Matters

    Scenario: create a new matter
        Given I am logged in
        And I navigate to the "matters" submenu
        When I start creating a new matter
        And I fill in the matter details
        And I submit the matter form
        Then the new matter should be created successfully

    Scenario: Record a time entry for a matter
        Given I am logged in
        And I navigate to the "matters" submenu
        When I open a matter
        And I go to the "Activities" tab
        And I create a new time entry
        And I enter time entry details
        And I submit the time entry
        Then the time entry should be saved under the matter
