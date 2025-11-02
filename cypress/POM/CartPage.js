class CartPage {
  visitCart() { 
    cy.visit("/view_cart"); 
  }

verifyCartTotals() {
  cy.get("#cart_info_table tbody tr").each(($row) => {

    cy.wrap($row).find("td.cart_price p").invoke("text").then(priceText => {
      const price = Number(priceText.replace(/[^0-9]/g, ''));

      cy.wrap($row).find("td.cart_quantity button.disabled").invoke("text").then(quantityText => {
        const quantity = Number(quantityText.trim());

        cy.wrap($row).find("td.cart_total p").invoke("text").then(totalText => {
          const displayedTotal = Number(totalText.replace(/[^0-9]/g, ''));

          expect(displayedTotal).to.eq(price * quantity);
        });
      });
    });

  });
}

removeItem(index = 0) {
  cy.get(`#cart_info_table tbody tr`).eq(index)
    .find('i.fa.fa-times')      
    .click();
}
}

export default new CartPage();
