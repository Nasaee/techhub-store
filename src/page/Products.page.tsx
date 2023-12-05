import { useSelector } from 'react-redux';
import { Filter, PathBar, Sort } from '../components';
import ProductsGrid from '../components/ProductsGrid';
import { selectFilteredProducts } from '../store/products/products.selector';

const Products = () => {
  const filteredProducts = useSelector(selectFilteredProducts);
  return (
    <section className='py-8'>
      <PathBar submenu={{ path: 'products', name: 'Products' }} />
      <div className='grid grid-cols-[1fr_3fr]'>
        <div className='border'>
          <Filter />
        </div>
        <div className='border'>
          <Sort />
          <ProductsGrid products={filteredProducts} />
        </div>
      </div>
    </section>
  );
};
export default Products;
