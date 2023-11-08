import './styles.css';

import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './MainLayout';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Photos from './pages/Photos';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,

    children: [
      {
        path: '/',
        index: true,
        element: <Home />,
      },
      {
        path: '/profile',
        index: true,
        element: <Profile />,
      },
      {
        path: '/messages',
        index: true,
        element: <Messages />,
      },
      {
        path: '/photos',
        index: true,
        element: <Photos />,
      },
      {
        path: '/settings',
        index: true,
        element: <Settings />,
      },
    ],
  },

  //  NO MATCH ROUTE
  {
    path: '*',
    element: (
      <main style={{ padding: '1rem' }}>
        <p>404 Page not found 😂😂😂</p>
      </main>
    ),
  },
]);

function MagicReactRoute() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default MagicReactRoute;
