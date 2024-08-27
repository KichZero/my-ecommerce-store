import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Загружаем товары при монтировании компонента
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Ошибка загрузки товаров:', error);
      }
    };

    loadProducts();
  }, []);

  return (
    <div>
      <h1>Каталог товаров</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;