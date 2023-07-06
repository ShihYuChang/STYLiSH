import { ProductContext } from '@/context/ProductContext';
import { useContext, useEffect } from 'react';

export default function SizeSelector() {
  const {
    product,
    colorSizeList,
    selectedColor,
    selectedSize,
    setSelectedSize,
    setQuantity,
  } = useContext(ProductContext);

  function selectSize(size: string) {
    setSelectedSize(size);
  }

  useEffect(() => {
    if (selectedColor) {
      setSelectedSize(null);
      setQuantity(0);
    }
  }, [selectedColor]);

  useEffect(() => {
    setQuantity(0);
  }, [selectedSize]);

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
            } flex items-center justify-center ${
              selectedColor && colorSizeList[selectedColor.code][size] === 0
                ? 'opacity-25 cursor-not-allowed'
                : 'opacity-1'
            }`}
            onClick={() => selectSize(size)}
            disabled={
              selectedColor
                ? colorSizeList[selectedColor.code][size] === 0
                : false
            }
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
