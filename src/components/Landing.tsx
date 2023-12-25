import Hero from './Hero';
import FeaturedProducts from './FeaturedProducts';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/helper.utils';

const Landing = () => {
  return (
    <div className='pb-20'>
      <Hero />
      <FeaturedProducts />
      <div className='flex justify-center mt-24'>
        <Link
          to='/products'
          className='btn btn-primary uppercase tracking-widest'
          onClick={scrollToTop}
        >
          All Products
        </Link>
      </div>
    </div>
  );
};
export default Landing;
