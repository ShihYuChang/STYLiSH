import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import SearchBar from './SearchBar';
import RightIcons from './Icons';

export default function Header() {
  return (
    <div className='w-full sticky top-0 left-0'>
      <div className='box-border h-[100px] flex justify-between item-center pl-[60px] pr-[54px] py-[26px]'>
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
