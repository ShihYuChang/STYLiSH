import { useState } from 'react';
import { LocalStorageItem, OrderInfo } from '@/types/types';
import QtySelector from './QtySelector';
import { options } from './Header';

export default function QtyAndPrice({ item }: { item: LocalStorageItem }) {
  const initialOrderInfo: OrderInfo = {
    qty: item.qty,
    price: item.price,
    totalPrice: item.totalPrice,
  };
  const [orderInfo, setOrderInfo] = useState<OrderInfo>(initialOrderInfo);

  return (
    <div className='flex justify-between gap-[60px] xl:gap-0'>
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
            <div className='xl:w-[192px] xl:text-center'>
              TWD.{orderInfo[option.value]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
