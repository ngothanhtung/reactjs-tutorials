import React from 'react';
import { useParams, Link } from 'react-router-dom';
import axiosClient from '../../Session06/configs/axiosClient';
import numeral from 'numeral';
type Props = {};

export default function Products({}: Props) {
  let params = useParams();

  const [products, setProducts] = React.useState<any>([]);

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axiosClient.get('/online-shop/products');
        const data = response.data;

        console.log(data);

        setProducts(data);
      } catch (error) {
        setProducts([]);
      }
    };

    getProducts();
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        {products &&
          products.map((product: any) => {
            return (
              <div className='col col-4' key={product.id} style={{ border: '1px solid red' }}>
                <div>Tên sản phẩm: {product.name}</div>
                <div>Giá bán: {numeral(product.price).format('0,0$')}</div>
                <div>Giảm giá: {numeral(product.discount).format('0.00')}%</div>
                <Link to={'/product/' + product.id}>Chi tiết</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
