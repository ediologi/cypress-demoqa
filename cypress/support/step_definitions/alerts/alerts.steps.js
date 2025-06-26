import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../../../pages/homepage/homepage.page";
import { alertsPage } from "../../../pages/alerts/alerts.page";

When("I click the Alerts, Frame & Windows card", () => {
  homePage.alertsCard().click();
});

When("I navigate to the Alerts page", () => {
  alertsPage.openAlertsPage();
  cy.get("#alertButton").should("be.visible");
});

When("I click the alert button", () => {
  cy.window().then((win) => {
    cy.stub(win, "alert").as("alertStub");
  });
  alertsPage.clickAlertButton();
});

Then("I should see a browser alert with text {string}", (expectedText) => {
  cy.get("@alertStub").should("have.been.calledWith", expectedText);
});

When("I click the confirm button and choose OK", () => {
  cy.window().then((win) => {
    cy.stub(win, "confirm").returns(true).as("confirmStub");
  });
  alertsPage.clickConfirmButton();
});

When("I click the confirm button and choose Cancel", () => {
  cy.window().then((win) => {
    cy.stub(win, "confirm").returns(false).as("confirmStub");
  });
  alertsPage.clickConfirmButton();
});

Then("I should see confirmation result {string}", (expected) => {
  cy.get("#confirmResult").should("contain", expected);
});

When("I click the prompt button and enter {string}", (input) => {
  cy.window().then((win) => {
    cy.stub(win, "prompt").returns(input).as("promptStub");
  });
  alertsPage.clickPromptButton();
});

Then("I should see prompt result {string}", (expected) => {
  cy.get("#promptResult").should("contain", expected);
});

When("I click the delayed alert button", () => {
  cy.window().then((win) => {
    cy.stub(win, "alert").as("delayedAlertStub");
  });
  alertsPage.clickDelayedAlertButton();
});

Then("I should see a delayed alert with text {string}", (expectedText) => {
  cy.get("@delayedAlertStub", { timeout: 6000 }).should(
    "have.been.calledWith",
    expectedText
  );
});
