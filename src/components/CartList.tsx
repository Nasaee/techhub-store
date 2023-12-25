import { IoIosArrowBack } from 'react-icons/io';
import { RootState } from '../utils/type';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { RiShoppingCartLine } from 'react-icons/ri';

const CartList = () => {
  const cart = useSelector((state: RootState) => state.cart);

  if (cart.length === 0) {
    return (
      <div className='flex flex-col justify-center items-center h-screen'>
        <RiShoppingCartLine className='text-9xl text-secondary mb-10' />
        <h1 className='text-4xl font-bold uppercase mb-10 tracking-widest'>
          Your cart is empty !
        </h1>
        <button className='animate-bounce'>
          <Link to='/products' className=' btn btn-primary text-xl'>
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
