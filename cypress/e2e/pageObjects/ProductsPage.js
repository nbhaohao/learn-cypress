class ProductsPage {
  getCheckoutButton() {
    return cy.get(".nav-link").contains("Checkout");
  }
}
export default ProductsPage;
