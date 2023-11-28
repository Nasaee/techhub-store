import { useSelector } from 'react-redux';

import Hero from './Hero';
import FeaturedProducts from './FeaturedProducts';

const Landing = () => {
  return (
    <div>
      <Hero />
      {/* Featured Products */}
      <FeaturedProducts />
    </div>
  );
};
export default Landing;
