import { useState } from 'react'

export function Filters ({ onChange, maxPrice, categories }) {
  const [minPrice, setMinPrice] = useState(0)
  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value)
    onChange(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }
  const handleChangeCategory = (e) => {
    onChange(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }
  return (
    <div className='container pt-2'>
      <div className='row row-cols-sm-2 justify-content-between'>
        <div className='col-sm-5 col-md-4 mb-2 mb-sm-0 card'>
          <label htmlFor='price' className='form-label fw-light'>Desde: $ {minPrice}</label>
          <input
            type='range' className='form-range' id='price' min='0' max={maxPrice - 100} step='200'
            onChange={handleChangeMinPrice}
          />
        </div>
        <div className='col-sm-5 col-md-4 card'>
          <label htmlFor='category' className='form-label fw-light'>Categoría</label>
          <select
            id='category' onChange={handleChangeCategory}
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
