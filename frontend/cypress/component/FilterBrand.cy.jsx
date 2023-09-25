import React from 'react'
import FilterBrand from '../../src/components/FilterBrand'
import { Provider } from 'react-redux'
import store from "../../src/redux/store"

describe('FilterBrand', () => {
  it('renders', () => {
    cy.mount(
      <Provider store={store}>
        <FilterBrand />
      </Provider>
    )
    cy.get('.brand-title').should('exist').and('have.text', 'Brand')

    cy.get('.brand-search').should('exist')

    cy.get('.brand-search').should('have.value', '')

    cy.get('.brand-options input[type="checkbox"]').should('exist')

    cy.get('.brand-label').should('exist')

    cy.get('.brand-search').type('Smart')

    cy.get('.brand-search').should('have.value', 'Smart')

    cy.get('.brand-options input[type="checkbox"]').eq(0).check()

    cy.get('.brand-options input[type="checkbox"]').eq(0).should('be.checked')

    cy.get('.brand-search').type('Test')

    cy.contains('No brand found...').should('exist')
  })
})