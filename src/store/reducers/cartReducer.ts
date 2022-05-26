import { createSlice } from '@reduxjs/toolkit';
import shopItems from '../../Data/Products/shopItems';

export const shopReducer = createSlice({
  name: 'shop',
  initialState: {
    items: shopItems,
    total: 0,
    totalPrice: '0',
  },
  reducers: {
    addCount: (state, action) => {
      state.items = state.items.map((i) => {
        if (i.id === action.payload) {
          i.count += 1;
        }
        return i;
      });
    },
    removeCount: (state, action) => {
      state.items = state.items.map((i) => {
        if (i.id === action.payload && i.count !== 0) {
          i.count -= 1;
          if (i.count === 0) {
            i.addedToCart = false;
          }
        }
        return i;
      });
    },
    addToCart: (state, action) => {
      state.items = state.items.map((i) => {
        if (i.id === action.payload && i.count !== 0) {
          i.addedToCart = true;
        }
        return i;
      });
    },
    showTotal(state) {
      const allItemsCounts = state.items.map((item) => item.count);
      state.total = allItemsCounts.reduce((a, b) => a + b);
    },
    removeFromCart(state, action) {
      state.items.map((i) => {
        if (i.id === action.payload) {
          i.addedToCart = false;
          i.count = 0;
        }
        return i;
      });
    },
    clearCart(state) {
      state.items.map((i) => {
        i.addedToCart = false;
        return i;
      });
    },
    clearCount(state) {
      state.items.map((i) => {
        i.count = 0;
        return i;
      });
    },
    showTotalPrice(state) {
      const priceArray = <number[]>[];
      state.items.map((item) => {
        if (item.addedToCart === true && item.count > 0) {
          const price = (item.price * item.count);
          return priceArray.push(price);
        } return priceArray;
      }); state.totalPrice = priceArray.reduce((a, b) => a + b).toFixed(2);
    },
  },
});

export const {
  addCount, removeCount, addToCart, showTotal, removeFromCart, clearCart, showTotalPrice, clearCount,
} = shopReducer.actions;

export default shopReducer.reducer;
