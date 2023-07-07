import { useState } from 'react';
import { LocalStorageItem, OrderInfo } from '@/types/types';
import QtySelector from './QtySelector';

interface QtyAndPriceOption {
  label: string;
  value: 'qty' | 'price' | 'totalPrice';
  selector?: boolean;
}

export default function QtyAndPrice({ item }: { item: LocalStorageItem }) {
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
