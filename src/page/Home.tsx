import { Footer, Navbar } from '../components';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar />
      <section className='align-element'>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};
export default Home;
