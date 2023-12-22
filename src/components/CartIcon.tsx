import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCountQuantities } from '../store/cart/cart.selector';

const CartIcon = () => {
  const cartQuantity: number = useSelector(selectCountQuantities);

  return (
    <div className='indicator my-auto lg:pl-10'>
      <span className='indicator-item badge badge-secondary'>
        {cartQuantity}
      </span>
      <Link to='/cart' className=''>
        <FiShoppingCart className='icon text-primary' />
      </Link>
    </div>
  );
};
export default CartIcon;
