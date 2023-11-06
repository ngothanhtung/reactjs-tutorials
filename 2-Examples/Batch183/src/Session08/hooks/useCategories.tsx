import React from 'react';
import axiosClient from '../../Session06/configs/axiosClient';

export default function useCategories(defaultValue: any = []) {
  const [categories, setCategories] = React.useState(defaultValue);
  // Chạy 1 lần duy nhất khi component được render lần đầu tiên
  React.useEffect(() => {
    // Async / Await

    const getData = async () => {
      try {
        const response: any = await axiosClient.get('/online-shop/categories');
        setCategories(response.data);
      } catch (error) {
        console.log('Failed to fetch data: ', error);
      } finally {
      }
    };

    getData();
  }, []);

  return [categories];
}
