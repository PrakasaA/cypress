/// <reference types="cypress" />

describe('Searchbox Test', function() {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('money {enter}')
        cy.get('h2').should('contain.text', 'Search Results:')
        cy.get('a').should('contain.text', 'Zero - My Money Map')

    })
    // it('should show search result page', () => {
    //     cy.get('h2').should('contain.text', 'Search Results:')
    //     cy.get('a').should('contain.text', 'Zero - My Money Map')

    // })
})