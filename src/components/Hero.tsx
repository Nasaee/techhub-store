import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-24  items-center'>
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl '>
          We are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed felis
          eget velit aliquet sagittis id consectetur purus.
        </p>
        <Link
          to='/products'
          className='btn btn-primary mt-8 uppercase tracking-widest'
        >
          Shop Now
        </Link>
      </div>
      <div>products slider</div>
    </div>
  );
};
export default Hero;
