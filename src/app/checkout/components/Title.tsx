import React, { ReactNode } from 'react';

export default function Title({
  children,
  noUnderLine,
}: {
  children: ReactNode;
  noUnderLine?: boolean;
}) {
  return (
    <div
      className={`w-full flex h-[29px] font-bold pb-[10px] ${
        !noUnderLine && 'border-b border-solid border-[#3f3a3a]'
      }`}
    >
      {children}
    </div>
  );
}
