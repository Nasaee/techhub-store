import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSingleProductStart } from '../store/single-product/single-productSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsSingleProductLoading,
  selectSingleProduct,
} from '../store/single-product/single-product.selector';
import Loading from '../components/Loading';
import ImageGallery from 'react-image-gallery';
import { TSingleProduct } from '../utils/type';
import displayPrice from '../utils/displayPrice.utils';
import { IoShieldOutline } from 'react-icons/io5';
import { HiMinus, HiPlus } from 'react-icons/hi2';

const SingleProduct = () => {
  const dispath = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispath(fetchSingleProductStart(id as string));
  }, [id]);

  const isSingleProductLoading = useSelector(selectIsSingleProductLoading);
  const product = useSelector(selectSingleProduct);

  if (!product || isSingleProductLoading) {
    return <Loading />;
  }

  const {
    id: productID,
    name,
    brand,
    category,
    stock,
    description,
    colors,
    price,
    featured,
    images,
    screen_size,
    cpu,
    cpu_details,
    display,
    memory,
    os,
    font_camera,
    back_camera,
    battety,
    weight,
    warranty,
  } = product;

  const productDetailsKey = Object.keys(product).filter((key) =>
    [
      'screen_size',
      'cpu_details',
      'display',
      'memory',
      'os',
      'font_camera',
      'back_camera',
      'battety',
      'weight',
      'warranty',
    ].includes(key)
  );

  const displayImages = images.map((image) => {
    return {
      original: image.url,
      thumbnail: image.url,
    };
  });

  return (
    <article className='grid grid-cols-2 gap-10 p-12'>
      <div>
        <ImageGallery items={displayImages} />
      </div>
      <div>
        <h3 className='text-2xl font-bold tracking-wider mb-1'>{name}</h3>
        <p className='text-sm text-[#adb5bd] mb-3'>Brand: {brand}</p>
        <p className='mb-3'>
          <span className='text-red-600 ml-1'>{name}</span>&nbsp;&nbsp;
          <span className='text-[#868e96]'>{description}</span>
        </p>
        {/* Product Details */}
        <ul className='mb-3'>
          {productDetailsKey.map((key) => {
            const detailType = key.split('_').join(' ');
            return (
              <li key={key}>
                <span
                  className={`${
                    detailType.length > 2 ? 'capitalize' : 'uppercase'
                  } font-semibold`}
                >{`${detailType}: `}</span>
                {String(product[key as keyof TSingleProduct])}
              </li>
            );
          })}
        </ul>
        {/* Memory */}
        <div className='mb-3'>
          <p className='mb-2'>Capacity</p>
          <div className='flex gap-3'>
            {memory.map((capacity: string, index: number) => (
              <button className='btn btn-neutral' key={index}>
                {capacity}
              </button>
            ))}
          </div>
        </div>
        {/* Colors */}
        <div className='mb-6'>
          <p className='mb-2'>Color{colors.length > 1 && 's'}</p>
          <div className='flex gap-3'>
            {colors.map((color) => {
              return (
                <input
                  type='button'
                  key={color}
                  className='w-8 h-8 rounded-full'
                  style={{ backgroundColor: color }}
                ></input>
              );
            })}
          </div>
        </div>
        {/* Price */}
        <div className='mb-3'>
          <p className='text-4xl text-red-500'>
            {displayPrice(+price[0], +featured)}
          </p>
          {featured && (
            <p className='mt-1'>
              <del>{displayPrice(+price[0])}</del>
            </p>
          )}
        </div>
        {/* waranty */}
        <div className='flex items-center gap-2 mb-6'>
          <IoShieldOutline />
          <span>
            {warranty} warranty Available<sup>*</sup>
          </span>
        </div>
        {/* quantity */}
        <div className='flex items-center gap-6 mb-6'>
          <span>Quantity</span>
          <div className='flex items-center gap-4'>
            <button>
              <HiMinus />
            </button>
            <input
              type='number'
              inputMode='numeric'
              pattern='[0-9]*'
              className='w-20 h-10 p-1 text-center'
            />
            <button>
              <HiPlus />
            </button>
          </div>
        </div>
        <button className='btn btn-primary text-xl'>Add to cart</button>
      </div>
    </article>
  );
};
export default SingleProduct;
