import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
type Props = {};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

export default function Demo({}: Props) {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
