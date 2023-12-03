import { FC } from 'react';

const SkeletonStyle = {
  vartical: 'grid grid-rows-2 w-52',
  horizontal: 'grid grid-cols-2 w-full',
} as const;

const CardSkeleton: FC<{ style: keyof typeof SkeletonStyle }> = ({ style }) => {
  return (
    <div className={`${SkeletonStyle[style]} gap-4`}>
      <div className='skeleton h-32 w-full'></div>
      <div className='flex flex-col gap-4'>
        <div className='skeleton h-4 w-28'></div>
        <div className='skeleton h-4 w-full'></div>
        <div className='skeleton h-4 w-full'></div>
      </div>
    </div>
  );
};
export default CardSkeleton;
