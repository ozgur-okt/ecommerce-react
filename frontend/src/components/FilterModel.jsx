import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchModels, setModelOption } from '../redux/actions/productActions'
import '../styles/components/FilterModel.css'

const FilterModel = () => {
  const dispatch = useDispatch()
  const models = useSelector((state) => state.products.models) || []

  const [selectedModel, setSelectedModel] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    dispatch(setModelOption(selectedModel))
  }, [selectedModel, dispatch])

  useEffect(() => {
    dispatch(fetchModels())
  }, [dispatch])

  const modelSelect = (model) => {
    if (selectedModel === model) {
      setSelectedModel('')
    } else {
      setSelectedModel(model)
    }
  }

  const searchedModels = models.filter((model) =>
    model.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <h2 className="model-title">Model</h2>
      <div className="models">
        <input
          type="text"
          placeholder="Search models..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="model-search"
        />
        <div className="model-options-box">
          {(searchedModels || []).map((model) => (
            <div key={model} className="model-options">
              <input
                type="checkbox"
                id={model}
                name="model"
                value={model}
                checked={selectedModel === model}
                onChange={() => modelSelect(model)}
              />
              <label htmlFor={model} className="model-label">
                {model}
              </label>
            </div>
          ))}
          {(searchedModels || []).length === 0 && <p>No model found...</p>}
        </div>
      </div>
    </>
  )
}
export default FilterModel