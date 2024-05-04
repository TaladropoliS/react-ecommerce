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
    <footer className='container-fluid py-0 pt-2 bg-black text-center fixed-bottom'>
      <p className='fw-light p-0'>© 2021 e-commerce <ReactIcoSm /></p>
      <span className='badge border border-primary rounded-pill'>{totalQuantity()}</span>
      <span className='badge border border-primary rounded-pill'>{totalAmount()}</span>
    </footer>
  )
}
