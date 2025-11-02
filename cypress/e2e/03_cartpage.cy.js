import CartPage from "../POM/CartPage";
import ProductPage from "../POM/ProductPage";

describe("Cart and Quantity Management", () => {

  let userData;

  before(() => {
    cy.fixture("testUser.json").then((user) => {
      userData = user;
    });
  });
  beforeEach(() => {
    cy.login(userData); 
  });


it("View product, change quantity to 3, and add to cart.", () => {
  ProductPage.visitProducts();
  ProductPage.viewProductAndAddToCart(5, 3);
});

it("Filter Dress by Brands (Polo & H&M) with verification and add to cart.", () => {
  const brands = [
    { name: "Polo", keyword: "Polo" },
    { name: "H&M", keyword: "H&M" }
  ];
  brands.forEach((brand) => {
    ProductPage.filterByCategory(brand.name); 
    ProductPage.verifyFilteredList(brand.keyword);
    ProductPage.addProductToCart(0);
    ProductPage.addProductToCart(1);
  });
});

it("Go to Cart, verify calculation and remove one product.", () => {
  CartPage.visitCart();
  CartPage.verifyCartTotals();
  CartPage.removeItem(0);
});

});
