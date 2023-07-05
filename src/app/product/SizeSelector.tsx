import React from 'react';
import { ProductProps } from '@/utils/types';

export default function SizeSelector({ product }: ProductProps) {
  return (
    <div className='flex mb-[30px] items-center'>
      <div className='w-[62px] text-[14px] leading-[17px] tracking-[2.8px]'>
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
