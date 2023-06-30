import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';

export default function RightIcons() {
  return (
    <>
      <div className='w-[44px] text-[44px] text-icon-brown hover:text-icon-hover-brown cursor-pointer relative'>
        <BsCart3 />
        <div className='w-[35px] h-[35px] bg-cart-qty-brown rounded-[50%] text-white text-[16px] flex items-center justify-center absolute bottom-[-5px] right-[-10px]'>
          1
        </div>
      </div>
      <div className='w-[44px] text-[44px] text-icon-brown hover:text-icon-hover-brown cursor-pointer'>
        <CgProfile />
      </div>
    </>
  );
}
