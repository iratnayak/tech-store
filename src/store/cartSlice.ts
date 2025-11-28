import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id: string
  name: string
  price: number
  imageUrl: string
  quantity: number
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((i) => i.id === action.payload.id)
      if (item) {
        item.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer