/* eslint-disable camelcase */
'use client';
import Carousel from '@/components/Carousel';
import Products from '@/components/Products/Products';
import useInfiniteScoll from '@/hooks/useInfiniteScroll';
import { api } from '@/utils/api';
import { ProductInfo } from '@/types/types';
import { useEffect, useState } from 'react';

export default function Search({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const { page, setHasLoadData, setHasNextPage } = useInfiniteScoll();

  useEffect(() => {
    async function renderProducts() {
      const { data, next_paging } = await api.searchProduct(slug, 0);
      const newProducts = [...products, ...data];
      setProducts(newProducts);
      if (next_paging) {
        setHasNextPage(true);
        setHasLoadData(false);
      }
    }

    renderProducts();
  }, [page]);

  return (
    <div className='mb-[96px]'>
      <Carousel />
      <Products products={products} />
    </div>
  );
}
