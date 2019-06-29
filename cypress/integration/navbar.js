describe('Navbar', () => {
  before(() => {
    Cypress.config('baseUrl', 'http://localhost:4200');
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('should scrol down to the projects section', () => {
    cy.get('[data-test=navbarItems]').click();

    cy.get('[data-test=projects]').click();

    cy.get('#projects').should('be.visible');
  });

  it('should scrol down to the skills', () => {
    cy.get('[data-test=navbarItems]').click();

    cy.get('[data-test=skills]').click();

    cy.get('#skills').should('be.visible');
  });

  it('should scrol down to the contact section', () => {
    cy.get('[data-test=navbarItems]').click();

    cy.get('[data-test=contact]').click();

    cy.get('#contact').should('be.visible');
  });
});