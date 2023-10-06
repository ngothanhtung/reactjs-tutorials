import React from 'react';
import { useNavigate } from 'react-router-dom';

function Users() {
  let navigate = useNavigate();

  return (
    <div>
      <h2>Users</h2>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        GO TO HOME
      </button>
    </div>
  );
}

export default Users;
