import React from 'react';
import axiosClient from '../Session06/configs/axiosClient';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type Props = {};

const createCategory = async (data: any) => {
  const response = await axiosClient.post('/online-shop/categories', data, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    },
  });
  return response.data;
};

export default function CreateCategory({}: Props) {
  // Access the client
  const queryClient = useQueryClient();
  // Mutations
  const mutation = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['get-categories'] });
    },
    onError: (err: any) => {
      console.log(err);
    },
  });

  return (
    <div>
      <button
        onClick={() => {
          mutation.mutate({
            name: 'Category 1',
            description: 'Description 1',
          });
        }}
      >
        Create a category
      </button>
    </div>
  );
}
