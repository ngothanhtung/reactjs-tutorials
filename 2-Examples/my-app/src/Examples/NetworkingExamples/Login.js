import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

function Login() {
  return (
    <div>
      <Formik
        validationSchema={LoginSchema}
        initialValues={{
          username: 'tungnt',
          password: '123456789',
        }}
        onSubmit={async (values) => {
          // const data = values;
          // const url = 'https://training.softech.cloud/api/training/users/login';
          // fetch(url, {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify(data),
          // })
          //   .then((response) => {
          //     console.log(response);
          //     return response.json();
          //   })
          //   .then((json) => {
          //     // Xử lý kết quả JSON ở đây
          //     console.log(json);
          //     // Code ...
          //     if (json.login) {
          //       alert('LOGIN OK');
          //     } else {
          //       alert('LOGIN FAILED');
          //     }
          //   })
          //   .catch((error) => {
          //     // Nếu có lỗi
          //     console.error(error);
          //   });

          // async / await
          try {
            const data = values;

            const url = 'https://training.softech.cloud/api/training/users/login';
            const response = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });

            // Xử lý kết quả JSON ở đây
            const json = await response.json();
            console.log(json);
            if (json.login) {
              alert('LOGIN OK (ASYNC / AWAIT)');
            } else {
              alert('LOGIN FAILED (ASYNC / AWAIT)');
            }
          } catch (error) {
            // Nếu có lỗi
            console.error(error);
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

export default Login;
