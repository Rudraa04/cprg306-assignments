'use client'; 

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1); 

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1); 
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); 
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4">
        <span className="text-xl font-bold w-5 ">{quantity}</span>
      <button onClick={decrement}  disabled={quantity === 1}  className={`px-4 rounded text-black font-bold ${quantity > 1 ? "bg-green-300" : "bg-green-600"}`}>
        -
      </button>
      <button onClick={increment} disabled={quantity === 20}  className="bg-orange-400 px-4 rounded text-white font-bold">
        +
      </button>
    </div>
  );
}