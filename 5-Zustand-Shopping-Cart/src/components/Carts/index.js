import React from 'react';
import { useCarts } from '../../hooks/useCarts';

export default function Carts() {
  const { items, remove, increase, decrease } = useCarts((state) => state);
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th className='text-end'>Price</th>
            <th className='text-end'>Qty</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((i, index) => {
            return (
              <tr key={i.product.id}>
                <td>{index + 1}</td>
                <td>{i.product.name}</td>
                <td className='text-end'>{i.product.price}</td>
                <td className='text-end'>
                  <div className='d-flex justify-content-end'>
                    <button
                      className='btn btn-sm btn-warning'
                      onClick={() => {
                        decrease(i.product.id);
                      }}
                    >
                      -
                    </button>
                    <div style={{ width: 36, paddingInline: 8 }}>{i.quantity}</div>
                    <button
                      className='btn btn-sm btn-warning'
                      onClick={() => {
                        increase(i.product.id);
                      }}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <button
                    className='btn btn-sm btn-danger'
                    onClick={() => {
                      if (window.confirm('Are you sure to remove?')) {
                        remove(i.product.id);
                      }
                    }}
                  >
                    x
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
