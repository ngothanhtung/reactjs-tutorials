import React from 'react';
import Counter from './Counter';
import BigCounter from './BigCounter';
import Products from './Shopping/Products';
import Total from './Shopping/Total';
import Cart from './Shopping/Cart';
import Login from './Auth/Login';
import User from './Auth/User';

type Props = {};

export default function ZustandExamples({}: Props) {
  return (
    <div>
      <User />
      <Login />
      {/* <BigCounter />
      <Counter /> */}
      <Cart />
      <hr />
      <Total />
      <hr />
      <Products />
    </div>
  );
}
