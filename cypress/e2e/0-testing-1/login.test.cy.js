/// <reference types="cypress"/>

describe('working with inputs', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
        
    })

    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    })

    it('Should fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    })

    it('should fill checkbox', () => {
        cy.get('#user_remember_me').click()
        
    })
});