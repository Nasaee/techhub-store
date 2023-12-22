import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import ImageGallery from 'react-image-gallery';

import displayPrice, { discountPice } from '../utils/displayPrice.utils';
import { IoShieldOutline } from 'react-icons/io5';
import { HiMinus, HiPlus } from 'react-icons/hi2';
import { selectSingleProduct } from '../store/products/products.selector';
import { addToCart } from '../store/cart/cartSlice';
import { ErrorPage } from '.';

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = useSelector(selectSingleProduct(id as string));

  if (!product) {
    return <ErrorPage />;
  }

  const {
    name,
    images,
    price,
    brand,
    description,
    warranty,
    featured,
    stock,
    colors,
    memory,
  } = product;

  const [pickedStorage, setPickedStorage] = useState(0);
  const [pickedColors, setPickedColors] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = useCallback(() => {
    const pickOptions = {
      id,
      name,
      price: discountPice(price[pickedStorage], +featured),
      color: pickedColors,
      quantity,
      brand,
      storage: memory[pickedStorage],
      image: images[0].url,
      stock,
    };
    dispatch(addToCart(pickOptions));
  }, [
    price,
    id,
    name,
    pickedStorage,
    pickedColors,
    quantity,
    brand,
    memory,
    images,
  ]);

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

  const updateQuantity = useCallback(
    (type: 'increase' | 'decrease') => {
      if (type === 'increase') {
        setQuantity((prev) => {
          if (prev >= stock) return prev;
          return prev + 1;
        });
      }

      if (type === 'decrease') {
        setQuantity((prev) => {
          if (prev <= 1) return prev;
          return prev - 1;
        });
      }
    },
    [stock]
  );

  const displayImages = images.map((image) => {
    return {
      original: image.url,
      thumbnail: image.url,
    };
  });

  console.log(quantity < 2);

  return (
    <article className='grid grid-cols-1 lg:grid-cols-2 gap-10 pt-12 pb-20'>
      <div>
        <ImageGallery items={displayImages} />
      </div>
      <div>
        <h3 className='text-xl font-bold tracking-wider mb-1'>{name}</h3>
        <p className='text-sm text-[#adb5bd] mb-3'>Brand: {brand}</p>
        <p className='mb-3  text-sm'>
          <span className='text-red-600 ml-1'>{name}</span>&nbsp;&nbsp;
          <span className='text-[#868e96]'>{description}</span>
        </p>
        {/* Product Details */}
        <ul className='mb-3 text-md'>
          {productDetailsKey.map((key) => {
            const detailType = key.split('_').join(' ');
            return (
              <li key={key} className='mb-1'>
                <span
                  className={`${
                    detailType.length > 2 ? 'capitalize' : 'uppercase'
                  } font-semibold`}
                >{`${detailType}: `}</span>
                {product[key as keyof typeof product].toString()}
              </li>
            );
          })}
        </ul>
        {/* Storage */}
        <div className='mb-3'>
          <p className='mb-2 text-sm text-[#868e96] '>Capacity:</p>
          <div className='flex gap-3'>
            {memory.map((capacity: string, index: number) => (
              <button
                className={`btn text-md ${
                  index === pickedStorage ? 'btn-neutral' : 'btn-outline'
                }`}
                key={index}
                onClick={() => setPickedStorage(index)}
              >
                {capacity}
              </button>
            ))}
          </div>
        </div>
        {/* Colors */}
        <div className='mb-6'>
          <p className='mb-2 text-sm text-[#868e96]'>
            Color{colors.length > 1 && 's'}:
          </p>
          <div className='flex gap-3'>
            {colors.map((color) => {
              return (
                <input
                  type='button'
                  key={color}
                  className={`w-8 h-8 rounded-full cursor-pointer ${
                    color === pickedColors && 'ring-4'
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setPickedColors(color)}
                ></input>
              );
            })}
          </div>
        </div>
        {/* Price */}
        <div className='mb-3'>
          <p className='text-4xl text-red-500'>
            {displayPrice(+price[pickedStorage], +featured)}
          </p>
          {featured && (
            <p className='mt-1'>
              <del>{displayPrice(+price[pickedStorage])}</del>
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
        <div className='flex items-center gap-6 mb-10'>
          <span className='text-sm text-[#868e96] '>Quantity:</span>
          <div className='flex items-center gap-4'>
            <button
              className={`${quantity <= 1 ? 'text-[#dee2e6]' : 'text-black'}`}
              onClick={() => updateQuantity('decrease')}
            >
              <HiMinus />
            </button>
            <input
              type='number'
              inputMode='numeric'
              pattern='[0-9]*'
              className='w-16 h-10 p-1 text-center'
              value={quantity}
              onChange={(e) => setQuantity(+e.target.value)}
            />
            <button
              className={`${
                quantity >= stock ? 'text-[#dee2e6]' : 'text-black'
              }`}
              onClick={() => updateQuantity('increase')}
            >
              <HiPlus />
            </button>
          </div>
        </div>
        <button
          className='btn btn-primary text-lg uppercase'
          onClick={() => handleAddToCart()}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
};
export default SingleProduct;
