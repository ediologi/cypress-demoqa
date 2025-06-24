Feature: Text Box form submission

  Background:
    Given I visit the homepage
    When I click the Elements card
    And I navigate to the Text Box form

  Scenario: Submit valid form input
    Then I should see the text box form
    When I fill in the form with valid data
    And I click the submit button
    Then I should see the submitted data displayed correctly
