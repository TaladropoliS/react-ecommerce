import { ReactIcoSm } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'

export function Footer () {
  const { cart } = useCart()
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
    <footer className='container-fluid pt-1 pb-3 bg-black text-center fixed-bottom'>
      <p className='fw-light p-0 m-0'>© 2021 e-commerce <ReactIcoSm /></p>
      <span className='badge border border-primary rounded-pill me-2'>{totalQuantity()}</span>
      <span className='badge border border-primary rounded-pill'>
        $ {totalAmount().toLocaleString('es-cl')}
      </span>
    </footer>
  )
}
