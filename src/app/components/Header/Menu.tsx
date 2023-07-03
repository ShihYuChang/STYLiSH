'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';

interface Category {
  label: '女裝' | '男裝' | '配件';
  route: 'women' | 'men' | 'accessories';
}

const categories: Category[] = [
  { label: '女裝', route: 'women' },
  { label: '男裝', route: 'men' },
  { label: '配件', route: 'accessories' },
];

export default function Menu() {
  const searchParams = useSearchParams();
  const currentCatgeroy = searchParams.get('category');

  return (
    <div className='flex justify-between items-center h-full w-full xl:w-[450px] mr-auto'>
      {categories.map((category, index) => (
        <>
          <div
            key={`${category}${index}`}
            className={`w-full text-center xl:text-[20px] xl:tracking-[30px] xl:indent-[30px] xl:leading-[28px] leading-[50px] border-r  ${
              index === categories.length - 1
                ? null
                : 'xl:border-[#3f3a3a] border-[#808080] border-solid'
            }`}
          >
            <a
              className={`${
                currentCatgeroy === category.route
                  ? 'text-white xl:text-[#8b572a]'
                  : 'text-[#828282] xl:text-[#3f3a3a]'
              }`}
              href={`/?category=${category.route}`}
            >
              {category.label}
            </a>
          </div>
        </>
      ))}
    </div>
  );
}
