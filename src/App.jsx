import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { useState } from 'react'
import { Header } from './components/Header.jsx'

function App () {
  const [products] = useState(initialProducts)
  const maxPrice = Math.max(...initialProducts.map(product => product.price))
  const categories = [...new Set(products.map(product => product.category))]
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
    maxPrice,
    categories
  })
  const filterProducts = (products) => {
    return products.filter(product => {
      return (product.price >= filters.minPrice &&
                (
                  filters.category === 'all' ||
                    product.category === filters.category
                )
      )
    })
  }
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} maxPrice={maxPrice} categories={categories} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
