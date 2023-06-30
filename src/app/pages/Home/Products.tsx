import React from 'react';
import { Variants } from '@/utils/types';

interface ProductInfo {
  title: string;
  img: string;
  colors: string[];
  price: number;
}

const products: ProductInfo[] = new Array(6).fill({
  title: '前開叉扭結佯裝',
  img: 'bg-dress',
  colors: ['white', 'green', 'grey'],
  price: 799,
});

export default function Products() {
  const colorVariants: Variants = {
    green: 'bg-[#ddffbb]',
    grey: 'bg-[#d3d3d3]',
    white: 'bg-white',
  };
  return (
    <div className='grid grid-cols-3 w-[1160px] mx-auto gap-y-[50px] leading-[24px] text-[20px] tracking-[4px]'>
      {products.map((product, index) => (
        <div key={`${product}${index}`} className='w-[360px]'>
          <div className={`${product.img} w-full h-[480px] mb-[20px]`}></div>
          <div className='flex gap-[10px] mb-[20px]'>
            {product.colors.map((color, index) => (
              <div
                key={`${color}${index}`}
                className={`w-[24px] h-[24px] border border-solid border-[#d3d3d3] ${colorVariants[color]}`}
              />
            ))}
          </div>
          <div className='mb-[10px]'>{product.title}</div>
          <div>TWD.{product.price}</div>
        </div>
      ))}
    </div>
  );
}
