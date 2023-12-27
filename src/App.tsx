import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  ErrorPage,
  Home,
  Products,
  AboutUs,
  Cart,
  PrivateRoute,
  SingleProduct,
} from './page';
import { Checkout, Landing } from './components';
import { routes } from './utils/routes.utils';

const { home, products, aboutUs, cart, checkout } = routes;

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
        element: <AboutUs />,
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
