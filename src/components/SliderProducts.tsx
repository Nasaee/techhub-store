import { Carousel } from 'flowbite-react';
import { useSelector } from 'react-redux';
import {
  selectAllProducts,
  selectIsProductsLoading,
} from '../store/products/products.selector';
import { Link } from 'react-router-dom';
import { Product } from '../type';
import displayPrice from '../utils/displayPrice.utils';
import { LiaShippingFastSolid } from 'react-icons/lia';
import CardSkeleton from './CardSkeleton';

const SliderProducts = () => {
  const allProducts = useSelector(selectAllProducts);
  const isLoading = useSelector(selectIsProductsLoading);

  if (isLoading) {
    return <CardSkeleton style='horizontal' />;
  }

  return (
    <div className='hidden xl:block w-full rounded-3xl p-3 bg-primary-content shadow-xl'>
      <Carousel slideInterval={3000} indicators={false} slide={false}>
        {allProducts.map((product: Product) => {
          const {
            id,
            name,
            image,
            description,
            price,
            featured: discountPercentage,
          } = product;

          return (
            <Link
              to={`/products/${product.id}`}
              key={id}
              className='card card-side grid grid-cols-2 h-full overflow-hidden'
            >
              <figure className='rounded-3xl'>
                <img
                  src={image.url}
                  alt={product.name}
                  className='rounded-3xl'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>
                  {name}
                  <div className='badge badge-secondary'>NEW</div>
                </h2>
                <p>
                  {description.length > 100
                    ? `${description.slice(0, 100)}...`
                    : description}
                </p>

                {discountPercentage && (
                  <div className='flex justify-end text-red-600 p-[6px] rounded-xl'>
                    <i className='bg-[#F4D03F] px-2 rounded-lg'>{`-${discountPercentage}%`}</i>
                  </div>
                )}

                <div className='card-actions flex justify-end items-end gap-3 '>
                  {discountPercentage && (
                    <span>
                      <del>{displayPrice(+price[0])}</del>
                    </span>
                  )}
                  <span className='font-bold text-xl info-content'>
                    {displayPrice(+price[0], +discountPercentage)}
                  </span>
                </div>
              </div>

              <div className='absolute top-2 right-[52%] flex flex-col place-items-start gap-4 text-neutral'>
                <div className=' flex justify-center items-center w-10 h-10 bg-[#F4D03F] font-bold text-xs tracking-wider rounded-xl'>
                  <span className='text-3xl'>0</span>%
                </div>
                <div className='flex flex-col justify-center items-center w-auto h-auto p-[6px] bg-[#F4D03F] rounded-xl '>
                  <span className='text-xs'>Free</span>
                  <LiaShippingFastSolid className='icon relative' />
                </div>
              </div>
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
};
export default SliderProducts;

{
  /* <Link
to={`/products/${product.id}`}
key={product.id}
className='card card-side flex bg-primary-content shadow-xl h-full overflow-hidden'
>
<figure className='w-[45%] pl-3 '>
  <img
    src={product.image.url}
    alt={product.name}
    className='object-cover rounded-3xl'
  />
</figure>
<div className='card-body'>
  <h2 className='card-title'>New movie is released!</h2>
  <p>Click the button to watch on Jetflix app.</p>
  <div className='card-actions justify-end'>
    <button className='btn btn-primary'>Watch</button>
  </div>
</div>
</Link> */
}
