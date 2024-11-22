import React from 'react';
import '../../styles/pages/filters.css';

const FilterPanel = ({ filters, setFilters }) => {
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const categories = [
    'All Dresses',
    'Evening Dresses',
    'Cocktail Dresses',
    'Maxi Dresses',
    'Midi Dresses',
    'Mini Dresses',
  ];

  const styles = ['Elegant', 'Casual', 'Retro', 'Bohemian', 'Office', 'Sporty'];

  const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White'];

  const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL'];

  return (
    <aside className="filters-container">
      <h3>Filters</h3>

      {/* Категории */}
      <div className="filter-group">
        <h4>Category</h4>
        <ul className="filter-options">
          {categories.map((category) => (
            <li
              key={category}
              className={`filter-item ${
                filters.category === category ? 'active' : ''
              }`}
              onClick={() => handleFilterChange('category', category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Стиль */}
      <div className="filter-group">
        <h4>Style</h4>
        <ul className="filter-options">
          {styles.map((style) => (
            <li
              key={style}
              className={`filter-item ${
                filters.style === style ? 'active' : ''
              }`}
              onClick={() => handleFilterChange('style', style)}
            >
              {style}
            </li>
          ))}
        </ul>
      </div>

      {/* Цвет */}
      <div className="filter-group">
        <h4>Color</h4>
        <div className="color-options">
          {colors.map((color) => (
            <span
              key={color}
              className={`color-circle ${
                filters.color === color ? 'selected' : ''
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
              onClick={() => handleFilterChange('color', color)}
            ></span>
          ))}
        </div>
      </div>

      {/* Размер */}
      <div className="filter-group">
        <h4>Size</h4>
        <ul className="filter-options">
          {sizes.map((size) => (
            <li
              key={size}
              className={`filter-item ${
                filters.size === size ? 'active' : ''
              }`}
              onClick={() => handleFilterChange('size', size)}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>

      {/* Ползунок цен */}
      <div className="filter-group">
        <h4>Price</h4>
        <input
          type="range"
          min="1"
          max="1000"
          value={filters.priceRange[1]}
          onChange={(e) =>
            handleFilterChange('priceRange', [1, +e.target.value])
          }
        />
        <p>
          ${filters.priceRange[0]} - ${filters.priceRange[1]}
        </p>
      </div>
    </aside>
  );
};

export default FilterPanel;