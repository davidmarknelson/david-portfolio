describe('Projects', () => {
  before(() => {
    Cypress.config('baseUrl', 'http://localhost:4200');
  });

  beforeEach(() => {
    cy.visit('/');
  });

  // Portfolio modals
  it('should open a modal of the portfolio 1 picture when clicked', () => {
    cy.get('[data-test=portfolio1Figure]').click();
    cy.get('[data-test=portfolio1Modal]').should('be.visible');
  });

  it('should close the portfolio 1 picture modal when the x is clicked', () => {
    cy.get('[data-test=portfolio1Figure]').click();
    cy.get('[data-test=portfolio1ModalX]').click();
    cy.get('[data-test=portfolio1Modal]').should('not.be.visible');
  });

  it('should open a modal of the portfolio 2 picture when clicked', () => {
    cy.get('[data-test=portfolio2Figure]').click();
    cy.get('[data-test=portfolio2Modal]').should('be.visible');
  });

  it('should close the portfolio 2 picture modal when the x is clicked', () => {
    cy.get('[data-test=portfolio2Figure]').click();
    cy.get('[data-test=portfolio2ModalX]').click();
    cy.get('[data-test=portfolio2Modal]').should('not.be.visible');
  });

  // air koalaty modals
  it('should open a modal of the air 1 picture when clicked', () => {
    cy.get('[data-test=air1Figure]').click();
    cy.get('[data-test=air1Modal]').should('be.visible');
  });

  it('should close the air 1 picture modal when the x is clicked', () => {
    cy.get('[data-test=air1Figure]').click();
    cy.get('[data-test=air1ModalX]').click();
    cy.get('[data-test=air1Modal]').should('not.be.visible');
  });

  it('should open a modal of the air 2 picture when clicked', () => {
    cy.get('[data-test=air2Figure]').click();
    cy.get('[data-test=air2Modal]').should('be.visible');
  });

  it('should close the air 2 picture modal when the x is clicked', () => {
    cy.get('[data-test=air2Figure]').click();
    cy.get('[data-test=air2ModalX]').click();
    cy.get('[data-test=air2Modal]').should('not.be.visible');
  });

  it('should open a modal of the air 3 picture when clicked', () => {
    cy.get('[data-test=air3Figure]').click();
    cy.get('[data-test=air3Modal]').should('be.visible');
  });

  it('should close the air 3 picture modal when the x is clicked', () => {
    cy.get('[data-test=air3Figure]').click();
    cy.get('[data-test=air3ModalX]').click();
    cy.get('[data-test=air3Modal]').should('not.be.visible');
  });

  it('should open a modal of the air 4 picture when clicked', () => {
    cy.get('[data-test=air4Figure]').click();
    cy.get('[data-test=air4Modal]').should('be.visible');
  });

  it('should close the air 4 picture modal when the x is clicked', () => {
    cy.get('[data-test=air4Figure]').click();
    cy.get('[data-test=air4ModalX]').click();
    cy.get('[data-test=air4Modal]').should('not.be.visible');
  });

  // poke-survey modals
  it('should open a modal of the poke 1 picture when clicked', () => {
    cy.get('[data-test=poke1Figure]').click();
    cy.get('[data-test=poke1Modal]').should('be.visible');
  });

  it('should close the poke 1 picture modal when the x is clicked', () => {
    cy.get('[data-test=poke1Figure]').click();
    cy.get('[data-test=poke1ModalX]').click();
    cy.get('[data-test=poke1Modal]').should('not.be.visible');
  });

  it('should open a modal of the poke 2 picture when clicked', () => {
    cy.get('[data-test=poke2Figure]').click();
    cy.get('[data-test=poke2Modal]').should('be.visible');
  });

  it('should close the poke 2 picture modal when the x is clicked', () => {
    cy.get('[data-test=poke2Figure]').click();
    cy.get('[data-test=poke2ModalX]').click();
    cy.get('[data-test=poke2Modal]').should('not.be.visible');
  });

  it('should open a modal of the poke 3 picture when clicked', () => {
    cy.get('[data-test=poke3Figure]').click();
    cy.get('[data-test=poke3Modal]').should('be.visible');
  });

  it('should close the poke 3 picture modal when the x is clicked', () => {
    cy.get('[data-test=poke3Figure]').click();
    cy.get('[data-test=poke3ModalX]').click();
    cy.get('[data-test=poke3Modal]').should('not.be.visible');
  });

  it('should open a modal of the poke 4 picture when clicked', () => {
    cy.get('[data-test=poke4Figure]').click();
    cy.get('[data-test=poke4Modal]').should('be.visible');
  });

  it('should close the poke 4 picture modal when the x is clicked', () => {
    cy.get('[data-test=poke4Figure]').click();
    cy.get('[data-test=poke4ModalX]').click();
    cy.get('[data-test=poke4Modal]').should('not.be.visible');
  });
});