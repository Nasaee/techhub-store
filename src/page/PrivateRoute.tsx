import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  // TODO: add auth user login
  const user = true; // temporary

  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};
export default PrivateRoute;
