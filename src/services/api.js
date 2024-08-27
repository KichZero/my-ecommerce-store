
import axios from 'axios';

// Получение базового URL из переменной окружения
const apiUrl = process.env.REACT_APP_API_URL;

// Создание инстанса axios с базовым URL
const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Пример функции для получения списка товаров
export const fetchProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export default api;