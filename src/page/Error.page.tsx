import { Link } from 'react-router-dom';
import errorPageImg from '../assets/error404.svg';
import { Navbar } from '../components';

const ErrorPage = () => {
  return (
    <div className=' align-element flex flex-col items-center justify-center gap-16 h-screen'>
      <img src={errorPageImg} alt='error' className='w-[50%]' />
      <p className='text-4xl text-red-500 font-bold tracking-wider'>
        Sorry, Page not found !
      </p>
      <button className='btn btn-error uppercase tracking-wider'>
        <Link to='/'>Back to Home</Link>
      </button>
    </div>
  );
};
export default ErrorPage;
