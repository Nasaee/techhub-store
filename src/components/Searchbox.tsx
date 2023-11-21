import { CiSearch } from 'react-icons/ci';
const Searchbar = () => {
  return (
    <form className='flex-auto flex'>
      <input
        type='text'
        placeholder='Search your item, brand...'
        className='rounded-s-lg px-5 text-xs md:text-sm xl:text-base placeholder-base-400 w-full'
      />
      <button type='submit' className='btn pt-0 rounded-s-none bg-primary'>
        <CiSearch className='w-8 h-8 text-base-100' />
      </button>
    </form>
  );
};
export default Searchbar;
