import React from 'react'

describe('Cart', () => {
  it('renders', () => {
    let cartProducts = [
      {
        "name": "Ford XC90",
        "price": "735.00",
        "id": "3",
        "quantity": 1
      },
      {
        "name": "Rolls Royce Taurus",
        "price": "779.00",
        "id": "4",
        "quantity": 1
      }
    ]

    const calculateTotalPrice = () => {
      let total = 0
      cartProducts.forEach((product) => {
        total += product.price * product.quantity
      })
      return total
    }

    const increaseQuantityInCart = (id) => {
      cartProducts = cartProducts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        }
      })
    }
    const decreaseQuantityInCart = (id) => {
      cartProducts = cartProducts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          }
        }
        if (product.quantity < 1) {
          cartProducts = cartProducts.filter((product) => product.id !== id)
        }
      })
    }

    cy.mount(
      <>
        <div className="cart">
          {cartProducts.length > 0 ?
            cartProducts.map((product) => (
              <div key={product.id}>
                <div className="products">
                  <div className="info">
                    <p className="info-name">{product.name}</p>
                    <p className="info-price">${product.price}</p>
                  </div>
                  <div className="quantity-field">
                    <button
                      className="decrease"
                      onClick={() => decreaseQuantityInCart(product.id)}
                    >
                      -
                    </button>
                    <span className="quantity">
                      {product.quantity}
                    </span>
                    <button
                      className="increase"
                      onClick={() => increaseQuantityInCart(product.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )) :
            <p className="empty">No Products in Cart</p>}
        </div>
        <div className="price-box">
          <h2 className="price-title">
            Total Price:{" "}
            <span className="price-value">
              ${calculateTotalPrice()}
            </span>
          </h2>
          <button className="checkout">
            Checkout
          </button>
        </div>
      </>
    )
    cy.get('.cart').should('exist')

    cy.get('.products').should('exist')

    cy.get('.info-name').should('exist')

    cy.get('.info-price').should('exist')

    cy.get('.quantity-field').should('exist')

    cy.get('.decrease').should('exist')

    cy.get('.quantity').should('exist')

    cy.get('.increase').should('exist')
  })
})


