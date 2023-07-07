'use client';
import React from 'react';
import Cart from './components/Cart';
import ShippingInfo from './components/ShippingInfo';
import Payment from './components/Payment';
import CheckoutContextProvider from './context/CheckoutContext';

export default function Checkout() {
  return (
    <CheckoutContextProvider>
      <div className='w-full px-[24px] mt-[20px] mb-[28px] flex flex-col gap-[20px]'>
        <Cart />
        <ShippingInfo />
        <Payment />
      </div>
    </CheckoutContextProvider>
  );
}
