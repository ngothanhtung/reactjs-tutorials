import React from 'react';
import useCategories from './useCategories';

type Props = {};

export default function Categories({}: Props) {
  const [categories] = useCategories([]);
  return (
    <div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên danh mục</th>
            <th>Mô tả</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category: any, index: number) => {
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
