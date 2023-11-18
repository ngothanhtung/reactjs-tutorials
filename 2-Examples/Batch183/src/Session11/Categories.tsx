import React from 'react';
import axiosClient from '../Session06/configs/axiosClient';
import { useQuery } from '@tanstack/react-query';

const getCategories = async () => {
  const response: any = await axiosClient.get('/online-shop/categories');
  return response.data;
};

export default function Categories() {
  // Queries
  const query = useQuery({ queryKey: ['get-categories'], queryFn: getCategories });

  console.log('queryClient: ', query.data);

  const categories = query.data;
  const error = query.error;

  console.log('error: ', error);
  return (
    <div>
      {query.isLoading && <div>Loading ...</div>}
      {query.isError && <div>Failed to fetch data</div>}
      <h2>Categories</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên danh mục</th>
            <th>Mô tả</th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((category: any, index: number) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                {/* Truncate 100 characters */}
                <td>{category.description?.slice(0, 100)} ...</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
