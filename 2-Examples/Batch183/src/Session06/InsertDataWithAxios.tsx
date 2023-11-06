import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import axiosClient from './configs/axiosClient';
import { message } from 'antd';

interface IFormInput {
  name: string;
  description?: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
});

export default function InsertDataWithAxios() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await axiosClient.post('/online-shop/categories', data, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        },
      });
      if (response.status === 201) {
        message.success('Insert successfully');
      }
      console.log(response);
    } catch (err: any) {
      // console.error(err.response.data.message[0]);
      message.error(err.response.data.message[0]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 320, gap: 12 }}>
          {/* USERNAME */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor='name'>Name</label>
            <input {...register('name')} id='name' />
            <span>{errors.name?.message}</span>
          </div>

          {/* DESCRIPTION */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor='description'>Description</label>
            <input {...register('description')} id='description' />
            <span>{errors.description?.message}</span>
          </div>

          {/* SUBMIT */}
          <button type='submit' name='Submit'>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
