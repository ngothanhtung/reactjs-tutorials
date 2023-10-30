import React from 'react';
import { Table } from 'antd';
import axiosClient from '../../Session06/configs/axiosClient';
import { ColumnsType } from 'antd/es/table';

type Props = {};

export default function TableExamples({}: Props) {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    const getCategories = async () => {
      const response = await axiosClient.get('/online-shop/products');
      setProducts(response.data);

      console.log('response.data', response.data);
    };

    getCategories();
  }, []);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Giá bán',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Giảm giá',
      dataIndex: 'discount',
      key: 'discount',
    },
    {
      title: 'Tồn kho',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  return (
    <div>
      <Table rowKey='id' dataSource={products} columns={columns} />
    </div>
  );
}
