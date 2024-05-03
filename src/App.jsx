import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
// import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'

function App () {
  // const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)
  const maxPrice = Math.max(...filteredProducts.map(product => product.price))
  const categories = [...new Set(initialProducts.map(product => product.category))]
  return (
    <>
      <Header maxPrice={maxPrice} categories={categories} />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
