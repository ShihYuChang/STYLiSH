import React from 'react';

const icons: string[] = ['line', 'twitter', 'facebook'];

export default function Icons() {
  return (
    <div className='flex gap-[30px] h-[50px]'>
      {icons.map((icon, index) => (
        <div key={index} className={`bg-${icon} w-[50px] cursor-pointer`} />
      ))}
    </div>
  );
}
