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
  })
})