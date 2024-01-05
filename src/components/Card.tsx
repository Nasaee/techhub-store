import { FC } from 'react';
import { TProduct } from '../utils/type';
import { Link } from 'react-router-dom';
import displayPrice from '../utils/displayPrice.utils';
import { LiaShippingFastSolid } from 'react-icons/lia';

type CardProps = {
  product: TProduct;
  cardStyle: 'horizontal' | 'vertical';
};

const Card: FC<CardProps> = ({ product, cardStyle }) => {
  const {
    id,
    name,
    description,
    price,
    featured: discountPercentage,
    images,
  } = product;

  const cardComponent = {
    vertical: (
      <Link
        to={`/products/${id}`}
        className='card md:w-[300px] shadow-xl hover:shadow-2xl transition duration-300 bg-primary-content '
      >
        <figure>
          <img
            src={images[0].url}
            alt={name}
            className='object-cover p-2 rounded-3xl'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>
            {name}
            <div className='badge badge-secondary'>NEW</div>
          </h2>
          <p>
            {description.length > 50
              ? `${description.slice(0, 50)}...`
              : description}
          </p>
          <div className='card-actions flex-col justify-start mt-3'>
            <span className='font-bold text-xl info-content'>
              {displayPrice(+price[0], +discountPercentage)}
            </span>

            {discountPercentage && (
              <span>
                <del>{displayPrice(+price[0])}</del>
              </span>
            )}
          </div>
        </div>

        <div className='absolute top-5 right-4 flex flex-col justify-center items-center gap-4 text-neutral'>
          <div className=' flex justify-center items-center w-10 h-10 bg-[#F4D03F] font-bold text-xs tracking-wider rounded-xl'>
            <span className='text-3xl'>0</span>%
          </div>
          <div className='flex flex-col justify-center items-center w-10 h-auto py-1 bg-[#F4D03F] rounded-xl '>
            <LiaShippingFastSolid className='icon' />
            <span className='text-xs'>Free</span>
          </div>
        </div>
        {discountPercentage && (
          <div className='absolute bottom-5 right-4 text-red-600 bg-[#F1C40F] p-[6px] rounded-md'>
            <i>{`-${discountPercentage}%`}</i>
          </div>
        )}
      </Link>
    ),

    horizontal: (
      <Link
        to={`/products/${id}`}
        key={id}
        className='card card-side grid grid-cols-1 md:grid-cols-2 h-full overflow-hidden border transition duration-300  max-w-[900px]'
      >
        <figure className='relative border-r'>
          <img src={images[0].url} alt={name} className='h-full object-cover' />
          <div className='absolute top-3 right-[-8px] flex flex-col place-items-start gap-4 text-neutral'>
            <div className=' flex justify-center items-center w-10 h-10 bg-[#F4D03F] font-bold text-xs tracking-wider rounded-xl'>
              <span className='text-3xl'>0</span>%
            </div>
            <div className='flex flex-col justify-center items-center w-auto h-auto p-[6px] bg-[#F4D03F] rounded-xl '>
              <span className='text-xs'>Free</span>
              <LiaShippingFastSolid className='icon relative' />
            </div>
          </div>
        </figure>
        {/* CARD BODY */}
        <div className='flex flex-col justify-between gap-4 p-8'>
          <div>
            <h2 className='card-title mb-4'>
              {name}
              <div className='badge badge-secondary'>NEW</div>
            </h2>
            <p>
              {description.length > 150
                ? `${description.slice(0, 150)}...`
                : description}
            </p>
          </div>

          <div className='card-actions flex justify-end items-end gap-3 relative'>
            {discountPercentage && (
              <span>
                <del>{displayPrice(+price[0])}</del>
              </span>
            )}
            <span className='font-bold text-xl info-content'>
              {displayPrice(+price[0], +discountPercentage)}
            </span>

            {discountPercentage && (
              <div className=' flex justify-end text-red-600 p-[6px] rounded-xl'>
                <i className='bg-[#F4D03F] px-2 rounded-lg'>{`-${discountPercentage}%`}</i>
              </div>
            )}
          </div>
        </div>
      </Link>
    ),
  };
  return cardComponent[cardStyle];
};

export default Card;
