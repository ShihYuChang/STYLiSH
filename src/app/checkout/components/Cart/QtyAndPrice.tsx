import { useState } from 'react';
import { LocalStorageItem, OrderInfo } from '@/types/types';
import QtySelector from './QtySelector';
import { options } from '.';

export default function QtyAndPrice({ item }: { item: LocalStorageItem }) {
  const initialOrderInfo: OrderInfo = {
    qty: item.qty,
    price: item.price,
    totalPrice: item.totalPrice,
  };
  const [orderInfo, setOrderInfo] = useState<OrderInfo>(initialOrderInfo);

  return (
    <div className='flex justify-between gap-[60px]'>
      {options.map((option, index) => (
        <div
          className='w-full flex flex-col gap-[24px] items-center justify-center'
          key={`${option.value}${index}`}
        >
          <div className='xl:hidden'>{option.label}</div>
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
