describe("My sixth Test Suite", () => {
  it("My sixth case", () => {
    cy.visit("http://localhost:8080/");
    cy.get("#opentab").then(($el) => {
      const url = $el.prop("href");
      cy.visit(url);
    });
  });
});
