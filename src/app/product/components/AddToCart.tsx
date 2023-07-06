import { ProductContext } from '@/context/ProductContext';
import { ProductData } from '@/utils/types';
import { useContext } from 'react';

export default function AddToCart() {
  const { product } = useContext(ProductContext);

  function addToLocalStorage(product: ProductData) {
    const currentItmes = localStorage.getItem('productInCart');
    const stringProduct = JSON.stringify(product);
  }

  return (
    <button className='w-full h-[44px] xl:h-[64px] xl:text-[20px] bg-black text-white tracking-[3.2px] flex justify-center items-center mb-[28px]'>
      加入購物車
    </button>
  );
}
