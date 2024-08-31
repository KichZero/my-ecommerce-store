// На этой странице будет отображаться список товаров, добавленных в корзину.
import React from 'react';

const CartPage = () => {
  // Заглушка для товаров в корзине
  const cartItems = [
    { id: 1, name: 'Товар 1', price: 100, quantity: 2 },
    { id: 2, name: 'Товар 2', price: 200, quantity: 1 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Корзина</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.price} руб. x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Итого: {total} руб.</p>
    </div>
  );
};

export default CartPage;