describe("My Fourth Test Suite", () => {
  it("My Fourth case", () => {
    cy.visit("http://localhost:8080/");
    cy.get(".table-display tr td:nth-child(2)")
      .contains("Python")
      .eq(0)
      .then(($el) => {
        expect($el.next().text()).to.equal("25");
      });
  });
});
