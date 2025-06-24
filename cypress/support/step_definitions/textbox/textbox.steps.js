import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../../../pages/homepage/homepage.page";
import { textBoxPage } from "../../../pages/textbox/textbox.page";
import { textBoxData } from "../../../data/textbox/textBox.data";

When("I click the Elements card", () => {
  homePage.clickElementsCard();
});

When("I navigate to the Text Box form", () => {
  textBoxPage.clickTextBoxMenu();
});

Then("I should see the text box form", () => {
  textBoxPage.fullNameInput().should("be.visible");
  textBoxPage.emailInput().should("be.visible");
  textBoxPage.currentAddressInput().should("be.visible");
  textBoxPage.permanentAddressInput().should("be.visible");
});

When("I fill in the form with valid data", () => {
  textBoxPage.fillForm(textBoxData);
});

When("I click the submit button", () => {
  textBoxPage.submitButton().click();
});

Then("I should see the submitted data displayed correctly", () => {
  textBoxPage.output().should("be.visible");
  textBoxPage.output().should("contain", textBoxData.fullName);
  textBoxPage.output().should("contain", textBoxData.email);
  textBoxPage.output().should("contain", textBoxData.currentAddress);
  textBoxPage.output().should("contain", textBoxData.permanentAddress);
});
