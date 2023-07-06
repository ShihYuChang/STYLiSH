import { ProductContext } from '@/context/ProductContext';
import { useContext } from 'react';

export default function ColorSelector() {
  const { product, selectedColor, setSelectedColor } =
    useContext(ProductContext);

  function selectColor(color: string) {
    setSelectedColor(color);
  }
  if (!product) return undefined;
  return (
    <div className='flex mb-[28px] items-center'>
      <div className='w-[62px] xl:w-[70px] text-[14px] xl:text-[20px] leading-[17px] xl:leading-[24px] tracking-[2.8px] xl:tracking-[4px] xl:mr-[22px]'>
        顏色 |
      </div>
      <div className='flex gap-[15px]'>
        {product.colors.map((color, index) => (
          <div
            key={index}
            className={`p-[6px] ${
              color.code === selectedColor
                ? 'border border-solid border-black'
                : 'border-0'
            }`}
          >
            <button
              className='w-[24px] h-[24px] border border-solid border-[#d3d3d3]'
              style={{ backgroundColor: `#${color.code}` }}
              onClick={() => selectColor(color.code)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
