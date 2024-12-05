import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../redux/fakeAPI.json";
import "../../styles/pages/ProductDetailPage.css";
import arrow from "../../../public/paginationarrow/arrowdown.svg";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id, 10));

  const [openTab, setOpenTab] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleThumbnailClick = (img) => {
    document.querySelector(".main-image").src = img;
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const toggleTab = (tab) => {
    setOpenTab(openTab === tab ? null : tab);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const selectSize = (size) => {
    setSelectedSize(size);
    setDropdownOpen(false);
  };

  return (
    <div className="product-detail-page">
      {/* Основной блок */}
      <div className="product-detail-main">
        {/* Левая часть: Изображения */}
        <div className="product-images">
          <img className="main-image" src={product.image} alt={product.title} />
          <div className="thumbnail-gallery">
            {product.galleryImages?.map((img, index) => (
              <img
                key={index}
                className="thumbnail"
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleThumbnailClick(img)}
              />
            ))}
          </div>
        </div>

        {/* Правая часть: Детали товара */}
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-color">
            <strong>Colour:</strong> {product.color || "N/A"}
          </p>

          {/* Выбор размера */}
          <div className="product-size">
            <label htmlFor="size-select">Size:</label>
            <div
              className={`size-dropdown ${isDropdownOpen ? "open" : ""}`}
              onClick={toggleDropdown}
            >
              <div className="size-dropdown-header">
                {selectedSize || "Select size"}
                <img
                  src={arrow}
                  alt="Dropdown Arrow"
                  className={`arrow-icon ${isDropdownOpen ? "rotate" : ""}`}
                />
              </div>
              {isDropdownOpen && (
                <ul className="size-dropdown-list">
                  {product.sizes.map((size, index) => (
                    <li
                      key={index}
                      className="size-option"
                      onClick={() => selectSize(size)}
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <button className="add-to-bag">ADD TO BAG</button>
          <button className="add-to-favorites">♡</button>

          {/* Вкладки */}
          <div className="product-tabs">
            <div
              className="product-tab"
              onClick={() => toggleTab("description")}
            >
              <span>Description</span>
              <img
                className={`arrow-img ${openTab === "description" ? "rotate" : ""}`}
                src={arrow}
                alt="Dropdown Arrow"
              />
            </div>
            {openTab === "description" && (
              <div className="dropdown-content">
                <p>{product.description || "No description available."}</p>
              </div>
            )}

            <div className="product-tab" onClick={() => toggleTab("delivery")}>
              <span>Delivery Conditions</span>
              <img
                className={`arrow-img ${openTab === "delivery" ? "rotate" : ""}`}
                src={arrow}
                alt="Dropdown Arrow"
              />
            </div>
            {openTab === "delivery" && (
              <div className="dropdown-content">
                <p>Details about delivery...</p>
              </div>
            )}

            <div className="product-tab" onClick={() => toggleTab("payment")}>
              <span>Payment Methods</span>
              <img
                className={`arrow-img ${openTab === "payment" ? "rotate" : ""}`}
                src={arrow}
                alt="Dropdown Arrow"
              />
            </div>
            {openTab === "payment" && (
              <div className="dropdown-content">
                <p>Accepted payment methods...</p>
              </div>
            )}

            <div className="product-tab" onClick={() => toggleTab("care")}>
              <span>Care Instructions</span>
              <img
                className={`arrow-img ${openTab === "care" ? "rotate" : ""}`}
                src={arrow}
                alt="Dropdown Arrow"
              />
            </div>
            {openTab === "care" && (
              <div className="dropdown-content">
                <p>Instructions on how to care for this product...</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Секции внизу */}
      <div className="suggestions">
        <h2>You Might Also Like</h2>
        <div className="suggested-products">
          {data.slice(0, 4).map((item) => (
            <Link
              to={`/products/${item.id}`}
              key={item.id}
              className="suggested-product-card"
              onClick={handleLinkClick}
            >
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <p>${item.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="recommendations">
        <h2>Recommended Products</h2>
        <div className="recommended-products">
          {data.slice(4, 8).map((item) => (
            <Link
              to={`/products/${item.id}`}
              key={item.id}
              className="recommended-product-card"
              onClick={handleLinkClick} // Добавляем обработчик клика
            >
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <p>${item.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;