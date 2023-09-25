import React from 'react'
import FilterModel from '../../src/components/FilterModel'
import { Provider } from 'react-redux'
import store from "../../src/redux/store"

describe('FilterModel', () => {
  it('renders', () => {
    cy.mount(
      <Provider store={store}>
        <FilterModel />
      </Provider>
    )
    cy.get('.model-title').should('exist').and('have.text', 'Model')

    cy.get('.model-search').should('exist')

    cy.get('.model-search').should('have.value', '')

    cy.get('.model-options input[type="checkbox"]').should('exist')

    cy.get('.model-label').should('exist')

    cy.get('.model-search').type('CTS')

    cy.get('.model-search').should('have.value', 'CTS')

    cy.get('.model-options input[type="checkbox"]').eq(0).check()

    cy.get('.model-options input[type="checkbox"]').eq(0).should('be.checked')

    cy.get('.model-search').type('Test')

    cy.contains('No model found...').should('exist')
  })
})