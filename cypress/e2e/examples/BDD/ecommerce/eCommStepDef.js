import {
  And,
  Given,
  Then,
  When,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../pageObjects/HomePage";
import ProductsPage from "../../../pageObjects/ProductsPage";

let filledName = Before(() => {
  cy.fixture("testFramework1").then(function (data) {
    cy.log("beforeEach");
    this.data = data;
  });
});

Given("I open Ecommerce page", () => {
  cy.visit(Cypress.env("url"));
});

When("I add items to Cart", function () {
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  homePage.getShopTab().click();
  this.data.productNames.forEach((productName) => {
    cy.selectProduct(productName);
  });
  productsPage.getCheckoutButton().click();
});

And("Validate the total prices", () => {
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
});
Then("Select the country submit and verify thank you", () => {
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

When("I fill the form details", function (dataTable) {
  const homePage = new HomePage();

  filledName = dataTable.rawTable[1][0];
  homePage.getEditBox().type(filledName);
  homePage.getGender().select(dataTable.rawTable[1][1]);
});
Then("Validate the forms behavior", function () {
  const homePage = new HomePage();

  homePage.getTwoWayDataBinding().should("have.value", filledName);
  homePage.getEditBox().should("have.attr", "minlength", "2");
  homePage.getEntrepreneur().should("be.disabled");
});

And("Select the shop page", () => {
  const homePage = new HomePage();

  homePage.getShopTab().click();
});
