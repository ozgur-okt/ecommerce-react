import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBrands, setBrandOption } from '../redux/actions/productActions'
import '../styles/components/FilterBrand.css'

const FilterBrand = () => {
  const dispatch = useDispatch()
  const brands = useSelector((state) => state.products.brands) || []

  const [selectedBrand, setSelectedBrand] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    dispatch(setBrandOption(selectedBrand))
  }, [selectedBrand, dispatch])

  useEffect(() => {
    dispatch(fetchBrands())
  }, [dispatch])

  const brandSelect = (brand) => {
    if (selectedBrand === brand) {
      setSelectedBrand('')
    } else {
      setSelectedBrand(brand)
    }
  }

  const searchedBrands = brands.filter((brand) =>
    brand.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <h2 className="brand-title">Brand</h2>
      <div className="brands">
        <input
          type="text"
          placeholder="Search brands..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="brand-search"
        />
        <div className="brand-options-box">
          {(searchedBrands || []).map((brand) => (
            <div key={brand} className="brand-options">
              <input
                type="checkbox"
                id={brand}
                name="brand"
                value={brand}
                checked={selectedBrand === brand}
                onChange={() => brandSelect(brand)}
              />
              <label htmlFor={brand} className="brand-label">
                {brand}
              </label>
            </div>
          ))}
          {(searchedBrands || []).length === 0 && <p>No brand found...</p>}
        </div>
      </div>
    </>
  )
}
export default FilterBrand