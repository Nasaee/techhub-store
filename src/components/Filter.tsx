import { useDispatch, useSelector } from 'react-redux';
import Dropdown from './Dropdown';
import {
  selectBrands,
  selectCategories,
  selectFilters,
  selectProcessor,
} from '../store/products/products.selector';
import { filterProducts, resetFilters } from '../store/products/productsSlice';
import { useEffect } from 'react';

const Filters = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const brand = useSelector(selectBrands);
  const processor = useSelector(selectProcessor);
  const filters = useSelector(selectFilters);

  // filter new products list when filters change
  useEffect(() => {
    dispatch(filterProducts());
  }, [filters]);

  return (
    <section>
      <button
        className='block btn btn-primary w-[80%] mx-auto my-4 text-lg uppercase'
        onClick={() => dispatch(resetFilters())}
      >
        reset
      </button>
      <Dropdown groupName='categories' option={categories} style='list' />
      <Dropdown groupName='brand' option={brand} style='list' />
      <Dropdown groupName='processor' option={processor} style='list' />
      <Dropdown groupName='price' style='min_max' />
    </section>
  );
};
export default Filters;
