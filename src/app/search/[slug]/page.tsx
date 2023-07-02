'use client';
import { useState, useEffect } from 'react';
import { api } from '@/utils/api';
import { ProductInfo, Variants } from '@/utils/types';
import Products from '@/app/components/Products/Products';
import Carousel from '@/app/components/Carousel';

export default function Search({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [products, setProducts] = useState<ProductInfo[]>([]);

  async function handleSearch() {
    // e.preventDefault();
    const { data, next_paging } = await api.searchProduct(slug, 0);
    setProducts(data);
  }

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className='mb-[96px]'>
      <Carousel />
      <Products products={products} />
    </div>
  );
}
