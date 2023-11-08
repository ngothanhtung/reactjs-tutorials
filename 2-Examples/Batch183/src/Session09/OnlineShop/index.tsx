import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './MainLayout';
import Categories from './pages/Categories';
import Products from '../pages/Products';
import Suppliers from './pages/Suppliers';
import Employees from './pages/Employees';
import Customers from './pages/Customers';
import Orders from './pages/Orders';
import About from '../pages/About';
import Settings from '../pages/Settings';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    // errorElement: <Error />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />,
      },

      {
        index: true,
        element: <Categories />,
      },
      {
        path: '/online-shop/categories',
        element: <Categories />,
      },
      {
        path: '/online-shop/suppliers',
        element: <Suppliers />,
      },
      {
        path: '/online-shop/products',
        element: <Products />,
      },
      {
        path: '/online-shop/employees',
        element: <Employees />,
      },

      {
        path: '/online-shop/customers',
        element: <Customers />,
      },

      {
        path: '/online-shop/orders',
        element: <Orders />,
      },

      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/settings',
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

type Props = {};

export default function OnlineShop({}: Props) {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </React.Suspense>
    </div>
  );
}
