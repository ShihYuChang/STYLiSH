'use client';
import { useState, useEffect } from 'react';
import { api } from '@/utils/api';

interface ProductData {
  id: number;
  category: string;
  title: string;
  description: string;
  price: number;
  texture: string;
  wash: string;
  place: string;
  note: string;
  story: string;
  colors: { code: string; name: string }[];
  sizes: string[];
  variants: { color_code: string; size: string; stock: string }[];
  main_image: string;
  images: string[];
}

function splitDescription(description: string) {
  const newDescription = description.split('\r\n');
  return newDescription;
}

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
        <div className='text-[20px] leading=[24px] tracking-[4px] mb-[10px]'>
          {product.title}
        </div>
        <div className='leading-[18px] tracking-[3.2px] text-[#bababa] mb-[20px]'>
          {product.id}
        </div>
        <div className='text-[20px] leading-[24px] pb-[10px] border-b border-solid border-[#3f3a3a] mb-[30px]'>
          TWD.{product.price}
        </div>
        <div className='flex mb-[28px]'>
          <div className='w-[62px] text-[14px] leading-[17px] tracking-[2.8px]'>
            顏色 |
          </div>
          <div className='flex gap-[27px]'>
            {product.colors.map((color, index) => (
              <button
                key={index}
                className='w-[24px] h-[24px] border border-solid border-[#d3d3d3]'
                style={{ backgroundColor: `#${color.code}` }}
              />
            ))}
          </div>
        </div>
        <div className='flex mb-[30px] items-center'>
          <div className='w-[62px] text-[14px] leading-[17px] tracking-[2.8px]'>
            尺寸 |
          </div>
          <div className='flex gap-[15px] items-center'>
            {product.sizes.map((size, index) => (
              <button
                key={index}
                className='w-[36px] h-[36px] rounded-[50%] bg-[#ececec] flex items-center justify-center'
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className='border-box w-full h-[44px] border border-solid border-[#979797] mb-[10px] px-[48.46px] flex items-center'>
          <div className='w-full flex justify-between items-center'>
            <button>-</button>
            <div className='text-[20px] text-[#8b572a]'>1</div>
            <button>+</button>
          </div>
        </div>
        <button className='w-full h-[44px] bg-black text-white tracking-[3.2px] flex justify-center items-center mb-[28px]'>
          加入購物車
        </button>
        <div className='flex flex-col gap-[24px] text-[14px] leading-[24px] mb-[28px]'>
          <div>實品顏色依單品照為主</div>
          <div>
            {product.texture}
            {splitDescription(product.description).map((description, index) => (
              <div key={index}>{description}</div>
            ))}
          </div>
          <div>
            清洗：{product.wash}
            <br />
            產地：{product.place}
          </div>
        </div>
        <div>
          <div className='flex w-full gap-[35px] mb-[12px] items-center'>
            <div className='text-[#8b572a] leading-[30px] tracking-[3.2px]'>
              更多產品資訊
            </div>
            <div className='grow h-px bg-[#3f3a3a]' />
          </div>
          <div className='text-[14px] leading-[25px] mb-[20px]'>
            {product.story}
          </div>
          <div className='flex flex-col gap-[20px]'>
            {product.images.map((img, index) => (
              <img key={index} src={img} className='w-full' />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
