/// <reference types="cypress"/>

describe('working with inputs', () => {
  beforeEach('openweb', () => {
      cy.visit('https://www.saucedemo.com/')
      
  })

  it('Should try to login', () => {
    cy.fixture("user").then(user => {
        const username = user.username
        const password = user.password

        cy.get('#user-name').clear()
        cy.get('#user-name').type(username)

        cy.get('#password').clear()
        cy.get('#password').type(password)
        
        cy.get('input[id="login-button"]').click()
        cy.wait(3000)


        cy.get('button[id="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('div[id="shopping_cart_container"]').click()
        cy.get('button[id="checkout"]').click()

        cy.get('#first-name').clear()
        cy.get('#first-name').type(user.firstname)

        cy.get('#last-name').clear()
        cy.get('#last-name').type(user.lastname)

        cy.get('#postal-code').clear()
        cy.get('#postal-code').type(user.zippostalcode)

        cy.get('input[id="continue"]').click()

        cy.get('#finish').click()
        
        cy.get('span[class="title"]').should('have.text','Checkout: Complete!')
        cy.get('h2[class="complete-header"]').should('have.text','THANK YOU FOR YOUR ORDER')
       
    })
  })
  

})