import React from 'react'
import Navbar from '../../src/components/Navbar'
import { Provider } from 'react-redux'
import store from "../../src/redux/store"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { USER_NAME, ACCOUNT_BALANCE, USER_SURNAME, CURRENCY } from '../../src/constants';

import ProductList from '../../src/pages/ProductList';

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
    cy.get('.logo-title').should('exist').and('contain', 'Ecommerce');
    cy.get('input[type="text"]').should('exist');

    // Type a search query into the input
    cy.get('input[type="text"]').type('Test Product');

    // Assert that the input value is set correctly
    cy.get('input[type="text"]').should('have.value', 'Test Product');

    // Clear the input by blurring it
    cy.get('input[type="text"]').blur();

    // Assert that the input is empty after blurring
    cy.get('input[type="text"]').should('have.value', '');

    cy.get('.icon')
      .eq(0) // Assuming the wallet icon is the first one in the user-info div
      .should('exist')


    // Assert that the user icon exists
    cy.get('.icon')
      .eq(1) // Assuming the user icon is the second one in the user-info div
      .should('exist')

    cy.get('.user-info').eq(1).should('exist').and('contain.text', `${USER_NAME} ${USER_SURNAME}`);

    // Assert that the account balance and currency are displayed correctly using constants
    cy.get('.user-info').eq(0).should('exist').and('contain.text', `${ACCOUNT_BALANCE} ${CURRENCY}`);

  })
})