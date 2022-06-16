import React from 'react';

function Login() {
  const onSubmit = () => {
    const data = {
      username: 'tungnt2',
      password: '123456789',
    };

    const url = 'https://training.softech.cloud/api/training/users/login';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        console.log(json);
      });
  };

  return (
    <div>
      Login
      <button onClick={onSubmit}>Login</button>
    </div>
  );
}

export default Login;
