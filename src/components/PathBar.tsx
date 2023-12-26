import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
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
      <div className='flex items-center gap-2'>
        <Link
          to='/'
          className='tracking-wider hover:underline transition-all duration-300'
        >
          Home
        </Link>
        <IoIosArrowForward />
        {submenu && (
          <Link to={`/${submenu.path}`} className='tracking-wider '>
            <span className='hover:underline transition-all duration-300'>
              {submenu.name}
            </span>
          </Link>
        )}
        {productName && (
          <div className='flex items-center gap-2'>
            <IoIosArrowForward />
            <span>{productName}</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default PathBar;
