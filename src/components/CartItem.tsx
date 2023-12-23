import { ChangeEvent, memo, useState } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi2';
import displayPrice from '../utils/displayPrice.utils';
import { TCartItem } from '../utils/type';
import { useDispatch } from 'react-redux';
import { removeItemFormCart } from '../store/cart/cartSlice';
import toast from 'react-hot-toast';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { number } from 'zod';

const CartItem = ({ cartItem }: { cartItem: TCartItem }) => {
  const dispatch = useDispatch();

  const { id, name, price, color, quantity, storage, image, stock } = cartItem;

  const [quantityValue, setQuantityValue] = useState<number>(quantity);

  const handleRemoveItem = (id: string, color: string, storage: string) => {
    dispatch(removeItemFormCart({ id, color, storage }));
    toast.success('Item removed');
  };

  const updateQuntity = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | ChangeEvent<HTMLInputElement>,
    id: string,
    color: string,
    storage: string
  ) => {
    const name = e.currentTarget.name;
    console.log(e.currentTarget.name);
    // TODO : update quantity if name is increase or decrease or inputQuantity do somthing
  };

  return (
    <li className='grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto_1fr_1fr] items-center justify-start gap-4 border-b py-4'>
      {/* image */}
      <img src={image} alt={name} className='w-32 h-auto' />
      {/* name */}
      <p>
        {name}&nbsp;{storage} ({displayPrice(price)})
      </p>
      {/* color */}
      <div
        className='w-6 h-6 rounded-full mx-6'
        style={{ backgroundColor: color }}
      ></div>
      <div
        className='col-span-2 flex justify-between
'
      >
        {/* quantity */}
        <div className='flex items-center gap-4'>
          <span>Quantity:</span>
          <div className='flex items-center gap-4'>
            <button
              name='decrease'
              className='text-black'
              onClick={(e) => updateQuntity(e, id, color, storage)}
            >
              <HiMinus />
            </button>
            <input
              type='number'
              name='inputQuantity'
              inputMode='numeric'
              pattern='[0-9]*'
              className='w-16 h-10 p-1 text-center'
              value={quantityValue}
              onChange={(e) => updateQuntity(e, id, color, storage)}
            />
            <button
              name='increase'
              className={`${
                quantityValue >= stock ? 'text-[#dee2e6]' : 'text-black'
              }`}
              onClick={(e) => updateQuntity(e, id, color, storage)}
            >
              <HiPlus />
            </button>
          </div>
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
