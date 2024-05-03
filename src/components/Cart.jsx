import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { useId } from 'react'
import './Cart.css'

export function Cart () {
  // const cartCheckboxId = useId()
  return (
    <>
      <button
        className='btn btn-primary' type='button' data-bs-toggle='offcanvas'
        data-bs-target='#offcanvasRight' aria-controls='offcanvasRight'
      >
        <CartIcon />
      </button>

      <div className='offcanvas offcanvas-end' tabIndex='-1' id='offcanvasRight' aria-labelledby='offcanvasRightLabel'>
        <div className='offcanvas-header'>
          <h5 className='offcanvas-title mx-auto' id='offcanvasRightLabel'>
            <CartIcon />
          </h5>
          <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close' />
        </div>
        <div className='offcanvas-body'>
          ...
        </div>
        <ClearCartIcon />
      </div>
      {/* <label className='cart-button' htmlFor={cartCheckboxId}> */}
      {/*  <CartIcon /> */}
      {/* </label> */}
      {/* <input id={cartCheckboxId} type='checkbox' hidden /> */}

      {/* <aside className='cart'> */}
      {/*  <ul> */}
      {/*    <li> */}
      {/*      <img src='https://cdn.dummyjson.com/product-images/2/thumbnail.jpg' alt='Iphone X' /> */}
      {/*      <div className=''> */}
      {/*        <strong>Iphone X</strong> */}
      {/*        <br /> $ 1.200 */}
      {/*      </div> */}
      {/*      <footer> */}
      {/*        <small> */}
      {/*          Cant: 1 */}
      {/*        </small> */}
      {/*        <button className='btn btn-sm btn-outline-primary pt-1'>+</button> */}
      {/*      </footer> */}
      {/*    </li> */}
      {/*  </ul> */}
      {/*  <div className='text-center'> */}
      {/*    <button className='btn btn-outline-light'> */}
      {/*      <ClearCartIcon /> */}
      {/*    </button> */}
      {/*  </div> */}
      {/* </aside> */}
    </>
  )
}
