import React from 'react';
import { useShoppingCartStore } from '../hooks/useShoppingCart';

export default function Buttons() {
  const { increase, decrease, getProducts } = useShoppingCartStore((state) => state);

  return (
    <div>
      <button
        onClick={() => {
          increase();
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          decrease();
        }}
      >
        Decrease
      </button>

      <button
        onClick={() => {
          getProducts();
        }}
      >
        Get Products
      </button>
    </div>
  );
}
