import React from 'react';

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
  return (
    <div className='flex justify-between items-center h-full w-[450px] mr-auto'>
      {categories.map((category, index) => (
        <>
          <div
            key={`${category}${index}`}
            className={`w-full text-center text-[20px] tracking-[30px] indent-[30px] leading-[28px] border-r ${
              index === categories.length - 1
                ? null
                : 'border-custom-grey border-solid'
            }`}
          >
            <a href={`/?category=${category.route}`}>{category.label}</a>
          </div>
        </>
      ))}
    </div>
  );
}
