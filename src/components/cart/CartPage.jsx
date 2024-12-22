import React from "react";
import { useSelector } from "react-redux";
import "../../../src/components/cart/CartPage.css"; // Подключаем стили
import CollectionBlock from "../cards/NewCollection";

const CartPage = () => {
  // Получаем товары из состояния корзины
  const cartItems = useSelector((state) => state.cart.items);

  // Считаем общую сумму товаров
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <img src="../IconBasket.svg" alt="Cart" className="empty-cart-icon" />
        <h1 className="empty-cart-title">Your Shopping Cart is empty</h1>
        <p className="empty-cart-description">
          It looks like there’s nothing here yet. But don’t worry! Let’s start
          shopping together.
        </p>
        <p className="border-line"></p>

        <div className="looking-for-something">
          <CollectionBlock
            title="Looking for Something?"
            description="Check out our latest arrivals and bestsellers!"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} руб. x {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">Итого: {total} руб.</p>

      <p className="border-line"></p>

      <div className="looking-for-something">
        <CollectionBlock
          title="Looking for Something?"
          description="Check out our latest arrivals and bestsellers!"
        />
      </div>
    </div>
  );
};

export default CartPage;
