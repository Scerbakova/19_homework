import { createSlice } from '@reduxjs/toolkit';
import { ShopItem } from '../../Data/Products/shopItems';

export const cartReducer = createSlice({
  name: 'cart',
  initialState: {
    cartItems: <ShopItem[]>[],
  },
  reducers: {
    addToCart: (state: { cartItems: ShopItem[] }, action: { payload: { item: ShopItem; count: number } }) => {
      const { cartItems } = state;
      const { id } = action.payload.item;
      const singleItem = cartItems.find((item) => item.id === id);
      if (singleItem?.count) {
        singleItem.count += action.payload.count;
      } else {
        state.cartItems = [...state.cartItems, { ...action.payload.item, count: action.payload.count }];
      }
    },
    increment: ({ cartItems }, { payload }) => {
      const singleItem = cartItems.find((item) => item === payload);
      if (singleItem) {
        singleItem.count += payload.count;
      }
    },
    decrement: ({ cartItems }, { payload }) => {
      const singleItem = cartItems.find((item) => item === payload);
      if (singleItem?.count) {
        singleItem.count -= payload;
        if (singleItem.count <= 0) {
          singleItem.count = 0;
        }
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
