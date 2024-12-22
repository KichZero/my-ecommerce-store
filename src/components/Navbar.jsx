import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux"; // Импортируем useSelector
import "../styles/navbar.css";
import SearchBar from "./SearchBar";
import CartPopup from "./cart/CartPopup";

const Navbar = ({ onCategoryChange = () => {} }) => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isCartVisible, setCartVisible] = useState(false);

  // Получаем товары из Redux
  const cartItems = useSelector((state) => state.cart.items);

  // Считаем общее количество товаров
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Обновляем выбранную категорию
  useEffect(() => {
    if (location.pathname === "/woman") setSelectedCategory("woman");
    else if (location.pathname === "/man") setSelectedCategory("man");
    else setSelectedCategory("");
  }, [location]);

  return (
    <nav className="navbar">
      {/* Левая сторона */}
      <div className="navbar-left">
        <ul className="navbar-categories">
          <li>
            <Link
              to="/"
              onClick={() => {
                onCategoryChange("woman");
                setSelectedCategory("woman");
              }}
              className={selectedCategory === "woman" ? "active" : ""}
            >
              Woman
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                onCategoryChange("man");
                setSelectedCategory("man");
              }}
              className={selectedCategory === "man" ? "active" : ""}
            >
              Men
            </Link>
          </li>
        </ul>
      </div>

      {/* Логотип */}
      <div className="navbar-logo">
        <Link to="/" onClick={() => onCategoryChange("default")}>
          <img src="/UPDATE1.svg" alt="Logo" />
        </Link>
      </div>

      {/* Правая сторона */}
      <div className="navbar-right">
        <ul className="navbar-icons">
          <li>
            <SearchBar />
          </li>
          <li>
            <Link to="/profile">
              <img src="/IconAccount.svg" alt="Profile" />
            </Link>
          </li>
          <li>
            <Link to="/favorite">
              <img src="/IconSaved.svg" alt="Favorites" />
            </Link>
          </li>
          <li
            onMouseEnter={() => setCartVisible(true)}
            onMouseLeave={() => setCartVisible(false)}
            className="cart-container"
          >
            <Link to="/cart">
            <img src="/IconBasket.svg" alt="Cart" className="cart-icon" />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            {isCartVisible && <CartPopup />}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;