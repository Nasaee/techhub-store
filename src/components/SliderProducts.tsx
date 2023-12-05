import { Carousel } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../store/products/products.selector';
import Card from './Card';

const SliderProducts = () => {
  const allProducts = useSelector(selectAllProducts);

  return (
    <div className='hidden xl:block w-full rounded-3xl p-4 bg-primary-content shadow-xl'>
      <Carousel slideInterval={3000} indicators={false}>
        {allProducts.map((product) => (
          <Card key={product.id} product={product} cardStyle='horizontal' />
        ))}
      </Carousel>
    </div>
  );
};
export default SliderProducts;
