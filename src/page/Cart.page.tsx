import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../utils/type';
import displayPrice from '../utils/displayPrice.utils';
import { HiMinus, HiPlus } from 'react-icons/hi2';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  console.log(cart);

  return (
    <div className='grid grid-cols-[auto_1fr]'>
      <div>
        <ul>
          {cart.map((item, index) => {
            const {
              name,
              price,
              color,
              quantity,
              brand,
              storage,
              image,
              stock,
            } = item;
            return (
              <li
                key={index}
                className='grid grid-cols-[auto_repeat(7,1fr)] items-center gap-8 h-[4.5rem] border-b mb-6'
              >
                <img src={image} alt={name} className='max-h-[4.5rem] w-auto' />
                <p>
                  {name}&nbsp;{storage}
                </p>
                <p
                  className='w-6 h-6 rounded-full'
                  style={{ backgroundColor: color }}
                ></p>

                <p>{displayPrice(price)}</p>

                <p>{brand}</p>

                <div className='flex items-center gap-4'>
                  <button
                    className={`${
                      quantity <= 1 ? 'text-[#dee2e6]' : 'text-black'
                    }`}
                    onClick={() => {}}
                  >
                    <HiMinus />
                  </button>
                  <input
                    type='number'
                    inputMode='numeric'
                    pattern='[0-9]*'
                    className='w-16 h-10 p-1 text-center'
                    value={quantity}
                    onChange={() => {}}
                  />
                  <button
                    className={`${
                      quantity >= stock ? 'text-[#dee2e6]' : 'text-black'
                    }`}
                    onClick={() => {}}
                  >
                    <HiPlus />
                  </button>
                </div>

                <RiDeleteBin7Line />
              </li>
            );
          })}
        </ul>
        <Link
          to='/cart'
          className='flex items-center gap-2 text-secondary tracking-wider text-lg hover:text-primary'
        >
          <IoIosArrowBack />
          Continue Shopping
        </Link>
      </div>
      <div>total</div>
      {/* <button className='btn btn-primary' onClick={() => dispatch(clearCart())}>
        clear cart
      </button> */}
    </div>
  );
};
export default Cart;
