'use client';
import { useState, useEffect } from 'react';
import { api } from '@/utils/api';
import ColorSelector from './ColorSelector';
import { ProductData } from '@/utils/types';
import SizeSelector from './SizeSelector';
import BasicInfo from './BasicInfo';
import QtySelector from './QtySelector';
import AddToCart from './AddToCart';
import Description from './Description';
import Story from './Story';

export default function Product() {
  const [product, setProduct] = useState<ProductData | null>(null);

  useEffect(() => {
    async function getProductData() {
      const { data } = await api.getProductInfo();
      setProduct(data);
    }

    getProductData();
  }, []);

  if (!product) return undefined;
  return (
    <div className='w-full xl:w-[960px] mx-auto xl:mt-[65px] mb-[32px] xl:mb-[49px]'>
      <img src={product.main_image} className='w-full mb-[17px]' />
      <div className='border-box w-full px-[24px]'>
        <BasicInfo product={product} />
        <ColorSelector product={product} />
        <SizeSelector product={product} />
        <QtySelector />
        <AddToCart />
        <Description product={product} />
        <Story product={product} />
      </div>
    </div>
  );
}
