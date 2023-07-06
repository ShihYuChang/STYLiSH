'use client';
import { ProductContext } from '@/context/ProductContext';
import { ProductData } from '@/utils/types';
import { useContext } from 'react';

interface LocalStorageItem {
  color: { name: string; code: string };
  id: number;
  img: string;
  name: string;
  price: number;
  qty: number;
  size: string;
  totalPrice: number;
}

export default function AddToCart() {
  const { product, selectedColor, selectedSize } = useContext(ProductContext);

  function addToLocalStorage(product: ProductData) {
    const currentItems = localStorage.getItem('cartItems');
    if (currentItems) {
      const parsedItems = JSON.parse(currentItems);
      // const selectedItem: LocalStorageItem = {
      //   color: {name: selectedColor}
      // }
      parsedItems.push(product);
      localStorage.setItem('cartItems', JSON.stringify(parsedItems));
    }
  }

  if (!product) return undefined;
  return (
    <button
      className='w-full h-[44px] xl:h-[64px] xl:text-[20px] bg-black text-white tracking-[3.2px] flex justify-center items-center mb-[28px]'
      onClick={() => addToLocalStorage(product)}
    >
      加入購物車
    </button>
  );
}
