import { useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'

export function Filters ({ maxPrice, categories }) {
  const { filters, setFilters } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  const handleChangeMinPrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }
  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }
  return (
    <div className='container pt-2'>
      <div className='row row-cols-sm-2 justify-content-between'>
        <div className='col-sm-5 col-md-4 mb-2 mb-sm-0 card'>
          <label htmlFor={minPriceFilterId} className='form-label fw-light d-flex justify-content-between'>
            <span className='text-info'>Desde ${filters.minPrice}</span>
            <span className='text-info'>Hasta ${maxPrice}</span>
          </label>
          <input
            type='range' className='form-range' id={minPriceFilterId} min='0' max={maxPrice - 20} step='20'
            onChange={handleChangeMinPrice} value={filters.minPrice}
          />
        </div>
        <div className='col-sm-5 col-md-4 card'>
          <label htmlFor={categoryFilterId} className='form-label fw-light'>Categoría</label>
          <select
            id={categoryFilterId} onChange={handleChangeCategory}
            className='form-select form-select-sm mb-1' aria-label='Small select example'
          >
            <option value='all'>Todas</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
