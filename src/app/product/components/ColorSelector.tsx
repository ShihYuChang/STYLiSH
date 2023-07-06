import React, { useState } from 'react';
import { ProductProps } from '@/utils/types';

export default function ColorSelector({ product }: ProductProps) {
  const [selectedColor, setSelectedColor] = useState<null | string>(null);

  function selectColor(colorName: string) {
    setSelectedColor(colorName);
  }

  return (
    <div className='flex mb-[28px] items-center'>
      <div className='w-[62px] xl:w-[68px] text-[14px] xl:text-[20px] leading-[17px] xl:leading-[24px] tracking-[2.8px] xl:tracking-[4px] xl:mr-[22px]'>
        顏色 |
      </div>
      <div className='flex gap-[21px] xl:gap-[26px]'>
        {product.colors.map((color, index) => (
          <div
            key={index}
            className={`p-[6px] ${
              color.name === selectedColor
                ? 'border border-solid border-black'
                : 'border-0'
            }`}
          >
            <button
              className='w-[24px] h-[24px] border border-solid border-[#d3d3d3]'
              style={{ backgroundColor: `#${color.code}` }}
              onClick={() => selectColor(color.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
