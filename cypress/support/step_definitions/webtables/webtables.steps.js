import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { webTablesPage } from "../../../pages/webtables/webtables.page";
import { webtablesData } from "../../../data/webtables/webtables.data";

When("I navigate to the Web Tables page", () => {
  webTablesPage.clickWebTablesMenu();
});

When("I search for {string}", (keyword) => {
  webTablesPage.searchInput().clear().type(keyword);
});

Then("I should see a row containing {string}", (expected) => {
  webTablesPage.table().should("contain", expected);
});

Then("I should see no results in the table", () => {
  webTablesPage.table().should("not.contain", "Row");
});

When("I edit the first row with updated data", () => {
  webTablesPage.clickEditButton(2);
  webTablesPage.fillForm(webtablesData.updated);
  webTablesPage.submitForm();
});

Then("the updated entry should appear in the table", () => {
  webTablesPage.table().should("contain", webtablesData.updated.firstName);
  webTablesPage.table().should("contain", webtablesData.updated.email);
});

When("I delete the first row", () => {
  webTablesPage.clickDeleteButton(2);
});

Then("the row should be removed from the table", () => {
  webTablesPage
    .table()
    .should("not.contain", webtablesData.toBeDeleted.firstName);
});

When("I add a new entry with valid data", () => {
  webTablesPage.clickAddButton();
  webTablesPage.fillForm(webtablesData.newEntry);
  webTablesPage.submitForm();
});

Then("I should see the new entry in the table", () => {
  webTablesPage.table().should("contain", webtablesData.newEntry.firstName);
  webTablesPage.table().should("contain", webtablesData.newEntry.email);
});
