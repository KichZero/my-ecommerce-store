import React, { useState } from "react";
import "../../styles/pages/SortingPanel.css";
import arrow from "../../../public/paginationarrow/arrowdown.svg";

const SortingPanel = ({ onSortChange }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMenuToggle = (category) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  const handleSortChange = (category, value) => {
    setOpenDropdown(null); // Закрываем меню после выбора
    onSortChange(category, value);
  };

  const getDropdownOptions = (category) => {
    switch (category) {
      case "Popularity and Ratings":
        return [
          { label: "Filtering by Popularity", value: "popularity" },
          { label: "Filtering by Rating", value: "rating" },
        ];
      case "New Arrivals and Release Date":
        return [
          { label: "Filtering by New Arrivals", value: "newArrivals" },
          { label: "Filtering by Release Date", value: "releaseDate" },
        ];
      case "Brands and Collections":
        return [
          { label: "Filtering by Brands", value: "brands" },
          { label: "Filtering by Collections", value: "collections" },
        ];
      case "Price":
        return [
          { label: "Low to High", value: "lowToHigh" },
          { label: "High to Low", value: "highToLow" },
          { label: "Under $25", value: "under25" },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="sorting-panel">
      {["Popularity and Ratings", "New Arrivals and Release Date", "Brands and Collections", "Price"].map(
        (category, index) => (
          <div key={index} className="sorting-item">
            <div className="sort-header" onClick={() => handleMenuToggle(category)}>
              <span className="sort-title">{`By ${category}`}</span>
              <img
                className={`arrow-icon ${openDropdown === category ? "rotate" : ""}`}
                src={arrow}
                alt="Dropdown Arrow"
              />
            </div>

            {openDropdown === category && (
              <div className="dropdown-options">
                {getDropdownOptions(category).map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className="dropdown-option"
                    onClick={() => handleSortChange(category, option.value)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default SortingPanel;