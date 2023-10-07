import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axiosClient from '../../configs/axios';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

function LoginWithAxios() {
  React.useEffect(() => {
    axiosClient
      .get('/users')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Formik
        validationSchema={LoginSchema}
        initialValues={{
          username: 'tungnt',
          password: '1234567891',
        }}
        onSubmit={async (values) => {
          console.log('Login');
          const data = values;

          // const url = 'https://training.softech.cloud/api/training/users/login';

          try {
            // Promise
            const response = await axiosClient.post('/users/login', data);
            console.log(response.data);
          } catch (err) {
            console.error(err);
            console.log('Login thất bại');
          }
        }}
      >
        <Form>
          <label htmlFor='username'>Username</label>
          <Field id='username' name='username' placeholder='Please enter your username' type='username' />
          <div style={{ color: 'red' }}>
            <ErrorMessage name='username' />
          </div>

          <label htmlFor='password'>Password</label>
          <Field id='password' name='password' placeholder='Please enter your password' />
          <div style={{ color: 'red' }}>
            <ErrorMessage name='password' />
          </div>

          <button type='submit'>Login</button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginWithAxios;
