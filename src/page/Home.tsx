import { Footer, Navbar } from '../components';
import { Outlet } from 'react-router-dom';
import { fetchProductsStart } from '../store/products/productsSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  dispatch(fetchProductsStart());

  return (
    <>
      <Navbar />
      <section className='align-element py-20 min-h-screen'>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};
export default Home;
