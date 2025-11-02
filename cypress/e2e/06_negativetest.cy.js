import HeaderNav from "../POM/HeaderNav";

describe("Negative Test", () => {

  let userData;

  before(() => {
    cy.fixture("testUser.json").then((user) => {
      userData = user;
    });
  });
  
  beforeEach(() => {
    cy.visit("/login");
  });

  it("New Registration Attempt with current user.", () => {
    HeaderNav.logout();

    cy.get('[data-qa="signup-name"]').type(userData.name);
    cy.get('[data-qa="signup-email"]').type(userData.email);
    cy.get('[data-qa="signup-button"]').click();
  });

  it("Login with wrong password.", () => {

    cy.get('[data-qa="login-email"]').type(userData.email);
    cy.get('[data-qa="login-password"]').type("WrongPassword");
    cy.get('[data-qa="login-button"]').click();
  });

});