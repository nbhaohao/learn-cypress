Feature: End to end Ecommerce validation
  application Regression

  @Regression
  Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add items to Cart
    And Validate the total prices
    Then Select the country submit and verify thank you

  @Smoke
  Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form details
      | name | gender |
      | bobz | Female |
    Then Validate the forms behavior
    And Select the shop page
