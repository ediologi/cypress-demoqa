import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../../../pages/homepage/homepage.page";
import { practiceFormPage } from "../../../pages/form/practiceForm.page";
import { practiceFormData } from "../../../data/form/practiceForm.data";

When("I click the Forms card", () => {
  homePage.formsCard().click();
});

When("I navigate to the Practice Form page", () => {
  practiceFormPage.openForm();
});

When("I fill in the practice form with valid data", () => {
  practiceFormPage.fillForm(practiceFormData.valid);
});

When("I fill in the form with missing first and last name", () => {
  practiceFormPage.fillForm(practiceFormData.missingName);
});

When("I fill in the form with invalid email", () => {
  practiceFormPage.fillForm(practiceFormData.invalidEmail);
});

When("I fill in the form with invalid mobile number", () => {
  practiceFormPage.fillForm(practiceFormData.invalidMobile);
});

When("I submit the form", () => {
  practiceFormPage.submitForm();
});

Then("I should see a success popup", () => {
  cy.get("#example-modal-sizes-title-lg").should(
    "contain",
    "Thanks for submitting the form"
  );
});

Then("I should see name fields marked as required", () => {
  cy.get("#firstName:invalid").should("exist");
  cy.get("#lastName:invalid").should("exist");
});

Then("I should see the email field marked as invalid", () => {
  cy.get("#userEmail:invalid").should("exist");
});

Then("I should see the mobile field marked as invalid", () => {
  cy.get("#userNumber:invalid").should("exist");
});
