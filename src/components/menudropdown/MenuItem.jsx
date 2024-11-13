import React, { useState, useRef} from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ title, subCategories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 50); // Устанавливаем задержку закрытия
  };

  return (
    <div
    className="menu-item"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    aria-expanded={isOpen}
    aria-haspopup="true"
  >
    <span className="menu-title">{title}</span>
    {isOpen && subCategories && subCategories.length > 0 && (
      <div className="dropdown-menu">
        {subCategories.map((category, index) => (
          <div key={index} className="dropdown-column">
            <span className="category-title">{category.category}</span>
            <ul>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link to={`/products?category=${item}`}>{item}</Link>
                </li>
              ))}
              {/* Add a link for New Arrivals */}
              <li>
                <Link to="/products?category=New%20Arrivals">New Arrivals</Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
    )}
  </div>
  );
};

export default MenuItem;