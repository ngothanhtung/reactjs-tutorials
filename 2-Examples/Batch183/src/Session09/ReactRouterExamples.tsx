import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import NestedRoutes from './pages/NestedRoutes';
import ChangeEmail from './pages/NestedRoutes/pages/ChangeEmail';
import ResetPassword from './pages/NestedRoutes/pages/ResetPassword';
import Roles from './pages/NestedRoutes/pages/Roles';
import Users from './pages/NestedRoutes/pages/Users';
import Parameters from './pages/Parameters';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Search from './pages/Search';
import Root from './Root';

// Lazy loading
const About = React.lazy(() => import('./pages/About'));
const Settings = React.lazy(() => import('./pages/Settings'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },

      // URL PARAMS
      {
        path: '/parameter/:id/:name',
        element: <Parameters />,
      },
      // QUERY PARAMS
      {
        path: '/search',
        element: <Search />,
      },
    ],
  },

  {
    path: '/products',
    element: <Products />,
  },

  {
    path: '/product/:id',
    element: <ProductDetails />,
  },

  // NESTED ROUTES
  {
    path: '/nested-routes',
    element: <NestedRoutes />,
    children: [
      { index: true, element: <Users /> },
      {
        path: '/nested-routes/users',
        element: <Users />,
        children: [
          {
            path: '/nested-routes/users/reset-password',
            element: <ResetPassword />,
          },
          {
            path: '/nested-routes/users/change-email',
            element: <ChangeEmail />,
          },
        ],
      },
      { path: '/nested-routes/roles', element: <Roles /> },
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

export default function ReactRouterExamples({}: Props) {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </React.Suspense>
    </div>
  );
}
