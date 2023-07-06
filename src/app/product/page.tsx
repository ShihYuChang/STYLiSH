/* eslint-disable camelcase */
'use client';
import { api } from '@/utils/api';
import { ColorSizeList, ProductData } from '@/utils/types';
import { useSearchParams } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { ProductContext } from '../../context/ProductContext';
import AddToCart from './components/AddToCart';
import BasicInfo from './components/BasicInfo';
import ColorSelector from './components/ColorSelector';
import Description from './components/Description';
import QtySelector from './components/QtySelector';
import SizeSelector from './components/SizeSelector';
import Story from './components/Story';

function getColorSizeList(product: ProductData) {
  const output: ColorSizeList = {};
  const variant = product.variants;
  variant.forEach((item) => {
    const { color_code, size, stock } = item;

    if (!output[color_code]) {
      output[color_code] = {};
    }
    output[color_code][size] = stock;
  });
  return output;
}

export default function Product() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const { product, setProduct, colorSizeList, setColorSizeList } =
    useContext(ProductContext);

  useEffect(() => {
    async function getProductData(id: string) {
      const { data } = await api.getProductInfo(id);
      setProduct(data);
    }

    id && getProductData(id);
  }, []);

  useEffect(() => {
    if (product) {
      setColorSizeList(getColorSizeList(product));
    }
  }, [product]);

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
            <BasicInfo />
            <ColorSelector />
            <SizeSelector />
            <QtySelector />
            <AddToCart />
            <Description />
          </div>
        </div>
        <Story />
      </div>
    </div>
  );
}
