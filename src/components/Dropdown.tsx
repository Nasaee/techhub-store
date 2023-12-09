import { ChangeEvent, FC, useCallback, useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilters,
  selectMaxPrice,
  selectMinPrice,
} from '../store/products/products.selector';
import { updateFilters } from '../store/products/productsSlice';
import toast from 'react-hot-toast';

type DropdownProps = {
  groupName: string;
  option?: string[];
  style: 'list' | 'min_max';
};

const Dropdown: FC<DropdownProps> = ({ groupName, option, style }) => {
  const dispatch = useDispatch();

  const defaultMaxPrice = useSelector(selectMaxPrice);
  const defaultMinPrice = useSelector(selectMinPrice);
  const filters = useSelector(selectFilters);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(defaultMinPrice.toString());
  const [maxPrice, setMaxPrice] = useState(defaultMaxPrice.toString());

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleUpdateFilter = useCallback(
    (name: string, value: string | number) => {
      dispatch(updateFilters({ filterName: name, value }));
    },
    []
  );

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValue = +value < 1 ? '1' : value;
    if (name === 'min_price') {
      setMinPrice(newValue);
    }
    if (name === 'max_price') {
      setMaxPrice(newValue);
    }
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (+minPrice > +maxPrice)
      toast.error('min price must be less than max price');

    dispatch(updateFilters({ filterName: 'min_price', value: +minPrice }));
    dispatch(updateFilters({ filterName: 'max_price', value: +maxPrice }));
  };

  const dropdownStyles = {
    list: (
      <ul className={'mt-2 mb-4 text-lg'}>
        {option?.map((item) => {
          return (
            <li key={item}>
              <button
                className={`block w-full p-1 pl-6 text-start capitalize hover:bg-primary hover:text-base-100 tracking-wide transition-all duration-300 ${
                  filters[groupName.toLowerCase() as keyof typeof filters] ===
                  item
                    ? 'bg-primary text-base-100'
                    : ''
                }`}
                name={item}
                onClick={() => handleUpdateFilter(groupName, item)}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    ),

    min_max: (
      <form className='border-b p-3 text-center' onSubmit={handleFormSubmit}>
        <div className='grid grid-cols-[6rem_auto_6rem] items-center  gap-4  py-8'>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='min-price' className='text-center uppercase'>
              min
            </label>
            <input
              type='number'
              name='min_price'
              value={minPrice}
              onChange={handleInputChange}
              className='rounded-lg text-center'
            />
          </div>
          <hr className='transform translate-y-[15px]' />
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='min-price' className='text-center uppercase'>
              max
            </label>

            <input
              type='number'
              name='max_price'
              className='rounded-lg text-center'
              value={maxPrice}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button
          type='submit'
          className='block w-[80%] btn btn-secondary mx-auto'
        >
          Apply
        </button>
      </form>
    ),
  };
  return (
    <div>
      <div
        className='flex justify-between items-center text-xl text-primary capitalize tracking-wider border p-3 cursor-default'
        onClick={toggleDropdown}
      >
        {groupName}
        <span>
          {isDropdownOpen ? (
            <CiCircleMinus className='text-3xl' />
          ) : (
            <CiCirclePlus className='text-3xl' />
          )}
        </span>
      </div>
      {isDropdownOpen && style === 'list' && dropdownStyles[style]}
      {isDropdownOpen && style === 'min_max' && dropdownStyles[style]}
    </div>
  );
};
export default Dropdown;
