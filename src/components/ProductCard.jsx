// системы размеров и моделей одежды
import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price} руб.</p>
      <div>
        <label>Размер:</label>
        <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
          {product.sizes.map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>
      <button>Добавить в корзину</button>
    </div>
  );
};

export default ProductCard;