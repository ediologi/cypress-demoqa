class HomePage {
  elementsCard = () => cy.contains(".card-body h5", "Elements");
  formsCard = () => cy.contains(".card-body h5", "Forms");
  alertsCard = () => cy.contains(".card-body h5", "Alerts, Frame & Windows");
  widgetsCard = () => cy.contains(".card-body h5", "Widgets");
  interactionsCard = () => cy.contains(".card-body h5", "Interactions");
  bookStoreCard = () => cy.contains(".card-body h5", "Book Store Application");

  visit() {
    cy.visit("/");
  }

  clickElementsCard() {
    this.elementsCard().click();
  }
}

export const homePage = new HomePage();
