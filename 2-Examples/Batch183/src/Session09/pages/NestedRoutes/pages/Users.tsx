import React from 'react';
import { useNavigate, Outlet, NavLink } from 'react-router-dom';
import styles from '../styles.module.css';

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
      <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to='/nested-routes/users/reset-password'>
        Reset Password
      </NavLink>

      <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to='/nested-routes/users/change-email'>
        Change Email
      </NavLink>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Users;
