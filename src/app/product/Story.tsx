import React from 'react';
import { ProductProps } from '@/utils/types';

export default function Story({ product }: ProductProps) {
  return (
    <div>
      <div className='flex w-full gap-[35px] mb-[12px] items-center'>
        <div className='text-[#8b572a] xl:text-[20px] leading-[30px] tracking-[3.2px]'>
          更多產品資訊
        </div>
        <div className='grow h-px bg-[#3f3a3a]' />
      </div>
      <div className='text-[14px] xl:text-[20px] leading-[25px] xl:leading-[30px] mb-[20px]'>
        {product.story}
      </div>
      <div className='flex flex-col gap-[20px]'>
        {product.images.map((img, index) => (
          <img key={index} src={img} className='w-full' />
        ))}
      </div>
    </div>
  );
}
