import React from 'react';
import { ProductProps } from '@/utils/types';

function splitDescription(description: string) {
  const newDescription = description.split('\r\n');
  return newDescription;
}

export default function Description({ product }: ProductProps) {
  return (
    <div className='flex flex-col gap-[24px] text-[14px] leading-[24px] mb-[28px]'>
      <div>實品顏色依單品照為主</div>
      <div>
        {product.texture}
        {splitDescription(product.description).map((description, index) => (
          <div key={index}>{description}</div>
        ))}
      </div>
      <div>
        清洗：{product.wash}
        <br />
        產地：{product.place}
      </div>
    </div>
  );
}
