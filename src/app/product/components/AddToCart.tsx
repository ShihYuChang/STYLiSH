'use client';
import { ProductContext } from '@/context/ProductContext';
import { LocalStorageItem, ProductData } from '@/utils/types';
import { useContext } from 'react';

function combineProduct(cartItems: LocalStorageItem[]): LocalStorageItem[] {
  const output = cartItems.reduce<{ [key: string]: LocalStorageItem }>(
    (acc, cur) => {
      const key = `${cur.id}-${cur.color.code}-${cur.size}`;

      if (!acc[key]) {
        acc[key] = { ...cur };
        return acc;
      }
      acc[key].qty += cur.qty;
      acc[key].totalPrice += cur.totalPrice;

      return acc;
    },
    {}
  );
  return Object.values(output);
}

export default function AddToCart() {
  const { product, selectedColor, selectedSize, quantity } =
    useContext(ProductContext);

  function addToLocalStorage(product: ProductData) {
    const currentItems = localStorage.getItem('cartItems');
    if (currentItems) {
      const parsedItems = JSON.parse(currentItems);
      const itemDetails: LocalStorageItem = {
        color: { name: selectedColor?.name, code: selectedColor?.code },
        id: product.id,
        img: product.main_image,
        title: product.title,
        price: product.price,
        qty: quantity,
        size: selectedSize,
        totalPrice: product.price * quantity,
      };
      parsedItems.push(itemDetails);
      const combinedItems = combineProduct(parsedItems);

      localStorage.setItem('cartItems', JSON.stringify(combinedItems));
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
