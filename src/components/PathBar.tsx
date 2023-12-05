import { Link } from 'react-router-dom';

import { routes } from '../utils/routes.utils';

type Submenu = (typeof routes)[keyof typeof routes];

type ProductName = string;

type PathbarProps = {
  submenu?: Submenu;
  productName?: ProductName;
};

const PathBar = ({ submenu, productName }: PathbarProps) => {
  return (
    <div
      className='py-2 px-10 text-md capitalize tracking-wider bg-secondary text-base-100
    '
    >
      <h3>
        <Link
          to='/'
          className='pr-2 tracking-wider hover:underline transition-all duration-300'
        >
          Home
        </Link>
        &#62;
        {submenu && (
          <Link to={`/${submenu.path}`} className='px-2 tracking-wider '>
            <span className='hover:underline transition-all duration-300'>
              {submenu.name}
            </span>
          </Link>
        )}
        {productName ? `&#62; ${productName} ` : null}
      </h3>
    </div>
  );
};
export default PathBar;
