import ProductPage from "../POM/ProductPage";

describe("Product Browsing & Cart Flow", () => {
  let userData;

  before(() => {
    cy.fixture("testUser.json").then((user) => {
      userData = user;
    });
  });

  beforeEach(() => {
    cy.login(userData); 
  });

  it("Verify Product API", () => {
    cy.request("/api/productsList").its("status").should("eq", 200);
  });

  it("Filter Dress by Women > Dress and verify.", () => {
    cy.visit("/products");
    
    const category = "Women";
    const subcategory = "Dress";

    ProductPage.filterByCategory(category, subcategory);
    ProductPage.verifyFilteredList(category, subcategory);
  });
  
  it("Add Products to Cart.", () => {
    ProductPage.addProductToCart(0);
    ProductPage.addProductToCart(1);
  });

  it("Click View Product then verify details.", () => {
  ProductPage.clickViewProduct(3);
});

});
