import { ProductInfo, Variants } from '@/types/types';
import Link from 'next/link';

interface ComponentProps {
  products: ProductInfo[];
}

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

export default function Products({ products }: ComponentProps) {
  const colorVariants: Variants = getColorVariants(products);
  return (
    <div className='grid grid-cols-2 px-[24px] xl:p-0 xl:grid-cols-3 w-[86.66%] xl:w-[1160px] mx-auto gap-y-[24px] xl:gap-y-[50px] leading-[14px] xl:leading-[24px] text-[12px] xl:text-[20px] tracking-[2.4px] xl:tracking-[4px] gap-x-[6px] xl:gap-0'>
      {products.map((product, index) => (
        <Link
          key={`${product}${index}`}
          className='xl:w-[360px] cursor-pointer'
          href={`/product?id=${product.id}`}
        >
          <img
            className={`w-full xl:h-[480px] mb-[8px] xl:mb-[20px] bg-contain bg-center`}
            src={product.main_image}
          ></img>
          <div className='flex gap-[10px] mb-[10px] xl:mb-[20px]'>
            {product.colors.map((color, index) => (
              <div
                key={`${color}${index}`}
                className={`w-[1.2em] h-[1.2em] border border-solid border-[#d3d3d3]`}
                style={{ backgroundColor: colorVariants[color.name] }}
              />
            ))}
          </div>
          <div className='mb-[10px]'>{product.title}</div>
          <div>TWD.{product.price}</div>
        </Link>
      ))}
    </div>
  );
}
