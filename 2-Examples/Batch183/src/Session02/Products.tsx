import React from 'react';
import Rating from './Rating';
import PercentageBar from './PercentageBar';

const products = [
  {
    id: 1,
    name: 'Product 1',
    imageUrl: 'https://picsum.photos/200/300',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    imageUrl: 'https://picsum.photos/200/300',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    imageUrl: 'https://picsum.photos/200/300',
    price: 300,
  },
  {
    id: 4,
    name: 'Product 4',
    imageUrl: 'https://picsum.photos/200/300',
    price: 400,
  },
  {
    id: 5,
    name: 'Product 5',
    imageUrl: 'https://picsum.photos/200/300',
    price: 500,
  },
  {
    id: 6,
    name: 'Product 6',
    imageUrl: 'https://picsum.photos/200/300',
    price: 600,
  },
  {
    id: 7,
    name: 'Product 7',
    imageUrl: 'https://picsum.photos/200/300',
    price: 700,
  },
  {
    id: 8,
    name: 'Product 8',
    imageUrl: 'https://picsum.photos/200/300',
    price: 800,
  },
  {
    id: 9,
    name: 'Product 9',
    imageUrl: 'https://picsum.photos/200/300',
    price: 900,
  },
  {
    id: 10,
    name: 'Product 10',
    imageUrl: 'https://picsum.photos/200/300',
    price: 1000,
  },
];

type Props = {};

function Product({ item }: any) {
  return (
    <div>
      <div>
        <img src='https://picsum.photos/200/300' style={{ width: 300, height: 300 }} />
        <h3>{item.name}</h3>
        <strong>${item.price}</strong>
        <Rating stars={4} />
        <PercentageBar value={60} />
      </div>
    </div>
  );
}

export default function Products({}: Props) {
  return (
    <div>
      {products.map((item, index) => {
        return <Product key={item.id} item={item} />;
      })}
    </div>
  );
}
