import { useSelector } from 'react-redux';

import Hero from './Hero';
import { selectFeaturedProducts } from '../store/products/products.selector';

const Landing = () => {
  const featuredProducts = useSelector(selectFeaturedProducts);

  console.log(featuredProducts);
  return (
    <div>
      <Hero />
      {/* Featured Products */}
    </div>
  );
};
export default Landing;
