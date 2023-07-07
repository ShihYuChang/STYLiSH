import Title from '../Title';
import ProductInfo from './ProductInfo';
import QtyAndPrice from './QtyAndPrice';
import { useContext } from 'react';
import { CheckoutContext } from '../../context/CheckoutContext';

function SplitLine() {
  return <hr className='w-full border-black' />;
}

export default function Cart() {
  const { cartItems } = useContext(CheckoutContext);
  return (
    <div className='w-full flex flex-col gap-[20px]'>
      <Title>購物車</Title>
      {cartItems?.map((item, index) => (
        <div key={`${item.id}${index}`} className='flex flex-col gap-[20px]'>
          <ProductInfo item={item} />
          <QtyAndPrice item={item} />
          {index !== cartItems.length - 1 && <SplitLine />}
        </div>
      ))}
    </div>
  );
}
