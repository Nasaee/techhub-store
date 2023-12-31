import { Link } from 'react-router-dom';
import displayPrice from '../utils/displayPrice.utils';
import { useSelector } from 'react-redux';
import { selectTotalPrice } from '../store/cart/cart.selector';
import { useAuth0 } from '@auth0/auth0-react';

const CartTotal = ({ showButton }: { showButton?: boolean }) => {
  const totalPrice = useSelector(selectTotalPrice);
  const { isAuthenticated, loginWithPopup } = useAuth0();

  const VAT = 7;

  const priceBeforeVat = (totalPrice * (100 - VAT)) / 100;

  const expense = [
    { type: 'Subtotal', amount: priceBeforeVat },
    { type: 'Shipping', amount: 0 },
    { type: 'Vat', amount: totalPrice - priceBeforeVat },
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

        <div className='flex justify-between font-bold md:text-xl'>
          <span>Total:</span>
          <span>{displayPrice(totalPrice)}</span>
        </div>

        {showButton && (
          <button className='block w-full mt-16'>
            {isAuthenticated ? (
              <Link
                to='/checkout'
                className='btn btn-primary w-[80%] text-md md:text-lg uppercase tracking-widest'
              >
                Checkout
              </Link>
            ) : (
              <button
                className='btn btn-secondary w-[80%] text-md md:text-lg uppercase tracking-widest'
                onClick={() => loginWithPopup()}
              >
                Login to checkout
              </button>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default CartTotal;
