import React from 'react';
import axios from 'axios';

function LoginWithAxios() {
  const onSubmit = () => {
    const data = {
      username: 'tungnt2',
      password: '123456789',
    };

    const url = 'https://training.softech.cloud/api/training/users/login';

    console.log('Login: Start');
    // Promise
    axios
      .post(url, data)
      .then((result) => {
        console.log(result.data);
        console.log('Login thành công');
      })
      .catch((err) => {
        console.error(err);
        console.log('Login thất bại');
      });
    console.log('Login: End');
  };

  const onSubmitAsyncAwait = async () => {
    const data = {
      username: 'tungnt2',
      password: '123456789',
    };

    const url = 'https://training.softech.cloud/api/training/users/login';

    try {
      console.log('Login: Start');
      // Promise
      const response = await axios.post(url, data);
      console.log(response.data);
      console.log('Login: End');
    } catch (err) {
      console.error(err);
      console.log('Login thất bại');
    }
  };

  return (
    <div>
      <h2>Login with Axios</h2>
      <button onClick={onSubmit}>Login</button>

      <button onClick={onSubmitAsyncAwait}>Login with Asyn / Await</button>
    </div>
  );
}

export default LoginWithAxios;
