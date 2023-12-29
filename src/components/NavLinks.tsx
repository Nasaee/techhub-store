import { NavLink } from 'react-router-dom';
import { Routes, routes } from '../utils/routes.utils';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import { selectTotalPrice } from '../store/cart/cart.selector';

const NavLinks = () => {
  const { user } = useAuth0();
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <ul className='flex-auto hidden lg:flex xl:gap-6 justify-center items-center menu menu-vertical lg:menu-horizontal tracking-widest py-0'>
      {Object.keys(routes).map((key) => {
        const route = routes[key as keyof Routes];
        if (route !== routes.cart && route !== routes.checkout) {
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
      {user && totalPrice > 0 && (
        <li className='px-1 py-1'>
          <NavLink
            to={routes.checkout.path}
            className='text-sm xl:text-md uppercase  text-primary'
          >
            {routes.checkout.name}
          </NavLink>
        </li>
      )}
    </ul>
  );
};
export default NavLinks;
