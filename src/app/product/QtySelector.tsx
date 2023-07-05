import React from 'react';

export default function QtySelector() {
  return (
    <div className='border-box w-full h-[44px] border border-solid border-[#979797] mb-[10px] px-[48.46px] flex items-center'>
      <div className='w-full flex justify-between items-center'>
        <button>-</button>
        <div className='text-[20px] text-[#8b572a]'>1</div>
        <button>+</button>
      </div>
    </div>
  );
}
