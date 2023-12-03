import { FC } from 'react';
import { Link } from 'react-router-dom';
import { type Product } from '../type';
import displayPrice from '../utils/displayPrice.utils';
import { useSelector } from 'react-redux';
import { selectIsProductsLoading } from '../store/products/products.selector';
import CardSkeleton from './CardSkeleton';
import { LiaShippingFastSolid } from 'react-icons/lia';

type ProductProps = {
  product: Product;
};
const ProductCard: FC<ProductProps> = ({ product }) => {
  const isLoading = useSelector(selectIsProductsLoading);

  const {
    id,
    name,
    description,
    price,
    featured: discountPercentage,
    image,
  } = product;

  if (isLoading) {
    return <CardSkeleton style='vartical' />;
  }

  return (
    <Link
      to={`/products/${id}`}
      className='card md:w-[300px] shadow-xl hover:shadow-2xl transition duration-300 bg-primary-content '
    >
      <figure>
        <img
          src={image.url}
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
  );
};
export default ProductCard;
