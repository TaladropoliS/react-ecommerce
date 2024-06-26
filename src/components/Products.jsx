import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import './Products.css'
import { useCart } from '../hooks/useCart.js'

export function Products ({ products }) {
  const { addToCart, removeFromCart, cart } = useCart()
  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }
  return (
    <section className='container-fluid py-3 pb-5 text-center'>
      <div className='row g-3 gy-5 row-cols-2 row-cols-sm-3 row-cols-md-4 pb-5 justify-content-center'>
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product)
          return (
            <div className='col' key={product.id}>
              <div className='card h-100'>
                <img
                  src={product.thumbnail} alt={product.name}
                  className='product-img card-img-top img-fluid'
                />
                <div className='card-body'>
                  <h6 className=''>{product.title}</h6>
                  <h6 className='fw-normal'>{product.category}</h6>
                  <p>$ {product.price.toLocaleString('es-cl')}</p>
                  <a href='' />
                </div>
                <div className='card-footer text-center'>
                  <button onClick={() => addToCart(product)} className='btn btn-sm btn-primary me-2'>
                    <AddToCartIcon />
                  </button>
                  {isProductInCart
                    ? (
                      <button
                        onClick={() => removeFromCart(product)}
                        className='btn btn-sm btn-danger'
                      >
                        <RemoveFromCartIcon />
                      </button>
                      )
                    : (
                      <button className='btn btn-sm btn-outline-secondary' disabled>
                        <RemoveFromCartIcon />
                      </button>
                      )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
