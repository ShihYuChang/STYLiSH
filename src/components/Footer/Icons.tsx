import { Variants } from '@/utils/types';

const icons: string[] = ['line', 'twitter', 'facebook'];

export default function Icons() {
  const IconVariants: Variants = {
    line: 'bg-line',
    twitter: 'bg-twitter',
    facebook: 'bg-facebook',
  };
  return (
    <div className='flex gap-[14px] xl:gap-[30px] h-[20px] xl:h-[50px] xl:mr-[30px]'>
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`${IconVariants[icon]} w-[20px] xl:w-[50px] cursor-pointer bg-contain`}
        />
      ))}
    </div>
  );
}
