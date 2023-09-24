import React from 'react'
import Cart from '../../src/components/Cart'
import { Provider } from 'react-redux'
import store from "../../src/redux/store"

describe('Cart', () => {
  it('renders', () => {
    cy.mount(
      <Provider store={store}>
        <Cart />
      </Provider>
    )
  })
})