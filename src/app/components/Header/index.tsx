import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';

interface Category {
  label: '女裝' | '男裝' | '配件';
  route: 'women' | 'men' | 'accessories';
}

const categories: Category[] = [
  { label: '女裝', route: 'women' },
  { label: '男裝', route: 'men' },
  { label: '配件', route: 'accessories' },
];
export default function Header() {
  return (
    <div className='w-full'>
      <div className='box-border h-[100px] flex justify-between item-center pl-[60px] pr-[54px] py-[26px]'>
        <div className='w-[258px] h-full bg-logo mr-[57px]'></div>
        <div className='flex justify-between items-center h-full w-[450px] mr-auto'>
          {categories.map((category, index) => (
            <>
              <div
                key={`${category}${index}`}
                className={`w-full text-center text-[20px] tracking-[30px] indent-[30px] leading-[28px] border-r ${
                  index === categories.length - 1
                    ? null
                    : 'border-custom-grey border-solid'
                }`}
              >
                {category.label}
              </div>
            </>
          ))}
        </div>
        <div className='flex h-full gap-[42px]'>
          <div className='w-[214px] h-[44px] flex items-center border border-solid border-custom-grey rounded-[20px] pl-[20px] pr-[10px]'>
            <input className='w-full h-[24px] outline-none text-[20px] text-custom-brown' />
            <div className='h-full w-[44px] shrink-0 bg-searchIcon'></div>
          </div>
          <div className='w-[44px] text-[44px] text-icon-brown hover:text-icon-hover-brown cursor-pointer relative'>
            <BsCart3 />
            <div className='w-[35px] h-[35px] bg-cart-qty-brown rounded-[50%] text-white text-[16px] flex items-center justify-center absolute bottom-[-5px] right-[-10px]'>
              1
            </div>
          </div>
          <div className='w-[44px] text-[44px] text-icon-brown hover:text-icon-hover-brown cursor-pointer'>
            <CgProfile />
          </div>
        </div>
      </div>
      <div className='h-[40px] bg-custom-grey'></div>
    </div>
  );
}
