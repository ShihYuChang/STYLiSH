import React from 'react';
import Title from './components/Title';
import Questions from './components/Questions';
import LoginBtn from './components/LoginBtn';

export default function Login() {
  return (
    <div className='w-[285px] xl:w-[1330px] xl:h-[530px] mx-[auto] mt-[31px] xl:mt-[195px] xl:border border-solid border-black rounded-[25px]'>
      <Title />
      <Questions />
      <LoginBtn />
    </div>
  );
}
