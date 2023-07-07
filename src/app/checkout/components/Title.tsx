import React, { ReactNode } from 'react';

export default function Title({ children }: { children: ReactNode }) {
  return <div className='w-full flex h-[29px] font-bold'>{children}</div>;
}
