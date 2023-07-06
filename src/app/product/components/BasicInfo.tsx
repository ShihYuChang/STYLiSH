import { ProductContext } from '@/context/ProductContext';
import { useContext } from 'react';

export default function BasicInfo() {
  const { product } = useContext(ProductContext);
  if (!product) return undefined;
  return (
    <>
      <div className='text-[20px] xl:text-[32px] leading=[24px] xl:leading-[38px] tracking-[4px] xl:tracking-[6.4px] mb-[10px] xl:mb-[16px]'>
        {product.title}
      </div>
      <div className='xl:text-[20px] leading-[18px] xl:leading-[24px] tracking-[3.2px] xl:tracking-[4px] text-[#bababa] mb-[20px] xl:mb-[40px]'>
        {product.id}
      </div>
      <div className='text-[20px] xl:text-[30px] leading-[24px] xl:leading-[36px] pb-[10px] xl:pb-[20px] border-b border-solid border-[#3f3a3a] mb-[30px]'>
        TWD.{product.price}
      </div>
    </>
  );
}
