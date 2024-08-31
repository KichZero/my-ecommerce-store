import React from 'react';
import '../styles/footer.css'; // Подключение стилей

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Магазин. Все права защищены.</p>
      <div className="footer-links">
        <a href="/privacy">Политика конфиденциальности</a>
        <a href="/terms">Условия использования</a>
      </div>
    </footer>
  );
};

export default Footer;