describe("My Third Test Suite", () => {
  it("My Third case", () => {
    cy.visit("http://localhost:8080/");
    cy.get("#alertbtn").click();
    cy.get("#confirmbtn").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
  });
});
