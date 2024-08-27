// Где использовать
// 	1.	Сервисы для работы с API: В файлах, где описаны функции для взаимодействия с сервером (src/services/api.js).
// 	2.	Компоненты React: В компонентах, которые загружают данные с сервера, например, страницы каталога или корзины.
// 	3.	Redux-слайсы: Если вы используете Redux для управления состоянием, переменные окружения можно использовать для настройки асинхронных экшенов.
// Использование переменной apiUrl в этих местах помогает сделать код более гибким и позволяет легко изменить базовый URL для всех запросов, просто обновив значение в .env файле.

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

// Асинхронный экшен для загрузки товаров
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get(`${apiUrl}/products`);
  return response.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;