import React from 'react'
import ProductDetails from '../../src/pages/ProductDetails'
import { Provider } from 'react-redux'
import store from "../../src/redux/store"


describe('ProductDetails', () => {
  it('renders', () => {
    cy.mount(
      <Provider store={store}>
        <ProductDetails />
      </Provider>
    )
  })
})