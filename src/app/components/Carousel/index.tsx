'use client';
import React from 'react';
import Text from './Text';

const dots: string[] = new Array(5).fill('dot');

export default function Carousel() {
  return (
    <div className='w-full h-[500px] bg-banner1 relative mb-[70px] bg-cover bg-center'>
      <Text />
      <div className='flex gap-[22px] absolute bottom-[34px] left-[50%]'>
        {dots.map((dot, index) => (
          <div
            key={index}
            className='w-[10px] h-[10px] rounded-[50%] opacity-40 bg-white'
          />
        ))}
      </div>
    </div>
  );
}
