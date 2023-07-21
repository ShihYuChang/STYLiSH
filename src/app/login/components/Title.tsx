import React from 'react';
import { CgProfile } from 'react-icons/cg';

export default function Title() {
  return (
    <div className='w-full flex justify-center items-center mb-[16px] xl:mb-[26px]'>
      <div className='xl:text-[24px] tracking-[6.4px] leading-[38px] font-bold'>
        會員登入
      </div>
      <div className='text-[20px] xl:text-[30px]'>
        <CgProfile />
      </div>
    </div>
  );
}
