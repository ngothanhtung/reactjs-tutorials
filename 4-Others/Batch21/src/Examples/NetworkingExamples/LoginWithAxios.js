import React from 'react';
import axios from 'axios';

function LoginWithAxios() {
  const onSubmit = () => {
    const data = {
      username: 'tungnt@softech.vn',
      password: '123456789',
    };

    const url = 'https://server.aptech.io/training/auth/login';

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
  };

  const onSubmitAsync = async () => {
    const data = {
      username: 'tungnt@softech.vn',
      password: '123456789',
    };

    const url = 'https://server.aptech.io/training/auth/login';

    try {
      // Promise
      const response = await axios.post(url, data);
      console.log(response.data);
    } catch (err) {
      console.error(err);
      console.log('Login thất bại');
    }
  };

  return (
    <div>
      <h2>Login with Axios</h2>
      <button onClick={onSubmit}>Login</button>
      <button onClick={onSubmitAsync}>Login with Asyn / Await</button>
    </div>
  );
}

export default LoginWithAxios;
