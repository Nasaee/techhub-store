import { useState } from 'react';
import StripeCheckoutForm from './StripeCheckoutForm';
import { CartTotal } from '.';

const Checkout = () => {
  const [shippingInformation, setShippingInformation] = useState({
    name: '',
    address: '',
  });
  const [openModal, setOpenModal] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setShippingInformation({ ...shippingInformation, [name]: value });
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenModal(true);
  };

  return (
    <section className='py-16'>
      <h2 className='text-3xl font-medium uppercase tracking-wider pb-6 border-b-2 mb-12'>
        place your order
      </h2>
      <div className='grid md:grid-cols-[2fr_1fr] gap-6'>
        <div>
          <h3 className='text-2xl capitalize tracking-wide mb-3'>
            shipping information
          </h3>
          <form className='flex flex-col gap-4' onSubmit={handleSubmitForm}>
            <label className='form-control w-full max-w-xs'>
              <div className='label'>
                <span className='label-text capitalize'>name</span>
              </div>
              <input
                type='text'
                name='name'
                required
                // TODO: remove value letter
                value='test'
                className='input input-bordered w-full max-w-xs'
                onChange={handleInputChange}
              />
            </label>
            <label className='form-control'>
              <div className='label'>
                <span className='label-text capitalize'>address</span>
              </div>
              <textarea
                name='address'
                className='textarea textarea-bordered h-24'
                required
                // TODO: remove value letter
                value='test'
                onChange={handleInputChange}
              ></textarea>
            </label>

            <button
              type='submit'
              className='btn btn-secondary mt-4 md:text-lg uppercase tracking-wide cursor-pointer'
            >
              place your order
            </button>

            {/* modal */}
            <StripeCheckoutForm
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          </form>
        </div>

        <CartTotal showButton={false} />
      </div>
    </section>
  );
};
export default Checkout;
