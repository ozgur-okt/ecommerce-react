import React from 'react'
import ProductCard from '../../src/components/ProductCard'
import { Provider } from 'react-redux'
import store from "../../src/redux/store"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductList from '../../src/pages/ProductList'
import ProductDetails from '../../src/pages/ProductDetails'

describe('ProductCard', () => {
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
    }

    cy.mount(
      <Provider store={store}>
        <BrowserRouter>
          <ProductCard product={product} />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path={`/products/${product.id}`} element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    )
    
    cy.get(".product-name").should("contain.text", product.name)

    cy.get(".product-price").should("contain.text", `$${product.price}`)

    cy.get(".image-box img").should("have.attr", "src", product.image)
    
    cy.get("button:contains('Add to Cart')")
      .should("exist")
      .should("be.visible")
      .should("be.enabled")
      .click()

  })
})