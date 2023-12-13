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

const { home, products, aboutUs, cart, signIn, signUp, checkout } = routes;

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
      { path: `${products.path}/:id`, element: <SingleProduct /> },
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
  return <RouterProvider router={router} />;
}
export default App;
