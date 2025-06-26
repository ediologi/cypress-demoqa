class AlertsPage {
  openAlertsPage() {
    cy.get(".element-list.collapse.show").should("be.visible");

    cy.contains(".element-list.collapse.show span", "Alerts")
      .should("be.visible")
      .click();
  }

  clickAlertButton() {
    cy.get("#alertButton").click();
  }

  clickConfirmButton() {
    cy.get("#confirmButton").click();
  }

  clickPromptButton() {
    cy.get("#promtButton").click();
  }

  clickDelayedAlertButton() {
    cy.get("#timerAlertButton").click();
  }
}

export const alertsPage = new AlertsPage();
