import { useAuth0 } from '@auth0/auth0-react';
import { GoSignOut, GoSignIn } from 'react-icons/go';

const User = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <div className='dropdown dropdown-end'>
      {isAuthenticated ? (
        <div className='tooltip  tooltip-bottom' data-tip='Sign out'>
          <button onClick={() => logout()}>
            <GoSignOut className='icon text-primary' />
          </button>
        </div>
      ) : (
        <div className='tooltip tooltip-bottom' data-tip='Sign in'>
          <button onClick={() => loginWithRedirect()}>
            <GoSignIn className='icon text-primary' />
          </button>
        </div>
      )}
    </div>
  );
};
export default User;
