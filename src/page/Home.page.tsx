import { Footer, Navbar } from '../components';
import { Outlet, useNavigation } from 'react-router-dom';
import { fetchProductsStart } from '../store/products/productsSlice';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import Loading from '../components/Loading';

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  dispatch(fetchProductsStart());

  return (
    <>
      <Navbar />
      {isLoading ? (
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
