import ProductInfo from './ProductInfo';
import QtyAndPrice from './QtyAndPrice';
import { useContext } from 'react';
import { CheckoutContext } from '../../context/CheckoutContext';
import Header from './Header';

function SplitLine() {
  return <hr className='w-full border-black' />;
}

export default function Cart() {
  const { cartItems } = useContext(CheckoutContext);
  return (
    <div className='w-full flex flex-col'>
      <Header />
      <div className='xl:border xl:border-solid xl:border-[#979797] xl:px-[30px] xl:py-[40px] xl:flex flex-col gap-[30px]'>
        {cartItems?.map((item, index) => (
          <div
            key={`${item.id}${index}`}
            className='flex flex-col xl:flex-row gap-[20px] xl:gap-0 mb-[20px] xl:mb-0'
          >
            <ProductInfo item={item} />
            <QtyAndPrice item={item} />
            <div className='xl:hidden'>
              {index !== cartItems.length - 1 && <SplitLine />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
