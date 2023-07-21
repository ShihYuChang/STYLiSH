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
    <div className='flex flex-col gap-[10px] mb-[20px]'>
      {questions.map((question, index) => (
        <div key={index} className='w-full flex flex-col gap-[10px]'>
          <div className='text-[14px] leading-[19px]'>{question.label}</div>
          <input className='w-full h-[32px] border border-solid border-[#979797] rounded-[8px]' />
        </div>
      ))}
    </div>
  );
}
