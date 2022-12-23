/// <reference types="cypress" />

describe('my first test', () => {
    it('visit the Kitchen Sink', () => {
       cy.visit ('https://example.cypress.io')
       cy.get('h1').contains('Kitchen Sink')
       cy.contains('type').click()
       cy.url().should('include', '/commands/actions')
       cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')
    });
})