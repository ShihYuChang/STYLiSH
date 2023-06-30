import React from 'react';

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
            <div
              key={`${category}${index}`}
              className='w-full text-center text-[20px] tracking-[30px] indent-[30px]'
            >
              {category.label}
            </div>
          ))}
        </div>
        <div className='flex h-full gap-[42px]'>
          <div className='w-[214px] bg-slate-400'></div>
          <div className='w-[44px] bg-slate-400'></div>
          <div className='w-[44px] bg-slate-400'></div>
        </div>
      </div>
      <div className='h-[40px] bg-custom-gray'>d</div>
    </div>
  );
}
