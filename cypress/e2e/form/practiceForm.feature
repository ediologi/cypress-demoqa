Feature: Form submission and validation

  Background:
    Given I visit the homepage
    When I click the Forms card
    And I navigate to the Practice Form page

  Scenario: Submit a valid form
    When I fill in the practice form with valid data
    And I submit the form
    Then I should see a success popup

  Scenario: Submit with missing name
    When I fill in the form with missing first and last name
    And I submit the form
    Then I should see name fields marked as required

  Scenario: Submit with invalid email
    When I fill in the form with invalid email
    And I submit the form
    Then I should see the email field marked as invalid

  Scenario: Submit with invalid mobile number
    When I fill in the form with invalid mobile number
    And I submit the form
    Then I should see the mobile field marked as invalid
