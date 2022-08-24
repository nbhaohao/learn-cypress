import "cypress-iframe";

describe("Frame Test", () => {
  it("Demo example", () => {
    cy.visit("http://localhost:8080/");
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find('.radioButton').eq(0).click()
  });
});
