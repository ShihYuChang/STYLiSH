import React from 'react';
import { CiSearch } from 'react-icons/ci';

export default function SearchBar() {
  return (
    <div className='w-[214px] h-[44px] flex items-center border border-solid border-custom-grey rounded-[20px] pl-[20px] pr-[10px]'>
      <input
        className='w-full h-[24px] outline-none text-[20px] text-custom-brown'
        placeholder='搜尋'
      />
      <div className='h-full w-[44px] shrink-0 text-[30px] text-icon-brown flex items-center justify-center cursor-pointer'>
        <CiSearch />
      </div>
    </div>
  );
}
