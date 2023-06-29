import React from 'react';

export default function Header() {
  return (
    <div className='w-full'>
      <div className='box-border h-100 flex justify-between item-center pl-60 pr-54 py-26'>
        <div className='w-258 h-full bg-red-950 mr-57'></div>
        <div className='flex justify-between h-full w-450 mr-auto'>
          <div className='w-full bg-green-100'></div>
          <div className='w-full bg-green-300'></div>
          <div className='w-full bg-green-600'></div>
        </div>
        <div className='flex h-full gap-42'>
          <div className='w-258 bg-slate-400'></div>
          <div className='w-258 bg-slate-400'></div>
          <div className='w-258 bg-slate-400'></div>
        </div>
      </div>
      <div className='h-40 bg-custom-gray'>d</div>
    </div>
  );
}
