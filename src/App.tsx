import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  ErrorPage,
  Home,
  Products,
  About,
  Cart,
  SignIn,
  PrivateRoute,
  SignUp,
  SingleProduct,
} from './page';
import { Checkout, Landing } from './components';
import { routes } from './utils/routes.utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const { home, products, aboutUs, cart, signIn, signUp, checkout } = routes;

const queryClient = new QueryClient();

import { loader as singleProductLoader } from './page/SingleProduct.page';

const router = createBrowserRouter([
  {
    path: home.path,
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: products.path,
        element: <Products />,
      },
      {
        path: `${products.path}/:id`,
        element: <SingleProduct />,
        errorElement: <ErrorPage />,
        loader: singleProductLoader(queryClient),
      },
      {
        path: aboutUs.path,
        element: <About />,
      },
      {
        path: cart.path,
        element: <Cart />,
      },
      {
        path: checkout.path,
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: signIn.path,
        element: <SignIn />,
      },
      {
        path: signUp.path,
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
export default App;
