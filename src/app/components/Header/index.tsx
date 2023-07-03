import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import SearchBar from './SearchBar';
import RightIcons from './Icons';

export default function Header() {
  return (
    <div className='w-full sticky top-0 left-0 z-10'>
      <div className='box-border h-[54px] xl:h-[100px] flex xl:justify-between justify-center item-center xl:pl-[60px] xl:pr-[54px] xl:py-[26px] py-[14px] bg-white'>
        <Logo />
        <Menu />
        <div className='flex h-full gap-[42px]'>
          <SearchBar />
          <RightIcons />
        </div>
      </div>
      <div className='h-[40px] bg-custom-grey'></div>
    </div>
  );
}
