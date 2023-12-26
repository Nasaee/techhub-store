import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  // TODO: add auth user login
  const user = false; // temporary

  if (!user) {
    return <Navigate to='/sign-in' />;
  }
  return children;
};
export default PrivateRoute;
