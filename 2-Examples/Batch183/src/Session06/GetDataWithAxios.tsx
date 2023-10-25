import React from 'react';
import axiosClient from './configs/axiosClient';

export default function GetDataWithAxios() {
  // Loading state
  const [loading, setLoading] = React.useState(false);

  const [categories, setCategories] = React.useState([]);
  // Chạy 1 lần duy nhất khi component được render lần đầu tiên
  React.useEffect(() => {
    // Async / Await

    const getData = async () => {
      try {
        setLoading(true);
        const response: any = await axiosClient.get('/online-shop/categories');
        setCategories(response.data);
      } catch (error) {
        console.log('Failed to fetch data: ', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div>
      {loading && <div>Loading ...</div>}
      <table>
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
