/// <reference types="cypress" />

describe('login and logout', () => {
    beforeEach('openweb', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        
    })
  
    it('Should try to login', () => {
      cy.fixture("zero").then(zero => {
          const username = zero.username
          const password = zero.password
          
  
          cy.login(username, password)

          cy.logout()
          

      })
    })
    
  
  })