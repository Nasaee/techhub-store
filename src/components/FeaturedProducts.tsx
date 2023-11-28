import { useSelector } from 'react-redux';
import { selectFeaturedProducts } from '../store/products/products.selector';

import ProductsGrid from './ProductsGrid';
import SectionTitle from './SectionTitle';

const FeaturedProducts = () => {
  const featuredProducts = useSelector(selectFeaturedProducts);

  return (
    <div className='pt-24'>
      <SectionTitle title='featured products' />
      <ProductsGrid products={featuredProducts} />
    </div>
  );
};
export default FeaturedProducts;
