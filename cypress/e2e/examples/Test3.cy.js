describe("My Third Test Suite", () => {
  it("My Third case", () => {
    cy.visit("http://localhost:8080/");
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");

    cy.get("select#dropdown-class-example")
      .select("option1")
      .should("have.value", "option1");
    cy.get("#autocomplete").type("ind");
    cy.get(".ui-menu-item div").each((element) => {
      if (element.text() === "India") {
        cy.wrap(element).click();
      }
    });
    cy.get("#autocomplete").should("have.value", "India");
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");

    cy.get("[value='radio2']").check().should("be.checked");
  });
});
