'use client';
import React from 'react';
import Cart from './components/Cart';

export default function Checkout() {
  const rawRartItems = localStorage.getItem('cartItems');
  const cartItems = rawRartItems ? JSON.parse(rawRartItems) : null;
  return (
    <div className='w-full px-[24px] mt-[20px] mb-[28px]'>
      <Cart cartItems={cartItems} />
    </div>
  );
}
