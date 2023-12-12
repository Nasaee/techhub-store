import { useCallback, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { resetFilters, updateFilters } from '../store/products/productsSlice';
import { useNavigate } from 'react-router-dom';
const Searchbar = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
  };

  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!searchInput) return;

      dispath(resetFilters());
      navigate('/products');
      dispath(updateFilters({ filterName: 'text', value: searchInput }));
    },
    [searchInput]
  );

  return (
    <form className='flex-auto flex' onSubmit={handleFormSubmit}>
      <input
        type='text'
        placeholder='Search your item, brand...'
        className='rounded-s-lg px-4 text-xs md:text-sm xl:text-base placeholder-base-400 w-full'
        value={searchInput}
        onChange={handleInputChange}
      />
      <button type='submit' className='btn pt-0 rounded-s-none bg-primary'>
        <CiSearch className='w-8 h-8 text-base-100' />
      </button>
    </form>
  );
};
export default Searchbar;
