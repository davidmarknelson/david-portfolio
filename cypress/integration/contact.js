describe('Contact form', () => {
  before(() => {
    Cypress.config('baseUrl', 'http://localhost:4200');
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('should show a success notification when the form is successfully submitted', () => {
    cy
      .get('[type=text]').type('John Doe')
      .get('[type=email]').type('test@example.com')
      .get('textarea').type('Hello, World!')
      .get('form').submit();

    cy
      .get('.success-notification')
      .should('contain', 'Your message was successfully sent!')
  });

  it('should show a specific error notification if the backend does not send an error message with an error', () => {
    cy.server({
      method: 'POST',
      delay: 1000,
      status: 500,
      response: {}
    });

    cy.route('/api/contact');

    cy
      .get('[type=text]').type('John Doe')
      .get('[type=email]').type('test@example.com')
      .get('textarea').type('Hello, World!')
      .get('form').submit();

    cy
      .get('.error-notification')
      .should('contain', 'There was an error. Please try again later.')
  });

  it('should show an error notification from the backend when the form is unsuccessfully submitted', () => {
    cy.server({
      method: 'POST',
      delay: 1000,
      status: 500,
      response: {}
    });

    cy.route('/api/contact', {
      message: 'There was an error sending your message. Please try again later or use the options below.'
    });

    cy
      .get('[type=text]').type('John Doe')
      .get('[type=email]').type('test@example.com')
      .get('textarea').type('Hello, World!')
      .get('form').submit();

    cy
      .get('.error-notification')
      .should('contain', 'There was an error sending your message. Please try again later or use the options below.')
  });
});