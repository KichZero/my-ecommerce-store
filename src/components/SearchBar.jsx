import React, { useState } from "react";
import "../styles/searchBar.css"; // Импорт стилей для строки поиска

const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const toggleSearch = () => {
    setIsActive(!isActive);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    // Пример для автодополнения
    const suggestionList = value ? ['Nike Air Max', 'Nike Air Max Jordan'] : [];
    setSuggestions(suggestionList);
  };

  return (
    <div className={`search-container ${isActive ? 'active' : ''}`}>
      <button className="search-icon" onClick={toggleSearch}>
        <img src="../IconSearch.svg" alt="Search" />
      </button>
      <input
        type="text"
        placeholder="Search..."
        className={`search-input ${isActive ? 'active' : ''}`}
        value={searchText}
        onChange={handleInputChange}
      />
      
      {/* Выпадающий список с результатами поиска */}
      {isActive && searchText && suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="suggestion-item">
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
