import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left"> {/* Разделы мужской и женский */}
        <ul className="navbar-categories">
          <li>
            <Link to="/products">Woman</Link>
          </li>
          <li>
            <Link to="/products">Men</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-logo"> {/* Логотип */}
        <Link to="/">
          <img src="../UPDATE1.svg" alt="Logo" />
        </Link>
      </div>
        
      <div className="navbar-right"> {/* Иконки поиска, профиля, избранного и корзины */}
        <ul className="navbar-icons">
          <li>
            <Link to="/search">
              <img src="../IconSearch.svg" alt="Search" />
            </Link>
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