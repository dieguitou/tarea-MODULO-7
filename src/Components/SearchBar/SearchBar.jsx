import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm, showInStock, setShowInStock }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={showInStock}
          onChange={(e) => setShowInStock(e.target.checked)}
        />
        Mostrar productos en stock
      </label>
    </div>
  );
};

export default SearchBar;
