import HomePage from "../pageObjects/HomePage";
import ProductsPage from "../pageObjects/ProductsPage";

describe("My Test", () => {
  before(() => {
    return cy.fixture("testFramework1").then(function (data) {
      this.data = data;
    });
  });

  it("My FirstTest case", function () {
    const homePage = new HomePage();
    const productsPage = new ProductsPage();
    cy.visit(Cypress.env("url"));
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should("have.value", this.data.name);
    homePage.getEditBox().should("have.attr", "minlength", "2");
    homePage.getEntrepreneur().should("be.disabled");
    homePage.getShopTab().click();
    this.data.productNames.forEach((productName) => {
      cy.selectProduct(productName);
    });
    productsPage.getCheckoutButton().click();
    cy.get("thead th").each(($element, index) => {
      if ($element.text() === "Total") {
        let result = 0;
        let unitText;
        cy.get("tbody tr td:nth-child(4) strong")
          .each(($element) => {
            const [unit, money] = $element.text().split(" ");
            result += parseFloat(money);
            unitText = unit;
          })
          .then(() => {
            cy.get("h3 strong")
              .contains(`${unitText} ${result}`)
              .should("be.visible");
          });
      }
    });
    cy.contains("Checkout").click();
    cy.get("#country").type("India");
    cy.get(".suggestions", {
      timeout: 8000,
    })
      .find("a")
      .eq(0)
      .click();
    cy.get("label[for='checkbox2']").click();
    cy.get('input[type="submit"]').contains("Purchase").click();
    cy.get(".alert").should(
      "include.text",
      "Thank you! Your order will be delivered in next few weeks"
    );
  });
});
