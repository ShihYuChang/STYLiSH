import React, { SetStateAction, useContext } from 'react';
import { LocalStorageItem } from '@/types/types';
import { BsTrash3 } from 'react-icons/bs';
import { CheckoutContext } from '../../context/CheckoutContext';

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

export default function TrashIcon({ item }: { item: LocalStorageItem }) {
  const { setCartItems } = useContext(CheckoutContext);
  return (
    <div
      className='text-[24px] leading-[44px] flex justify-center items-center text-[#cccccc] cursor-pointer mr-[20px]'
      onClick={() => deleteItem(item, setCartItems)}
    >
      <BsTrash3 />
    </div>
  );
}
