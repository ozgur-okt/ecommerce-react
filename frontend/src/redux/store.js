import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import productReducer from './reducers/productReducer'
import cartReducer from './reducers/cartReducer'


const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
})

const store = configureStore({reducer: rootReducer}, applyMiddleware(thunkMiddleware))

export default store
