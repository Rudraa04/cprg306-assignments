import Item from "./item.js";
import { useState } from "react";

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => 
    sortBy === "name" ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
  );

  return (
    <div>
      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>

      <button 
        onClick={() => setSortBy(sortBy === "name" ? "category" : "name")}
        className="bg-green-500 p-3"
      >
        Sort by {sortBy === "name" ? "Category" : "Name"}
      </button>
    </div>
  );
};

export default ItemList;
