import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import SearchBar from "./SearchBar";

const Navbar = ({ onCategoryChange }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="navbar-categories">
          <li>
            <Link to="/" onClick={() => onCategoryChange("woman")}>Woman</Link>
          </li>
          <li>
            <Link to="/" onClick={() => onCategoryChange("man")}>Men</Link>
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