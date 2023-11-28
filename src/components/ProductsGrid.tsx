import { useSelector } from 'react-redux';
import { selectFeaturedProducts } from '../store/products/products.selector';

import ProductCard from './ProductCard';

const ProductsGrid = () => {
  const featuredProducts = useSelector(selectFeaturedProducts);

  return (
    <div className='py-12 grid gap-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 align-center justify-items-center'>
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductsGrid;
