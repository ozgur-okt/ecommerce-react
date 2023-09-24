import React from 'react'
import Navbar from '../../src/components/Navbar'
import { Provider } from 'react-redux'
import store from "../../src/redux/store"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
  })
})