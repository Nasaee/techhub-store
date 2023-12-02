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
    <div className='py-1 text-primary tracking-wider'>
      <h3>
        <Link
          to='/'
          className='uppercase pr-1 tracking-wider hover:underline transition-all duration-300'
        >
          Home
        </Link>
        {submenu && (
          <Link to={`/${submenu.path}`} className='pr-1 tracking-wider '>
            &#62;
            <span className='hover:underline transition-all duration-300'>
              {' '}
              {submenu.name.toUpperCase()}
            </span>
          </Link>
        )}
        {productName ? `&#62; ${productName} ` : null}
      </h3>
    </div>
  );
};
export default PathBar;
