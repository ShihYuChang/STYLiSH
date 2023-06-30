import React from 'react';
import Menu from './Menu';
import Icons from './Icons';
import Copywrite from './Copywrite';

export default function Footer() {
  return (
    <div className='w-full h-[115px] bg-custom-grey flex items-center justify-center text-footer-text-white'>
      <Menu />
      <Icons />
      <Copywrite />
    </div>
  );
}
