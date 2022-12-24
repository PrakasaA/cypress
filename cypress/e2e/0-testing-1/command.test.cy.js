/// <reference types="cypress"/>

describe('working with inputs', () => {
    beforeEach('openweb', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        
    })
  
    it('Should try to login', () => {
      cy.fixture("zero").then(zero => {
          const username = zero.username
          const password = zero.password
          const amount = zero.amount
          const date = zero.date
          const description = zero.description
  
          cy.login(username, password)
          cy.payBill(amount, date, description)

      })
    })
    
  
  })