import React from 'react';

export default function QtySelector() {
  return (
    <div className='flex items-center mb-[10px] xl:mb-[26px]'>
      <div className='hidden xl:block text-[20px] mr-[24px] tracking-[4px] leading-[24px]'>
        數量 |
      </div>
      <div className='border-box w-full xl:w-[160px] h-[44px] border border-solid border-[#979797] px-[48.46px] xl:px-[15px] flex items-center'>
        <div className='w-full flex justify-between items-center'>
          <button>-</button>
          <div className='text-[20px] xl:text-[16px] text-[#8b572a]'>1</div>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}
