import { FC, useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';

type DropdownProps = {
  name: string;
  option: string[];
};

const Dropdown: FC<DropdownProps> = ({ name, option }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
      {isDropdownOpen && (
        <ul className={'mt-2 mb-4 text-lg'}>
          {option.map((item) => (
            <li
              key={item}
              className='p-1 pl-6 capitalize hover:bg-primary hover:text-base-100 tracking-wide transition-all duration-300'
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Dropdown;
