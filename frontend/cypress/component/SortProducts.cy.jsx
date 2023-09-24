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
  })
})