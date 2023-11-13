import React from 'react';
import useShoppingCartStore from '../hooks/useShoppingCartStore';
import numeral from 'numeral';

export default function Total() {
  const { items } = useShoppingCartStore((state: any) => state);

  let total = 0;
  for (const item of items) {
    let sum = (item.product.price * item.quantity * (100 - item.product.discount)) / 100;
    total = total + sum;
  }

  console.log('Total', items);
  return <h1>Total: {numeral(total).format('0,0.00$')}</h1>;
}
