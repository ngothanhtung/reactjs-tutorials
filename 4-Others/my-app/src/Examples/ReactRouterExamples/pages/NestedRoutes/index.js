import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import styles from './styles.module.css';

function NestedRoutes() {
  return (
    <React.Fragment>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: 200, backgroundColor: 'violet', height: 'calc(100vh - 60px)', boxSizing: 'border-box', padding: 12 }}>
          <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to='/nested-routes/users'>
            Users
          </NavLink>

          <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to='/nested-routes/roles'>
            Roles
          </NavLink>
        </div>
        <div style={{ flex: 1, backgroundColor: 'pink', height: 'calc(100vh - 60px)', boxSizing: 'border-box', padding: 12 }}>
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
}

export default NestedRoutes;
