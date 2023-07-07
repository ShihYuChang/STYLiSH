import React from 'react';
import { LocalStorageItem } from '@/types/types';
import { BsTrash3 } from 'react-icons/bs';

function TrashIcon() {
  return (
    <div className='text-[24px] leading-[44px] text-center text-[#cccccc] cursor-pointer mr-[20px]'>
      <BsTrash3 />
    </div>
  );
}

export default function ProductInfo({ item }: { item: LocalStorageItem }) {
  return (
    <div className='flex justify-between'>
      <img src={item.img} className='w-[114px] mr-[10px]' />
      <div className='text-[14px] leading-[17px] flex-grow'>
        <div className='text-black mb-[20px]'>{item.title}</div>
        <div className='mb-[24px]'>{item.id}</div>
        <div className='mb-[12px]'>顏色｜{item.color.name}</div>
        <div>尺寸｜{item.size}</div>
      </div>
      <TrashIcon />
    </div>
  );
}
