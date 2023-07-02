'use client';
import { useState, useEffect } from 'react';
import { api } from '@/utils/api';
import { ProductInfo, Variants } from '@/utils/types';
import Products from '@/app/components/Products/Products';
import Carousel from '@/app/components/Carousel';
import useInfiniteScoll from '@/hooks/useInfiniteScroll';

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
