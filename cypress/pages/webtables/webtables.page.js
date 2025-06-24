class WebTablesPage {
  webTablesMenu = () => cy.contains("span", "Web Tables");
  searchInput = () => cy.get("#searchBox");
  table = () => cy.get(".rt-table");
  addButton = () => cy.get("#addNewRecordButton");
  submitButton = () => cy.get("#submit");

  clickWebTablesMenu() {
    this.webTablesMenu().click();
  }

  clickEditButton(rowIndex) {
    cy.get(`#edit-record-${rowIndex - 1}`).click();
  }

  clickDeleteButton(rowIndex) {
    cy.get(`#delete-record-${rowIndex - 1}`).click();
  }

  clickAddButton() {
    this.addButton().click();
  }

  fillForm(data) {
    cy.get("#firstName").clear().type(data.firstName);
    cy.get("#lastName").clear().type(data.lastName);
    cy.get("#userEmail").clear().type(data.email);
    cy.get("#age").clear().type(data.age);
    cy.get("#salary").clear().type(data.salary);
    cy.get("#department").clear().type(data.department);
  }

  submitForm() {
    this.submitButton().click();
  }
}

export const webTablesPage = new WebTablesPage();
