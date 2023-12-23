import { IoIosArrowBack } from 'react-icons/io';
import { RootState } from '../utils/type';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFormCart } from '../store/cart/cartSlice';
import toast from 'react-hot-toast';
import CartItem from './CartItem';

const CartList = () => {
  const cart = useSelector((state: RootState) => state.cart);

  if (cart.length === 0) {
    return (
      <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='text-3xl font-bold'>Your cart is empty !</h1>
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
  }

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
