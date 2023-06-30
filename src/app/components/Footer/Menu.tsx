import React from 'react';

interface Category {
  label: '關於 STYLiSH' | '服務條款' | '隱私政策' | '聯絡我們' | 'FAQ';
  route: '/';
}

const categories: Category[] = [
  { label: '關於 STYLiSH', route: '/' },
  { label: '服務條款', route: '/' },
  { label: '隱私政策', route: '/' },
  { label: '聯絡我們', route: '/' },
  { label: 'FAQ', route: '/' },
];

export default function Menu() {
  return (
    <div className='flex mr-[101px]'>
      {categories.map((category, index) => (
        <div
          key={`${category}${index}`}
          className={`w-[134px] flex justify-center items-center leading-[22px] ${
            index === categories.length - 1
              ? null
              : 'border-r border-solid border-footer-grey'
          } cursor-pointer`}
        >
          {category.label}
        </div>
      ))}
    </div>
  );
}
