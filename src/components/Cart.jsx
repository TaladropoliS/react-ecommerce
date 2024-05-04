import { CartIcon, ClearCartIcon } from './Icons.jsx'
import './Cart.css'
import { useCart } from '../hooks/useCart.js'

function CartItem ({ thumbnail, price, title, quantity, addToCart, removeFromCart }) {
  return (
    <div className='card pb-2 mb-3'>
      <img
        style={{ maxWidth: '180px', height: 'auto' }}
        className='rounded img-fluid mx-auto pb-2'
        src={thumbnail} alt={title}
      />
      <div className='text-center'>
        <strong>{title}</strong>
        <br /> $ {price}
      </div>
      <footer className='text-center'>
        <small className='me-3'>
          Cantidad: <b>{quantity}</b>
        </small>
        <button onClick={addToCart} className='btn btn-sm btn-outline-primary pt-0 px-3 me-2'>+</button>
        <button onClick={removeFromCart} className='btn btn-sm btn-outline-primary pt-0 px-3'>-</button>
      </footer>
    </div>
  )
}

export function Cart () {
  const { cart, addToCart, removeFromCart, clearCart } = useCart()
  const totalQuantity = () => {
    let total = 0
    cart.forEach(product => {
      total += product.quantity
    })
    return total
  }
  const totalAmount = () => {
    let total = 0
    cart.forEach(product => {
      total += product.price * product.quantity
    })
    return total
  }
  return (
    <>
      <button
        className='cart-button' type='button' data-bs-toggle='offcanvas'
        data-bs-target='#offcanvasRight' aria-controls='offcanvasRight'
      >
        <CartIcon />
      </button>
      <div
        className='offcanvas offcanvas-end bg-dark text-secondary' tabIndex='-1' id='offcanvasRight'
        aria-labelledby='offcanvasRightLabel'
      >
        <div className='offcanvas-header'>
          <h5 className='offcanvas-title ms-auto pe-2 text-primary' id='offcanvasRightLabel'>
            <CartIcon />
          </h5>
          <div className='me-auto pt-1'>
            <span className='rounded-pill me-2'>{totalQuantity()}</span>
            <span className='badge border border-secondary rounded-pill'>
              $ {totalAmount().toLocaleString('es-cl')}
            </span>
          </div>
          <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close' />
        </div>
        <div className='offcanvas-body border-top border-bottom border-secondary shadow p-3 rounded'>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              {...product}
            />
          ))}
        </div>
        <div className='px-5 py-2 bg-black text-end text-secondary'>
          Vaciar
          <button
            onClick={clearCart} className='ms-2 py-2 btn btn-sm btn-outline-secondary'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasRight' aria-controls='offcanvasRight'
          >
            <ClearCartIcon />
          </button>
        </div>
      </div>
    </>
  )
}
