import FooterCard from './footerCard';
import { Link } from 'react-router-dom';
import storeIcon from '../assets/logo.webp';
const Footer = () => {
  return (
    <footer className='bg-neutral p-10 pt-24'>
      <div className='grid md:grid-cols-2 lg:grid-cols-4  gap-y-6 justify-center pb-12 border-b border-[#868e96]'>
        <FooterCard
          icon='truck'
          header='Free shipping'
          description='with minimum over 3,000.-'
        />
        <FooterCard
          icon='time'
          header='3 hour dalivery'
          description='Bangkok and Servie areas'
        />
        <FooterCard
          icon='store'
          header='Click & Collect'
          description='380 Branches Nationwide'
        />
        <FooterCard
          icon='return'
          header='Easy Return/Refunds'
          description='7 day Return*'
        />
      </div>

      <div className='grid md:grid-cols-2 justify-center lg:flex lg:justify-start lg:gap-[6rem] text-neutral-content mt-8'>
        <Link to='/' className='hidden lg:block w-48'>
          <img src={storeIcon} alt='store logo' />
        </Link>
        <nav className='flex flex-col gap-4 mb-10 '>
          <header className='footer-title'>Company</header>
          <Link to='/about-us' className='link link-hover'>
            About us
          </Link>
          <a className='link link-hover'>Contact</a>
          <span>
            <span>Phone : </span>
            <a href='tel:+66 02 123 4567' className='link link-hover'>
              (+66) 02 123 4567
            </a>
          </span>
          <span>
            <span>Email : </span>
            <a className='link link-hover'>techHub_official@mail.com</a>
          </span>
        </nav>
        <nav className='flex flex-col gap-4 mb-10 max-w-md'>
          <header className='footer-title'>Legal</header>
          <a className='link link-hover'>Terms and Conditions</a>
          <a className='link link-hover'>Return policy</a>
          <a className='link link-hover'>Refunds policy</a>
          <a className='link link-hover'>Waranty policy / Claim Notification</a>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
