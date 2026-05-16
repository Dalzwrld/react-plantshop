import React from "react";

function Search({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Type a name to search..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="searchbar"
    />
  );
}

export default Search;