import { FaRegUser } from 'react-icons/fa';
const User = () => {
  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className='flex items-center justify-center'>
        <FaRegUser className='icon text-primary' />
      </label>
      <ul
        tabIndex={0}
        className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};
export default User;
