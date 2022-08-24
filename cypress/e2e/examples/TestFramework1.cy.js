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
  });
});
