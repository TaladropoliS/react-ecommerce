import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    // verifica si hay productos en el carrito
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }
    // si el producto no está en el carrito
    return setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const removeFromCart = (product) => {
    // verifica si hay productos en el carrito
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity -= 1
      if (newCart[productInCartIndex].quantity === 0) {
        const newCart = cart.filter((item) => item.id !== product.id)
        return setCart(newCart)
      }
      return setCart(newCart)
    }
  }

  //   const newCart = cart.filter((item) => item.id !== product.id)
  //   setCart(newCart)
  // }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
