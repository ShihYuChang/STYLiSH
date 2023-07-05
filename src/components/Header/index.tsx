'use client';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import RightIcons from './Icons';
import Logo from './Logo';
import Menu from './Menu';
import SearchBar from './SearchBar';

export default function Header() {
  const [hasClickSearch, setHasClickSearch] = useState<boolean>(false);

  function clickMobileSearch() {
    setHasClickSearch((prev) => !prev);
  }

  return (
    <div className='w-full sticky top-0 left-0 z-10'>
      <div
        className={`box-border h-[54px] xl:h-[100px] flex xl:justify-between justify-center item-center xl:pl-[60px] xl:pr-[54px] xl:py-[26px] ${
          hasClickSearch ? 'py-[6px]' : 'py-[14px]'
        } bg-white`}
      >
        <Logo hasClickSearch={hasClickSearch} />
        <div
          className={`${
            hasClickSearch && 'hidden'
          } xl:hidden h-[40px] text-[30px] flex justify-center items-center absolute right-[16px] top-[6px]`}
          onClick={clickMobileSearch}
        >
          <CiSearch />
        </div>
        <div className='xl:block hidden'>
          <Menu />
        </div>
        <div
          className={`${
            hasClickSearch && 'w-full'
          } flex xl:h-full xl:gap-[42px] px-[10px] xl:ml-[auto]`}
        >
          <SearchBar
            hasClickSearch={hasClickSearch}
            setHasClickSearch={setHasClickSearch}
          />
          <RightIcons />
        </div>
      </div>
      <div className='h-[50px] xl:h-[40px] bg-[#313538]'>
        <div className='xl:hidden'>
          <Menu />
        </div>
      </div>
    </div>
  );
}
