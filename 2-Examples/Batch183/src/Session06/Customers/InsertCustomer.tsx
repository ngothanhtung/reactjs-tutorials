import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import axiosClient from './../configs/axiosClient';

interface IFormInput {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  birthday?: string;
  email: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phoneNumber: yup.string().required(),
  address: yup.string().required(),
  email: yup.string().required().email(),
  birthday: yup.string(),
});

export default function InsertCustomer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await axiosClient.post('/online-shop/customers', data, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        },
      });
      console.log(response);
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 320, gap: 12 }}>
          {/* FIRSTNAME */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor='firstName'>First Name</label>
            <input {...register('firstName')} id='firstName' />
            <span>{errors.firstName?.message}</span>
          </div>

          {/* LASTTNAME */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor='lastName'>Last Name</label>
            <input {...register('lastName')} id='lastName' />
            <span>{errors.lastName?.message}</span>
          </div>

          {/* ADDRESS */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor='address'>Address</label>
            <input {...register('address')} id='address' />
            <span>{errors.address?.message}</span>
          </div>

          {/* PHONE NUMBER */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input {...register('phoneNumber')} id='phoneNumber' />
            <span>{errors.phoneNumber?.message}</span>
          </div>

          {/* EMAIL */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor='email'>Email</label>
            <input type='email' {...register('email')} id='email' />
            <span>{errors.email?.message}</span>
          </div>

          {/* BIRTHDAY */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor='birthday'>Birthday</label>
            <input {...register('birthday')} id='birthday' />
            <span>{errors.birthday?.message}</span>
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
