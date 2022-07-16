import React from 'react';
import axios from 'axios';

import { Spin } from 'antd';

function Users() {
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const config = {
      method: 'get',
      url: 'https://training.softech.cloud/api/training/users',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoidHVuZ250MiIsImZ1bGxuYW1lIjoiTmfDtCBUaGFuaCBUw7luZyIsImVtYWlsIjoidHVuZ250QHNvZnRlY2guZWR1LnZuIn0sImlhdCI6MTY1NTM4NTQxMywiZXhwIjoxNjU1NDcxODEzLCJhdWQiOiJzb2Z0ZWNoLmNsb3VkIiwiaXNzIjoic29mdGVjaC5jbG91ZCIsInN1YiI6IjYyODM5NzY2ZWZmY2ZiMGFlNGZkMWMyYSJ9.3xR4317qxtJ2pw-fRSoQIAOmRpBi81osux_fy9rwOPMMwNXQnHtGsiP8PZav1W1zPzJMs8SrR2M8GaJX9YqRNg',
      },
    };

    axios(config)
      .then(function (response) {
        // Save to state
        console.log(response.data);
        setUsers(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
          <Spin />
        </div>
      )}
      <ul>
        {users.map((user, index) => {
          return <li key={user._id}>{user.fullName}</li>;
        })}
      </ul>
    </div>
  );
}

export default Users;
