import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  return (
    <div className='indicator my-auto lg:pl-10'>
      <span className='indicator-item badge badge-secondary'>0</span>
      <Link to='/cart' className=''>
        <FiShoppingCart className='icon text-primary' />
      </Link>
    </div>
  );
};
export default CartIcon;
