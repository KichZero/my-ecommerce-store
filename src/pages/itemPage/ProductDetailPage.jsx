import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../redux/fakeAPI.json";
import "../../styles/pages/ProductDetailPage.css";
import arrow from "../../../public/paginationarrow/arrowdown.svg";
import heartIcon from "../../../public/heart.svg"; 


const ProductDetailPage = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id, 10));
  const [openTab, setOpenTab] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  if (!product) {
    return <p>Product not found</p>;
  }

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

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-main">
        {/* Изображения */}
        <div className="product-images">
          <img className="main-image" src={product.image} alt={product.title} />
          <div className="thumbnail-gallery">
            {product.galleryImages?.map((img, index) => (
              <img
                key={index}
                className="thumbnail"
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() =>
                  (document.querySelector(".main-image").src = img)
                }
              />
            ))}
          </div>
        </div>

        {/* Детали товара */}
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-color">
            <strong>Colour:</strong> {product.color || "N/A"}
          </p>

          {/* Dropdown для размеров */}
          <div className="product-size">
            <label htmlFor="size-select">Size:</label>
            <div
              className={`size-dropdown ${isDropdownOpen ? "open" : ""}`}
              onClick={toggleDropdown}
            >
              <div className="size-dropdown-header">
                <p>{selectedSize || "Select size"}</p>
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

          {/* Кнопки */}
          <div className="buttons-sect">
            <button className="add-to-bag">ADD TO BAG</button>
            <button className="add-to-favorites">
              <img src={heartIcon} alt="Add to favorites" />
            </button>
          </div>

          {/* Вкладки */}
          <div className="product-tabs">
            {["description", "delivery", "payment", "care", "sizeinf"].map(
              (tab, index) => (
                <div key={tab}>
                  <div
                    className={`product-tab ${index === 0 ? "first" : ""}`}
                    onClick={() => toggleTab(tab)}
                  >
                    <span>
                      {tab.charAt(0).toUpperCase() +
                        tab.slice(1).replace("inf", " Info")}
                    </span>
                    <img
                      className={`arrow-img ${openTab === tab ? "rotate" : ""}`}
                      src={arrow}
                      alt="Dropdown Arrow"
                    />
                  </div>
                  <div
                    className={`dropdown-content ${
                      openTab === tab ? "open" : ""
                    }`}
                  >
                    <p>
                      {product[tab] ||
                        `Content for ${tab} is currently unavailable.`}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>


        <div className="the-line"></div>
      {/* Секции внизу */}
      <div className="all-recommend">
        
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
            {data.slice(3, 8).map((item) => (
              <Link
                to={`/products/${item.id}`}
                key={item.id}
                className="recommended-product-card"
                onClick={handleLinkClick}
              >
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <p>${item.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
