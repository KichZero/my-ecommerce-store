import React from "react";
import "../../styles/pages/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* Изображение товара */}
      <img className="product-image" src={product.image} alt={product.title} />

      {/* Текстовое описание */}
      <div className="product-details">
        <p className="product-name">{product.title}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;