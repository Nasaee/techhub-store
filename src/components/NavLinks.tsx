import { NavLink } from 'react-router-dom';
import { Routes, routes } from '../utils/routes.utils';

const NavLinks = () => {
  return (
    <ul className='flex-auto hidden lg:flex xl:gap-6 justify-center items-center menu menu-vertical lg:menu-horizontal tracking-widest py-0'>
      {Object.keys(routes).map((key) => {
        const route = routes[key as keyof Routes];
        if (
          route !== routes.cart &&
          route !== routes.signIn &&
          route !== routes.signUp &&
          route !== routes.checkout
        ) {
          return (
            <li key={key} className='px-1 py-1'>
              <NavLink
                to={route.path}
                className='text-sm xl:text-md uppercase  text-primary'
              >
                {route.name}
              </NavLink>
            </li>
          );
        }
      })}
    </ul>
  );
};
export default NavLinks;
