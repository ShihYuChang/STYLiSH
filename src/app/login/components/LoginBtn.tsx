import React from 'react';
import { api } from '@/utils/api';

export default function LoginBtn() {
  const { signIn } = api;
  return (
    <button className='w-full xl:w-[240px] h-[44px] xl:h-[64px] bg-black text-white tracking-[4px]'>
      登入
    </button>
  );
}
