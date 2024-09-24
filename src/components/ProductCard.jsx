import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ProductCard.scss';
import { addToCart } from '../redux/cartSlice'; 

const ProductCard = ({ product }) => {
  // Логируем продукт, чтобы проверить данные
  console.log(product);
  const dispatch = useDispatch(); // Инициализация dispatch
  const [selectedSize, setSelectedSize] = useState(product.sizes && product.sizes.length > 0 ? product.sizes[0] : '');
  const sizes = product.sizes || [];

  const handleAddToCart = () => {
    const productData = {
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image,
      duration: 5000,
    };
  
    // Логируем данные товара в консоль
    console.log("Товар добавлен в корзину:", productData);
  
    // Добавляем товар в корзину
    dispatch(addToCart(productData));
  
    // Показываем уведомление
    toast.success("Товар добавлен в корзину!", {
      autoClose: 2000, // Уведомление исчезнет через 2 секунды
    });
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price} руб.</p>
      <div>
        <label>Размер:</label>
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          {sizes.length > 0 ? (
            sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))
          ) : (
            <option>Нет размеров</option>
          )}
        </select>
      </div>
      <button onClick={handleAddToCart}>Добавить в корзину</button>
    </div>
  );
};

export default ProductCard;