Feature: Verify homepage is accessible

  Background:
    Given I visit the homepage

  Scenario: Basic check
    Then I should see that the homepage has loaded
