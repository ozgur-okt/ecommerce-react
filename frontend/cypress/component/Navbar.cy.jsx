import React from 'react'
import Navbar from '../../src/components/Navbar'
import { Provider } from 'react-redux'
import store from "../../src/redux/store"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { USER_NAME, ACCOUNT_BALANCE, USER_SURNAME, CURRENCY } from '../../src/constants'

import ProductList from '../../src/pages/ProductList'

describe('Navbar', () => {
  it('renders', () => {
    cy.mount(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    )
    cy.get('.logo-title').should('exist').and('contain', 'Ecommerce')

    cy.get('input[type="text"]').should('exist')

    cy.get('input[type="text"]').type('Test Product')

    cy.get('input[type="text"]').should('have.value', 'Test Product')

    cy.get('input[type="text"]').blur()

    cy.get('input[type="text"]').should('have.value', '')

    cy.get('.icon')
      .eq(0) 
      .should('exist')

    cy.get('.icon')
      .eq(1)
      .should('exist')

    cy.get('.user-info').eq(1).should('exist').and('contain.text', `${USER_NAME} ${USER_SURNAME}`)

    cy.get('.user-info').eq(0).should('exist').and('contain.text', `${ACCOUNT_BALANCE} ${CURRENCY}`)
  })
})