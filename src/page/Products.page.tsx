import { Filter, PathBar, ProductsContainer } from '../components';

const Products = () => {
  return (
    <section className='py-8'>
      <PathBar submenu={{ path: 'products', name: 'Products' }} />
      <div className='grid grid-cols-[1fr_3fr] '>
        <div className='border'>
          <Filter />
        </div>
        <div className='border'>
          <ProductsContainer />
        </div>
      </div>
    </section>
  );
};
export default Products;
