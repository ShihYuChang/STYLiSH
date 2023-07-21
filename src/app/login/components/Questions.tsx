import React from 'react';

const questions: {
  label: string;
  value: string;
}[] = [
  { label: '帳號', value: 'userName' },
  { label: '密碼', value: 'password' },
];

export default function Questions() {
  return (
    <div className='flex flex-col gap-[10px] xl:gap-[30px] mb-[20px] xl:mb-[70px]'>
      {questions.map((question, index) => (
        <div
          key={index}
          className='w-full flex flex-col xl:flex-row gap-[10px]'
        >
          <div className='text-[14px] leading-[19px] xl:w-[120px] xl:flex items-center'>
            {question.label}
          </div>
          <input className='w-full xl:w-[576px] h-[32px] border border-solid border-[#979797] rounded-[8px]' />
        </div>
      ))}
    </div>
  );
}
