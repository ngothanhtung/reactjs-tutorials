import React from 'react';
import { Link, Outlet, useParams, useRoutes } from 'react-router-dom';

import styles from './Root.module.css';

type Props = {};

export default function Root({}: Props) {
  return (
    <div>
      <ul className={styles.navigation}>
        <li className={styles.link}>
          <Link to='/'>Home</Link>
        </li>
        <li className={styles.link}>
          <Link to='/about'>About</Link>
        </li>
        <li className={styles.link}>
          <Link to='/settings'>Settings</Link>
        </li>
        <li className={styles.link}>
          <Link to='/parameter/145236/peter'>Parameters</Link>
        </li>
        <li className={styles.link}>
          <Link to='/search?name=Tony&age=27'>Query</Link>
        </li>
        <li className={styles.link}>
          <Link to='/nested-routes'>Nested Routes</Link>
        </li>
      </ul>
      <div style={{ padding: 24, backgroundColor: 'green', minHeight: 400 }}>
        <Outlet />
      </div>
    </div>
  );
}
