import { Footer, Navbar } from '../components';
import { Outlet } from 'react-router-dom';
import { fetchProductsStart } from '../store/products/productsSlice';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';

const Home = () => {
  const dispatch = useDispatch();

  dispatch(fetchProductsStart());

  return (
    <>
      <Navbar />
      <section className='align-element min-h-screen'>
        <Outlet />
      </section>
      <Toaster position='top-center' reverseOrder={true} />
      <Footer />
    </>
  );
};
export default Home;
