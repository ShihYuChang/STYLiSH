import React from 'react';
import { ProductInfo, Variants } from '@/utils/types';

interface ComponentProps {
  products: ProductInfo[];
}

function getColorVariants(rawData: ProductInfo[]) {
  const colorVariants: Variants = {};
  rawData.forEach((product) =>
    product.colors.forEach((color) => {
      if (!colorVariants[color.name]) {
        colorVariants[color.name] = `#${color.code.toLowerCase()}`;
      }
    })
  );
  return colorVariants;
}

function getMainImages(rawData: ProductInfo[]) {
  const mainImgVariants: Variants = {};
  rawData.forEach((product) => {
    const style = product.main_image ? `url(${product.main_image})` : '';
    mainImgVariants[product.title] = style;
  });
  return mainImgVariants;
}

export default function Products({ products }: ComponentProps) {
  const colorVariants: Variants = getColorVariants(products);
  const mainImgVariants: Variants = getMainImages(products);
  return (
    <div className='grid grid-cols-3 w-[1160px] mx-auto gap-y-[50px] leading-[24px] text-[20px] tracking-[4px]'>
      {products.map((product, index) => (
        <div key={`${product}${index}`} className='w-[360px]'>
          <div
            className={`w-full h-[480px] mb-[20px] bg-contain`}
            style={{ backgroundImage: mainImgVariants[product.title] }}
          ></div>
          <div className='flex gap-[10px] mb-[20px]'>
            {product.colors.map((color, index) => (
              <div
                key={`${color}${index}`}
                className={`w-[24px] h-[24px] border border-solid border-[#d3d3d3]`}
                style={{ backgroundColor: colorVariants[color.name] }}
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
