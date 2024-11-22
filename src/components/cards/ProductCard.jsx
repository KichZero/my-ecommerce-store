import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import '../../styles/pages/ProductCard.scss';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, size: selectedSize }));
  };

  return (
    <div className="all-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      
      {/* Защита от ошибок при отсутствии sizes */}
      <select
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
      >
        {(product.sizes || []).map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;