import { LocalStorageItem } from '@/types/types';
import { useState, useContext, useEffect } from 'react';
import { CheckoutContext } from '../../context/CheckoutContext';

interface OrderInfo {
  label: string;
  value: number;
}

const shippingFee = 30;

function getOrderInfo(cartItems: LocalStorageItem[]) {
  const totalPrice = cartItems.reduce((acc: number, cur: LocalStorageItem) => {
    acc += cur.totalPrice;
    return acc;
  }, 0);
  const finalFee = totalPrice + shippingFee;
  const newOrderInfo: OrderInfo[] = [
    {
      label: '總金額',
      value: totalPrice,
    },
    { label: '運費', value: shippingFee },
    {
      label: '應付金額',
      value: finalFee,
    },
  ];
  return newOrderInfo;
}

export default function OrderSummary() {
  const { cartItems } = useContext(CheckoutContext);
  const [orderInfo, setOrderInfo] = useState<OrderInfo[] | null>(null);

  useEffect(() => {
    const newOrderInfo = getOrderInfo(cartItems);
    setOrderInfo(newOrderInfo);
  }, [cartItems]);

  return (
    <div className='w-full flex flex-col items-end gap-[20px]'>
      {orderInfo?.map((info, index) => (
        <div
          key={index}
          className={`w-[50%] xl:w-[240px] flex justify-between items-center ${
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
      <button className='w-full xl:w-[240px] h-[44px] xl:h-[64px] bg-black text-white tracking-[3.2px] xl:mt-[30px]'>
        確認付款
      </button>
    </div>
  );
}
