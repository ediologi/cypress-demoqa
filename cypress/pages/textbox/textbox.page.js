class TextBoxPage {
  textBoxMenu = () => cy.contains("span", "Text Box");
  fullNameInput = () => cy.get("#userName");
  emailInput = () => cy.get("#userEmail");
  currentAddressInput = () => cy.get("#currentAddress");
  permanentAddressInput = () => cy.get("#permanentAddress");
  submitButton = () => cy.get("#submit");
  output = () => cy.get("#output");

  clickTextBoxMenu() {
    this.textBoxMenu().click();
  }

  fillForm(data) {
    this.fullNameInput().type(data.fullName);
    this.emailInput().type(data.email);
    this.currentAddressInput().type(data.currentAddress);
    this.permanentAddressInput().type(data.permanentAddress);
  }
}

export const textBoxPage = new TextBoxPage();
