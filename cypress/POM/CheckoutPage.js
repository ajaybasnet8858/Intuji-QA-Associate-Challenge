class CheckoutPage {
  visitCheckout() { 
    cy.visit("/checkout"); 
  }
  
  placeOrder() {
    cy.get('#cart_items a.btn').click();
  }

  enterPayment(paymentData) {
    cy.get('[data-qa="name-on-card"]').type(paymentData.nameOnCard);
    cy.get('[data-qa="card-number"]').type(paymentData.cardNumber);
    cy.get('[data-qa="cvc"]').type(paymentData.cvc);
    cy.get('[data-qa="expiry-month"]').type(paymentData.expiryMonth.toString());
    cy.get('[data-qa="expiry-year"]').type(paymentData.expiryYear.toString());
    cy.get('[data-qa="pay-button"]').click();
  }

}

export default new CheckoutPage();
