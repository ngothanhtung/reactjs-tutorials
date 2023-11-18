import React from 'react';
import { Link, Outlet, useParams, useRoutes } from 'react-router-dom';

import styles from './Root.module.css';

export default function Root() {
  return (
    <div>
      <ul className={styles.navigation}>
        <li className={styles.link}>
          <Link to='/online-shop/categories'>Categories</Link>
        </li>
        <li className={styles.link}>
          <Link to='/online-shop/categories-without-react-query'>Categories without React query</Link>
        </li>
        <li className={styles.link}>
          <Link to='/online-shop/products'>Products</Link>
        </li>
        <li className={styles.link}>
          <Link to='/online-shop/create-category'>Create category</Link>
        </li>
      </ul>
      <div style={{ padding: 24, backgroundColor: 'white', minHeight: 400 }}>
        <Outlet />
      </div>
    </div>
  );
}
