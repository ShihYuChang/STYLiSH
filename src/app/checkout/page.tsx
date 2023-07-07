'use client';
import React from 'react';
import Cart from './components/Cart';
import ShippingInfo from './components/ShippingInfo';
import Payment from './components/Payment';
import CheckoutContextProvider from './context/CheckoutContext';

export default function Checkout() {
  return (
    <CheckoutContextProvider>
      <div className='w-full xl:w-[1160px] xl:mx-[auto] px-[24px] xl:px-0 mt-[20px] xl:mt-[51px] mb-[28px] flex flex-col gap-[20px] xl:gap-[50px]'>
        <Cart />
        <ShippingInfo />
        <Payment />
      </div>
    </CheckoutContextProvider>
  );
}
