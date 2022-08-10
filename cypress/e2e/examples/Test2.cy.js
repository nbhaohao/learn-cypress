describe("My Second Test Suite", () => {
  it("My Second case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(1000);
    cy.get(".products").as("productLocator");

    cy.get("@productLocator")
      .find(".product")
      .each((element) => {
        const textVegetable = element.find("h4.product-name").text();
        if (textVegetable.includes("Cashews")) {
          cy.wrap(element).find("button").click();
        }
      });
    cy.get(".cart-icon > img").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
  });
});
