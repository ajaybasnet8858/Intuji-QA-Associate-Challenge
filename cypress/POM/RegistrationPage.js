class RegistrationPage {
  visitLogin() {
    cy.visit("/login"); 
  }

  fillSignupForm(userData) {
    cy.get('[data-qa="signup-name"]').type(userData.name);
    cy.get('[data-qa="signup-email"]').type(userData.email);
    cy.get('[data-qa="signup-button"]').click();
  }

  fillAccountDetails(userData) {
    cy.get("#id_gender1").check();
    cy.get("#password").type(userData.password);
    cy.get("#days").select("1");
    cy.get("#months").select("January");
    cy.get("#years").select("1990");
    cy.get("#first_name").type(userData.firstName);
    cy.get("#last_name").type(userData.lastName);
    cy.get("#address1").type(userData.address);
    cy.get("#city").type(userData.city);
    cy.get("#state").type(userData.state);
    cy.get("#zipcode").type(userData.zipcode);
    cy.get("#mobile_number").type(userData.phone);
    cy.get('button[data-qa="create-account"]').click();
  }
}

module.exports = new RegistrationPage();
