import HeaderNav from "../POM/HeaderNav";
import LoginPage from "../POM/LoginPage";

describe("Logout and Relogin", () => {
  let userData;

  before(() => {
    cy.fixture("testUser.json").then((user) => {
      userData = user;
    });
  });
  
  beforeEach(() => {
    cy.login(userData); 
  });

  it("Logout and Re-login", () => {
    cy.visit("/");
    HeaderNav.logout();  

    LoginPage.relogin(userData);
  });

  it("Check if the valid user is logged in", () => {
    HeaderNav.verifyUserLoggedIn(userData.name);
  });
});
