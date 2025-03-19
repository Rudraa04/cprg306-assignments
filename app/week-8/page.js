"use client";

import { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js"; 
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]); 
  };

  return (
    <main className="text-white ">
      <h1 className="text-5xl text-black font-bold ">Shopping List</h1>
      <ItemList items={items} />
      <NewItem onAddItem={handleAddItem} />
    </main>
  );
}