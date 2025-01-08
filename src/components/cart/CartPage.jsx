import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice"; // Импортируем экшен для удаления
import CartPopup from "../../components/cart/CartPopup";
import "../../../src/components/cart/CartPage.css";
import CollectionBlock from "../cards/NewCollection";
import removeIcon from "../../../public/material-symbols_close.svg"

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleRemoveItem = (id, size) => {
    dispatch(removeFromCart({ id, size }));
  };

  return (
    <div className="cart-page">
      <CartPopup isVisible={true} isOnCartPage={true} />
      {cartItems.length === 0 ? (
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
      ) : (
        <div className="cart-summary">
          <div className="cart-page-header">
            <h2>Shopping cart</h2>
          </div>
          <div className="cart-page-content">
            <div className="cart-items">
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <li
                    key={`${item.id}-${item.size}`}
                    className="cart-main-item"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image main-cart-img"
                    />
                    <div className="cart-item-details">
                      <p className="cart-item-price main-cart-price">
                         {(item.price * item.quantity).toFixed(2)}$
                      </p>
                      <h3 className="cart-item-name main-cart-name">{item.name}</h3>
                      <div className="property-item">
                        <p className="cart-item-color">{item.color}</p>
                        <p className="cart-item-size">{item.size}</p>
                        <p className="cart-item-quantity">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <div
                      className="remove-item"
                      onClick={() => handleRemoveItem(item.id, item.size)}
                    >
                      <img src={removeIcon} alt="" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="total-block">
              <h1>TOTAL</h1>
              <div className="line"></div>
              <div className="total-item">
                <p className="label">Sub total:</p>
                <p className="amount">{total.toFixed(2)}$</p>
              </div>

              <div className="total-item">
                <p className="label">Delivery:</p>
                <p className="amount">50$</p>
              </div>
              <div className="line"></div>
              <div className="button-buy-now">
                <button className="buy-now">BUY NOW</button>
              </div>
            </div>
          </div>
          <p className="border-line"></p>
          <div className="looking-for-something">
            <CollectionBlock
              title="Looking for Something?"
              description="Check out our latest arrivals and bestsellers!"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;