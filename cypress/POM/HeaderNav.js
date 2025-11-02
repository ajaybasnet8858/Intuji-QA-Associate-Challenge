class HeaderNav {
  
  verifyUserLoggedIn(name) {
    cy.get('#header ul.nav')
      .should("exist")
      .and("contain.text", name);
  }

  logout() {
    cy.get("a").contains("Logout").click();
  }
}

export default new HeaderNav();
