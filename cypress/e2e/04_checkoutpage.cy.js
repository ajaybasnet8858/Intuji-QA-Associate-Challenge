import CheckoutPage from "../POM/CheckoutPage";
import CartPage from "../POM/CartPage";
import { faker } from "@faker-js/faker";

describe("Checkout Flow with Fake Payment", () => {

  let userData;     
  let paymentData;  

  before(() => {
    cy.fixture("testUser.json").then((data) => {
      userData = data;
    });

    paymentData = {
      nameOnCard: faker.person.fullName(),
      cardNumber: faker.finance.creditCardNumber(),
      cvc: faker.finance.pin({ length: 3 }),
      expiryMonth: faker.number.int({ min: 1, max: 12 }),
      expiryYear: faker.number.int({ min: 2025, max: 2030 })
    };

    cy.writeFile("cypress/fixtures/paymentDetail.json", paymentData);

  });

  beforeEach(() => {
    cy.login(userData);
  });

  it("Go to Checkout and place order", () => {
    CartPage.visitCart();       
    CheckoutPage.visitCheckout();
    CheckoutPage.placeOrder();
  });

  it("Enter payment details and confirm order. Also verify the order confirmation.", () => {
    CheckoutPage.enterPayment(paymentData);

    cy.contains("Congratulations! Your order has been confirmed!").should("exist");
  });

});
