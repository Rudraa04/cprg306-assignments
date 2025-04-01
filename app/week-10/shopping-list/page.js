"use client";

import { useState, useEffect } from "react";
import { getItems, addItem } from "./shopping-list-service.js";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import { useAuth } from "./auth-context.js";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const { user } = useAuth();

  const loadItems = async () => {
    if (user) {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (user) {
      const addedItem = await addItem(user.uid, newItem);
      setItems([...items, { ...newItem, id: addedItem.id }]);
    }
  };

  return (
    <main className="text-white ">
      <h1 className="text-5xl text-black font-bold ">Shopping List</h1>
      <ItemList items={items} />
      <NewItem onAddItem={handleAddItem} />
    </main>
  );
}