import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import "../../components/cart/CartPopup.css";
import trash from "/public/prime_trash.svg";

const CartPopup = ({ isVisible, onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemoveItem = (id, size) => {
    dispatch(removeFromCart({ id, size }));
  };

  useEffect(() => {
    if (isVisible) {
      const firstFocusableElement = document.querySelector(".cart-popup button");
      firstFocusableElement?.focus();
    }
  }, [isVisible]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isVisible) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isVisible, onClose]);

  const handlePopupClick = (e) => {
    e.stopPropagation(); // Предотвращаем закрытие при клике внутри popup
  };

  return (
    <div
      className={`cart-popup ${isVisible ? "open" : ""}`}
      onClick={handlePopupClick}
    >
      <div className="cart-popup-header">
        <h2>Shopping cart</h2>
      </div>
      <div className="cart-popup-body">
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <ul className="cart-items-list version-cart-page">
            {cartItems.map((item) => (
              <li key={`${item.id}-${item.size}`} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="cart-item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <p className="cart-item-name">{item.name}</p>
                  <div className="cart-item-details-row">
                  <p className="cart-item-color">{item.color}</p>
                    <p className="cart-item-size">{item.size}</p>
                    <p className="cart-item-quantity">Qty: {item.quantity}</p>
                  </div>
                </div>
                <img
                  src={trash}
                  alt="Remove item"
                  className="trash-icon"
                  onClick={() => handleRemoveItem(item.id, item.size)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="cart-popup-footer">
        <div className="total-section">
          <p>Total:</p>
          <p className="total-price">${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;