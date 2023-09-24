import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSortOption } from '../redux/actions/productActions'
import '../styles/components/SortProducts.css'

const SortProducts = () => {
  const dispatch = useDispatch()

  const [sortSelected, setSortSelected] = useState(null);
  const [sortOptions, setSortOptions] = useState({
    priceLowToHigh: false,
    priceHighToLow: false,
    dateNewToOld: false,
    dateOldToNew: false,
  })

  const sortingOptionChange = (option) => {
    const updatedSortOptions = {};
    if (sortSelected === option) {
      setSortSelected(null)
      Object.keys(sortOptions).forEach(key => {
        updatedSortOptions[key] = false;
      });
      dispatch(setSortOption(null))
    }
    else {
      setSortSelected(option)
      Object.keys(sortOptions).forEach(key => {
        updatedSortOptions[key] = key === option;
      });
      dispatch(setSortOption(option))
    }
    setSortOptions(updatedSortOptions);
  }

  return (
    <>
      <h2 className="sort-title">Sort By</h2>
      <div className="sorts">
        <div className="sort-option">
          <input
            type="checkbox"
            id="dateOldToNew"
            checked={sortSelected === 'dateOldToNew'}
            onChange={() => sortingOptionChange("dateOldToNew")}
          />
          <label htmlFor="dateOldToNew" className="sort-option-label">
            Old to New
          </label>
        </div>
        <div className="sort-option">
          <input
            type="checkbox"
            id="dateNewToOld"
            checked={sortSelected === 'dateNewToOld'}
            onChange={() => sortingOptionChange("dateNewToOld")}
          />
          <label htmlFor="dateNewToOld" className="sort-option-label">
            New to Old
          </label>
        </div>

        <div className="sort-option">
          <input
            type="checkbox"
            id="priceHighToLow"
            checked={sortSelected === 'priceHighToLow'}
            onChange={() => sortingOptionChange("priceHighToLow")}
          />
          <label htmlFor="priceHighToLow" className="sort-option-label">
            Price high to low
          </label>
        </div>
        <div className="sort-option">
          <input
            type="checkbox"
            id="priceLowToHigh"
            checked={sortSelected === 'priceLowToHigh'}
            onChange={() => sortingOptionChange("priceLowToHigh")}
          />
          <label htmlFor="priceLowToHigh" className="sort-option-label">
            Price low to high
          </label>
        </div>
      </div>
    </>
  )
}
export default SortProducts