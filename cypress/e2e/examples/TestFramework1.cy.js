describe("My Test", () => {
  before(() => {
    return cy.fixture("testFramework1").then(function (data) {
      this.data = data;
    });
  });

  it("My FirstTest case", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get('.form-group input[name="name"]').type(this.data.name);
    cy.get("#exampleFormControlSelect1").select(this.data.gender);
    cy.get('input[name="name"]').eq(1).should("have.value", this.data.name);
    cy.get('.form-group input[name="name"]').should(
      "have.attr",
      "minlength",
      "2"
    );
    cy.get("#inlineRadio3").should("be.disabled");
    cy.get(".nav-link").contains("Shop").click();
    this.data.productNames.forEach((productName) => {
      cy.selectProduct(productName);
    });
  });
});
