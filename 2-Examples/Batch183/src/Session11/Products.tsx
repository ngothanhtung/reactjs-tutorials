import React from 'react';
import axiosClient from '../Session06/configs/axiosClient';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import numeral from 'numeral';
import { set } from 'react-hook-form';

const getProducts = async () => {
  const response: any = await axiosClient.get('/online-shop/products');
  return response.data;
};

const getProduct = async (id: number) => {
  const response: any = await axiosClient.get('/online-shop/products/' + id);
  return response.data;
};

export default function Products() {
  const [selectedId, setSelectedId] = React.useState<number>(0);

  // Queries
  const query = useQuery({ queryKey: ['get-products'], queryFn: getProducts });
  const products = query.data;

  const queryDetails = useQuery({ queryKey: ['get-product-details', selectedId], queryFn: () => getProduct(selectedId), enabled: selectedId > 0 });
  const product = queryDetails.data;

  return (
    <div>
      {query.isLoading && <div>Loading ...</div>}
      <h2>Products</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th style={{ width: '1%' }}>STT</th>
            <th>Tên sản phẩm</th>
            <th style={{ width: '1%' }}>Giá</th>
            <th style={{ width: '1%', whiteSpace: 'nowrap' }}>Giảm giá</th>
            <th>Mô tả</th>
            <th style={{ width: '1%' }}></th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product: any, index: number) => {
            return (
              <tr key={index}>
                <td style={{ textAlign: 'right' }}>{numeral(index + 1).format('0,0')}</td>
                <td>{product.name}</td>
                <td style={{ textAlign: 'right' }}>{numeral(product.price).format('0,0')}</td>
                <td style={{ textAlign: 'right' }}>{numeral(product.discount).format('0,0.00')}%</td>
                {/* Truncate 100 characters */}
                <td>{product.description?.slice(0, 100)} ...</td>
                <td>
                  <button
                    className='btn btn-danger'
                    onClick={() => {
                      setSelectedId(product.id);
                    }}
                  >
                    Xem
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectedId > 0 && (
        <div style={{ position: 'absolute', top: 100, left: 0, width: '100%', backgroundColor: 'yellow', padding: 36, boxSizing: 'border-box' }}>
          <button
            className='btn btn-danger'
            onClick={() => {
              setSelectedId(0);
            }}
          >
            Close
          </button>
          <table className='table table-striped'>
            <tbody>
              <tr>
                <td>Tên sản phẩm: </td>
                <td>{product?.name}</td>
              </tr>
              <tr>
                <td>Danh mục: </td>
                <td>{product?.category?.name}</td>
              </tr>
              <tr>
                <td>Nhà cung cấp: </td>
                <td>{product?.supplier?.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
