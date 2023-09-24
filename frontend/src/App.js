import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Provider, useDispatch } from 'react-redux'
import store from './redux/store'
import ProductList from "./pages/ProductList.jsx"
import ProductDetails from "./pages/ProductDetails.jsx"
import Payment from "./pages/Payment.jsx"
import Navbar from "./components/Navbar.jsx"
import { fetchProducts } from "./redux/actions/productActions"
import { fetchProductsInCart } from "./redux/actions/cartActions"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchProductsInCart());
  }, [])

  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    </Router>
  )
}

export default App
