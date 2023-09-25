import React, { useState } from "react"
import ProductCard from "../components/ProductCard"
import { useSelector } from 'react-redux'
import Cart from "../components/Cart"
import { ITEMS_PER_PAGE } from "../constants"
import SortProducts from "../components/SortProducts"
import FilterModel from "../components/FilterModel"
import FilterBrand from "../components/FilterBrand"
import "../styles/pages/ProductList.css"

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const products = useSelector((state) => state.products.products) || []
  const modelOption = useSelector((state) => state.products.modelOption) || ''
  const brandOption = useSelector((state) => state.products.brandOption) || ''
  const sortOption = useSelector((state) => state.products.sortOption) || ''
  const searchQuery = useSelector((state) => state.products.searchQuery) || ''

  let filteredProducts = products || []
  let searched = []

  const sort = (products, sortOption) => {
    let sorted = []
    if (sortOption === 'priceLowToHigh') {
      sorted = [...products].sort((a, b) => a.price - b.price)
    } else if (sortOption === 'priceHighToLow') {
      sorted = [...products].sort((a, b) => b.price - a.price)
    } else if (sortOption === 'dateNewToOld') {
      sorted = [...products].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    } else if (sortOption === 'dateOldToNew') {
      sorted = [...products].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    }
    return sorted
  }

  if (searchQuery) {
    products.forEach((product) => {
      if (product.name.toLowerCase().includes(searchQuery.toLowerCase()) && searched.indexOf(product) === -1) {
        searched.push(product)
      }
    })
    filteredProducts = []
    filteredProducts = searched
  }

  let models = []
  let brands = []

  if (modelOption) {
    models = []
    products.forEach((product) => {
      if (product.model === modelOption && models.indexOf(product) === -1) {
        models.push(product)
      }
    })
    if (sortOption) {
      filteredProducts = []
      filteredProducts = sort([...models, ...brands], sortOption)
    } else {
      filteredProducts = []
      filteredProducts = [...models, ...brands]
    }
    if (searchQuery) {
      filteredProducts = []
      filteredProducts = searched
    }
  }

  if (brandOption) {
    brands = []
    products.forEach((product) => {
      if (product.brand === brandOption && brands.indexOf(product) === -1) {
        brands.push(product)
      }
    })
    if (sortOption) {
      filteredProducts = []
      filteredProducts = sort([...models, ...brands], sortOption)
    } else {
      filteredProducts = []
      filteredProducts = [...models, ...brands]
    }
    if (searchQuery) {
      filteredProducts = []
      filteredProducts = searched
    }
  }

  if (!modelOption && !brandOption && sortOption) {
    filteredProducts = []
    filteredProducts = sort(products, sortOption)
    if (searchQuery) {
      filteredProducts = []
      filteredProducts = searched
    }
  }

  const currentDisplayedProducts = [...new Set(filteredProducts)] || []

  const indexOfLastProduct = currentPage * ITEMS_PER_PAGE 
  const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE
  const currentPageProducts = currentDisplayedProducts.slice(indexOfFirstProduct, indexOfLastProduct) || []

  const totalPages = Math.ceil(currentDisplayedProducts.length / ITEMS_PER_PAGE) || 1
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <>
      <div className="product-list">
        <div className="filters">
          <SortProducts />
          <FilterModel />
          <FilterBrand />
        </div>
        <div className="product-cards">
          {(currentDisplayedProducts || []).length === 0 && searchQuery &&
            alert(`No products found with: "${searchQuery}"`)}
          <div className="single-card">
            {(currentPageProducts || []).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
        <div>
          <Cart />
        </div>
      </div>
      <div className="pagination-buttons">
        <button onClick={prevPage} disabled={currentPage === 1}> Previous </button>
        <button onClick={nextPage} disabled={currentPage === totalPages}> Next </button>
      </div>
    </>
  )
}

export default ProductList
