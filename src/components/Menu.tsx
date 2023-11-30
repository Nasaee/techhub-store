import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Routes, routes } from '../utils/routes.utils';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const isMenuOpen = e.target.checked;
    setIsMenuOpen(isMenuOpen);
  };

  return (
    <div className='relative lg:hidden'>
      <label className='btn btn-circle swap swap-rotate text-primary '>
        {/* this hidden checkbox controls the state */}
        <input type='checkbox' onChange={handleChange} checked={isMenuOpen} />

        {/* hamburger icon */}
        <svg
          className='swap-off fill-current'
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 512 512'
        >
          <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
        </svg>

        {/* close icon */}
        <svg
          className='swap-on fill-current'
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 512 512'
        >
          <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
        </svg>
      </label>

      {isMenuOpen && (
        <ul className='p-2 shadow  z-[1] bg-base-300 rounded-box w-52  absolute left-0 mt-3 py-8 px-5'>
          {Object.keys(routes).map((key) => {
            const route = routes[key as keyof Routes];
            if (
              route !== routes.cart &&
              route !== routes.signIn &&
              route !== routes.signUp &&
              route !== routes.checkout
            ) {
              return (
                <li
                  key={key}
                  className='px-3 py-3 bold text-primary hover:bg-primary hover:text-base-300 rounded-md'
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link
                    to={route.path}
                    className='text-md xl:text-lg uppercase '
                  >
                    {route.name}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      )}
    </div>
  );

  // return (
  //   <details className='dropdown lg:hidden'>
  //     <summary className='m-1 btn bg-transparent border-none'>
  //       <IoMdMenu className='icon text-primary w-full h-full' />
  //     </summary>
  // <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-300 rounded-box w-52'>
  //   {Object.keys(routes).map((key) => {
  //     const route = routes[key as keyof Routes];
  //     if (
  //       route !== routes.cart &&
  //       route !== routes.signIn &&
  //       route !== routes.signUp &&
  //       route !== routes.checkout
  //     ) {
  //       return (
  //         <li key={key} className='px-1 py-1'>
  //           <Link
  //             to={route.path}
  //             className='text-md xl:text-lg uppercase bold text-primary'
  //           >
  //             {route.name}
  //           </Link>
  //         </li>
  //       );
  //     }
  //   })}
  // </ul>
  //   </details>
  // );

  //   return (
  //     <div className='relative'>

  //       <ul className='lg:hidden absolute bottom-0 left-0 flex flex-row'>
  //         {Object.keys(routes).map((key) => {
  //           const route = routes[key as keyof Routes];
  //           if (
  //             route !== routes.cart &&
  //             route !== routes.signIn &&
  //             route !== routes.signUp &&
  //             route !== routes.checkout
  //           ) {
  //             return (
  //               <li key={key}>
  //                 <Link to={route.path}>{route.name}</Link>
  //               </li>
  //             );
  //           }
  //         })}
  //       </ul>
  //     </div>
  //   );
};
export default Menu;
