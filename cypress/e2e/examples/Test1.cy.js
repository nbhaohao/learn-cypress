describe("My First Test Suite", () => {
  it("My FirstTest case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca')
    cy.wait(1000)
    cy.get('.product:visible').should('have.length', 4)
    cy.get('.products').find('.product').should('have.length', 4)

    cy.get('.products').find('.product').each(element => {
      const textVegetable = element.find("h4.product-name").text()
      if (textVegetable.includes("Cashews")) {
        cy.wrap(element).find("button").click()
      }
    })
  })
})
