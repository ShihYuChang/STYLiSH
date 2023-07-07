import { LocalStorageItem, OrderInfo } from '@/types/types';
import { useState } from 'react';
import { BsTrash3 } from 'react-icons/bs';
import Title from '../Title';
import QtySelector from './QtySelector';

interface QtyAndPriceOption {
  label: string;
  value: 'qty' | 'price' | 'totalPrice';
  selector?: boolean;
}

function SplitLine() {
  return <hr className='w-full border-black' />;
}

function TrashIcon() {
  return (
    <div className='text-[24px] leading-[44px] text-center text-[#cccccc] cursor-pointer mr-[20px]'>
      <BsTrash3 />
    </div>
  );
}

function ProductInfo({ item }: { item: LocalStorageItem }) {
  return (
    <div className='flex justify-between'>
      <img src={item.img} className='w-[114px] mr-[10px]' />
      <div className='text-[14px] leading-[17px] flex-grow'>
        <div className='text-black mb-[20px]'>{item.title}</div>
        <div className='mb-[24px]'>{item.id}</div>
        <div className='mb-[12px]'>顏色｜{item.color.name}</div>
        <div>尺寸｜{item.size}</div>
      </div>
      <TrashIcon />
    </div>
  );
}

function QtyAndPrice({ item }: { item: LocalStorageItem }) {
  const initialOrderInfo: OrderInfo = {
    qty: item.qty,
    price: item.price,
    totalPrice: item.totalPrice,
  };
  const [orderInfo, setOrderInfo] = useState<OrderInfo>(initialOrderInfo);
  const options: QtyAndPriceOption[] = [
    { label: '數量', value: 'qty', selector: true },
    { label: '單價', value: 'price' },
    { label: '小計', value: 'totalPrice' },
  ];
  return (
    <div className='flex justify-between gap-[60px]'>
      {options.map((option, index) => (
        <div
          className='w-full flex flex-col gap-[24px] items-center justify-center'
          key={`${option.value}${index}`}
        >
          <div>{option.label}</div>
          {option.selector ? (
            <QtySelector
              stock={item.stock}
              item={item}
              orderInfo={orderInfo}
              setOrderInfo={setOrderInfo}
            />
          ) : (
            <div>TWD.{orderInfo[option.value]}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Cart({
  cartItems,
}: {
  cartItems: LocalStorageItem[] | null;
}) {
  return (
    <div className='w-full flex flex-col gap-[20px]'>
      <Title>購物車</Title>
      {cartItems?.map((item, index) => (
        <div key={index} className='flex flex-col gap-[20px]'>
          <ProductInfo item={item} />
          <QtyAndPrice item={item} />
          {index !== cartItems.length - 1 && <SplitLine />}
        </div>
      ))}
    </div>
  );
}
