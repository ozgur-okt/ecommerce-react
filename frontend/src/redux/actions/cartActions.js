import { BASE_URL } from "../../constants"

export const fetchProductsInCart = () => { 
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/api/cart`)
      const data = await response.json()
      dispatch({ type: 'FETCH_PRODUCTS_IN_CART_SUCCESS', payload: data })
    } catch (error) {
      dispatch({ type: 'FETCH_PRODUCTS_IN_CART_FAILURE', error })
    }
  }
}

export const setProductsInCart = (product) => {
  return { type: 'SET_PRODUCTS_IN_CART', payload: product }
}

export const increaseQuantityInCart = (productId) => { 
  return { type: 'INCREASE_QUANTITY_IN_CART', payload: productId }
}

export const decreaseQuantityInCart = (productId) => { 
  return { type: 'DECREASE_QUANTITY_IN_CART', payload: productId }
}