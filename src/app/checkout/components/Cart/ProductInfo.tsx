import { useContext } from 'react';
import { LocalStorageItem } from '@/types/types';
import { CheckoutContext } from '../../context/CheckoutContext';
import TrashIcon from './TrashIcon';

export default function ProductInfo({ item }: { item: LocalStorageItem }) {
  const { setCartItems } = useContext(CheckoutContext);
  return (
    <div className='flex justify-between xl:w-[484px]'>
      <img src={item.img} className='w-[114px] mr-[10px]' />
      <div className='text-[14px] leading-[17px] flex-grow'>
        <div className='text-black mb-[20px]'>{item.title}</div>
        <div className='mb-[24px]'>{item.id}</div>
        <div className='mb-[12px]'>顏色｜{item.color.name}</div>
        <div>尺寸｜{item.size}</div>
      </div>
      <div className='xl:hidden'>
        <TrashIcon item={item} setCartItems={setCartItems} />
      </div>
    </div>
  );
}
