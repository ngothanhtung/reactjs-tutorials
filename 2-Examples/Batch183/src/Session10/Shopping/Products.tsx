import React from 'react';
import axiosClient from '../../Session06/configs/axiosClient';
import numeral from 'numeral';
import useShoppingCartStore from '../hooks/useShoppingCartStore';

type Props = {};

export default function Products({}: Props) {
  const [products, setProducts] = React.useState([]);

  const { add } = useShoppingCartStore((state: any) => state);

  React.useEffect(() => {
    const getProducts = async () => {
      const response = await axiosClient.get('/online-shop/products');
      console.log(response.data);
      setProducts(response.data);
    };

    getProducts();
  }, []);
  return (
    <div className='row'>
      {products.map((product: any) => {
        return (
          <div className='col col-4' key={product.id} style={{ border: '1px solid red' }}>
            <h2>{product.name}</h2>
            <p>{numeral(product.price).format('0,0$')}</p>
            <p>{numeral(product.discount).format('0,0')}%</p>
            <button
              className='btn btn-primary'
              onClick={() => {
                add(product);
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
