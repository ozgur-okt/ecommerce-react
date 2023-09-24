import axios from "axios"
import { BASE_URL } from "../../constants"

const initialState = {
  productsInCart: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_IN_CART_SUCCESS':
      return {
        ...state,
        productsInCart: action.payload,
      }
    case 'SET_PRODUCTS_IN_CART':
      const productToAdd = action.payload
      const existingProductIndex = state.productsInCart.findIndex(
        (p) => p.id === productToAdd.id
      )

      if (existingProductIndex !== -1) {
        const updatedCart = state.productsInCart.map((product, index) => {
          if (index === existingProductIndex) {
            return {
              ...product,
              quantity: product.quantity + 1,
            }
          }
          return product
        })
        axios.post(`${BASE_URL}/api/cart`, updatedCart)
          .catch(err => { console.log(err) })
        return {
          ...state,
          productsInCart: updatedCart,
        }
      } else {
        axios.post(`${BASE_URL}/api/cart`, [...state.productsInCart, { ...productToAdd, quantity: 1 }])
          .catch(err => { console.log(err) })
        return {
          ...state,
          productsInCart: [...state.productsInCart, { ...productToAdd, quantity: 1 }],
        }
      }
    case 'INCREASE_QUANTITY_IN_CART':
      const productIndex = state.productsInCart.findIndex(
        (p) => p.id === action.payload
      )
      console.log(productIndex)
      const updatedCart = state.productsInCart.map((product, index) => {
        if (index === productIndex) {
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        }
        return product
      })
      axios.post(`${BASE_URL}/api/cart`, updatedCart)
        .catch(err => { console.log(err) })
      return {
        ...state,
        productsInCart: updatedCart,
      }
    case 'DECREASE_QUANTITY_IN_CART':
      const productIndex2 = state.productsInCart.findIndex(
        (p) => p.id === action.payload
      )
      const updatedCart2 = state.productsInCart.map((product, index) => {
        if (index === productIndex2 && product.quantity > 0) {
          return {
            ...product,
            quantity: product.quantity - 1,
          }
        }
        return product
      })
      const filteredCart = updatedCart2.filter((product) => product.quantity > 0)

      axios.post(`${BASE_URL}/api/cart`, filteredCart)
        .catch(err => { console.log(err) })
      return {
        ...state,
        productsInCart: filteredCart,
      }
    default:
      return state
  }
}

export default cartReducer
