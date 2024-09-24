import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productsSlice';
import ProductCard from '../components/ProductCard';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedSize, setSelectedSize] = useState('Все');
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 10000]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleSizeChange = (e) => setSelectedSize(e.target.value);
  const handlePriceChange = (e) => setSelectedPriceRange([e.target.value[0], e.target.value[1]]);

  const filteredProducts = items.filter((product) => {
    return (
      (selectedCategory === 'Все' || product.category === selectedCategory) &&
      (selectedSize === 'Все' || product.sizes.includes(selectedSize)) &&
      product.price >= selectedPriceRange[0] &&
      product.price <= selectedPriceRange[1]
    );
  });

  if (status === 'loading') {
    return <p>Загрузка товаров...</p>;
  }

  if (status === 'failed') {
    return <p>Ошибка загрузки товаров: {error}</p>;
  }

  return (
    <div>
      <h1>Каталог товаров</h1>

      {/* Фильтры */}
      <div className="filters">
        <label>Категория:</label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="Все">Все</option>
          <option value="Одежда">Одежда</option>
          <option value="Обувь">Обувь</option>
          <option value="Аксессуары">Аксессуары</option>
        </select>

        <label>Размер:</label>
        <select value={selectedSize} onChange={handleSizeChange}>
          <option value="Все">Все</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>

        <label>Цена:</label>
        <input
          type="range"
          min="0"
          max="10000"
          step="500"
          value={selectedPriceRange}
          onChange={(e) => setSelectedPriceRange([0, e.target.value])}
        />
        <span>{selectedPriceRange[0]} - {selectedPriceRange[1]} руб.</span>
      </div>

      {/* Карточки товаров */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;