import React from 'react';
import { CgProfile } from 'react-icons/cg';

export default function Title() {
  return (
    <div className='w-full flex justify-center items-center tracking-[6.4px] leading-[38px] mb-[16px]'>
      會員登入
      <div className='text-[20px]'>
        <CgProfile />
      </div>
    </div>
  );
}
