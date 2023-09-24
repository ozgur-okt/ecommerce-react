import { BASE_URL } from "../../constants"

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/api/products`)
      const data = await response.json()
      dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data })
    } catch (error) {
      dispatch({ type: 'FETCH_PRODUCTS_FAILURE', error })
    }
  }
}

export const fetchModels = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/api/models`)
      const data = await response.json()
      dispatch({ type: 'FETCH_MODELS_SUCCESS', payload: data })
    } catch (error) {
      dispatch({ type: 'FETCH_MODELS_FAILURE', error })
    }
  }
}

export const fetchBrands = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/api/brands`)
      const data = await response.json()
      dispatch({ type: 'FETCH_BRANDS_SUCCESS', payload: data })
    } catch (error) {
      dispatch({ type: 'FETCH_BRANDS_FAILURE', error })
    }
  }
}

export const setProducts = (products) => {
  return { type: 'SET_PRODUCTS', payload: products }
}

export const setSortOption = (sortOption) => {
  return { type: 'SET_SORT_OPTION', payload: sortOption }
}

export const setModelOption = (modelOption) => {
  return { type: 'SET_MODEL_OPTION', payload: modelOption }
}

export const setBrandOption = (brandOption) => {
  return { type: 'SET_BRAND_OPTION', payload: brandOption }
}

export const setSearchQuery = (searchQuery) => {
  return { type: 'SET_SEARCH_QUERY', payload: searchQuery }
}