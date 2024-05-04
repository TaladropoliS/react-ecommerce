export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

// update localStorage with state for cart
export const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  if (!actionPayload) return cartInitialState
  const { id } = actionPayload

  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const productInCartIndex = state.findIndex(item => item.id === id)
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        updateLocalStorage(newState)
        return newState
      }

      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
      updateLocalStorage(newState)
      return newState
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const productIndex = state.findIndex(item => item.id === id)
      if (state[productIndex].quantity > 1) {
        const newState = structuredClone(state)
        newState[productIndex].quantity -= 1
        updateLocalStorage(state)
        return newState
      } else {
        const newState = state.filter(item => item.id !== id)
        updateLocalStorage(newState)
        return newState
      }
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      const newState = []
      updateLocalStorage(newState)
      return newState
    }
  }
  return state
}
