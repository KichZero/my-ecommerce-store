import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Магазин</div>
      <ul className="navbar-links">
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/products">Каталог</Link></li>
        <li><Link to="/cart">Корзина</Link></li>
        <li><Link to="/checkout">Оформление заказа</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;