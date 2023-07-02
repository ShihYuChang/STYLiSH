'use client';
import { useEffect, useState } from 'react';
import { ProductInfo } from '@/utils/types';
import useInfiniteScoll from '@/hooks/useInfiniteScroll';
import { useSearchParams } from 'next/navigation';
import { api } from '@/utils/api';
import Products from '../components/Products/Products';

const categories: string[] = ['men', 'women', 'accessories'];

export default function HomeProducts() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const { page, setHasLoadData, setHasNextPage } = useInfiniteScoll();
  const category = searchParams.get('category');

  useEffect(() => {
    async function renderProducts() {
      const { data, next_paging } = await api.getProductData(page, category);
      const newProducts = [...products, ...data];
      setProducts(newProducts);
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
    return;
  }
  return <Products products={products} />;
}
