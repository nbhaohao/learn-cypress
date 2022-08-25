class HomePage {
  getEditBox() {
    return cy.get('.form-group input[name="name"]');
  }

  getTwoWayDataBinding() {
    return cy.get('input[name="name"]').eq(1);
  }

  getGender() {
    return cy.get("#exampleFormControlSelect1");
  }

  getEntrepreneur() {
    return cy.get("#inlineRadio3");
  }

  getShopTab() {
    return cy.get(".nav-link").contains("Shop");
  }
}

export default HomePage;
