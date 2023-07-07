import { useState } from 'react';

interface OrderInfo {
  label: string;
  value: number;
}

const initialOrder: OrderInfo[] = [
  {
    label: '總金額',
    value: 2397,
  },
  {
    label: '運費',
    value: 30,
  },
  {
    label: '應付金額',
    value: 2427,
  },
];

export default function OrderSummary() {
  const [orderInfo, setOrderInfo] = useState<OrderInfo[]>(initialOrder);
  return (
    <div className='w-full flex flex-col items-end gap-[20px]'>
      {orderInfo.map((info, index) => (
        <div
          key={index}
          className={`w-[50%] flex justify-between items-center ${
            index === orderInfo.length - 2 &&
            'border-b border-solid border-[#3f3a3a] pb-[20px]'
          }`}
        >
          <div className='leading-[19px]'>{info.label}</div>
          <div className='text-[30px] flex items-center gap-[8px]'>
            <span className='text-[16px]'>NT. </span>
            {info.value}
          </div>
        </div>
      ))}
      <button className='w-full h-[44px] bg-black text-white tracking-[3.2px]'>
        確認付款
      </button>
    </div>
  );
}
