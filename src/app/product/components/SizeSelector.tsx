import React from 'react';
import { ProductProps } from '@/utils/types';

export default function SizeSelector({ product }: ProductProps) {
  return (
    <div className='flex mb-[30px] items-center'>
      <div className='w-[62px] xl:w-[68px] xl:mr-[24px] text-[14px] xl:text-[20px] leading-[17px] xl:leading-[24px] tracking-[2.8px] xl:tracking-[4px]'>
        尺寸 |
      </div>
      <div className='flex gap-[15px] items-center'>
        {product.sizes.map((size, index) => (
          <button
            key={index}
            className='w-[36px] h-[36px] rounded-[50%] bg-[#ececec] flex items-center justify-center'
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
