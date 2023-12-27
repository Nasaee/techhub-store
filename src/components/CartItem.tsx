import { memo } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi2';
import displayPrice from '../utils/displayPrice.utils';
import { TCartItem } from '../utils/type';
import { useDispatch } from 'react-redux';
import {
  removeItemFormCart,
  increaseQuantity,
  decreaseQuantity,
} from '../store/cart/cartSlice';
import toast from 'react-hot-toast';
import { RiDeleteBin7Line } from 'react-icons/ri';

const CartItem = ({ cartItem }: { cartItem: TCartItem }) => {
  const dispatch = useDispatch();

  const { id, name, price, color, quantity, storage, image, stock } = cartItem;

  const handleRemoveItem = (id: string, color: string, storage: string) => {
    dispatch(removeItemFormCart({ id, color, storage }));
    toast.success('Item removed');
  };

  const handleUpdateQuantity = (type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      dispatch(increaseQuantity({ id, color, storage }));
    }

    if (type === 'decrease') {
      dispatch(decreaseQuantity({ id, color, storage }));
    }
  };

  return (
    <li className='grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto_1fr_1fr] items-center justify-start gap-4 border-b py-4 pr-8'>
      {/* image */}
      <img src={image} alt={name} className='w-16 h-auto rounded-lg' />

      {/* name */}
      <p className='self-start text-[0.85rem] md:text-[1rem]'>
        {name}&nbsp;{storage} ({displayPrice(price)})
      </p>

      {/* color */}
      <div
        className='w-6 h-6 rounded-full mx-6'
        style={{ backgroundColor: color }}
      ></div>
      <div
        className='col-span-2 flex justify-between flex-wrap gap-y-8
  '
      >
        {/* quantity */}
        <div className='flex items-center gap-4'>
          <span className='text-[0.85rem] md:text-[1rem]'>Quantity:</span>
          <div className='flex items-center gap-2 md:gap-4'>
            <button
              name='decrease'
              onClick={() => handleUpdateQuantity('decrease')}
            >
              <HiMinus />
            </button>
            <div className='flex items-center justify-center w-12 h-10 p-1 text-center  md:text-[1.3rem]'>
              {quantity}
            </div>
            <button
              name='increase'
              className={`${quantity >= stock && 'text-[#dee2e6]'}`}
              onClick={() => handleUpdateQuantity('increase')}
            >
              <HiPlus />
            </button>
          </div>
        </div>

        {/* total price */}
        <div className='flex items-center tracking-wider'>
          {displayPrice(price * quantity)}
        </div>

        {/* remove item */}
        <button
          className='text-red-500 text-2xl cursor-pointer'
          onClick={() => handleRemoveItem(id, color, storage)}
        >
          <RiDeleteBin7Line />
        </button>
      </div>
    </li>
  );
};
export default memo(CartItem);
