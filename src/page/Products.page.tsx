import { PathBar } from '../components';

const Products = () => {
  return (
    <section>
      <PathBar submenu={{ path: 'products', name: 'Products' }} />
      <h1>Products</h1>
    </section>
  );
};
export default Products;
