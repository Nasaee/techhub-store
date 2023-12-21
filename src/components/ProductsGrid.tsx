import { FC } from 'react';
import { TProduct } from '../utils/type';
import Card from './Card';

const ProductsGrid: FC<{ products: TProduct[] }> = ({ products }) => {
  return (
    <div className='grid gap-5 gap-y-9 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-rows-1 align-center justify-items-center w-full'>
      {products.map((product) => (
        <Card key={product.id} product={product} cardStyle='vertical' />
      ))}
    </div>
  );
};
export default ProductsGrid;
