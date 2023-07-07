import React, { ReactNode } from 'react';

export default function Title({ children }: { children: ReactNode }) {
  return (
    <div className='w-full h-[29px] font-bold pb-[10px] border-b border-solid border-[#3f3a3a]'>
      {children}
    </div>
  );
}
