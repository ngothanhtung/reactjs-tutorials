import React from 'react';
import axiosClient from './configs/axiosClient';

export default function DeleteDataWithAxios() {
  // Refresh state
  const [refresh, setRefresh] = React.useState(false);

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
  }, [refresh]);

  const handleDelete = async (id: string) => {
    try {
      const response: any = await axiosClient.delete(`/online-shop/categories/${id}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        },
      });
      console.log(response);

      // Refresh state
      setRefresh(!refresh);
    } catch (error) {
      console.log('Failed to fetch data: ', error);
    }
  };

  return (
    <div>
      {loading && <div>Loading ...</div>}

      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên danh mục</th>
            <th>Mô tả</th>
            <th>Thao tác</th>
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
                <td>
                  <button
                    type='button'
                    onClick={() => {
                      return window.confirm('Are you sure?') && handleDelete(category.id);
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
