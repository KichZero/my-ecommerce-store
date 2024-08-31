import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productsSlice';
import ProductCard from '../components/ProductCard';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Загрузка товаров...</p>;
  }

  if (status === 'failed') {
    return <p>Ошибка загрузки товаров: {error}</p>;
  }

  return (
    <div>
      <h1>Каталог товаров</h1>
      <div className="product-list">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;