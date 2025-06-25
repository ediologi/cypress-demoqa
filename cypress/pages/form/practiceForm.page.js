class PracticeFormPage {
  openForm() {
    cy.contains("Practice Form").click();
  }

  fillForm(data) {
    if (data.firstName !== undefined) {
      cy.get("#firstName").clear();
      if (data.firstName) {
        cy.get("#firstName").type(data.firstName);
      }
    }
    if (data.lastName !== undefined) {
      cy.get("#lastName").clear();
      if (data.lastName) {
        cy.get("#lastName").type(data.lastName);
      }
    }
    if (data.email !== undefined) {
      cy.get("#userEmail").clear();
      if (data.email) {
        cy.get("#userEmail").type(data.email);
      }
    }

    if (data.gender) {
      cy.contains(".custom-control-label", data.gender).click();
    }

    if (data.mobile !== undefined) {
      cy.get("#userNumber").clear();
      if (data.mobile) {
        cy.get("#userNumber").type(data.mobile);
      }
    }

    if (data.dob) {
      cy.get("#dateOfBirthInput").click();
      cy.get(".react-datepicker__year-select").select(data.dob.year);
      cy.get(".react-datepicker__month-select").select(data.dob.month);
      cy.contains(".react-datepicker__day", data.dob.day).click();
    }

    if (data.subjects) {
      data.subjects.forEach((subject) => {
        cy.get("#subjectsInput").type(`${subject}{enter}`);
      });
    }

    if (data.hobbies) {
      data.hobbies.forEach((hobby) => {
        cy.contains(".custom-control-label", hobby).click();
      });
    }

    if (data.state) {
      cy.get("#state").click();
      cy.get(".css-26l3qy-menu").contains(data.state).click();
    }

    if (data.city) {
      cy.get("#city").click();
      cy.get(".css-26l3qy-menu").contains(data.city).click();
    }
  }

  submitForm() {
    cy.get("#submit").click();
  }
}

export const practiceFormPage = new PracticeFormPage();
