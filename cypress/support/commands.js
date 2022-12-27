// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearAllLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)
    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type(password)        
    cy.get('input[value="Sign in"]').click()
})

Cypress.Commands.add('payBill', (amount, date, description) =>{
    cy.get('a[href="/bank/redirect.html?url=pay-bills.html"]').click()

    cy.get('input[id="sp_amount"]').clear()
    cy.get('input[id="sp_amount"]').type(amount)

    cy.get('input[id="sp_date"]').click()
    cy.get('input[id="sp_date"]').type(date)

    cy.get('input[id="sp_description"]').click('right')
    cy.get('input[id="sp_description"]').type(description)

    cy.get('input[type="submit"]').click()

    cy.get('span[title="$ 1000 payed to payee sprint"]').should('have.text','The payment was successfully submitted.')
})