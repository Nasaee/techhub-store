import { Footer, Navbar } from '../components';
import { Outlet, useNavigation } from 'react-router-dom';
import { fetchProductsStart } from '../store/products/productsSlice';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
<<<<<<< HEAD
import { useEffect } from 'react';
=======
>>>>>>> parent of a87d004 (Revert "create signup page markup")
import Loading from '../components/Loading';

const Home = () => {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const isLoading = useNavigation().state === 'loading';
=======
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
>>>>>>> parent of a87d004 (Revert "create signup page markup")

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

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
