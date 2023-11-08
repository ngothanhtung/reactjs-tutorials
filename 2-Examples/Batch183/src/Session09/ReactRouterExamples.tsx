import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import NestedRoutes from './pages/NestedRoutes';
import Roles from './pages/NestedRoutes/pages/Roles';
import Users from './pages/NestedRoutes/pages/Users';
import Parameters from './pages/Parameters';
import Search from './pages/Search';
import Settings from './pages/Settings';
import Root from './Root';
import ResetPassword from './pages/NestedRoutes/pages/ResetPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
      <RouterProvider router={router} />
    </div>
  );
}
