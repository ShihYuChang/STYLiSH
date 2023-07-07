import React, { SetStateAction, useContext } from 'react';
import { LocalStorageItem } from '@/types/types';
import { BsTrash3 } from 'react-icons/bs';
import { CheckoutContext } from '../../context/CheckoutContext';

function TrashIcon({
  item,
  setCartItems,
}: {
  item: LocalStorageItem;
  setCartItems: React.Dispatch<SetStateAction<LocalStorageItem[]>>;
}) {
  return (
    <div
      className='text-[24px] leading-[44px] text-center text-[#cccccc] cursor-pointer mr-[20px]'
      onClick={() => deleteItem(item, setCartItems)}
    >
      <BsTrash3 />
    </div>
  );
}

function deleteItem(
  item: LocalStorageItem,
  setCartItems: React.Dispatch<SetStateAction<LocalStorageItem[]>>
) {
  const rawCartItems = localStorage.getItem('cartItems');
  if (rawCartItems) {
    const parsedItems = JSON.parse(rawCartItems);
    const itemIndex = parsedItems.findIndex(
      (data: LocalStorageItem) =>
        data.id === item.id &&
        data.color.name === item.color.name &&
        data.size === item.size
    );
    parsedItems.splice(itemIndex, 1);
    localStorage.setItem('cartItems', JSON.stringify(parsedItems));
    setCartItems(parsedItems);
  }
}

export default function ProductInfo({ item }: { item: LocalStorageItem }) {
  const { setCartItems } = useContext(CheckoutContext);
  return (
    <div className='flex justify-between'>
      <img src={item.img} className='w-[114px] mr-[10px]' />
      <div className='text-[14px] leading-[17px] flex-grow'>
        <div className='text-black mb-[20px]'>{item.title}</div>
        <div className='mb-[24px]'>{item.id}</div>
        <div className='mb-[12px]'>顏色｜{item.color.name}</div>
        <div>尺寸｜{item.size}</div>
      </div>
      <TrashIcon item={item} setCartItems={setCartItems} />
    </div>
  );
}
