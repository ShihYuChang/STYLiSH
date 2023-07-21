import React from 'react';
import Title from './components/Title';
import Questions from './components/Questions';
import LoginBtn from './components/LoginBtn';
import ContextProvider from './context/Context';

export default function Login() {
  return (
    <ContextProvider>
      <div className='border-box w-[285px] xl:w-[1330px] xl:h-[500px] xl:pt-[50px] mx-[auto] mt-[31px] mb-[50px] xl:mt-[100px] xl:border border-solid border-black rounded-[25px] xl:flex flex-col items-center'>
        <Title />
        <hr className='hidden xl:block w-[940px] bg-black mb-[66px]' />
        <Questions />
        <LoginBtn />
      </div>
    </ContextProvider>
  );
}
