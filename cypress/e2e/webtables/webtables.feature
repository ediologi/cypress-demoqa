Feature: Web Tables interaction

  Background:
    Given I visit the homepage
    When I click the Elements card
    And I navigate to the Web Tables page

  Scenario: Search for a valid entry
    When I search for "Cierra"
    Then I should see a row containing "Cierra"

  Scenario: Search for an invalid entry
    When I search for "NoResult"
    Then I should see no results in the table

  Scenario: Edit an existing entry
    When I edit the first row with updated data
    Then the updated entry should appear in the table

  Scenario: Delete an entry
    When I delete the first row
    Then the row should be removed from the table

  Scenario: Add a new entry
    When I add a new entry with valid data
    Then I should see the new entry in the table
