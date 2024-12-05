import React from "react";
import { useNavigate } from 'react-router-dom';
import "../../styles/pages/ProductCard.css";


const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
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