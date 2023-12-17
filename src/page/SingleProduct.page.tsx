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
    <article className='h-screen grid grid-cols-2'>
      <div>
        <ImageGallery items={displayImages} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>Brand: {brand}</p>
        <p>
          <span>{name}</span>
          <span>{description}</span>
        </p>
        {/* Product Details */}
        <ul>
          {productDetailsKey.map((key) => {
            const detailType = key.split('_').join(' ');
            return (
              <li key={key}>
                <span>{`${detailType}: `}</span>
                {String(product[key as keyof TSingleProduct])}
              </li>
            );
          })}
        </ul>
        {/* Memory */}
        <div>
          <p>Capacity</p>
          {memory.map((capacity: string, index: number) => (
            <button className='btn btn-neutral' key={index}>
              {capacity}
            </button>
          ))}
        </div>
        {/* Colors */}
        <div>
          <p>Color{colors.length > 1 && 's'}</p>
          {colors.map((color) => {
            console.log(color);
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
    </article>
  );
};
export default SingleProduct;
