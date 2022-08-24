describe("My sixth Test Suite", () => {
  it("My sixth case", () => {
    cy.visit("http://localhost:8080/");
    cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click();
    cy.url().should("include", "#top");
  });
});
