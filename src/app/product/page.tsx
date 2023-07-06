'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { api } from '@/utils/api';
import ColorSelector from './components/ColorSelector';
import { ProductData } from '@/utils/types';
import SizeSelector from './components/SizeSelector';
import BasicInfo from './components/BasicInfo';
import QtySelector from './components/QtySelector';
import AddToCart from './components/AddToCart';
import Description from './components/Description';
import Story from './components/Story';

export default function Product() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [product, setProduct] = useState<ProductData | null>(null);

  useEffect(() => {
    async function getProductData(id: string) {
      const { data } = await api.getProductInfo(id);
      setProduct(data);
    }

    id && getProductData(id);
  }, []);

  if (!product) return undefined;
  return (
    <div className='w-full xl:w-[960px] mx-auto xl:mt-[65px] mb-[32px] xl:mb-[49px]'>
      <img src={product.main_image} className='xl:hidden w-full mb-[17px]' />
      <div className='border-box w-full px-[24px]'>
        <div className='xl:flex gap-[40px] xl:mb-[50.33px]'>
          <img
            src={product.main_image}
            className='xl:block hidden w-[560px] mb-[17px]'
          />
          <div>
            <BasicInfo product={product} />
            <ColorSelector product={product} />
            <SizeSelector product={product} />
            <QtySelector />
            <AddToCart />
            <Description product={product} />
          </div>
        </div>
        <Story product={product} />
      </div>
    </div>
  );
}
