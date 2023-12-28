import { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { CartTotal } from '.';

const Checkout = () => {
  const [openModal, setOpenModal] = useState(false);
  const [shippingInformation, setShippingInformation] = useState({
    name: '',
    address: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setShippingInformation({ ...shippingInformation, [name]: value });
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          <form className='flex flex-col gap-4'>
            <label className='form-control w-full max-w-xs'>
              <div className='label'>
                <span className='label-text capitalize'>name</span>
              </div>
              <input
                type='text'
                name='name'
                required
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
                onChange={handleInputChange}
              ></textarea>
            </label>
            <>
              <button
                type='submit'
                className='btn btn-secondary mt-4 md:text-lg uppercase tracking-wide cursor-pointer'
                onClick={() => setOpenModal(true)}
              >
                place your order
              </button>
              <Modal
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
              >
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                  <div className='space-y-6'>
                    <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                      With less than a month to go before the European Union
                      enacts new consumer privacy laws for its citizens,
                      companies around the world are updating their terms of
                      service agreements to comply.
                    </p>
                    <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                      The European Union’s General Data Protection Regulation
                      (G.D.P.R.) goes into effect on May 25 and is meant to
                      ensure a common set of data rights in the European Union.
                      It requires organizations to notify users as soon as
                      possible of high-risk data breaches that could personally
                      affect them.
                    </p>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setOpenModal(false)}>I accept</Button>
                  <Button color='gray' onClick={() => setOpenModal(false)}>
                    Decline
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          </form>
        </div>

        <CartTotal showButton={false} />
      </div>
    </section>
  );
};
export default Checkout;
