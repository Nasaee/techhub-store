import { Filters, PathBar, ProductsContainer } from '../components';

const Products = () => {
  return (
    <section className='py-8'>
      <PathBar submenu={{ path: 'products', name: 'Products' }} />
      <div className='grid grid-cols-[18rem_3fr] gap-6'>
        <div className='border-x border-b '>
          <Filters />
        </div>
        <div>
          <ProductsContainer />
        </div>
      </div>
    </section>
  );
};
export default Products;
