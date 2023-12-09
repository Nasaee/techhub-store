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
      <Dropdown name='categories' option={categories} />
      <Dropdown name='brand' option={brand} />
      <Dropdown name='processor' option={processor} />
      <form className='grid grid-cols-[6rem_auto_6rem] items-center p-3 gap-4'>
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='min-price' className='text-center'>
            min
          </label>
          <input type='number' name='min-price' id='min-price' />
        </div>
        <hr className='transform translate-y-[15px]' />
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='min-price' className='text-center'>
            mix
          </label>
          <input type='number' name='min-price' id='min-price' />
        </div>
      </form>
    </section>
  );
};
export default Filters;
