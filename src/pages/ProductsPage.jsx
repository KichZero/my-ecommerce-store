import React, { useState } from "react";
import FilterPanel from "../pages/pageWithFilter/FilterPanel";
import ProductCard from "../components/cards/ProductCard";
import "../styles/pages/productsPage.css";
import data from "../redux/fakeAPI.json"; // Ваш JSON
import arrow from "../../public/paginationarrow/Frame.svg";

const ProductPage = () => {
  const [filters, setFilters] = useState({
    category: "",
    style: "",
    color: "",
    size: "",
    material: "",
    sleeve: "",
    priceRange: [1, 1000],
  });

  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Получение данных для текущей страницы
  const paginatedItems = getPaginatedData(data, currentPage, itemsPerPage);

  return (
    <div className="products-page">
      {/* Хлебные крошки */}
      <div className="breadcrumbs">
        <p>Home / Products</p>
      </div>

      {/* Контент с фильтрами и карточками */}
      <div className="content">
        {/* Секция фильтров */}
        <div className="filters-section">
          <FilterPanel filters={filters} setFilters={setFilters} />
        </div>

        {/* Секция карточек товаров */}
        <div className="product-list">
          {paginatedItems.length > 0 ? (
            paginatedItems.map((product) => {
              const imagePath = product.image.startsWith("public/")
                ? product.image.replace("public/", "/")
                : product.image;

              return (
                <ProductCard
                  key={product.id}
                  product={{
                    ...product,
                    image: imagePath,
                  }}
                />
              );
            })
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>

      {/* Пагинация */}
      <div className="pagination">
        <button
          className="arrow arrow-left"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1} // Отключаем стрелку на первой странице
        >
          <img src={arrow} alt="Previous Page" />
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={index + 1 === currentPage ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="arrow arrow-right"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages} // Отключаем стрелку на последней странице
        >
          <img src={arrow} alt="Next Page" />
        </button>
      </div>
    </div>
  );
};

// Функция для разбиения массива на страницы
const getPaginatedData = (data, currentPage, itemsPerPage) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return data.slice(startIndex, endIndex);
};

export default ProductPage;
