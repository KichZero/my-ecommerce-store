import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "../styles/navbar.css";
import SearchBar from "./SearchBar";

const Navbar = ({ onCategoryChange }) => {
  const location = useLocation(); // Получаем текущий путь
  const [selectedCategory, setSelectedCategory] = useState("");

  // Определяем выделенный раздел в зависимости от текущего пути 
  useEffect(() => {
    if (location.pathname === "/woman") {
      setSelectedCategory("woman");
    } else if (location.pathname === "/man") {
      setSelectedCategory("man");
    } else {
      setSelectedCategory(""); // Если на главной странице
    }
  }, [location]);

  return (
    <nav className="navbar">
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

      <div className="navbar-logo">
        <Link to="/" onClick={() => onCategoryChange("default")}>
          <img src="../UPDATE1.svg" alt="Logo" />
        </Link>
      </div>

      <div className="navbar-right">
        <ul className="navbar-icons">
          <li>
            <SearchBar /> {/* строка поиска */}
          </li>
          <li>
            <Link to="/profile">
              <img src="../IconAccount.svg" alt="Profile" />
            </Link>
          </li>
          <li>
            <Link to="/favorite">
              <img src="../IconSaved.svg" alt="Favorites" />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <img src="../IconBasket.svg" alt="Cart" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
