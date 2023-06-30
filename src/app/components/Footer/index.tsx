import React from 'react';
import Menu from './Menu';
import Icons from './Icons';

export default function Footer() {
  return (
    <div className='w-full h-[115px] bg-custom-grey fixed bottom-0 flex items-center justify-center text-footer-text-white'>
      <Menu />
      <Icons />
    </div>
  );
}
