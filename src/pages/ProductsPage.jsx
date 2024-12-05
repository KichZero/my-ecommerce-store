import React, { useState } from "react";
import FilterPanel from "../pages/pageWithFilter/FilterPanel";
import ProductCard from "../components/cards/ProductCard";
import Breadcrumbs from "../pages/pageWithFilter/Breadcrumbs.jsx";
import SortingPanel from "../pages/pageWithFilter/SortingPanel.jsx";

import "../styles/pages/productsPage.css";
import arrow from "../../public/paginationarrow/Frame.svg";
import data from "../redux/fakeAPI.json";

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

  const [breadcrumbs, setBreadcrumbs] = useState([
    "Home  /   Women  / Dresses",
  ]);

  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const updateBreadcrumbs = (newCrumb) => {
    setBreadcrumbs((prevBreadcrumbs) => {
      if (
        Array.isArray(prevBreadcrumbs) &&
        !prevBreadcrumbs.includes(newCrumb)
      ) {
        return [...prevBreadcrumbs, newCrumb];
      }
      return prevBreadcrumbs;
    });
  };

  const handleCategoryClick = (category) => {
    setFilters({ ...filters, category });
    updateBreadcrumbs(category);
  };

  const handleBreadcrumbClick = (index) => {
    setBreadcrumbs((prevBreadcrumbs) => prevBreadcrumbs.slice(0, index + 1));
  };

  const paginatedItems = getPaginatedData(data, currentPage, itemsPerPage);

  return (
    <div className="products-page">
      {/* Хлебные крошки */}
      <div className="breadcrumbs">
        <Breadcrumbs
          breadcrumbs={breadcrumbs || []}
          onBreadcrumbClick={handleBreadcrumbClick}
        />
      </div>

      

      {/* Основной контент */}
      <div className="content">
        {/* Фильтры */}
        <div className="filters-section">
          <FilterPanel filters={filters} setFilters={setFilters} />
        </div>

        <div className="right-content">
          {/* Заголовок */}
      <div className="main-title">
        <p>Dresses</p>
      </div>
          {/* Сортировка */}
          <div className="sorting-panel">
            <SortingPanel />
          </div>

          {/* Сетка карточек */}
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

          {/* Пагинация */}
          <div className="pagination">
            <button
              className="arrow arrow-left"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
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
              disabled={currentPage === totalPages}
            >
              <img src={arrow} alt="Next Page" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const getPaginatedData = (data, currentPage, itemsPerPage) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return data.slice(startIndex, endIndex);
};

export default ProductPage;