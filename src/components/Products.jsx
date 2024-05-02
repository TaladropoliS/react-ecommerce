import { AddToCartIcon } from './Icons.jsx'
import './Products.css'

export function Products ({ products }) {
  return (
    <section className='container-fluid py-3 text-center'>
      <div className='row g-3 gy-5 row-cols-2 row-cols-sm-3 row-cols-md-4 justify-content-center'>
        {products.map((product) => (
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
              </div>
              <div className='card-footer text-center'>
                <button className='btn btn-sm btn-primary'>
                  <AddToCartIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
