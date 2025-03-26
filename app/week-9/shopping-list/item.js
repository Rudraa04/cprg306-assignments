import React from 'react';

export default function Item({ name, quantity, category }) {
    return (
      <li className="py-3 border-b px-2">
        <p className="font-bold text-orange-900 text-2xl">{name}</p>
        <p className="text-green-500">Buy {quantity} in {category}</p>
      </li>
    );
  }
