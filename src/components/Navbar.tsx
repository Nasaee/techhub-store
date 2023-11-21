import logo from '../assets/logo.webp';
import User from './UserSign';
import Menu from './Menu';
import Searchbox from './Searchbox';
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';
import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <nav className='navbar bg-base-300 py-1'>
      <div className='flex gap-3 w-11/12 mx-auto'>
        {/* Store icon */}
        <Link to='/'>
          <img
            src={logo}
            alt='web icon'
            className='w-14 h-14 hidden lg:block'
          />
        </Link>

        {/* Menu */}
        <Menu />

        {/* Nav Links */}
        <NavLinks />

        {/* Search bar */}
        <Searchbox />

        {/* Cart */}
        <CartIcon />

        <div className='hidden md:flex justify-between items-center gap-5 px-5'>
          {/* User */}
          <User />

          {/* Toggle Theme */}
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
