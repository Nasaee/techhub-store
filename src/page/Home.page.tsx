import { Footer, Navbar } from '../components';
import { Outlet } from 'react-router-dom';
import { fetchProductsStart } from '../store/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { useEffect, useRef } from 'react';
import { selectIsProductsLoading } from '../store/products/products.selector';
import Loading from '../components/Loading';

const Home = () => {
  const dispatch = useDispatch();
  const isProductsLoading = useSelector(selectIsProductsLoading);

  // use for call api only once at app mount ( useEffect call twice in strict mode)
  const efffectRun = useRef(false);

  useEffect(() => {
    if (efffectRun.current === false) {
      dispatch(fetchProductsStart());
      return () => {
        efffectRun.current = true;
      };
    }
  }, []);

  return (
    <>
      <Navbar />
      {isProductsLoading ? (
        <Loading />
      ) : (
        <section className='align-element min-h-screen'>
          <Outlet />
        </section>
      )}

      <Toaster position='top-center' reverseOrder={true} />
      <Footer />
    </>
  );
};
export default Home;
