import React, { useContext, useEffect } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { ProductContext } from '@/context/ProductContext';
import { getTotalCartQty } from '@/utils/functions';

export default function RightIcons() {
  const { cartQty, setCartQty } = useContext(ProductContext);

  useEffect(() => {
    setCartQty(getTotalCartQty());
  }, []);

  return (
    <>
      <div className='xl:block hidden w-[44px] text-[44px] text-[#514d4d] hover:text-[#a88261] cursor-pointer relative'>
        <BsCart3 />
        <div className='w-[35px] h-[35px] bg-[#8b572a] rounded-[50%] text-white text-[20px] flex items-center justify-center absolute bottom-[-5px] right-[-10px]'>
          {cartQty ?? 0}
        </div>
      </div>
      <div className='xl:block hidden w-[44px] text-[44px] text-[#514d4d] hover:text-[#a88261] cursor-pointer'>
        <CgProfile />
      </div>
    </>
  );
}
