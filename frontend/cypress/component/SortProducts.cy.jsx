import React from 'react'
import SortProducts from '../../src/components/SortProducts'
import { Provider } from 'react-redux'
import store from "../../src/redux/store"


describe('SortProducts', () => {
  it('renders', () => {
    cy.mount(
      <Provider store={store}>
        <SortProducts />
      </Provider>
    )
    cy.get('.sort-title').should('exist').and('have.text', 'Sort By')

    cy.get('.sort-option input[type="checkbox"]').should('exist').and('not.be.checked')
    
    cy.get('.sort-option-label').should('exist')

    cy.get('#dateOldToNew').check()

    cy.get('#dateOldToNew').should('be.checked')

    cy.get('#priceHighToLow').check()

    cy.get('#priceHighToLow').should('be.checked')

    cy.get('#dateNewToOld').check()

    cy.get('#dateOldToNew').should('not.be.checked')

    cy.get('#priceLowToHigh').should('not.be.checked')

    cy.get('#priceLowToHigh').check()

    cy.get('#priceHighToLow').should('not.be.checked')

    cy.get('#dateNewToOld').should('not.be.checked')
  })
})