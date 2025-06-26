Feature: Handle browser alerts

  Background:
    Given I visit the homepage
    When I click the Alerts, Frame & Windows card
    And I navigate to the Alerts page

  Scenario: Handle simple alert
    When I click the alert button
    Then I should see a browser alert with text "You clicked a button"

  Scenario: Handle confirmation - OK
    When I click the confirm button and choose OK
    Then I should see confirmation result "You selected Ok"

  Scenario: Handle confirmation - Cancel
    When I click the confirm button and choose Cancel
    Then I should see confirmation result "You selected Cancel"

  Scenario: Handle prompt and enter text
    When I click the prompt button and enter "Cypress with Gherkin"
    Then I should see prompt result "You entered Cypress with Gherkin"

  Scenario: Handle delayed alert
    When I click the delayed alert button
    Then I should see a delayed alert with text "This alert appeared after 5 seconds"
