import { Link } from 'react-router-dom';
import displayPrice from '../utils/displayPrice.utils';
import { useSelector } from 'react-redux';
import { selectTotalPrice } from '../store/cart/cart.selector';

const CartTotal = () => {
  const totalPrice = useSelector(selectTotalPrice);

  const expense = [
    { type: 'Subtotal', amount: totalPrice },
    { type: 'Shipping', amount: 0 },
    { type: 'Tax', amount: 0 },
  ];

  return (
    <div>
      <div className='card-body border border-primary gap-8 font-lg py-16 rounded-xl'>
        {expense.map(({ type, amount }, index) => (
          <div key={index} className='flex justify-between'>
            <span className='text-lg'>{type}:</span>
            <span className='tracking-wider'>{displayPrice(amount)}</span>
          </div>
        ))}

        <div className='flex justify-between font-bold'>
          <span className='text-lg'>Total:</span>
          <span>{displayPrice(totalPrice)}</span>
        </div>

        <button className='block w-full mt-16'>
          <Link
            to='/checkout'
            className='btn btn-primary w-[80%] text-lg uppercase tracking-widest'
          >
            Checkout
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
