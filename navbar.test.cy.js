/// <reference types="cypress" />

describe('login and logout', () => {
    beforeEach('openweb', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        
    })
  
    it('Should display online banking content', () => {
      cy.contains('Online Banking').click()
      cy.get('h1').should('contain.text', 'Online Banking')

      cy.contains('Feedback').click()
      cy.get('h3').should('contain.text', 'Feedback')

      cy.contains('Zero Bank').click()
      cy.get('strong').should('contain.text', 'Home')
          

      
    })
    
  
  })