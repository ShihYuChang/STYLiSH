import React from 'react';

export default function Radio({ label }: { label: string }) {
  return (
    <div className='flex gap-[6px]'>
      <label className='text-[14px] leading-[26px]'>{label}</label>
      <input type='radio' />
    </div>
  );
}
