import { FC } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../type';

const ProductsGrid: FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className='py-12 grid gap-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 align-center justify-items-center'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductsGrid;
