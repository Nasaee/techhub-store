import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  ErrorPage,
  Home,
  Products,
  AboutUs,
  Cart,
  SignIn,
  PrivateRoute,
  SignUp,
  SingleProduct,
} from './page';
import { Checkout, Landing } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      { path: 'products/:id', element: <SingleProduct /> },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
