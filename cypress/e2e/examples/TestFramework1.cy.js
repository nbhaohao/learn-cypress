import HomePage from "../pageObjects/HomePage";

describe("My Test", () => {
  before(() => {
    return cy.fixture("testFramework1").then(function (data) {
      this.data = data;
    });
  });

  it("My FirstTest case", function () {
    const homePage = new HomePage();
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should("have.value", this.data.name);
    homePage.getEditBox().should(
      "have.attr",
      "minlength",
      "2"
    );
    homePage.getEntrepreneur().should("be.disabled");
    homePage.getShopTab().click();
    this.data.productNames.forEach((productName) => {
      cy.selectProduct(productName);
    });
  });
});
