import { ProductContext } from '@/context/ProductContext';
import { useContext, useEffect, useState } from 'react';

export default function QtySelector() {
  const { selectedColor, selectedSize, quantity, setQuantity, colorSizeList } =
    useContext(ProductContext);
  const [productQty, setProductQty] = useState<number>(0);

  function updateQuantity(action: string) {
    switch (action) {
      case 'add':
        quantity < productQty && setQuantity((prev) => prev + 1);
        break;
      case 'minus':
        quantity > 0 && setQuantity((prev) => prev - 1);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    if (selectedColor && selectedSize) {
      const stock = colorSizeList[selectedColor.code][selectedSize];
      setProductQty(Number(stock));
    }
  }, [selectedColor?.code, selectedSize]);

  return (
    <div className='flex items-center mb-[10px] xl:mb-[26px]'>
      <div className='hidden xl:block text-[20px] mr-[24px] tracking-[4px] leading-[24px]'>
        數量 |
      </div>
      <div className='border-box w-full xl:w-[160px] h-[44px] border border-solid border-[#979797] px-[48.46px] xl:px-[15px] flex items-center'>
        <div className='w-full flex justify-between items-center'>
          <button
            onClick={() => updateQuantity('minus')}
            className={`${
              quantity === 0 && 'cursor-not-allowed text-[#ececec]'
            }`}
            disabled={quantity === 0}
          >
            -
          </button>
          <div className='text-[20px] xl:text-[16px] text-[#8b572a]'>
            {quantity}
          </div>
          <button
            onClick={() => updateQuantity('add')}
            className={`${
              quantity === productQty && 'cursor-not-allowed text-[#ececec]'
            }`}
            disabled={quantity === productQty}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
