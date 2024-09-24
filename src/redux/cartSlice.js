// features/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id && i.size === item.size);

      if (existingItem) {
        existingItem.quantity += 1;  // Увеличиваем количество, если товар уже в корзине
      } else {
        state.items.push({ ...item, quantity: 1 });  // Добавляем товар в корзину с количеством 1
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;