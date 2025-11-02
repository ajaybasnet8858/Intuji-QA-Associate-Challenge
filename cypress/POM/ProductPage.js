class ProductPage {
  visitProducts() {
    cy.visit("/products");
  }

filterByCategory(category, subcategory = null) {
    if (!category) throw new Error("Category must be defined");
    cy.contains(category).click();

    if (subcategory) {
      cy.contains(subcategory).click();
    }
  }

verifyFilteredList(category, subcategory = null) {
  let expectedText = category;
  if (subcategory) expectedText += " - " + subcategory;
  expectedText += " Products";

  cy.get("h2.title.text-center").should("contain.text", expectedText);
}

addProductToCart(index = 0) {
  cy.get(".productinfo").eq(index)
    .find('a.btn') 
    .click({ force: true });

  cy.get('#cartModal button.close-modal').click();
}

clickViewProduct(index = 1) {
  cy.xpath(`(//div[@class='product-image-wrapper'])[${index}]//a[contains(@href,'/product_details/')]`)
  .click();

  cy.get(".product-information").should("exist");
  cy.get(".product-information").should("contain.text", "Rs.");
  cy.get(".product-information").should("contain.text", "Availability:");
}

viewProductAndAddToCart(index = 1, quantity = 1) {
  cy.xpath(`(//a[contains(text(),'View Product')])[${index}]`)
    .scrollIntoView()
    .should("be.visible")
    .click();

  cy.url().should("include", "/product_details");

  cy.get("#quantity")
    .clear()
    .type(quantity);

  cy.get('button.cart').click();
  cy.get('#cartModal button.close-modal').click();
}
}

export default new ProductPage();
