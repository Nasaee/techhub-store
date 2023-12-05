import { FC } from 'react';
import { Product } from '../type';
import Card from './Card';

const ProductsList: FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className='flex flex-col gap-y-6'>
      {products.map((product) => (
        <Card key={product.id} product={product} cardStyle='horizontal' />
      ))}
    </div>
  );
};
export default ProductsList;
