import { IoIosArrowBack } from 'react-icons/io';
import { RootState } from '../utils/type';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartList = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div>
      <ul>
        {cart.map((item, index) => {
          return <CartItem key={index} cartItem={item} />;
        })}
      </ul>
      {/* back to shop */}
      <button>
        <Link
          to='/products'
          className='flex items-center gap-2 text-primary tracking-wider text-lg hover:text-secondary py-8'
        >
          <IoIosArrowBack />
          Continue Shopping
        </Link>
      </button>
    </div>
  );
};
export default CartList;
