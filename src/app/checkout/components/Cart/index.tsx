import Title from '../Title';
import ProductInfo from './ProductInfo';
import QtyAndPrice from './QtyAndPrice';
import { useContext } from 'react';
import { CheckoutContext } from '../../context/CheckoutContext';

interface QtyAndPriceOption {
  label: string;
  value: 'qty' | 'price' | 'totalPrice';
  selector?: boolean;
}

export const options: QtyAndPriceOption[] = [
  { label: '數量', value: 'qty', selector: true },
  { label: '單價', value: 'price' },
  { label: '小計', value: 'totalPrice' },
];

function SplitLine() {
  return <hr className='w-full border-black' />;
}

export default function Cart() {
  const { cartItems } = useContext(CheckoutContext);
  return (
    <div className='w-full flex flex-col gap-[20px]'>
      <div className='flex'>
        <Title>
          <div className='xl:mr-[490px]'>購物車</div>
          {options.map((option, index) => (
            <div
              key={index}
              className='hidden xl:block w-[32px] shrink-0 mr-[160px]'
            >
              {option.label}
            </div>
          ))}
        </Title>
      </div>
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
