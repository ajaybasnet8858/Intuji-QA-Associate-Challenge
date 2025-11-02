import RegistrationPage from "../POM/RegistrationPage";

Cypress.Commands.add("login", (user) => {

  cy.session(
    ["userSession", user.email],
    () => {
      RegistrationPage.visitLogin();
      RegistrationPage.fillSignupForm(user);
      RegistrationPage.fillAccountDetails(user);
      cy.contains("Continue").click();
    },
    { cacheAcrossSpecs: true }
  );
});
