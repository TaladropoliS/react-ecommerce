import { createContext, useReducer, useState } from 'react'

export const CartContext = createContext()

const initialState = []
const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  if (!actionPayload) return initialState
  const { id } = actionPayload

  switch (actionType) {
    case 'ADD_TO_CART':
      const productInCartIndex = state.findIndex(item => item.id === id)
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      }
      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
    case 'REMOVE_FROM_CART':
      const productIndex = state.findIndex(item => item.id === id)
      if (state[productIndex].quantity > 1) {
        const newState = structuredClone(state)
        newState[productIndex].quantity -= 1
        return newState
      }
      return state.filter(item => item.id !== id)
    case 'CLEAR_CART':
      return initialState
  }
  return state
}

export function CartProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
