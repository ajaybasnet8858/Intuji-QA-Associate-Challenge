class LoginPage {

  relogin(userData) {
    cy.visit("/login");

    cy.get('[data-qa="login-email"]').type(userData.email);
    cy.get('[data-qa="login-password"]').type(userData.password);
    cy.get('[data-qa="login-button"]').click();
  }
}

export default new LoginPage();
