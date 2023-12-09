import { useSelector } from 'react-redux';
import Dropdown from './Dropdown';
import {
  selectBrands,
  selectCategories,
  selectProcessor,
} from '../store/products/products.selector';

const Filters = () => {
  const categories = useSelector(selectCategories);
  const brand = useSelector(selectBrands);
  const processor = useSelector(selectProcessor);

  return (
    <section>
      <Dropdown name='categories' option={categories} style='list' />
      <Dropdown name='brand' option={brand} style='list' />
      <Dropdown name='processor' option={processor} style='list' />
      <Dropdown name='price' style='min_max' />
    </section>
  );
};
export default Filters;
