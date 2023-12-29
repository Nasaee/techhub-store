import { Modal } from 'flowbite-react';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { StripeElement } from '@stripe/stripe-js';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import {
  TEST_CREDIT_CARD_NUMBER,
  amountToPay,
  cardStyle,
  saveToClipboard,
} from '../utils/helper.utils';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import toast from 'react-hot-toast';
import displayPrice from '../utils/displayPrice.utils';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalPrice } from '../store/cart/cart.selector';
import { FaRegFileAlt } from 'react-icons/fa';
import { clearCart } from '../store/cart/cartSlice';

type TStripeCheckoutForm = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

const ifValidCardElement = (
  card: StripeElement | null
): card is StripeElement => card !== null;

const StripeCheckoutForm = ({
  openModal,
  setOpenModal,
}: TStripeCheckoutForm) => {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const amount = useSelector(selectTotalPrice);

  // Stripe stuff
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);

    const { data } = await axios.post(
      '/.netlify/functions/create-payment-intent',
      { amount: amountToPay(amount) }, // body
      { headers: { 'Content-Type': 'application/json' } }
    );
    const clientSecret = data.clientSecret;

    const cardDetails = elements.getElement(CardElement);

    if (!ifValidCardElement(cardDetails)) return; // type guard

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: user?.name,
        },
      },
    });

    if (paymentResult.error) {
      toast.error(paymentResult.error.message as string);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        setIsLoading(false);
        setSucceeded(true);
        toast.success('Payment Successful');
      }
    }
  };

  const closeModal = () => {
    setOpenModal(false);
    dispatch(clearCart());
  };

  return (
    <Modal dismissible show={openModal} onClose={closeModal}>
      <Modal.Header>Credit Card Payment</Modal.Header>
      <Modal.Body>
        {/* //TODO: pretty up */}
        <FormContainer onSubmit={paymentHandler}>
          <article className='tracking-wide mb-10'>
            <h4 className='font-bold capitalize mb-6 text-xl text-[#495057]'>
              Hello, {user?.name}
            </h4>
            <p className='text-[#868e96] text-lg'>
              Your total is&nbsp;
              <span className='text-primary mb-1'>{displayPrice(amount)}</span>
            </p>
          </article>

          <div className='text-[#868e96] text-lg mb-8 mr-auto flex items-end'>
            <p>Test Card Number:</p>
            <p className='bg-[#ced4da]  py-1 px-3 rounded-md ml-2 text-[1rem] flex items-center gap-4'>
              <span>{TEST_CREDIT_CARD_NUMBER}</span>
              <span
                className='inline-block fit-conten hover:text-primary cursor-pointer'
                onClick={() => saveToClipboard(TEST_CREDIT_CARD_NUMBER)}
              >
                <FaRegFileAlt className='w-5 h-5' />
              </span>
            </p>
          </div>

          <CardElement id='card-element' options={cardStyle} />

          {/* button */}
          <button
            disabled={isLoading || succeeded || !stripe || !elements}
            id='submit'
          >
            <span id='button-text'>
              {isLoading ? (
                <div className='spinner' id='spinner'></div>
              ) : (
                'Pay now'
              )}
            </span>
          </button>

          {/* Show a success message upon completion */}
          <p
            className={
              succeeded ? 'result-message text-center' : 'result-message hidden'
            }
          >
            Payment succeeded, see the result in your
            <a href={`https://dashboard.stripe.com/test/payments`}>
              Stripe dashboard.
            </a>
          </p>
        </FormContainer>
      </Modal.Body>
    </Modal>
  );
};
export default StripeCheckoutForm;

const FormContainer = styled.form`
  form {
    width: 30vw;
    min-width: 500px;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px;
  }

  #card-element {
    border-radius: 4px 4px 0 0;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }

  .result-message {
    line-height: 22px;
    font-size: 16px;
    margin-top: 1rem;
  }
  .result-message a {
    color: rgb(89, 111, 214);
    font-weight: 600;
    text-decoration: none;
    padding-inline: 4px;
  }

  #payment-message {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    padding-top: 12px;
    text-align: center;
  }

  #payment-element {
    margin-bottom: 24px;
  }

  /* Buttons and links */
  button {
    background: #5469d4;
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }

  button:hover {
    filter: contrast(115%);
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }

  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }

  .spinner:before,
  .spinner:after {
    position: absolute;
    content: '';
  }

  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }

  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }

  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
      min-width: initial;
    }
  }
`;
