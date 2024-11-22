import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productsSlice';
import FilterPanel from '../pages/pageWithFilter/FilterPanel';
import ProductCard from '../components/cards/ProductCard';
import '../styles/pages/productsPage.css';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { items = [], status, error } = useSelector((state) => state.products);

  const [filters, setFilters] = useState({
    category: '',
    style: '',
    color: '',
    size: '',
    material: '',
    sleeve: '',
    priceRange: [1, 1000],
  });

  const itemsPerPage = 21; // Количество товаров на странице
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts({ filters, limit: itemsPerPage, page: currentPage }));
  }, [dispatch, filters, currentPage]);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div className="products-page">
      {/* Секция фильтров */}
      <FilterPanel filters={filters} setFilters={setFilters} />

      {/* Секция карточек товаров */}
      <div className="product-list">
        {status === 'loading' ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : items.length > 0 ? (
          items.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p>No products found</p>
        )}
      </div>

      {/* Пагинация */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;