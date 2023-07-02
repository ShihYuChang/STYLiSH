'use client';
import React, { useEffect, useState } from 'react';
import { Variants, ProductInfo } from '@/utils/types';
import useInfiniteScoll from '@/hooks/useInfiniteScroll';
import { useSearchParams } from 'next/navigation';
import { api } from '@/utils/api';
import Products from '../components/Products/Products';

const categories: string[] = ['men', 'women', 'accessories'];

function getColorVariants(rawData: ProductInfo[]) {
  const colorVariants: Variants = {};
  rawData.forEach((product) =>
    product.colors.forEach((color) => {
      if (!colorVariants[color.name]) {
        colorVariants[color.name] = `#${color.code.toLowerCase()}`;
      }
    })
  );
  return colorVariants;
}

function getMainImages(rawData: ProductInfo[]) {
  const mainImgVariants: Variants = {};
  rawData.forEach((product) => {
    const style = product.main_image ? `url(${product.main_image})` : '';
    mainImgVariants[product.title] = style;
  });
  return mainImgVariants;
}

export default function HomeProducts() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const colorVariants: Variants = getColorVariants(products);
  const mainImgVariants: Variants = getMainImages(products);
  const { page, setHasLoadData } = useInfiniteScoll();
  const category = searchParams.get('category');

  useEffect(() => {
    async function renderProducts() {
      const { data, next_paging } = await api.getProductData(page, category);
      const newProducts = [...products, ...data];
      setProducts(newProducts);
      next_paging && setHasLoadData(false);
    }
    if (!category || categories.includes(category)) {
      renderProducts();
    } else {
      window.location.href = '/';
    }
  }, [page]);

  if (products.length === 0) {
    return;
  }
  return <Products products={products} />;
}
