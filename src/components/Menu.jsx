// drop down menu with all category

import React from "react";
import "../styles/menu.css";

const Menu = () => {
  return (
    <div className="sub-menu">
      <ul className="menu-items">
        <li className="menu-item">
          <a href="#">New Arrivals</a>
          <div className="dropdown">
            <a href="#">Category 1</a>
            <a href="#">Category 2</a>
            <a href="#">Category 3</a>
          </div>
        </li>
        <li className="menu-item">
          <a href="#">Clothing</a>
          <div className="dropdown">
            <a href="#">T-Shirts</a>
            <a href="#">Jackets</a>
            <a href="#">Pants</a>
          </div>
        </li>
        <li className="menu-item">
          <a href="#">Shoes</a>
          <div className="dropdown">
            <a href="#">Sneakers</a>
            <a href="#">Boots</a>
            <a href="#">Heels</a>
          </div>
        </li>
        <li className="menu-item">
          <a href="#">Accessories</a>
          <div className="dropdown">
            <a href="#">Bags</a>
            <a href="#">Belts</a>
            <a href="#">Hats</a>
          </div>
        </li>
        <li className="menu-item">
          <a href="#">Sale</a>
          <div className="dropdown">
            <a href="#">Discounted Items</a>
          </div>
        </li>
        <li className="menu-item">
          <a href="#">Brands</a>
          <div className="dropdown">
            <a href="#">Brand 1</a>
            <a href="#">Brand 2</a>
          </div>
        </li>
        <li className="menu-item">
          <a href="#">Trends</a>
          <div className="dropdown">
            <a href="#">Trend 1</a>
            <a href="#">Trend 2</a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;