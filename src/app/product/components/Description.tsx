import React from 'react';
import { ProductProps } from '@/utils/types';

function splitDescription(description: string) {
  const newDescription = description.split('\r\n');
  return newDescription;
}

export default function Description({ product }: ProductProps) {
  return (
    <div className='flex flex-col gap-[24px] xl:gap-[30px] text-[14px] xl:text-[20px] leading-[24px] xl:leading-[30p] mb-[28px]'>
      <div>實品顏色依單品照為主</div>
      <div className='xl:leading-[30px]'>
        {product.texture}
        {splitDescription(product.description).map((description, index) => (
          <div key={index}>{description}</div>
        ))}
      </div>
      <div className='xl:leading-[30px]'>
        清洗：{product.wash}
        <br />
        產地：{product.place}
      </div>
    </div>
  );
}
