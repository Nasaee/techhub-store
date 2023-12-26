import { useSelector } from 'react-redux';
import { CartList, CartTotal } from '../components';
import { selectCartLength } from '../store/cart/cart.selector';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const Cart = () => {
  const cartLength = useSelector(selectCartLength);

  if (cartLength === 0) {
    return (
      <div className='flex flex-col justify-center items-center h-screen'>
        <RiShoppingCartLine className='text-7xl md:text-9xl text-secondary mb-10' />
        <h1 className='text-lg md:text-4xl font-bold uppercase mb-10 tracking-widest'>
          Your cart is empty !
        </h1>
        <button className='animate-bounce'>
          <Link to='/products' className=' btn btn-primary text-lg md:text-xl'>
            <IoIosArrowBack />
            Continue Shopping
          </Link>
        </button>
      </div>
    );
  }
  return (
    <section className='grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 py-10'>
      <CartList />
      <CartTotal />
    </section>
  );
};
export default Cart;
