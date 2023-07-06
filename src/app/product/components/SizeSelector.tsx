import { ProductContext } from '@/context/ProductContext';
import { useContext, useState } from 'react';

export default function SizeSelector() {
  const { product, colorSizeList } = useContext(ProductContext);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  function selectSize(size: string) {
    setSelectedSize(size);
  }

  if (!product) return undefined;
  return (
    <div className='flex mb-[30px] items-center'>
      <div className='w-[62px] xl:w-[70px] xl:mr-[24px] text-[14px] xl:text-[20px] leading-[17px] xl:leading-[24px] tracking-[2.8px] xl:tracking-[4px]'>
        尺寸 |
      </div>
      <div className='flex gap-[15px] items-center'>
        {product.sizes.map((size, index) => (
          <button
            key={index}
            className={`w-[36px] h-[36px] rounded-[50%] ${
              size === selectedSize ? 'bg-black text-white' : 'bg-[#ececec]'
            } flex items-center justify-center`}
            onClick={() => selectSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
