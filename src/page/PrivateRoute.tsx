import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectTotalPrice } from '../store/cart/cart.selector';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth0();
  const totalPrice = useSelector(selectTotalPrice);

  if (!user || totalPrice < 1) {
    return <Navigate to='/' />;
  }
  return children;
};
export default PrivateRoute;
