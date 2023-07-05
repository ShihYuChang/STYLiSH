import React from 'react';
import { ProductProps } from '@/utils/types';

export default function ColorSelector({ product }: ProductProps) {
  return (
    <div className='flex mb-[28px]'>
      <div className='w-[62px] xl:w-[68px] text-[14px] xl:text-[20px] leading-[17px] xl:leading-[24px] tracking-[2.8px] xl:tracking-[4px] xl:mr-[22px]'>
        顏色 |
      </div>
      <div className='flex gap-[27px] xl:gap-[32px]'>
        {product.colors.map((color, index) => (
          <button
            key={index}
            className='w-[24px] h-[24px] border border-solid border-[#d3d3d3]'
            style={{ backgroundColor: `#${color.code}` }}
          />
        ))}
      </div>
    </div>
  );
}
