import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../../../pages/homepage/homepage.page";

Given("I visit the homepage", () => {
  cy.visit("/");
});

Then("I should see that the homepage has loaded", () => {
  homePage.elementsCard().should("be.visible");
  homePage.formsCard().should("be.visible");
  homePage.alertsCard().should("be.visible");
  homePage.widgetsCard().should("be.visible");
  homePage.interactionsCard().should("be.visible");
  homePage.bookStoreCard().should("be.visible");
  cy.url().should("include", "/");
});
