import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

interface IFormInput {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().email().required(),
  password: yup.string().min(3).max(20).required(),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const url = 'https://server.aptech.io/auth/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Xử lý kết quả JSON ở đây
      const json = await response.json();
      if (json.loggedInUser) {
        alert('LOGIN OK (ASYNC / AWAIT)');
      } else {
        alert('LOGIN FAILED (ASYNC / AWAIT)');
      }
    } catch (error) {
      // Nếu có lỗi
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 320, gap: 12 }}>
          {/* USERNAME */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor='fullname'>Fullname</label>
            <input {...register('username')} id='fullname' />
            <span>{errors.username?.message}</span>
          </div>

          {/* PASSWORD */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor='password'>Password</label>
            <input type='password' {...register('password')} id='password' />
            <span>{errors.password?.message}</span>
          </div>

          {/* SUBMIT */}
          <button type='submit' name='Submit'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
