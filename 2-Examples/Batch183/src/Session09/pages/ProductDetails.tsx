import React from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '../../Session06/configs/axiosClient';
import numeral from 'numeral';
type Props = {};

export default function ProductDetails({}: Props) {
  let params = useParams();

  const [product, setProduct] = React.useState<any>(null);

  React.useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await axiosClient.get('/online-shop/products/' + params.id);
        const data = response.data;

        console.log(data);

        setProduct(data);
      } catch (error) {
        setProduct(null);
      }
    };

    getProductDetails();
  }, [params.id]);

  return (
    <div>
      {product && (
        <div>
          <div>Tên sản phẩm: {product.name}</div>
          <div>Giá bán: {numeral(product.price).format('0,0$')}</div>
          <div>Giảm giá: {numeral(product.discount).format('0.00')}%</div>
        </div>
      )}

      {!product && <div>Không tìm thấy sản phẩm</div>}
    </div>
  );
}
