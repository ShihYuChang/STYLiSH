import React from 'react';
import { ProductProps } from '@/utils/types';

export default function BasicInfo({ product }: ProductProps) {
  return (
    <>
      <div className='text-[20px] leading=[24px] tracking-[4px] mb-[10px]'>
        {product.title}
      </div>
      <div className='leading-[18px] tracking-[3.2px] text-[#bababa] mb-[20px]'>
        {product.id}
      </div>
      <div className='text-[20px] leading-[24px] pb-[10px] border-b border-solid border-[#3f3a3a] mb-[30px]'>
        TWD.{product.price}
      </div>
    </>
  );
}
