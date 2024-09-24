import React from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {
  // Получаем товары из состояния корзины
  const cartItems = useSelector((state) => state.cart.items);

  // Считаем общую сумму товаров
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Корзина</h1>
      <ul>
        {cartItems.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price} руб. x {item.quantity}
            </li>
          ))
        )}
      </ul>
      <p>Итого: {total} руб.</p>
    </div>
  );
};

export default CartPage;  