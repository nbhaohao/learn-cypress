beforeEach(function () {
  cy.fixture("testFramework1").then(function (data) {
    cy.log("beforeEach");
    this.data = data;
  });
});
