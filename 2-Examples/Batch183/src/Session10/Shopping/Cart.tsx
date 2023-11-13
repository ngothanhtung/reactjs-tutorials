import React from 'react';
import useShoppingCartStore from '../hooks/useShoppingCartStore';
import numeral from 'numeral';

type Props = {};

export default function Cart({}: Props) {
  const { items, remove, decrease, increase } = useShoppingCartStore((state: any) => state);

  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>price</th>
          <th>discount</th>
          <th>quantity</th>
          <th>total</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item: any) => {
          return (
            <tr key={item.product.id}>
              <td>{item.product.id}</td>
              <td>{item.product.name}</td>
              <td>{item.product.price}</td>
              <td>{item.product.discount}</td>
              <td>
                <button
                  onClick={() => {
                    decrease(item.product.id);
                  }}
                >
                  -
                </button>
                {item.quantity}
                <button
                  onClick={() => {
                    increase(item.product.id);
                  }}
                >
                  +
                </button>
              </td>
              <td>{numeral((item.product.price * item.quantity * (100 - item.product.discount)) / 100).format('0,0.00$')}</td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => {
                    remove(item.product.id);
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
