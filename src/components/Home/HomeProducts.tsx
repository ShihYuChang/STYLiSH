'use client';
import useInfiniteScoll from '@/hooks/useInfiniteScroll';
import { api } from '@/utils/api';
import { ProductInfo } from '@/types/types';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Products from '../Products/Products';

const categories: string[] = ['men', 'women', 'accessories'];

export default function HomeProducts() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const { page, setHasLoadData, setHasNextPage } = useInfiniteScoll();
  const category = searchParams.get('category');

  useEffect(() => {
    async function renderProducts() {
      // eslint-disable-next-line camelcase
      const { data, next_paging } = await api.getProductData(page, category);
      const newProducts = [...products, ...data];
      setProducts(newProducts);
      // eslint-disable-next-line camelcase
      if (next_paging) {
        setHasNextPage(true);
        setHasLoadData(false);
      }
    }
    if (!category || categories.includes(category)) {
      renderProducts();
    } else {
      window.location.href = '/';
    }
  }, [page]);

  if (products.length === 0) {
    return undefined;
  }
  return <Products products={products} />;
}
