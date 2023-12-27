import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth0();

  if (!user) {
    return <Navigate to='/sign-in' />;
  }
  return children;
};
export default PrivateRoute;
