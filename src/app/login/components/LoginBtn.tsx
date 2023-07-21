'use client';
import { useContext, useEffect } from 'react';
import { api } from '@/utils/api';
import { Context } from '../context/Context';

export default function LoginBtn() {
  const { signIn } = api;
  const { userInput } = useContext(Context);

  useEffect(() => {
    const jwt = localStorage.getItem('a_t');
    if (jwt) {
      window.location.href = '/';
    }
  }, []);

  async function handleSignIn() {
    const response = await signIn(userInput.email, userInput.password);
    const jwt = await response.data.access_token;
    localStorage.setItem('a_t', jwt);
    window.location.href = '/';
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
