import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value); // Call parent function to filter items
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search items..."
        value={query}
        onChange={handleSearch}
      />
      <button>🔍</button>
    </div>
  );
};

export default SearchBar;