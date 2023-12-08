 import Hero from './Hero';
import FeaturedProducts from './FeaturedProducts';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <div className='flex justify-center mt-24'>
        <Link
          to='/products'
          className='btn btn-primary uppercase tracking-widest'
        >
          All Products
        </Link>
      </div>
    </div>
  );
};
export default Landing;
