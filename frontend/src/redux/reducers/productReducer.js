
const initialState = {
  products: [],
  sortOption: null,
  modelOption: null,
  brandOption: null,
  searchQuery: '',
  models: [],
  brands: [],
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        products: action.payload,
      }
    case 'FETCH_MODELS_SUCCESS':
      return {
        ...state,
        models: action.payload,
      }
    case 'FETCH_BRANDS_SUCCESS':
      return {
        ...state,
        brands: action.payload,
      }
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      }
    case 'SET_SORT_OPTION':
      return {
        ...state,
        sortOption: action.payload,
      }
    case 'SET_MODEL_OPTION':
      return {
        ...state,
        modelOption: action.payload,
      }
    case 'SET_BRAND_OPTION':
      return {
        ...state,
        brandOption: action.payload,
      }
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload,
      }
    default:
      return state
  }
}

export default productReducer
