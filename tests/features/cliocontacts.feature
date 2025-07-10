@contacts
Feature: Contacts

    Clio Manage Dashboard of Contacts

    Scenario: create a new company
        Given I am logged in
        And I navigate to the "contacts" submenu
        When I start creating a new company
        And I fill in the company details
        And I submit the contact form
        Then the new company should be created successfully