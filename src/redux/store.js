// создает и настраивает хранилище (store) Redux 
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../redux/productsSlice.js';
import cartReducer from '../redux/cartSlice.js';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});