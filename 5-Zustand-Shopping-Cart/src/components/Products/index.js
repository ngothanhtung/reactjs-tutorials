import React from 'react';
import { products } from '../../data/products';
import { useCarts } from '../../hooks/useCarts';

export default function Products() {
  const { add } = useCarts((state) => state);
  return (
    <div className='row'>
      {products.map((p) => {
        return (
          <div key={p.id} className='col col-4 text-center'>
            <strong>{p.name}</strong>
            <img src={p.imageUrl} style={{ width: '100%' }} alt='' />
            <button
              className='btn btn-danger'
              onClick={() => {
                add({ product: p, quantity: 1 });
              }}
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
