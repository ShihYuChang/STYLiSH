import Copywrite from './Copywrite';
import Icons from './Icons';
import Menu from './Menu';

export default function Footer() {
  return (
    <div className='w-full h-[146px] xl:h-[115px] bg-[#313538] text-[#d3d3d3] flex flex-col xl:flex-row items-center justify-center'>
      <div className='flex items-center justify-center'>
        <Menu />
        <Icons />
      </div>
      <Copywrite />
    </div>
  );
}
