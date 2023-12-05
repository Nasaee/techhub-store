import { FC } from 'react';
import { Product } from '../type';
import Card from './Card';

const ProductsGrid: FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className='grid gap-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(300px,1fr))] xl:grid-cols-[repeat(4,minmax(300px,1fr))] align-center justify-items-center'>
      {products.map((product) => (
        <Card key={product.id} product={product} cardStyle='vertical' />
      ))}
    </div>
  );
};
export default ProductsGrid;
