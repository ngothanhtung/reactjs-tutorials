import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Categories from './Categories';
import CategoriesWithoutReactQuery from './CategoriesWithoutReactQuery';
import CreateCategory from './CreateCategory';
import Products from './Products';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Categories />,
      },
      {
        path: 'online-shop/categories',
        element: <Categories />,
      },
      {
        path: 'online-shop/categories-without-react-query',
        element: <CategoriesWithoutReactQuery />,
      },
      {
        path: 'online-shop/create-category',
        element: <CreateCategory />,
      },
      {
        path: 'online-shop/products',
        element: <Products />,
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

// Create a client
const queryClient = new QueryClient();

export default function ReactQueryExamples() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.Suspense>
  );
}
