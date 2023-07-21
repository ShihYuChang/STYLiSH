'use client';
import { useContext } from 'react';
import { api } from '@/utils/api';
import { Context } from '../context/Context';

export default function LoginBtn() {
  const { signIn } = api;
  const { userInput } = useContext(Context);

  async function handleSignIn() {
    const response = await signIn(userInput.userName, userInput.password);
    console.log(response);
  }

  return (
    <button
      className='w-full xl:w-[240px] h-[44px] xl:h-[64px] bg-black text-white tracking-[4px]'
      onClick={handleSignIn}
    >
      登入
    </button>
  );
}
