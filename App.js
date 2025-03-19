import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./App.css";

const itemsList = [
  { id: 1, name: "Lost Wallet" },
  { id: 2, name: "Found Keys" },
  { id: 3, name: "Lost Phone" },
  { id: 4, name: "Found Laptop" },
];

function App() {
  const [filteredItems, setFilteredItems] = useState(itemsList);

  const handleSearch = (query) => {
    const filtered = itemsList.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="App">
      <nav>
        <h2>Lost & Found</h2>
        <SearchBar onSearch={handleSearch} />
      </nav>

      <div className="items">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="item">
              {item.name}
            </div>
          ))
        ) : (
          <p>No matching items found.</p>
        )}
      </div>
    </div>
  );
}

export default App;