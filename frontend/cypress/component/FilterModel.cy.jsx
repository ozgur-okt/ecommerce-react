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
  })
})