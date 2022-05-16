import { createSlice } from '@reduxjs/toolkit';
import { shopItem } from '../../Data/Products/shopItems';

export const cartReducer = createSlice({
  name: 'cart',
  initialState: {
    cartItems: <shopItem[]>[],
    value: 0,
  },
  reducers: {
    addToCart(state, action) {
      state.cartItems = [...state.cartItems, action.payload];
    },
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
      if (state.value <= 0) {
        state.value = 0;
      }
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id,
          );

          state.cartItems = nextCartItems;
        }
        return state;
      });
    },
    clearCart(state, action) {
      state.cartItems = action.payload;
    },
  },
});

export const {
  addToCart, removeFromCart, clearCart, increment, decrement,
} = cartReducer.actions;

export default cartReducer.reducer;
