import React from 'react'
import ProductList from '../../src/pages/ProductList'
import { Provider } from 'react-redux'
import store from "../../src/redux/store"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from '../../src/pages/ProductDetails'


describe('ProductList', () => {
  it('renders', () => {

    const product = {
      createdAt: "2023-07-17T07:21:02.529Z",
      name: "Bentley Focus",
      image: "https://loremflickr.com/640/480/food",
      price: "51.00",
      description: "Quasi adipisci nulla iure.",
      model: "CTS",
      brand: "Lamborghini",
      id: "1"
    };

    cy.mount(
      <Provider store={store}>
        <BrowserRouter>
          <ProductList />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path={`/products/${product.id}`} element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    )
  })
})