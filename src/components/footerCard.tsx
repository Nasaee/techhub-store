import { LiaShippingFastSolid } from 'react-icons/lia';
import { BsClockHistory } from 'react-icons/bs';
import { PiBuildingsLight } from 'react-icons/pi';
import { GiReturnArrow } from 'react-icons/gi';
import { FC } from 'react';

const FooterIcon = {
  truck: <LiaShippingFastSolid className='w-16 h-16' />,
  time: <BsClockHistory className='w-16 h-16' />,
  store: <PiBuildingsLight className='w-16 h-16' />,
  return: <GiReturnArrow className='w-16 h-16' />,
} as const;

type footerCardProps = {
  icon: keyof typeof FooterIcon;
  header: string;
  description: string;
};

const FooterCard: FC<footerCardProps> = ({ icon, header, description }) => {
  return (
    <div className='flex gap-5 px-10 md:border-x border-[#868e96] text-neutral-content'>
      {FooterIcon[icon]}
      <div className='my-auto'>
        <header className='text-base font-bold uppercase tracking-widest'>
          {header}
        </header>
        <p className='text-[#868e96] text-sm tracking-wider'>{description}</p>
      </div>
    </div>
  );
};
export default FooterCard;
