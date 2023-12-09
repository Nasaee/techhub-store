import { FC, useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';

type DropdownProps = {
  name: string;
  option?: string[];
  style: 'list' | 'min_max';
};

const Dropdown: FC<DropdownProps> = ({ name, option, style }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownStyles = {
    list: (
      <ul className={'mt-2 mb-4 text-lg'}>
        {option?.map((item) => (
          <li key={name}>
            <button
              className='block w-full p-1 pl-6 text-start capitalize hover:bg-primary hover:text-base-100 tracking-wide transition-all duration-300'
              name={name}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    ),

    min_max: (
      <form className='grid grid-cols-[6rem_auto_6rem] items-center p-3 gap-4 border-b py-8'>
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='min-price' className='text-center uppercase'>
            min
          </label>
          <input
            type='number'
            name='min-price'
            id='min-price'
            defaultValue={1}
            className='rounded-lg text-center'
          />
        </div>
        <hr className='transform translate-y-[15px]' />
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='min-price' className='text-center uppercase'>
            mix
          </label>
          {/* TODO: Add default value for max with max price */}
          <input
            type='number'
            name='min-price'
            id='min-price'
            className='rounded-lg text-center'
          />
        </div>
      </form>
    ),
  };
  return (
    <div>
      <div
        className='flex justify-between items-center text-2xl text-primary capitalize tracking-wider border p-3 cursor-default'
        onClick={toggleDropdown}
      >
        {name}
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
