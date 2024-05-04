import { Filters } from './Filters.jsx'
import './Header.css'
import { ReactIco } from './Icons.jsx'

export function Header ({ maxPrice, categories }) {
  return (
    <header className='my-header container-fluid py-3'>
      <h1 className='text-center'>e-commerce<span><ReactIco /></span></h1>
      <Filters maxPrice={maxPrice} categories={categories} />
    </header>
  )
}
