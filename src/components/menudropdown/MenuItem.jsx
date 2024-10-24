import React, { useState } from "react";

const MenuItem = ({ title, subCategories }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="menu-item"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="menu-title">{title}</span>
      {isOpen && subCategories && subCategories.length > 0 && (
        <div className="dropdown-menu">
          {subCategories.map((category, index) => (
            <div key={index} className="dropdown-column">
              <span className="category-title">{category.category}</span>
              <ul>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;