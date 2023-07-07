'use client';
import React from 'react';
import Cart from './components/Cart';
import ShippingInfo from './components/ShippingInfo';

export default function Checkout() {
  const rawRartItems = localStorage.getItem('cartItems');
  const cartItems = rawRartItems ? JSON.parse(rawRartItems) : null;
  return (
    <div className='w-full px-[24px] mt-[20px] mb-[28px] flex flex-col gap-[20px]'>
      <Cart cartItems={cartItems} />
      <ShippingInfo />
    </div>
  );
}
