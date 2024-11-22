import React from "react";
import "../../styles/pages/filters.css";

const FilterPanel = ({ filters, setFilters }) => {
  const handleFilterChange = (key, value) => {
    setFilters((prev) => {
      // Если значение фильтра уже установлено, сбрасываем его
      if (prev[key] === value) {
        return { ...prev, [key]: "" };
      }
      // Если фильтр не был выбран, выбираем его
      return { ...prev, [key]: value };
    });
  };

  const categories = [
    "All Dresses",
    "Evening Dresses",
    "Cocktail Dresses",
    "Maxi Dresses", 
    "Midi Dresses",
    "Mini Dresses",
    "Sundresses",
    "Work Dresses",
    "Wedding Dresses",
  ];

  const styles = ["Elegant", "Casual", "Retro", "Bohemian", "Office", "Sporty"];

  const colors = [
    "Black",
    "Blue",
    "Red",
    "Orange",
    "Yellow",
    "Lightgreen",
    "Green",
    "#6CCDC5CC",
    "Pink",
    "Purple",
    "Gradient",
    "White",
    "#D9D9D9",
  ];

  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];

  const material = [
    "Cotton",
    "Silk",
    "Wool",
    "Linen",
    "Polyester",
    "Viscose",
    "Synthetic",
    "Denim",
    "Lace",
    "Velvet",
  ];

  const sleeveLength = [
    "Sleeveless",
    "Short Sleeve",
    "Long Sleeve",
    "Three-Quarter Sleeve",
  ];

  const renderFilterOptions = (key, options) => {
    return options.map((option) => (
      <li
        key={option}
        className="filter-item"
        onClick={() => handleFilterChange(key, option)}
      >
        <span
          className={`filter-checkbox ${
            filters[key] === option ? "checked" : ""
          }`}
        ></span>
        {option}
      </li>
    ));
  };

  const renderColorOptions = (key, options) => {
    return options.map((color) => (
      <span
        key={color}
        className={`color-circle ${filters[key] === color ? "selected" : ""}`}
        style={{
          background:
            color === "Gradient"
              ? "linear-gradient(180deg, #FF0000 0%, rgba(255, 89, 0, 0.8) 17.5%, rgba(255, 174, 0, 0.8) 37%, rgba(70, 255, 2, 0.8) 54.5%, rgba(108, 205, 197, 0.8) 66%, rgba(123, 0, 154, 0.8) 81%, rgba(58, 103, 226, 0.8) 96.87%)"
              : color.toLowerCase(),
        }}
        onClick={() => handleFilterChange(key, color)}
      ></span>
    ));
  };

  return (
    <aside className="filters-container">
      <h3>Filters</h3>

      {/* Категории */}
      <div className="filter-group">
        <h4>Category</h4>
        <ul className="filter-options">{renderFilterOptions("category", categories)}</ul>
      </div>

      {/* Стиль */}
      <div className="filter-group">
        <h4>Style</h4>
        <ul className="filter-options">{renderFilterOptions("style", styles)}</ul>
      </div>

      {/* Цвет */}
      <div className="filter-group">
        <h4>Color</h4>
        <div className="color-options">{renderColorOptions("color", colors)}</div>
      </div>

      {/* Размер */}
      <div  id="size-parametr" className="filter-group">
        <h4>Size</h4>
        <ul className="filter-options">{renderFilterOptions("size", sizes)}</ul>
      </div>

      {/* Материал */}
      <div className="filter-group">
        <h4>Material</h4>
        <ul className="filter-options">{renderFilterOptions("material", material)}</ul>
      </div>

      {/* Длина рукава */}
      <div className="filter-group">
        <h4>Sleeve Length</h4>
        <ul className="filter-options">{renderFilterOptions("sleeveLength", sleeveLength)}</ul>
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
            handleFilterChange("priceRange", [1, +e.target.value])
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